/**
 * Pro-feature upgrade modal.
 *
 * Shown whenever a free-tier user interacts with a Premium-only control.
 * Built on SweetAlert2 (already enqueued as `ai1wpsa-swal` alongside the
 * admin bundle), matching the existing showNotification() toast helper in
 * ./functions.js — no new dependency, same visual system. Styled as its
 * own dark "premium unlock" card rather than a generic Swal alert — see
 * .ai1wpsa-pro-modal in src/scss/components/_helpers.scss.
 */

const AI1WPSA_PREMIUM_URL = '#';

export function showProModal(message) {
    const body = message || wp.i18n.__(
        'Upgrade to PRO to unlock this and all PRO features.',
        'all-in-one-wp-sticky-anything'
    );

    Swal.fire({
        title: `<div class="ai1wpsa-pro-modal__stars" aria-hidden="true"><span>✨</span><span>⭐</span><span>✨</span><span>⭐</span><span>✨</span></div><div class="ai1wpsa-pro-modal__icon">💎</div>`,
        html: `
            <h2 class="ai1wpsa-pro-modal__title">${wp.i18n.__('Unlock All Features!', 'all-in-one-wp-sticky-anything')}</h2>
            <p class="ai1wpsa-pro-modal__text">${body}</p>
        `,
        showCancelButton: false,
        showCloseButton: true,
        confirmButtonText: wp.i18n.__('Upgrade Now', 'all-in-one-wp-sticky-anything'),
        buttonsStyling: false,
        customClass: {
            container: 'ai1wpsa-swal ai1wpsa-pro-modal',
            popup: 'ai1wpsa-pro-modal__popup',
            confirmButton: 'ai1wpsa-pro-modal__cta',
            closeButton: 'ai1wpsa-pro-modal__close',
        },
        didOpen: (popup) => {
            // Set via textContent (not interpolated into the html string above)
            // so a translated message is never treated as markup.
            const text = popup.querySelector('.ai1wpsa-pro-modal__text');
            if (text) text.textContent = body;
        },
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(AI1WPSA_PREMIUM_URL, '_blank', 'noopener');
        }
    });
}
