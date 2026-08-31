export default function Introduction() {

    const features = [
        {
            id: 'click-to-call',
            icon: 'dashicons-phone',
            title: wp.i18n.__('Click to Call', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__('Add a click-to-call button to your website to make it more user-friendly.', 'all-in-one-wp-sticky-anything')
        },
        {
            id: 'fixed-widget',
            icon: 'dashicons-welcome-widgets-menus',
            title: wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__('Easily make your sidebar widgets sticky to enhance user engagement and accessibility.', 'all-in-one-wp-sticky-anything')
        },
        {
            id: 'sticky-element',
            icon: 'dashicons-admin-generic',
            title: wp.i18n.__('Sticky Element', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__(
                'Choose any element on your site to make it sticky as users scroll.',
                'all-in-one-wp-sticky-anything'
            )
        },
        {
            id: 'sticky-header',
            icon: 'dashicons-editor-kitchensink',
            title: wp.i18n.__('Sticky Header', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__(
                'Keep your header visible while scrolling for better navigation and branding.',
                'all-in-one-wp-sticky-anything'
            )
        },
        {
            id: 'sticky-sidebar',
            icon: 'dashicons-align-left',
            title: wp.i18n.__('Sticky Sidebar', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__(
                'Make your sidebar stay in view as visitors scroll through your content.',
                'all-in-one-wp-sticky-anything'
            )
        },
        {
            id: 'sticky-social-icons',
            icon: 'dashicons-sticky',
            title: wp.i18n.__('Sticky Social Icons', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__(
                'Display your social media icons on your site and make them sticky as users scroll.',
                'all-in-one-wp-sticky-anything'
            )
        },
        {
            id: 'sticky-cookie-consent',
            icon: 'dashicons-privacy',
            title: wp.i18n.__('Sticky Cookie Consent', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__(
                'Make your cookie consent banner sticky to ensure compliance and visibility.',
                'all-in-one-wp-sticky-anything'
            )
        },
        {
            id: 'sticky-toc',
            icon: 'dashicons-list-view',
            title: wp.i18n.__('Sticky Table of Contents', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__(
                'Display a sticky table of contents to help users navigate your content.',
                'all-in-one-wp-sticky-anything'
            )
        },
        {
            id: 'admin-sticky-notes',
            icon: 'dashicons-welcome-write-blog',
            title: wp.i18n.__('Admin Sticky Notes', 'all-in-one-wp-sticky-anything'),
            desc: wp.i18n.__(
                'Add sticky notes in the WordPress admin area to keep important information visible.',
                'all-in-one-wp-sticky-anything'
            )
        }
    ];

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-info-outline"></i>
                <span>{wp.i18n.__('Introduction', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content introduction">
                {/* quick overview start here */}
                <div class="settings-row bg-10">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Anything Quick Overview')}</h2>
                        <p>{wp.i18n.__('The Sticky Anything WordPress plugin is a versatile tool designed to help you make any element on your website sticky as users scroll. It\'s particularly useful for keeping important content like headers, menus, or call-to-action buttons visible, no matter where users are on your page.', 'all-in-one-sticky-anything')}</p>
                    </div>
                    <div class="settings-col">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y2IEuGCVu0Y?si=fLPBh9a8_C641LMF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                {/* quick overview stop here */}

                {/* features start here */}
                <div class="settings-row features">
                    {features.map(({ id, title, desc, icon }) => (
                        <div class="settings-col bg-10" key={id}>
                            <i className={`dashicons ${icon}`}></i>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>
                {/* features start here */}
            </div>
        </div>
    )
}
