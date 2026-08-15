export default function Header() {

    return (
        <div className="ai1wpsa-app-header">
            <div className="header-logo">
                <img src={`${ai1wpsa.pluginUrl}/assets/images/logo.jpg`} alt={wp.i18n.__('All-in-One WP Sticky Anything', 'all-in-one-wp-sticky-anything')} />
            </div>
            <div className="header-title">
                {<h2>{wp.i18n.__('All-in-One WP Sticky Anything', 'all-in-one-wp-sticky-anything')}</h2>}
                {<p>{wp.i18n.__('All-in-One WP Sticky Anything on Scroll plugin allows to you make any elements sticky or sticky Header on your website.', 'all-in-one-wp-sticky-anything')}</p>}
                <button type="button" className="btn ai1wpsa-btn">{wp.i18n.__('Getting Started')}</button>
            </div>
        </div>
    )
}