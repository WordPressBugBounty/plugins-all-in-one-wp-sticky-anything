/**
 * "Pick on Page" visual element picker.
 *
 * Opens the site's homepage (same origin, so no CORS issues) with a
 * short-lived nonce that makes Enqueue::frontend_scripts() load
 * element-picker.js there. That script lets the admin hover/click an
 * element and posts the resulting CSS selector back via postMessage.
 *
 * Built as a plain imperative helper (not a React component) to match the
 * existing showProModal() helper in ./ProModal.js — same SweetAlert2-based
 * modal system, no new UI dependency.
 */

import { showNotification } from "./functions";

function buildPickerUrl(target) {
    const { homeUrl, pickerNonce } = ai1wpsa || {};
    const url = new URL(homeUrl);

    url.searchParams.set('ai1wpsa_picker', '1');
    url.searchParams.set('ai1wpsa_picker_nonce', pickerNonce);
    url.searchParams.set('origin', window.location.origin);

    if (target === 'image') {
        url.searchParams.set('ai1wpsa_picker_target', 'image');
    }

    return url.toString();
}

// How long we wait for element-picker.js to prove it ran inside the iframe
// before assuming the site is blocking framing (X-Frame-Options / CSP) and
// falling back to a new tab.
const IFRAME_READY_TIMEOUT = 4000;

/**
 * @param {(selector: string) => void} onSelect
 * @param {{ target?: 'header' | 'image' }} [options] `target: 'image'` puts
 *   element-picker.js into logo-picking mode: it resolves whatever's hovered
 *   down to the nearest actual `<img>` (itself, or the first `<img>`
 *   descendant) instead of snapping up to the nearest header-like ancestor,
 *   and drops the "Select Parent" escape hatch — this mode always ends in an
 *   `<img>` selector, never a wrapping element.
 */
export function pickElementOnPage(onSelect, { target = 'header' } = {}) {
    const { homeUrl, pickerNonce } = ai1wpsa || {};

    if (!homeUrl || !pickerNonce) {
        return;
    }

    const targetUrl = buildPickerUrl(target);
    let fallbackTab = null;
    let readyTimer = null;

    const handleMessage = (event) => {
        if (event.origin !== window.location.origin) {
            return;
        }

        const iframe = document.getElementById('ai1wpsa-picker-iframe');
        const fromIframe = iframe && event.source === iframe.contentWindow;
        const fromTab = fallbackTab && event.source === fallbackTab;

        if (!fromIframe && !fromTab) {
            return;
        }

        const { type, selector, matches } = event.data || {};

        if (type === 'ai1wpsa:picker-selected' && selector) {
            onSelect(selector);
            showNotification(
                matches === 1
                    ? wp.i18n.__('Selector captured.', 'all-in-one-wp-sticky-anything')
                    : wp.i18n.__('Selector captured — matches', 'all-in-one-wp-sticky-anything') + ' ' + matches + ' ' + wp.i18n.__('elements on the page.', 'all-in-one-wp-sticky-anything')
            );
            Swal.close();
        } else if (type === 'ai1wpsa:picker-cancel') {
            Swal.close();
        }
    };

    window.addEventListener('message', handleMessage);

    const showFallback = (popup) => {
        const fallback = popup.querySelector('#ai1wpsa-picker-fallback');
        const wrap = popup.querySelector('.ai1wpsa-selector-picker__frame-wrap');
        if (fallback) fallback.hidden = false;
        if (wrap) wrap.classList.add('is-blocked');
    };

    Swal.fire({
        title: target === 'image'
            ? wp.i18n.__('Pick Your Logo Image', 'all-in-one-wp-sticky-anything')
            : wp.i18n.__('Pick Your Sticky Header', 'all-in-one-wp-sticky-anything'),
        html: `
            <div class="ai1wpsa-selector-picker">
                <p class="ai1wpsa-selector-picker__hint">${
                    target === 'image'
                        ? wp.i18n.__('Hover over your site below and click your logo — hovering near it (e.g. its link wrapper) also works, the actual `<img>` is always what gets picked. Press Esc to cancel.', 'all-in-one-wp-sticky-anything')
                        : wp.i18n.__('Hover over your site below and click your header (or use "Select Parent" if the click lands on something inside it, like your logo). Press Esc to cancel.', 'all-in-one-wp-sticky-anything')
                }</p>
                <div class="ai1wpsa-selector-picker__frame-wrap">
                    <iframe id="ai1wpsa-picker-iframe" class="ai1wpsa-selector-picker__iframe" title="${wp.i18n.__('Your site', 'all-in-one-wp-sticky-anything')}"></iframe>
                    <div id="ai1wpsa-picker-fallback" class="ai1wpsa-selector-picker__fallback" hidden>
                        <p>${wp.i18n.__("This site can't be previewed in a frame here.", 'all-in-one-wp-sticky-anything')}</p>
                        <button type="button" id="ai1wpsa-picker-open-tab" class="button button-primary">${wp.i18n.__('Open in a New Tab to Pick', 'all-in-one-wp-sticky-anything')}</button>
                    </div>
                </div>
            </div>
        `,
        width: '90vw',
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        customClass: {
            container: 'ai1wpsa-swal ai1wpsa-selector-picker-modal',
            popup: 'ai1wpsa-selector-picker-modal__popup',
        },
        didOpen: (popup) => {
            const iframe = popup.querySelector('#ai1wpsa-picker-iframe');
            iframe.src = targetUrl;

            readyTimer = window.setTimeout(() => {
                let ready = false;
                try {
                    ready = !!iframe.contentDocument
                        && !!iframe.contentDocument.getElementById('ai1wpsa-picker-toolbar');
                } catch (e) {
                    // Cross-origin access denied — definitely blocked.
                    ready = false;
                }

                if (!ready) {
                    showFallback(popup);
                }
            }, IFRAME_READY_TIMEOUT);

            const openTabBtn = popup.querySelector('#ai1wpsa-picker-open-tab');
            openTabBtn.addEventListener('click', () => {
                fallbackTab = window.open(targetUrl, '_blank');
            });
        },
        willClose: () => {
            window.removeEventListener('message', handleMessage);
            if (readyTimer) {
                window.clearTimeout(readyTimer);
            }
        },
    });
}
