const { useContext } = wp.element;
const { applyFilters, hasFilter } = wp.hooks;

const {
    Button,
    ButtonGroup,
    FormToggle,
    TextControl,
    TextareaControl,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";
import ColorPickerWrapper from "./ColorPickerWrapper";
import Group from "../../includes/Group";

export default function ClickToCall() {
    const { data, setData } = useContext(SettingsContext);
    // True only while the Pro add-on has registered its fields for this tab.
    const proFieldsActive = hasFilter('ai1wpsa_settings_fields_click_to_call');

    const {
        clicktoCall = false,
        clicktoCallPosition = 'bottom-center',
        clicktoCallPhones = [
            {
                label: wp.i18n.__('Support', 'all-in-one-wp-sticky-anything'),
                number: '+8801512345678',
            }
        ],
        clicktoCallBgColor = '#004bcb',
        clicktoCallIconColor = '#ffffff',

        // labels
        clicktoCallText = wp.i18n.__('Call Us Now', 'all-in-one-wp-sticky-anything'),
    } = data || {};

    const positionOptions = [
        {
            label: wp.i18n.__('Top Left', 'all-in-one-wp-sticky-anything'),
            value: 'top-left',
        },
        {
            label: wp.i18n.__('Top Right', 'all-in-one-wp-sticky-anything'),
            value: 'top-right',
        },
        {
            label: wp.i18n.__('Top Center', 'all-in-one-wp-sticky-anything'),
            value: 'top-center',
        },
        {
            label: wp.i18n.__('Bottom Left', 'all-in-one-wp-sticky-anything'),
            value: 'bottom-left',
        },
        {
            label: wp.i18n.__('Bottom Right', 'all-in-one-wp-sticky-anything'),
            value: 'bottom-right',
        },
        {
            label: wp.i18n.__('Bottom Center', 'all-in-one-wp-sticky-anything'),
            value: 'bottom-center',
        }
    ];

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-phone"></i>
                <span>{wp.i18n.__('Click to Call Settings', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content">
                <Group icon='⚙️' title={wp.i18n.__('General', 'all-in-one-wp-sticky-anything')}>
                    {/* click to call start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Click to Call', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <FormToggle
                                checked={clicktoCall}
                                onChange={() => setData({ ...data, clicktoCall: !clicktoCall })}
                            />

                            <p className="description">{wp.i18n.__('Enable or disable the sticky click to call.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* click to call stop here */}

                    {/* device start here */}
                    {applyFilters('ai1wpsa_settings_fields_click_to_call', null, { area: 'device', data, setData })}
                    {/* device stop here */}

                    {/* position start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Position', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">
                            <ButtonGroup>
                                {positionOptions.map((option, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => setData({ ...data, clicktoCallPosition: option.value })}
                                        variant={clicktoCallPosition === option.value ? 'primary' : ''}
                                    >
                                        {option.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            <p className="description">{wp.i18n.__('Select the position of the click to call widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* position stop here */}
                </Group>


                <Group icon="📱" title={wp.i18n.__('Phone Numbers')}>
                    {/* phone number start here */}
                    <div class="settings-field">
                        <div>
                            <h4 class="settings-field-label">{wp.i18n.__('Phone Number', 'all-in-one-wp-sticky-anything')}</h4>
                            <span>{wp.i18n.__('Add multiple lines with labels', 'all-in-one-wp-sticky-anything')}</span>
                        </div>
                        <div class="settings-field-content">
                            <table className="ai1wpsa-phone-number-table">
                                <thead>
                                    <tr>
                                        <th>{wp.i18n.__('Number')}</th>
                                        <th>{wp.i18n.__('Label')}</th>
                                        {proFieldsActive && <th>{wp.i18n.__('Action')}</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clicktoCallPhones.map((phone, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <TextControl
                                                        value={phone.number}
                                                        className="ai1wpsa-text-control"
                                                        placeholder={wp.i18n.__('ex: +8801512345678', 'all-in-one-wp-sticky-anything')}
                                                        onChange={(value) => {
                                                            const newPhones = [...clicktoCallPhones];
                                                            newPhones[index].number = value;
                                                            setData({ ...data, clicktoCallPhones: newPhones });
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <TextControl
                                                        value={phone.label}
                                                        className="ai1wpsa-text-control"
                                                        placeholder={wp.i18n.__('ex: Call Now', 'all-in-one-wp-sticky-anything')}
                                                        onChange={(value) => {
                                                            const newPhones = [...clicktoCallPhones];
                                                            newPhones[index].label = value;
                                                            setData({ ...data, clicktoCallPhones: newPhones });
                                                        }}
                                                    />
                                                </td>
                                                {proFieldsActive && (
                                                    <td className="actions">
                                                        {applyFilters('ai1wpsa_settings_fields_click_to_call', null, { area: 'phone_actions', index, data, setData })}
                                                    </td>
                                                )}
                                            </tr>
                                        ))
                                    }

                                    {proFieldsActive && applyFilters('ai1wpsa_settings_fields_click_to_call', null, { area: 'phone_add', data, setData })}

                                </tbody>
                            </table>

                        </div>
                    </div>
                    {/* phone number stop here */}
                </Group>


                {/* Theme & Styling */}
                <Group
                    icon="🎨"
                    title={wp.i18n.__('Theme & Styling', 'all-in-one-wp-sticky-anything')}
                >
                    {/* Pro field slot — widget type & widget style. */}
                    {applyFilters('ai1wpsa_settings_fields_click_to_call', null, { area: 'style', data, setData })}

                    {/* bg color start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">{wp.i18n.__('Background Color', 'all-in-one-wp-sticky-anything')}</h4>

                        <div className="settings-field-content">
                            <ColorPickerWrapper
                                value={clicktoCallBgColor}
                                onChange={(color) => setData({ ...data, clicktoCallBgColor: color })}
                            />

                            <p className="description">{wp.i18n.__('Set the background color of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* bg color stop here */}

                    {/* icon color start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">{wp.i18n.__('Icon Color', 'all-in-one-wp-sticky-anything')}</h4>
                        <div className="settings-field-content">
                            <ColorPickerWrapper
                                value={clicktoCallIconColor}
                                onChange={(color) => setData({ ...data, clicktoCallIconColor: color })}
                            />
                            <p className="description">{wp.i18n.__('Set the icon color of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* icon color stop here */}
                </Group>

                {/* Pro field slot — Animations group. */}
                {applyFilters('ai1wpsa_settings_fields_click_to_call', null, { area: 'animation', data, setData })}

                {/* Pro field slot — Timing & Badges group. */}
                {applyFilters('ai1wpsa_settings_fields_click_to_call', null, { area: 'behavior', data, setData })}

                <Group
                    icon="🏷️"
                    title={wp.i18n.__('Labels', 'all-in-one-wp-sticky-anything')}
                >
                    {/* labels cta text start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">{wp.i18n.__('CTA Text', 'all-in-one-wp-sticky-anything')}</h4>

                        <div className="settings-field-content">
                            <TextControl
                                value={clicktoCallText}
                                onChange={(value) => setData({ ...data, clicktoCallText: value })}
                            />
                            <p className="description">{wp.i18n.__('Set the CTA text of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* labels cta text stop here */}

                    {/* Pro field slot — tooltip / title / messages / footer. */}
                    {applyFilters('ai1wpsa_settings_fields_click_to_call', null, { area: 'labels', data, setData })}
                </Group>

                {/* Pro field slot — Schedules group. */}
                {applyFilters('ai1wpsa_settings_fields_click_to_call', null, { area: 'schedules', data, setData })}

            </div>
        </div>
    )
}
