const { useContext } = wp.element;

const { Spinner } = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";

export default function Header() {
    const { loading, setLoading, handleSaveSettings } = useContext(SettingsContext);

    return (
        <div className="ai1wpsa-app-header">
            <div className="header-title">
                <img src={`${ai1wpsa.pluginUrl}/assets/images/logo.jpg`} alt={wp.i18n.__('All-in-One WP Sticky Anything', 'all-in-one-wp-sticky-anything')} />
                {<span>{wp.i18n.__('All-in-One WP Sticky Anything Settings', 'all-in-one-wp-sticky-anything')}</span>}
            </div>
            <div className="header-actions">
                <buttton type="button" className="ai1wpsa-btn save-btn" onClick={handleSaveSettings}>
                    {loading && <Spinner />}
                    <span className="dashicons dashicons-saved"></span>
                    {wp.i18n.__('Save', 'all-in-one-wp-sticky-anything')}
                </buttton>
            </div>
        </div>
    )
}