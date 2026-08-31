/**
 * All-in-One Sticky Anything - Sticky Notes front-end logic (vanilla JS, no
 * dependencies). Each note is a row in the wp_ai1wpsa_sticky_notes table;
 * every change is saved individually via AJAX (add / update / delete).
 */
( function () {
	'use strict';

	if ( typeof ai1wpsa === 'undefined' ) {
		return;
	}

	// wp_localize_script() stringifies every scalar value it hands to JS, so
	// the `hidden` flag (a PHP int 0/1) arrives here as the *string* "0" or
	// "1" — and "0" is truthy in JS. Normalize to a real 0/1 number once, up
	// front, so every `ai1wpsa.hidden ? … : …` check below behaves.
	ai1wpsa.hidden = Number( ai1wpsa.hidden ) ? 1 : 0;

	// Same stringification quirk applies to `defaultFont` (an array index) —
	// left as a string it would fail `===` comparisons against real numbers
	// (e.g. the font dropdown's "selected" check).
	ai1wpsa.defaultFont = Number( ai1wpsa.defaultFont ) || 0;

	var container = null;
	var fab       = null;
	var zCounter  = 1000;
	var saveTimers = {}; // per-note debounce timers, keyed by note id.

	( ai1wpsa.notes || [] ).forEach( function ( n ) {
		if ( n.z && n.z > zCounter ) {
			zCounter = n.z;
		}
	} );

	function ajax( action, params ) {
		var body = new URLSearchParams();
		body.append( 'action', action );
		body.append( 'nonce', ai1wpsa.nonce );
		Object.keys( params || {} ).forEach( function ( key ) {
			body.append( key, params[ key ] );
		} );

		return fetch( ai1wpsa.ajaxUrl, {
			method: 'POST',
			credentials: 'same-origin',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: body.toString(),
		} ).then( function ( res ) {
			return res.json();
		} );
	}

	/**
	 * Debounced per-note update (content/position/size/color/font changes).
	 */
	function scheduleUpdate( data ) {
		if ( saveTimers[ data.id ] ) {
			clearTimeout( saveTimers[ data.id ] );
		}
		saveTimers[ data.id ] = setTimeout( function () {
			ajax( 'ai1wpsa_note_update', {
				id: data.id,
				content: data.content,
				theme: data.theme,
				fontSize: data.fontSize,
				fontFamily: data.fontFamily,
				fontColor: data.fontColor,
				width: data.width,
				height: data.height,
				top: data.top,
				left: data.left,
				z: data.z,
			} );
		}, 500 );
	}

	function bringToFront( noteEl, data ) {
		zCounter++;
		data.z = zCounter;
		noteEl.style.zIndex = zCounter;
	}

	/**
	 * Build the DOM element for a single note.
	 */
	function buildNoteElement( data ) {
		var el = document.createElement( 'div' );
		el.className = 'ai1wpsa-note';
		el.dataset.id = data.id;
		el.style.top = data.top + 'px';
		el.style.left = data.left + 'px';
		el.style.width = data.width + 'px';
		el.style.height = data.height + 'px';
		el.style.background = ai1wpsa.themes[ data.theme ] || ai1wpsa.themes[ 0 ];
		el.style.color = data.fontColor;
		el.style.zIndex = data.z || 1000;

		var toolbar = document.createElement( 'div' );
		toolbar.className = 'ai1wpsa-toolbar';

		var menuBtn = document.createElement( 'button' );
		menuBtn.type = 'button';
		menuBtn.innerHTML = '&#9776;';
		menuBtn.setAttribute( 'aria-label', 'Note settings' );

		var closeBtn = document.createElement( 'button' );
		closeBtn.type = 'button';
		closeBtn.className = 'ai1wpsa-close';
		closeBtn.innerHTML = '&times;';
		closeBtn.setAttribute( 'aria-label', 'Delete note' );

		toolbar.appendChild( menuBtn );
		toolbar.appendChild( closeBtn );

		var body = document.createElement( 'div' );
		body.className = 'ai1wpsa-body';
		body.contentEditable = 'true';
		body.setAttribute( 'data-placeholder', wp.i18n.__('Type your note…', 'all-in-one-wp-sticky-anything') );
		body.style.fontFamily = ai1wpsa.fonts[ data.fontFamily ] || ai1wpsa.fonts[ 0 ];
		body.style.fontSize = data.fontSize + 'px';
		body.innerHTML = data.content || '';

		var popover = buildPopover( data, el, body, handlePopoverAction );

		el.appendChild( toolbar );
		el.appendChild( popover );
		el.appendChild( body );

		bindDrag( el, toolbar, data );
		bindResizeObserver( el, data );

		body.addEventListener( 'input', function () {
			data.content = body.innerHTML;
			scheduleUpdate( data );
		} );

		el.addEventListener( 'mousedown', function () {
			bringToFront( el, data );
			scheduleUpdate( data );
		} );

		menuBtn.addEventListener( 'click', function ( e ) {
			e.stopPropagation();
			popover.classList.toggle( 'ai1wpsa-open' );
		} );

		closeBtn.addEventListener( 'click', function ( e ) {
			e.stopPropagation();
			if ( window.confirm( wp.i18n.__('Delete this note?', 'all-in-one-wp-sticky-anything') ) ) {
				ajax( 'ai1wpsa_note_delete', { id: data.id } );
				el.remove();
			}
		} );

		document.addEventListener( 'click', function ( e ) {
			if ( ! el.contains( e.target ) ) {
				popover.classList.remove( 'ai1wpsa-open' );
			}
		} );

		return el;
	}

	/**
	 * Settings popover: quick actions, background theme, text color, font, font size.
	 * `onAction` receives ( actionName, data, el, popover ) for New/Duplicate/Archive.
	 */
	function buildPopover( data, el, body, onAction ) {
		var pop = document.createElement( 'div' );
		pop.className = 'ai1wpsa-popover';

		// Header: title + explicit close icon.
		var header = document.createElement( 'div' );
		header.className = 'ai1wpsa-popover-header';

		var title = document.createElement( 'span' );
		title.className = 'ai1wpsa-popover-title';
		title.textContent = 'Note Settings';

		var closeMenuBtn = document.createElement( 'button' );
		closeMenuBtn.type = 'button';
		closeMenuBtn.className = 'ai1wpsa-popover-close';
		closeMenuBtn.innerHTML = '&times;';
		closeMenuBtn.setAttribute( 'aria-label', 'Close menu' );
		closeMenuBtn.addEventListener( 'click', function ( e ) {
			e.stopPropagation();
			pop.classList.remove( 'ai1wpsa-open' );
		} );

		header.appendChild( title );
		header.appendChild( closeMenuBtn );
		pop.appendChild( header );

		var bodyWrap = document.createElement( 'div' );
		bodyWrap.className = 'ai1wpsa-popover-body';

		// Quick actions: New / Duplicate / Archive.
		var actions = document.createElement( 'div' );
		actions.className = 'ai1wpsa-actions';

		[
			{ action: 'new', icon: '&#43;', label: 'New' },
			{ action: 'duplicate', icon: '&#10697;', label: 'Duplicate' },
			{ action: 'archive', icon: '&#128451;', label: 'Archive', danger: true },
		].forEach( function ( item ) {
			var btn = document.createElement( 'button' );
			btn.type = 'button';
			btn.className = 'ai1wpsa-action-btn' + ( item.danger ? ' ai1wpsa-danger' : '' );
			btn.innerHTML = '<span class="ai1wpsa-icon">' + item.icon + '</span><span>' + item.label + '</span>';
			btn.addEventListener( 'click', function ( e ) {
				e.stopPropagation();
				onAction( item.action, data, el, pop );
			} );
			actions.appendChild( btn );
		} );
		bodyWrap.appendChild( actions );

		// Theme: swatch + name, like a real menu list (not just bare circles).
		var themeSection = document.createElement( 'div' );
		themeSection.className = 'ai1wpsa-section';

		var themeLabel = document.createElement( 'span' );
		themeLabel.className = 'ai1wpsa-popover-label';
		themeLabel.textContent = 'Theme';
		themeSection.appendChild( themeLabel );

		var themeList = document.createElement( 'div' );
		themeList.className = 'ai1wpsa-theme-list';

		( ai1wpsa.themes || [] ).forEach( function ( hex, index ) {
			var name = ( ai1wpsa.themeNames && ai1wpsa.themeNames[ index ] ) || hex;
			var row = document.createElement( 'button' );
			row.type = 'button';
			row.className = 'ai1wpsa-theme-row' + ( index === data.theme ? ' ai1wpsa-active' : '' );

			var dot = document.createElement( 'span' );
			dot.className = 'ai1wpsa-swatch';
			dot.style.background = hex;

			var label = document.createElement( 'span' );
			label.textContent = name;

			row.appendChild( dot );
			row.appendChild( label );

			row.addEventListener( 'click', function ( e ) {
				e.stopPropagation();
				data.theme = index;
				el.style.background = hex;
				themeList.querySelectorAll( '.ai1wpsa-theme-row' ).forEach( function ( r ) {
					r.classList.remove( 'ai1wpsa-active' );
				} );
				row.classList.add( 'ai1wpsa-active' );
				scheduleUpdate( data );
			} );
			themeList.appendChild( row );
		} );
		themeSection.appendChild( themeList );
		bodyWrap.appendChild( themeSection );

		// Text color.
		var textSection = document.createElement( 'div' );
		textSection.className = 'ai1wpsa-section';
		var textLabel = document.createElement( 'span' );
		textLabel.className = 'ai1wpsa-popover-label';
		textLabel.textContent = 'Text color';
		var textColor = document.createElement( 'input' );
		textColor.type = 'color';
		textColor.value = data.fontColor || '#333333';
		textColor.addEventListener( 'input', function () {
			data.fontColor = textColor.value;
			el.style.color = textColor.value;
			scheduleUpdate( data );
		} );
		textSection.appendChild( textLabel );
		textSection.appendChild( textColor );
		bodyWrap.appendChild( textSection );

		// Font family.
		var fontSection = document.createElement( 'div' );
		fontSection.className = 'ai1wpsa-section';
		var fontLabel = document.createElement( 'span' );
		fontLabel.className = 'ai1wpsa-popover-label';
		fontLabel.textContent = 'Font';
		var fontSelect = document.createElement( 'select' );
		( ai1wpsa.fonts || [] ).forEach( function ( fontValue, index ) {
			var opt = document.createElement( 'option' );
			opt.value = index;
			opt.textContent = fontValue.split( ',' )[ 0 ].replace( /"/g, '' );
			if ( index === data.fontFamily ) {
				opt.selected = true;
			}
			fontSelect.appendChild( opt );
		} );
		fontSelect.addEventListener( 'change', function () {
			data.fontFamily = parseInt( fontSelect.value, 10 );
			body.style.fontFamily = ai1wpsa.fonts[ data.fontFamily ];
			scheduleUpdate( data );
		} );
		fontSection.appendChild( fontLabel );
		fontSection.appendChild( fontSelect );
		bodyWrap.appendChild( fontSection );

		// Font size.
		var sizeSection = document.createElement( 'div' );
		sizeSection.className = 'ai1wpsa-section';
		var sizeLabel = document.createElement( 'span' );
		sizeLabel.className = 'ai1wpsa-popover-label';
		sizeLabel.textContent = 'Font size';
		var sizeSelect = document.createElement( 'select' );
		[ 12, 14, 16, 18, 20, 24, 28 ].forEach( function ( size ) {
			var opt = document.createElement( 'option' );
			opt.value = size;
			opt.textContent = size + 'px';
			if ( size === data.fontSize ) {
				opt.selected = true;
			}
			sizeSelect.appendChild( opt );
		} );
		sizeSelect.addEventListener( 'change', function () {
			data.fontSize = parseInt( sizeSelect.value, 10 );
			body.style.fontSize = data.fontSize + 'px';
			scheduleUpdate( data );
		} );
		sizeSection.appendChild( sizeLabel );
		sizeSection.appendChild( sizeSelect );
		bodyWrap.appendChild( sizeSection );

		pop.appendChild( bodyWrap );

		return pop;
	}

	/**
	 * Drag-to-move via the toolbar handle.
	 */
	function bindDrag( el, handle, data ) {
		var startX, startY, startTop, startLeft, dragging = false;

		handle.addEventListener( 'mousedown', function ( e ) {
			if ( e.target.closest( 'button' ) ) {
				return;
			}
			dragging = true;
			startX = e.clientX;
			startY = e.clientY;
			startTop = el.offsetTop;
			startLeft = el.offsetLeft;
			el.classList.add( 'ai1wpsa-dragging' );
			e.preventDefault();
		} );

		document.addEventListener( 'mousemove', function ( e ) {
			if ( ! dragging ) {
				return;
			}
			var newTop = Math.max( 0, startTop + ( e.clientY - startY ) );
			var newLeft = Math.max( 0, startLeft + ( e.clientX - startX ) );
			el.style.top = newTop + 'px';
			el.style.left = newLeft + 'px';
			data.top = newTop;
			data.left = newLeft;
		} );

		document.addEventListener( 'mouseup', function () {
			if ( dragging ) {
				dragging = false;
				el.classList.remove( 'ai1wpsa-dragging' );
				scheduleUpdate( data );
			}
		} );
	}

	/**
	 * Track manual (CSS resize:both) size changes and persist them. Skipped
	 * while the note isn't actually laid out (e.g. its ancestor container is
	 * display:none because notes are hidden) — ResizeObserver reports a
	 * bogus 0x0 contentRect in that case, which would otherwise get saved
	 * over the note's real size.
	 */
	function bindResizeObserver( el, data ) {
		if ( typeof ResizeObserver === 'undefined' ) {
			return;
		}
		var timer = null;
		var ro = new ResizeObserver( function ( entries ) {
			var entry = entries[ 0 ];
			if ( ! entry ) {
				return;
			}
			var width = Math.round( entry.contentRect.width );
			var height = Math.round( entry.contentRect.height );
			if ( ! width || ! height ) {
				return;
			}
			data.width = width;
			data.height = height;
			if ( timer ) {
				clearTimeout( timer );
			}
			timer = setTimeout( function () {
				scheduleUpdate( data );
			}, 400 );
		} );
		ro.observe( el );
	}

	/**
	 * Handle a click on New / Duplicate / Archive inside a note's popover.
	 */
	function handlePopoverAction( action, data, el, pop ) {
		pop.classList.remove( 'ai1wpsa-open' );

		if ( 'new' === action ) {
			addNote();
			return;
		}

		if ( 'duplicate' === action ) {
			ajax( 'ai1wpsa_note_duplicate', { id: data.id } ).then( function ( res ) {
				if ( ! res || ! res.success ) {
					return;
				}
				var copy = res.data;
				zCounter = Math.max( zCounter, copy.z ) + 1;
				copy.z = zCounter;
				var newEl = buildNoteElement( copy );
				container.appendChild( newEl );
			} );
			return;
		}

		if ( 'archive' === action ) {
			ajax( 'ai1wpsa_note_archive', { id: data.id } );
			el.remove();
		}
	}

	/**
	 * Add a brand-new note: insert into DB first, then render with the real ID.
	 */
	function addNote() {
		var count  = container.querySelectorAll( '.ai1wpsa-note' ).length;
		var offset = ( count % 6 ) * 24;
		var top    = 60 + offset;
		var left   = 200 + offset;

		ajax( 'ai1wpsa_note_add', { top: top, left: left } ).then( function ( res ) {
			if ( ! res || ! res.success ) {
				return;
			}
			var data = {
				id: res.data.id,
				content: '',
				top: top,
				left: left,
				width: 250,
				height: 250,
				theme: 0,
				fontSize: 16,
				fontFamily: ai1wpsa.defaultFont,
				fontColor: '#333333',
				z: ++zCounter,
			};
			var el = buildNoteElement( data );
			container.appendChild( el );
			el.querySelector( '.ai1wpsa-body' ).focus();

			// Notes were hidden via the top-bar toggle — reveal them so the
			// note just created is actually visible, and keep the toggle's
			// state in sync.
			if ( ai1wpsa.hidden ) {
				ai1wpsa.hidden = 0;
				updateAdminBarState( 0 );
				container.style.display = '';
				ajax( 'ai1wpsa_note_toggle_visibility', { hidden: 0 } );
			}
		} );
	}

	/**
	 * Sync the admin bar node's visual state with the current hidden flag.
	 */
	function updateAdminBarState( hidden ) {
		var node = document.getElementById( 'wp-admin-bar-ai1wpsa-notes-toggle' );
		if ( node ) {
			node.classList.toggle( 'ai1wpsa-notes-hidden', !! hidden );
		}
	}

	/**
	 * Bind the "Sticky Notes" admin bar button (present on every admin screen).
	 * Uses event delegation on document instead of grabbing the element once
	 * at load time, so it keeps working even if the admin bar renders or
	 * re-renders after this script runs (theme differences, timing, etc.).
	 */
	function bindAdminBarToggle() {
		updateAdminBarState( ai1wpsa.hidden );

		document.addEventListener( 'click', function ( e ) {
			var node = e.target.closest && e.target.closest( '#wp-admin-bar-ai1wpsa-notes-toggle' );
			if ( ! node ) {
				return;
			}

			e.preventDefault();

			var newHidden = ai1wpsa.hidden ? 0 : 1;
			ai1wpsa.hidden = newHidden;
			updateAdminBarState( newHidden );
			ajax( 'ai1wpsa_note_toggle_visibility', { hidden: newHidden } );

			// The admin bar toggle only shows/hides the notes themselves —
			// the "+" add button stays put so a note can always be created,
			// even while existing notes are hidden.
			if ( container ) {
				container.style.display = newHidden ? 'none' : '';
			}
		} );
	}

	function init() {
		bindAdminBarToggle();

		if ( ! ai1wpsa.isDashboard ) {
			return;
		}

		container = document.createElement( 'div' );
		container.id = 'ai1wpsa-container';
		container.style.display = ai1wpsa.hidden ? 'none' : '';
		document.body.appendChild( container );

		( ai1wpsa.notes || [] ).forEach( function ( data ) {
			container.appendChild( buildNoteElement( data ) );
		} );

		// Always visible — the top-bar toggle hides/shows the notes, not this
		// button, so a note can be added even while existing ones are hidden.
		fab = document.createElement( 'button' );
		fab.type = 'button';
		fab.className = 'ai1wpsa-fab';
		fab.innerHTML = '&#43;';
		fab.title = wp.i18n.__('Add sticky note', 'all-in-one-wp-sticky-anything');
		fab.addEventListener( 'click', addNote );
		document.body.appendChild( fab );
	}

	if ( 'loading' === document.readyState ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}
} )();
