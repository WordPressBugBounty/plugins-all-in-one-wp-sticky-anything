import { Tooltip } from "react-tooltip";
const { useContext } = wp.element;

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
import { showProModal } from "../../includes/ProModal";
import ProIcon from "../../includes/ProIcon";

export default function ClickToCall() {
    const { isPro } = ai1wpsa;
    const { data, setData } = useContext(SettingsContext);

    const {
        clicktoCall = false,
        clicktoCallDevice = 'all',
        clicktoCallPosition = 'bottom-center',
        clicktoCallPhones = [
            {
                label: wp.i18n.__('Support', 'all-in-one-wp-sticky-anything'),
                number: '+8801512345678',
            }
        ],
        clicktoCallStyleType = 'launcher',
        clicktoCallStyle = 'popup',
        clicktoCallBgColor = '#004bcb',
        clicktoCallIconColor = '#ffffff',

        // Animations
        clicktoCallAnimation = 'none',

        // timing & badges
        clicktoCallAutoOpen = false,
        clicktoCallAutoOpenDelay = 0,
        clicktoCallBadge = false,
        clicktoCallBadgeCount = 0,
        clicktoCallShowChip = false,
        clicktoCallshowChipDot = false,

        // labels
        clicktoCallText = wp.i18n.__('Call Us Now', 'all-in-one-wp-sticky-anything'),
        clicktoCallTooltip = wp.i18n.__('We\'re available!', 'all-in-one-wp-sticky-anything'),
        clicktoCallTitle = wp.i18n.__('Reach Us Directly', 'all-in-one-wp-sticky-anything'),
        clicktoCallSubtitle = wp.i18n.__('Choose how you\'d like to connect', 'all-in-one-wp-sticky-anything'),
        clicktoCallOnlineMsg = wp.i18n.__('We\'re online – call now', 'all-in-one-wp-sticky-anything'),
        clicktoCallClosedMsg = wp.i18n.__('Currently closed', 'all-in-one-wp-sticky-anything'),
        clicktoCallOfflineMsg = wp.i18n.__('We\'re currently closed. See our hours below.', 'all-in-one-wp-sticky-anything'),
        clicktoCallFooter = wp.i18n.__('Response within 1 business day.', 'all-in-one-wp-sticky-anything'),

        // scheduling
        clicktoCallshowHours = false,
        clicktoCallSchedules = {
            Monday: { on: true, open: '00:00', close: '23:59' },
            Tuesday: { on: true, open: '00:00', close: '23:59' },
            Wednesday: { on: true, open: '00:00', close: '23:59' },
            Thursday: { on: true, open: '00:00', close: '23:59' },
            Friday: { on: true, open: '00:00', close: '23:59' },
            Saturday: { on: true, open: '00:00', close: '23:59' },
            Sunday: { on: true, open: '00:00', close: '23:59' }
        }
    } = data || {};

    const styleOptions = [
        {
            label: wp.i18n.__('Popup', 'all-in-one-wp-sticky-anything'),
            value: 'popup',
            type: 'launcher',
            pro: false,
        },
        {
            label: wp.i18n.__('Slide Panel', 'all-in-one-wp-sticky-anything'),
            value: 'slide',
            type: 'launcher',
            pro: true,
        },
        {
            label: wp.i18n.__('Badge', 'all-in-one-wp-sticky-anything'),
            value: 'badge',
            type: 'launcher',
            pro: true,
        },
        {
            label: wp.i18n.__('Dock', 'all-in-one-wp-sticky-anything'),
            value: 'dock',
            type: 'launcher',
            pro: true,
        },
        {
            label: wp.i18n.__('Toolbar', 'all-in-one-wp-sticky-anything'),
            value: 'toolbar',
            type: 'launcher',
            pro: true
        },
        {
            label: wp.i18n.__('Inline', 'all-in-one-wp-sticky-anything'),
            value: 'inline',
            type: 'inline',
            pro: true,
        },
        {
            label: wp.i18n.__('Card', 'all-in-one-wp-sticky-anything'),
            value: 'card',
            type: 'inline',
            pro: true,
        },
        {
            label: wp.i18n.__('Glass', 'all-in-one-wp-sticky-anything'),
            value: 'glass',
            type: 'inline',
            pro: true,
        },
        {
            label: wp.i18n.__('Neumorphic', 'all-in-one-wp-sticky-anything'),
            value: 'neu',
            type: 'inline',
            pro: true,
        },
        {
            label: wp.i18n.__('Skeuomorphic', 'all-in-one-wp-sticky-anything'),
            value: 'skeu',
            type: 'inline',
            pro: true,
        },
        {
            label: wp.i18n.__('Soft UI', 'all-in-one-wp-sticky-anything'),
            value: 'soft',
            type: 'inline',
            pro: true,
        },
        {
            label: wp.i18n.__('High Contrast', 'all-in-one-wp-sticky-anything'),
            value: 'hc',
            type: 'inline',
            pro: true,
        },
        {
            label: wp.i18n.__('Shadow UI', 'all-in-one-wp-sticky-anything'),
            value: 'shadow',
            type: 'inline',
            pro: true,
        },
        {
            label: wp.i18n.__('Flat', 'all-in-one-wp-sticky-anything'),
            value: 'flat',
            type: 'inline',
            pro: true,
        },
    ];

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

    const animationOptions = [
        { label: wp.i18n.__('None', 'all-in-one-wp-sticky-anything'), value: 'none' },
        { label: wp.i18n.__('Ripple', 'all-in-one-wp-sticky-anything'), value: 'ripple' },
        { label: wp.i18n.__('Heartbeat', 'all-in-one-wp-sticky-anything'), value: 'heartbeat' },
        { label: wp.i18n.__('Bounce', 'all-in-one-wp-sticky-anything'), value: 'bounce' },
        { label: wp.i18n.__('Swing', 'all-in-one-wp-sticky-anything'), value: 'swing' },
        { label: wp.i18n.__('Tada', 'all-in-one-wp-sticky-anything'), value: 'tada' },
        { label: wp.i18n.__('Sonar', 'all-in-one-wp-sticky-anything'), value: 'sonar' },
        { label: wp.i18n.__('Rotate', 'all-in-one-wp-sticky-anything'), value: 'rotate' },
        { label: wp.i18n.__('Blob', 'all-in-one-wp-sticky-anything'), value: 'blob' },
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
                    <div class="settings-field">
                        <h4 class="settings-field-label">
                            {wp.i18n.__('Device', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />    
                        </h4>
                        <div class="settings-field-content">

                            <ButtonGroup>
                                <Button
                                    onClick={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }

                                        setData({ ...data, clicktoCallDevice: 'all' });
                                    }}
                                    className={!isPro ? 'ai1wpsa-disabled' : ''}
                                    variant={clicktoCallDevice === 'all' ? 'primary' : ''}
                                >
                                    <i className="dashicons dashicons-screenoptions"></i>
                                    {wp.i18n.__('All', 'all-in-one-wp-sticky-anything')}
                                </Button>

                                <Button
                                    className={!isPro ? 'ai1wpsa-disabled' : ''}
                                    onClick={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }

                                        setData({ ...data, clicktoCallDevice: 'desktop' });
                                    }}
                                    className={!isPro ? 'ai1wpsa-disabled' : ''}
                                    variant={clicktoCallDevice === 'desktop' ? 'primary' : ''}
                                >
                                    <i className="dashicons dashicons-desktop"></i>
                                    {wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything')}
                                </Button>

                                <Button
                                    className={!isPro ? 'ai1wpsa-disabled' : ''}
                                    onClick={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }

                                        setData({ ...data, clicktoCallDevice: 'tablet' });
                                    }}
                                    variant={clicktoCallDevice === 'tablet' ? 'primary' : ''}
                                >
                                    <i className="dashicons dashicons-tablet"></i>
                                    {wp.i18n.__('Tablet', 'all-in-one-wp-sticky-anything')}
                                </Button>

                                <Button
                                    className={!isPro ? 'ai1wpsa-disabled' : ''}
                                    onClick={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }

                                        setData({ ...data, clicktoCallDevice: 'mobile' });
                                    }}
                                    variant={clicktoCallDevice === 'mobile' ? 'primary' : ''}
                                >
                                    <i className="dashicons dashicons-smartphone"></i>
                                    {wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything')}
                                </Button>
                            </ButtonGroup>

                            <p className="description">{wp.i18n.__('Select the device to show the click to call widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
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
                                        <th>{wp.i18n.__('Action')}</th>
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
                                                <td className="actions">
                                                    <Button
                                                        className={`ai1wpsa-btn duplicate ${!isPro ? 'pro' : ''}`}
                                                        isPrimary
                                                        onClick={() => {
                                                            if (!isPro) {
                                                                showProModal();
                                                                return;
                                                            }

                                                            const newPhones = [...clicktoCallPhones];
                                                            newPhones.splice(index, 1);
                                                            setData({ ...data, clicktoCallPhones: newPhones });
                                                        }}
                                                    >
                                                        <i className="dashicons dashicons-admin-page"></i>
                                                    </Button>
                                                    <Button
                                                        className={`ai1wpsa-btn delete ${!isPro ? 'pro' : ''}`}
                                                        isSecondary
                                                        onClick={() => {
                                                            if (!isPro) {
                                                                showProModal();
                                                                return;
                                                            }

                                                            const newPhones = [...clicktoCallPhones];
                                                            newPhones.splice(index, 1);
                                                            setData({ ...data, clicktoCallPhones: newPhones });
                                                        }}
                                                    >
                                                        <i className="dashicons dashicons-trash"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                    <Button
                                        variant="outline"
                                        className={`ai1wpsa-btn add-new ${!isPro ? 'pro' : ''}`}
                                        onClick={() => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            setData({
                                                ...data,
                                                clicktoCallPhones: [
                                                    ...clicktoCallPhones,
                                                    { number: '', label: '' }
                                                ]
                                            });
                                        }}
                                    >
                                        <i className="dashicons dashicons-plus"></i>
                                        {wp.i18n.__('Add New', 'all-in-one-wp-sticky-anything')}
                                    </Button>

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
                    <div class="settings-field">
                        <h4 class="settings-field-label">
                            {wp.i18n.__('Widget Type', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div class="settings-field-content">
                            <ButtonGroup>
                                <Button
                                    className={!isPro ? 'ai1wpsa-disabled' : ''}
                                    isPrimary={clicktoCallStyleType === 'inline'}
                                    onClick={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }

                                        setData({ ...data, clicktoCallStyleType: 'inline' });
                                    }}
                                >
                                    {wp.i18n.__('Inline', 'all-in-one-wp-sticky-anything')}
                                </Button>
                                <Button
                                    className={!isPro ? 'ai1wpsa-disabled' : ''}
                                    isPrimary={clicktoCallStyleType === 'launcher'}
                                    onClick={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }
                                        setData({ ...data, clicktoCallStyleType: 'launcher' });
                                    }}
                                >
                                    {wp.i18n.__('Launcher', 'all-in-one-wp-sticky-anything')}
                                </Button>
                            </ButtonGroup>

                            <p className="description">{wp.i18n.__('Select the widget type.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>

                    {/* widget style start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Widget Style', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>

                        <div className="settings-field-content">
                            <div className="widget-style-options">
                                <ButtonGroup>
                                    {clicktoCallStyleType === 'inline' && (
                                        styleOptions.filter(option => option.type === 'inline').map((option, index) => (
                                            <Button
                                                key={index}
                                                className={!isPro ? 'ai1wpsa-disabled' : ''}
                                                variant={clicktoCallStyle === option.value ? 'primary' : ''}
                                                onClick={() => {
                                                    if (option.pro && !isPro) {
                                                        showProModal();
                                                        return;
                                                    }
                                                    setData({ ...data, clicktoCallStyle: option.value });
                                                }}
                                            >
                                                {option.label}
                                            </Button>
                                        ))
                                    )}

                                    {
                                        clicktoCallStyleType === 'launcher' && (
                                            styleOptions.filter(option => option.type === 'launcher').map((option, index) => (
                                                <Button
                                                    key={index}
                                                    className={!isPro ? 'ai1wpsa-disabled' : ''}
                                                    variant={clicktoCallStyle === option.value ? 'primary' : ''}
                                                    onClick={() => {
                                                        if (option.pro && !isPro) {
                                                            showProModal();
                                                            return;
                                                        }
                                                        setData({ ...data, clicktoCallStyle: option.value });
                                                    }}
                                                >
                                                    {option.label}

                                                </Button>
                                            ))
                                        )
                                    }
                                </ButtonGroup>
                            </div>
                            <p className="description">{wp.i18n.__('Select a widget style. The chosen style will apply when multiple phone numbers.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* widget style stop here */}

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

                <Group
                    icon="🔥"
                    title={wp.i18n.__('Animations')}
                >
                    {/* animation start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Animation', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <ButtonGroup
                                className="ai1wpsa-animation-group"
                            >
                                {
                                    animationOptions?.map(({ label, value }) => (
                                        <Button
                                            key={value}
                                            className={`${(!isPro && value !== 'none') ? 'ai1wpsa-disabled' : ''}`}
                                            variant={clicktoCallAnimation === value ? 'primary' : ''}
                                            onClick={() => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, clicktoCallAnimation: value })
                                            }}
                                        >
                                            <div className={`click-to-call-container ${value}`}>
                                                <div className="click-to-call">
                                                    <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01z"></path></svg>
                                                </div>
                                            </div>
                                            <p>{label}</p>
                                        </Button>
                                    ))
                                }
                            </ButtonGroup>
                            <p className="description">{wp.i18n.__('Select the animation for the widget appearance.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* animation stop here */}
                </Group>

                <Group
                    icon="🕒"
                    title={wp.i18n.__('Timing & Badges', 'all-in-one-wp-sticky-anything')}
                >
                    {/* Auto open start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Auto Open', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                className={(!isPro) ? 'ai1wpsa-disabled' : ''}
                                checked={clicktoCallAutoOpen}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallAutoOpen: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Make the widget open automatically.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* Auto open stop here */}

                    {/* Auto open delay start here */}
                    {
                        (!!clicktoCallAutoOpen || !isPro) && (
                            <div className="settings-field">
                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Auto Open Delay', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>
                                <div className="settings-field-content">
                                    <TextControl
                                        disabled={!clicktoCallAutoOpen && !isPro}
                                        className={`ai1wpsa-text-control ${!isPro ? 'pro' : ''}`}
                                        value={clicktoCallAutoOpenDelay}
                                        onChange={(value) => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            setData({ ...data, clicktoCallAutoOpenDelay: value });
                                        }}
                                    />
                                    <p className="description">{wp.i18n.__('Set the auto open delay in seconds.', 'all-in-one-wp-sticky-anything')}</p>
                                </div>
                            </div>
                        )
                    }
                    {/* Auto open delay stop here */}

                    {/* badge start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Badge', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                disabled={!isPro}
                                className={(!isPro) ? 'pro' : ''}
                                checked={clicktoCallBadge}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallBadge: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Show a badge on the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* badge stop here */}

                    {/* badge count start here */}
                    {
                        (!!clicktoCallBadge || !isPro) && (
                            <div className="settings-field">
                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Badge Count', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>
                                <div className="settings-field-content">
                                    <TextControl
                                        disabled={!clicktoCallBadge && !isPro}
                                        className={`ai1wpsa-text-control ${!isPro ? 'pro' : ''}`}
                                        value={clicktoCallBadgeCount}
                                        onChange={(value) => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            setData({ ...data, clicktoCallBadgeCount: value });
                                        }}
                                    />
                                    <p className="description">{wp.i18n.__('Set the badge count.', 'all-in-one-wp-sticky-anything')}</p>
                                </div>
                            </div>
                        )
                    }
                    {/* badge count stop here */}

                    {/* show chip start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Show Chip', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                className={(!isPro) ? 'ai1wpsa-disabled' : ''}
                                checked={clicktoCallShowChip}
                                onChange={() => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallShowChip: !clicktoCallShowChip });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Show a chip (text) on the widget top.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* show chip stop here */}

                    {/* show chip dot start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Show Chip Dot', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                disabled={!isPro}
                                className={(!isPro) ? 'ai1wpsa-disabled' : ''}
                                checked={clicktoCallshowChipDot}
                                onChange={() => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallshowChipDot: !clicktoCallshowChipDot });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Show an online/offline dot inside the chip based on the availability.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* show chip dot stop here */}

                </Group>

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

                    {/* Tooltip start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Tooltip Text', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>

                        <div className="settings-field-content">
                            <TextControl
                                className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                value={clicktoCallTooltip}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallTooltip: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Set the tooltip text of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* Tooltip stop here */}

                    {/* clicktoCallTitle start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Title Text', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>

                        <div className="settings-field-content">
                            <TextControl
                                className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                value={clicktoCallTitle}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallTitle: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Set the title text of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* clicktoCallTitle stop here */}

                    {/* clicktoCallSubtitle start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Subtitle Text', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>

                        <div className="settings-field-content">
                            <TextControl
                                className={`ai1wpsa-text-control ${!isPro ? 'pro' : ''}`}
                                value={clicktoCallSubtitle}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallSubtitle: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Set the subtitle text of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* clicktoCallSubtitle stop here */}

                    {/* clicktoCallOnlineMsg start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Online Message Text', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>

                        <div className="settings-field-content">
                            <TextControl
                                className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                value={clicktoCallOnlineMsg}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallOnlineMsg: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Set the online message text of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* clicktoCallOnlineMsg stop here */}

                    {/* clicktoCallClosedMsg start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Closed Message Text', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>

                        <div className="settings-field-content">
                            <TextControl
                                className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                value={clicktoCallClosedMsg}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallClosedMsg: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Set the closed message text of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* clicktoCallClosedMsg stop here */}

                    {/* clicktoCallOfflineMsg start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Offline Message Text', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <TextControl
                                className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                value={clicktoCallOfflineMsg}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallOfflineMsg: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Set the offline message text of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* clicktoCallOfflineMsg stop here */}

                    {/* clicktoCallFooter start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Footer Text', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>

                        <div className="settings-field-content">
                            <TextControl
                                className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                value={clicktoCallFooter}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallFooter: value });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Set the footer text of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* clicktoCallFooter stop here */}
                </Group>

                <Group
                    icon="🗓️"
                    title={wp.i18n.__('Schedules', 'all-in-one-wp-sticky-anything')}
                >
                    {/* clicktoCallshowHours start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Show Hours', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                checked={clicktoCallshowHours}
                                className={`${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                onChange={() => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, clicktoCallshowHours: !clicktoCallshowHours });
                                }}
                            />
                            <p className="description">{wp.i18n.__('Enable or disable the show hours when schedules time not available.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>

                    {/* schedules start here */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Schedules', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <div className="ai1wpsa-schedules-wrap">
                                <table className="ai1wpsa-schedule-table">
                                    <thead>
                                        <tr>
                                            <th>Day</th>
                                            <th>Enabled</th>
                                            <th>Open</th>
                                            <th>Close</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Object.keys(clicktoCallSchedules).map((day) => {
                                            const schedule = clicktoCallSchedules[day];

                                            return (
                                                <tr key={day}>
                                                    <td>
                                                        <strong>{day}</strong>
                                                    </td>

                                                    <td>
                                                        <FormToggle
                                                            disabled={!isPro}
                                                            checked={schedule?.on}
                                                            className={`${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                                            onChange={() => {
                                                                if (!isPro) {
                                                                    showProModal();
                                                                    return;
                                                                }

                                                                const newSchedules = { ...clicktoCallSchedules };
                                                                newSchedules[day].on = !newSchedules[day].on;
                                                                setData({ ...data, clicktoCallSchedules: newSchedules });
                                                            }}
                                                        />
                                                    </td>

                                                    <td>
                                                        <TextControl
                                                            type="time"
                                                            className={`ai1wpsa-text-control ${!isPro ? 'pro' : ''}`}
                                                            value={schedule.open}
                                                            onChange={(value) => {
                                                                if (!isPro) {
                                                                    showProModal();
                                                                    return;
                                                                };

                                                                const newSchedules = { ...clicktoCallSchedules };
                                                                newSchedules[day].open = value;
                                                                setData({ ...data, clicktoCallSchedules: newSchedules });
                                                            }}
                                                            placeholder={wp.i18n.__('ex: 00:00')}
                                                        />
                                                    </td>

                                                    <td>
                                                        <TextControl
                                                            type="time"
                                                            className={`ai1wpsa-text-control ${!isPro ? 'pro' : ''}`}
                                                            value={schedule.close}
                                                            onChange={(value) => {
                                                                if (!isPro) {
                                                                    showProModal();
                                                                    return;
                                                                };

                                                                const newSchedules = { ...clicktoCallSchedules };
                                                                newSchedules[day].close = value;
                                                                setData({ ...data, clicktoCallSchedules: newSchedules });
                                                            }}
                                                            placeholder={wp.i18n.__('ex: 23:59')}
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <p className="description">{wp.i18n.__('Set the schedules of the widget.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* schedules stop here */}
                </Group>

                {!isPro && <Tooltip anchorSelect=".pro" variant="warning" content={wp.i18n.__('Pro Feature', 'all-in-one-wp-sticky-anything')} place="right" />}

            </div>
        </div>
    )
}
