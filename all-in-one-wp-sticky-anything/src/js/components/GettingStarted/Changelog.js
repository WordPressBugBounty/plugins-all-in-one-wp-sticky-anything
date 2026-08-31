export default function Changelog() {
    const logs = [
        {
            version: 'v1.1.7',
            date: '31-08-2026',
            new: [
                wp.i18n.__('Introduce Admin Sticky Notes', 'all-in-one-wp-sticky-anything'),
            ],
            fix: [],
        },
        {
            version: 'v1.1.6',
            date: '15-08-2026',
            new: [
                wp.i18n.__('Disable Sticky on Mobile setting added on the General settings(PRO).', 'all-in-one-wp-sticky-anything'),
                wp.i18n.__('Introduce Sticky Forms (Pro).', 'all-in-one-wp-sticky-anything'),
            ],
            fix: [
                wp.i18n.__('Custom CSS containing quotes was being mangled on output.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.1.5',
            date: '21-07-2026',
            new: [
                wp.i18n.__('Delete Data on Uninstall.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.1.4',
            date: '22-05-2026',
            fix: [
                wp.i18n.__('Click to call button style.', 'all-in-one-wp-sticky-anything'),
            ],
            enhancement: [
                wp.i18n.__('Expiry and Reject Redirect settings added on the Cookie Consent.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.1.3',
            date: '23-04-2026',
            new: [
                wp.i18n.__('Introduce Sticky Table of Contents(toc).', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.1.2',
            date: '18-03-2026',
            new: [
                wp.i18n.__('Introduce Click to Call.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.1.1',
            date: '06-02-2026',
            new: [
                wp.i18n.__('Introduce Fixed Widget.', 'all-in-one-wp-sticky-anything'),
            ],
            fix: [
                wp.i18n.__('Settings sync on the multiple devices.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.1.0',
            date: '24-12-2025',
            new: [
                wp.i18n.__('Introduce Sticky Cookie Consent.', 'all-in-one-wp-sticky-anything'),
            ],
            enhancement: [
                wp.i18n.__('WordPress 6.9 Compatibility.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.0.9',
            date: '21-11-2025',
            new: [
                wp.i18n.__('Introduce Sticky Social Icons.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.0.8',
            date: '23-10-2025',
            new: [
                wp.i18n.__('Introduce Customizer support for Astra, Blocksy, GeneratePress, Kadence, Neve, OceanWP, Storefront, and Zakra themes.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.0.7',
            date: '26-09-2025',
            fix: [
                wp.i18n.__('Astra theme compatibility.', 'all-in-one-wp-sticky-anything'),
            ],
        },
        {
            version: 'v1.0.6',
            date: '20-09-2025',
            new: [
                wp.i18n.__('Introduce Elementor Page Builder Sticky Option.', 'all-in-one-wp-sticky-anything')
            ],
        },
        {
            version: 'v1.0.5',
            date: '20-08-2025',
            new: [
                wp.i18n.__('New Option to Fix Sticky Header.', 'all-in-one-wp-sticky-anything')
            ],
        },
        {
            version: 'v1.0.4',
            date: '22-04-2025',
            fix: [
                wp.i18n.__('Fixed close icon.', 'all-in-one-wp-sticky-anything')
            ],
        },
        {
            version: 'v1.0.3',
            date: '19-04-2025',
            new: [
                wp.i18n.__('Introduce Sticky Sidebar.', 'all-in-one-wp-sticky-anything')
            ],
        },
        {
            version: 'v1.0.2',
            date: '07-09-2024',
            fix: [
                wp.i18n.__('Migrate old data.', 'all-in-one-wp-sticky-anything')
            ],
        },
        {
            version: 'v1.0.1',
            date: '07-09-2024',
            new: [
                wp.i18n.__('Z-Index', 'all-in-one-wp-sticky-anything'),
                wp.i18n.__('Custom CSS', 'all-in-one-wp-sticky-anything'),
                wp.i18n.__('Reset Settings', 'all-in-one-wp-sticky-anything'),
            ],
            enhancement: [
                wp.i18n.__('Improved Dashboard', 'all-in-one-wp-sticky-anything')
            ],
        },
        {
            version: 'v1.0.0',
            date: '16-02-2022',
            new: [
                wp.i18n.__('Initial Version', 'all-in-one-wp-sticky-anything'),
            ],
            fix: [],
            enhancement: []
        },
    ];

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-editor-ul"></i>
                <span>{wp.i18n.__('Changelog', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content changelog">
                <h2>{wp.i18n.__('What\'s new in the latest changes', 'all-in-one-wp-stikcy-anything')}</h2>
                <p>{wp.i18n.__('Check out the latest change logs.', 'all-in-one-wp-sticky-anything')}</p>

                {/* accordion item start here */}
                {
                    logs.map((log) => {
                        return (
                            <div className={`accordion-item ${logs.indexOf(log) === 0 ? 'active' : ''}`}>
                                <div className="accordion-header">
                                    <span className="version">{log?.version}</span>
                                    <h3>{log?.date}</h3>
                                    <i className="dashicons dashicons-arrow-down-alt2"></i>
                                </div>
                                <div className="accordion-body">
                                    {
                                        log?.new?.length > 0 && (
                                            <div className="new">
                                                <h3>{wp.i18n.__('New Features', 'all-in-one-wp-sticky-anything')}</h3>
                                                {log?.new.map((item, index) => (
                                                    <p key={index}>
                                                        <i className="dashicons dashicons-plus-alt2"></i>
                                                        {item}
                                                    </p>
                                                ))}
                                            </div>
                                        )
                                    }

                                    {
                                        log?.fix?.length > 0 && (
                                            <div className="fix">
                                                <h3>{wp.i18n.__('Fixs', 'all-in-one-wp-sticky-anything')}</h3>
                                                {log?.fix.map((item, index) => (
                                                    <p key={index}>
                                                        <i className="dashicons dashicons-yes"></i>
                                                        {item}
                                                    </p>
                                                ))}
                                            </div>
                                        )
                                    }

                                    {
                                        log?.enhancement?.length > 0 && (
                                            <div className="enhancement">
                                                <h3>{wp.i18n.__('Enhancements', 'all-in-one-wp-sticky-anything')}</h3>
                                                {log?.enhancement.map((item, index) => (
                                                    <p key={index}>
                                                        <i className="dashicons dashicons-star-filled"></i>
                                                        {item}
                                                    </p>
                                                ))}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        );
                    })
                }
                {/* accordion item stop here */}
            </div>
        </div>
    )
}
