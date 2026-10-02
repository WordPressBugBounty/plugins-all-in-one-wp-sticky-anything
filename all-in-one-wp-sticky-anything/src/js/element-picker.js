/**
 * All-in-One Sticky Anything - Visual element picker (vanilla JS, no
 * dependencies). Enqueued on the frontend ONLY when Enqueue.php validates a
 * one-time `ai1wpsa_picker` nonce for a logged-in admin — see
 * Enqueue::frontend_scripts(). Never ships to a normal page load.
 *
 * Lets the admin hover to highlight elements on their live site and click one
 * to pick it; the resulting CSS selector is posted back to whichever window
 * opened this page (an <iframe> inside the Settings modal, or a plain
 * window.open() new tab used as a fallback when the site blocks framing).
 */
( function () {
	'use strict';

	// Only makes sense when embedded/opened by the admin UI.
	var opener = window.opener || ( window.parent !== window ? window.parent : null );
	if ( ! opener ) {
		return;
	}

	var params = new URLSearchParams( window.location.search );
	var targetOrigin = params.get( 'origin' );
	if ( ! targetOrigin ) {
		// Without a known target we'd have to broadcast with '*', which lets
		// any embedding page read the selector. Refuse instead.
		return;
	}

	// 'header' (default): snaps hover up to the nearest header-like ancestor.
	// 'image': resolves hover down to the nearest actual <img> instead - see
	// resolveImageTarget() - for picking a logo image specifically.
	var pickerTarget = params.get( 'ai1wpsa_picker_target' ) === 'image' ? 'image' : 'header';

	var UI_ATTR = 'data-ai1wpsa-picker-ui';
	var currentEl = null;
	var sent = false;

	function escapeIdent( str ) {
		if ( window.CSS && typeof CSS.escape === 'function' ) {
			return CSS.escape( str );
		}
		return String( str ).replace( /([^a-zA-Z0-9_-])/g, '\\$1' );
	}

	function isUniqueSelector( sel ) {
		try {
			return document.querySelectorAll( sel ).length === 1;
		} catch ( e ) {
			return false;
		}
	}

	// Ids/classes that look auto-generated (build hashes, React/Elementor
	// runtime ids, etc.) make brittle, unreadable selectors - skip them.
	var LOOKS_GENERATED = /^(react-|radix-|elementor-element-|:r[0-9a-z]+:)|[0-9a-f]{8}-[0-9a-f]{4}-|^[a-f0-9]{10,}$/i;
	var TRANSIENT_CLASS = /^(is-|has-|active$|current|selected|open$|show$|hide$|collapsed|expanded|hover|focus|menu-item|current-menu|current_page)/i;

	function stableClasses( el ) {
		var list = [];
		( el.className && typeof el.className === 'string' ? el.className : '' )
			.split( /\s+/ )
			.forEach( function ( c ) {
				if ( ! c || TRANSIENT_CLASS.test( c ) || LOOKS_GENERATED.test( c ) ) {
					return;
				}
				list.push( c );
			} );
		return list;
	}

	function nthOfTypeSegment( el ) {
		var tag = el.tagName.toLowerCase();
		var siblings = el.parentElement ? Array.prototype.filter.call( el.parentElement.children, function ( c ) {
			return c.tagName === el.tagName;
		} ) : [ el ];

		if ( siblings.length <= 1 ) {
			return tag;
		}

		return tag + ':nth-of-type(' + ( Array.prototype.indexOf.call( siblings, el ) + 1 ) + ')';
	}

	// Builds a selector for `el` alone (id, then class list) without
	// requiring it to be page-unique - used both standalone and as the last
	// segment of an ancestor-scoped selector.
	function localSelector( el ) {
		if ( el.id && ! LOOKS_GENERATED.test( el.id ) && el.id.length < 40 ) {
			return '#' + escapeIdent( el.id );
		}

		var classes = stableClasses( el );
		if ( classes.length ) {
			return '.' + classes.map( escapeIdent ).join( '.' );
		}

		return null;
	}

	function getSelectorFor( el ) {
		// 1) id
		if ( el.id && ! LOOKS_GENERATED.test( el.id ) && el.id.length < 40 ) {
			var idSel = '#' + escapeIdent( el.id );
			if ( isUniqueSelector( idSel ) ) {
				return idSel;
			}
		}

		// 2) class list, first alone then qualified with the tag name
		var classes = stableClasses( el );
		if ( classes.length ) {
			var classSel = '.' + classes.map( escapeIdent ).join( '.' );
			if ( isUniqueSelector( classSel ) ) {
				return classSel;
			}

			var tagClassSel = el.tagName.toLowerCase() + classSel;
			if ( isUniqueSelector( tagClassSel ) ) {
				return tagClassSel;
			}
		}

		// 3) nearest ancestor with a stable id/class, combined with a local
		// selector for the element itself
		var own = localSelector( el ) || nthOfTypeSegment( el );
		var ancestor = el.parentElement;
		var hops = 0;
		while ( ancestor && ancestor !== document.body && hops < 4 ) {
			var ancestorSel = localSelector( ancestor );
			if ( ancestorSel ) {
				var combined = ancestorSel + ' ' + own;
				if ( isUniqueSelector( combined ) ) {
					return combined;
				}
			}
			ancestor = ancestor.parentElement;
			hops++;
		}

		// 4) structural fallback - walk up to 5 ancestors using
		// tag:nth-of-type(n), stopping as soon as the accumulated path is
		// unique on the page.
		var segments = [];
		var node = el;
		for ( var i = 0; i < 5 && node && node !== document.documentElement; i++ ) {
			segments.unshift( nthOfTypeSegment( node ) );
			var path = segments.join( ' > ' );
			if ( isUniqueSelector( path ) ) {
				return path;
			}
			node = node.parentElement;
		}

		return segments.join( ' > ' );
	}

	// ---- overlay UI -------------------------------------------------------

	var highlight = document.createElement( 'div' );
	highlight.id = 'ai1wpsa-picker-highlight';
	highlight.setAttribute( UI_ATTR, '1' );

	var tooltip = document.createElement( 'div' );
	tooltip.id = 'ai1wpsa-picker-tooltip';
	tooltip.setAttribute( UI_ATTR, '1' );

	var toolbar = document.createElement( 'div' );
	toolbar.id = 'ai1wpsa-picker-toolbar';
	toolbar.setAttribute( UI_ATTR, '1' );
	toolbar.innerHTML =
		'<span id="ai1wpsa-picker-hint">' + ( pickerTarget === 'image' ? 'Click your logo to select its &lt;img&gt;' : 'Click your header to use it as the sticky selector' ) + '</span>' +
		// "Select Parent" only makes sense in header mode - in image mode it
		// would let the admin walk up to a non-<img> wrapper, breaking the
		// "always ends in an <img>" guarantee resolveImageTarget() gives.
		( pickerTarget === 'image' ? '' : '<button type="button" id="ai1wpsa-picker-parent">&uarr; Select Parent</button>' ) +
		'<button type="button" id="ai1wpsa-picker-cancel">Cancel</button>';

	document.documentElement.appendChild( highlight );
	document.documentElement.appendChild( tooltip );
	document.documentElement.appendChild( toolbar );

	function isPickerUi( el ) {
		return !! ( el && el.closest && el.closest( '[' + UI_ATTR + ']' ) );
	}

	// Many themes render separate desktop/mobile header markup as siblings
	// swapped in and out by a CSS media query, both nested under one common
	// wrapper (e.g. Astra's #ast-desktop-header + .ast-mobile-header-wrap,
	// both inside <header id="masthead">). Picking the responsive-specific
	// inner block only makes ONE of those variants sticky. Snap the hover
	// target up to that shared wrapper instead, so the generated selector
	// (the wrapper's own id/class) sticks whichever variant the theme's own
	// CSS is currently showing, at every viewport width.
	var HEADER_LIKE = /(^|[-_\s])(header|masthead|topbar|top-bar)([-_\s]|$)/i;

	function findHeaderAncestor( el ) {
		var node = el;
		var hops = 0;
		while ( node && node !== document.body && hops < 8 ) {
			if ( node.tagName === 'HEADER' ) {
				return node;
			}
			hops++;
			node = node.parentElement;
		}

		// No semantic <header> tag in the ancestor chain - fall back to an
		// id/class naming hint (custom themes that use e.g. <div
		// class="site-header">).
		node = el;
		hops = 0;
		while ( node && node !== document.body && hops < 8 ) {
			var idAndClass = ( node.id || '' ) + ' ' + ( typeof node.className === 'string' ? node.className : '' );
			if ( HEADER_LIKE.test( idAndClass ) ) {
				return node;
			}
			hops++;
			node = node.parentElement;
		}

		return null;
	}

	function updateHighlight( el, note ) {
		if ( ! el ) {
			return;
		}

		currentEl = el;
		var rect = el.getBoundingClientRect();

		highlight.style.top = rect.top + 'px';
		highlight.style.left = rect.left + 'px';
		highlight.style.width = rect.width + 'px';
		highlight.style.height = rect.height + 'px';
		highlight.style.display = 'block';

		var preview = getSelectorFor( el );
		tooltip.textContent = el.tagName.toLowerCase() + ' — ' + preview + ( note ? ' (' + note + ')' : '' );
		tooltip.style.display = 'block';

		var top = rect.top - 28;
		tooltip.style.top = ( top < 0 ? rect.bottom + 6 : top ) + 'px';
		tooltip.style.left = Math.max( 0, rect.left ) + 'px';
	}

	// Image mode: resolves whatever's under the cursor down to an actual
	// <img> - itself directly, or the first <img> nested inside it (covers
	// hovering a logo's <a>/<div> wrapper when the image doesn't fill every
	// pixel of it). Returns null when there's no image to find, in which
	// case the previous highlight is simply left in place.
	function resolveImageTarget( el ) {
		if ( el.tagName === 'IMG' ) {
			return el;
		}

		return ( el.querySelector && el.querySelector( 'img' ) ) || null;
	}

	function onMouseMove( e ) {
		var el = document.elementFromPoint( e.clientX, e.clientY );
		if ( ! el || isPickerUi( el ) ) {
			return;
		}

		if ( pickerTarget === 'image' ) {
			var imgEl = resolveImageTarget( el );
			if ( imgEl ) {
				updateHighlight( imgEl, imgEl === el ? null : 'nearest image found' );
			}
			return;
		}

		var headerAncestor = findHeaderAncestor( el );
		updateHighlight( headerAncestor || el, headerAncestor ? 'full header - covers mobile & desktop' : null );
	}

	function finish( type, payload ) {
		if ( sent ) {
			return;
		}
		sent = true;

		opener.postMessage( Object.assign( { type: type }, payload || {} ), targetOrigin );

		document.removeEventListener( 'mousemove', onMouseMove, true );
		document.removeEventListener( 'click', onClick, true );
		document.removeEventListener( 'keydown', onKeyDown, true );

		if ( window.opener ) {
			// Only close a tab we opened ourselves; never touch an iframe's
			// parent window.
			window.setTimeout( function () {
				try {
					window.close();
				} catch ( e ) {}
			}, 400 );
		}
	}

	function onClick( e ) {
		if ( isPickerUi( e.target ) ) {
			return; // let toolbar buttons work normally
		}

		e.preventDefault();
		e.stopPropagation();

		if ( ! currentEl ) {
			return;
		}

		var selector = getSelectorFor( currentEl );
		finish( 'ai1wpsa:picker-selected', {
			selector: selector,
			tag: currentEl.tagName.toLowerCase(),
			matches: ( function () {
				try {
					return document.querySelectorAll( selector ).length;
				} catch ( err ) {
					return 0;
				}
			}() ),
		} );

		highlight.style.outlineColor = '#2ecc71';
		tooltip.textContent = 'Selected — you can close this window';
	}

	function onKeyDown( e ) {
		if ( e.key === 'Escape' ) {
			finish( 'ai1wpsa:picker-cancel' );
		}
	}

	document.getElementById( 'ai1wpsa-picker-cancel' ).addEventListener( 'click', function () {
		finish( 'ai1wpsa:picker-cancel' );
	} );

	var parentBtn = document.getElementById( 'ai1wpsa-picker-parent' );
	if ( parentBtn ) {
		parentBtn.addEventListener( 'click', function () {
			if ( currentEl && currentEl.parentElement && currentEl.parentElement !== document.documentElement ) {
				updateHighlight( currentEl.parentElement );
			}
		} );
	}

	document.addEventListener( 'mousemove', onMouseMove, true );
	document.addEventListener( 'click', onClick, true );
	document.addEventListener( 'keydown', onKeyDown, true );

	// Pre-highlight a starting suggestion as soon as the page loads, so
	// there's something on screen before the admin's first mouse move.
	if ( pickerTarget === 'image' ) {
		var likelyLogo = document.querySelector( '.custom-logo, .site-logo img, .site-branding img, a.logo img, header img' );
		if ( likelyLogo ) {
			updateHighlight( likelyLogo );
		}
	} else {
		var likelyHeader = document.querySelector( 'header' );
		if ( likelyHeader ) {
			updateHighlight( likelyHeader );
		}
	}
}() );
