const { useContext } = wp.element;

const {
    Button,
    ButtonGroup,
    FormToggle,
    TextControl,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";

export default function FixedWidget() {
    const { isPro } = ai1wpsa;
    const { data, setData } = useContext(SettingsContext);

    const {
        fixedWidget = false,
        fixedWidgetTopOffset = '100',
    } = data || {};

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-screenoptions"></i>
                <span>{wp.i18n.__('Fixed Widget Settings', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content">
                {/* sticky sidebar start here */}
                <div class="settings-field">
                    <h4 class="settings-field-label">{wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything')}</h4>
                    <div class="settings-field-content">

                        <FormToggle
                            checked={fixedWidget}
                            onChange={() => setData({ ...data, fixedWidget: !fixedWidget })}
                        />

                        <p className="description">{wp.i18n.__('Enable or disable the fixed widget.', 'all-in-one-wp-sticky-anything')}</p>
                    </div>
                </div>
                {/* sticky sidebar stop here */}

                {!!fixedWidget && <>
                    {/* fixed widget top offset start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Fixed Widget Top Offset', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <TextControl
                                value={fixedWidgetTopOffset}
                                placeholder={wp.i18n.__('ex: 100', 'all-in-one-wp-sticky-anything')}
                                onChange={(value) => setData({ ...data, fixedWidgetTopOffset: value })} />

                            <p className="description">{wp.i18n.__('Set the top offset when fixed the sticky widget. Example: 100. don\'t include px, rem, em etc.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* fixed widget top offset stop here */}
                </>}
            </div>
        </div>
    )
}
