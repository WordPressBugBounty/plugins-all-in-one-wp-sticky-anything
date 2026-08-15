import { Tooltip } from "react-tooltip";
const { useContext } = wp.element;

const {
    Button,
    ButtonGroup,
    FormToggle,
    TextControl,
    SelectControl,
    TextareaControl,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";
import ColorPickerWrapper from "./ColorPickerWrapper";
import Group from "../../includes/Group";
import { showProModal } from "../../includes/ProModal";
import ProIcon from "../../includes/ProIcon";

// ─── Layout Options ─────────────────────────────────────────────
const LAYOUT_OPTIONS = [
    {
        label: wp.i18n.__('Floating Button', 'all-in-one-wp-sticky-anything'),
        value: 'button',
        pro: true,
    },
    {
        label: wp.i18n.__('Sticky Bar', 'all-in-one-wp-sticky-anything'),
        value: 'bar',
        pro: true,
    },
    {
        label: wp.i18n.__('Icon Only', 'all-in-one-wp-sticky-anything'),
        value: 'icon',
        pro: true,
    }
];

// ─── Position Options ───────────────────────────────────────────
const POSITION_OPTIONS = [
    {
        label: wp.i18n.__('Bottom Left', 'all-in-one-wp-sticky-anything'),
        value: 'bottom-left',
        pro: true,
    },
    {
        label: wp.i18n.__('Bottom Center', 'all-in-one-wp-sticky-anything'),
        value: 'bottom-center',
        pro: true,
    },
    {
        label: wp.i18n.__('Bottom Right', 'all-in-one-wp-sticky-anything'),
        value: 'bottom-right',
        pro: true,
    },
];

// ─── Device Options ─────────────────────────────────────────────
const DEVICE_OPTIONS = [
    {
        label: wp.i18n.__('All', 'all-in-one-wp-sticky-anything'),
        value: 'all',
    },
    {
        label: wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything'),
        value: 'desktop',
    },
    {
        label: wp.i18n.__('Tablet', 'all-in-one-wp-sticky-anything'),
        value: 'tablet',
    },
    {
        label: wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything'),
        value: 'mobile',
    },
];

// ─── Exit-intent Frequency Options ──────────────────────────────
const EXIT_FREQUENCY_OPTIONS = [
    {
        label: wp.i18n.__('Once Per Session', 'all-in-one-wp-sticky-anything'),
        value: 'session',
        pro: true,
    },
    {
        label: wp.i18n.__('Time Based', 'all-in-one-wp-sticky-anything'),
        value: 'time-based',
        pro: true,
    },
    {
        label: wp.i18n.__('Always Show', 'all-in-one-wp-sticky-anything'),
        value: 'always',
        pro: true,
    },
];

// ─── Exit-intent Time Based Unit Options ────────────────────────
const EXIT_FREQUENCY_UNIT_OPTIONS = [
    {
        label: wp.i18n.__('Minutes', 'all-in-one-wp-sticky-anything'),
        value: 'minutes',
    },
    {
        label: wp.i18n.__('Hours', 'all-in-one-wp-sticky-anything'),
        value: 'hours',
    },
    {
        label: wp.i18n.__('Days', 'all-in-one-wp-sticky-anything'),
        value: 'days',
    },
];

// ─── Form Type Options ──────────────────────────────────────────
const FORM_TYPE_OPTIONS = [
    {
        label: wp.i18n.__('Default Form', 'all-in-one-wp-sticky-anything'),
        value: 'default',
        pro: true,
    },
    {
        label: wp.i18n.__('Contact Forms', 'all-in-one-wp-sticky-anything'),
        value: 'contact-forms',
        pro: true,
        isComing: true,
    },
];

// ─── Contact Form Plugin Options ────────────────────────────────
const CONTACT_FORM_PLUGIN_OPTIONS = [
    {
        label: wp.i18n.__('Contact Form 7', 'all-in-one-wp-sticky-anything'),
        value: 'cf7',
        pro: true,
    },
    {
        label: wp.i18n.__('WPForms', 'all-in-one-wp-sticky-anything'),
        value: 'wpforms',
        pro: true,
    },
    {
        label: wp.i18n.__('Other Forms', 'all-in-one-wp-sticky-anything'),
        value: 'other',
        pro: true,
    },
];

const DISPLAY_FOR_OPTIONS = [
    {
        label: wp.i18n.__('All Visitors', 'all-in-one-wp-sticky-anything'),
        value: 'all',
        pro: true,
    },
    {
        label: wp.i18n.__('Logged In Users', 'all-in-one-wp-sticky-anything'),
        value: 'logged-in',
        pro: true,
    },
    {
        label: wp.i18n.__('Visitors Users', 'all-in-one-wp-sticky-anything'),
        value: 'visitors',
        pro: true,
    },
];

const DISPLAY_ON_OPTIONS = [
    {
        label: wp.i18n.__('Everywhere', 'all-in-one-wp-sticky-anything'),
        value: 'everywhere',
        pro: true,
    },
    {
        label: wp.i18n.__('Homepage', 'all-in-one-wp-sticky-anything'),
        value: 'home',
        pro: true,
    },
    {
        label: wp.i18n.__('Blog', 'all-in-one-wp-sticky-anything'),
        value: 'blog',
        pro: true,
    },
    {
        label: wp.i18n.__('Single Posts', 'all-in-one-wp-sticky-anything'),
        value: 'single-post',
        pro: true,
    },
    {
        label: wp.i18n.__('Pages', 'all-in-one-wp-sticky-anything'),
        value: 'page',
        pro: true,
    },
    {
        label: wp.i18n.__('Archives', 'all-in-one-wp-sticky-anything'),
        value: 'archive',
        pro: true,
    },
    {
        label: wp.i18n.__('Search Results', 'all-in-one-wp-sticky-anything'),
        value: 'search',
        pro: true,
    },
];

const ATTENTION_EFFECTS_OPTIONS = [
    {
        label: wp.i18n.__('Pulse', 'all-in-one-wp-sticky-anything'),
        value: 'pulse',
    },
    {
        label: wp.i18n.__('Bounce', 'all-in-one-wp-sticky-anything'),
        value: 'bounce',
    },
    {
        label: wp.i18n.__('Shake', 'all-in-one-wp-sticky-anything'),
        value: 'shake',
    },
    {
        label: wp.i18n.__('Tada', 'all-in-one-wp-sticky-anything'),
        value: 'tada',
    },
    {
        label: wp.i18n.__('Wobble', 'all-in-one-wp-sticky-anything'),
        value: 'wobble',
    },
    {
        label: wp.i18n.__('Flash', 'all-in-one-wp-sticky-anything'),
        value: 'flash',
    },
    {
        label: wp.i18n.__('Heartbeat', 'all-in-one-wp-sticky-anything'),
        value: 'heartbeat',
    },
    {
        label: wp.i18n.__('Swing', 'all-in-one-wp-sticky-anything'),
        value: 'swing',
    },
];

// Placeholder shortcode text shown per selected contact form plugin
const CONTACT_FORM_PLUGIN_PLACEHOLDERS = {
    cf7: '[contact-form-7 id="123" title="Quick Contact"]',
    wpforms: '[wpforms id="123"]',
    other: '[your-form-shortcode-here]',
};

export default function StickyFloatingForms() {

    const { isPro, contactForms = {}, adminEmail = '' } = ai1wpsa;
    const { data, setData } = useContext(SettingsContext);

    const {
        stickyFloatingForms = false,
        stickyFloatingFormsLayout = 'button',
        stickyFloatingFormsPosition = 'bottom-right',
        stickyFloatingFormsDevice = 'all',
        stickyFloatingFormsHideOnScroll = false,

        stickyFloatingFormsButtonText = wp.i18n.__(
            'Contact Us',
            'all-in-one-wp-sticky-anything'
        ),

        stickyFloatingFormsModalTitle = wp.i18n.__(
            'Send us a Message',
            'all-in-one-wp-sticky-anything'
        ),

        stickyFloatingFormsModalSubtitle = wp.i18n.__(
            "Fill out the form below and we'll get back to you.",
            'all-in-one-wp-sticky-anything'
        ),

        stickyFloatingFormsTeaserMessage = wp.i18n.__(
            '👋 Have a question? We usually reply within the hour.',
            'all-in-one-wp-sticky-anything'
        ),

        stickyFloatingFormsFormType = 'default',
        stickyFloatingFormsFormPlugin = 'cf7',
        stickyFloatingFormsShortcode = '',
        stickyFloatingFormsHoneypot = false,
        stickyFloatingFormsDefaultMail = adminEmail,
        stickyFloatingFormsSuccessMessage = wp.i18n.__(
            'Thanks for reaching out. Someone from our team will get back to you within the hour.',
            'all-in-one-wp-sticky-anything'
        ),

        stickyFloatingFormsCloseButton = true,

        stickyFloatingFormsExitIntent = true,
        stickyFloatingFormsExitFrequency = 'session',
        stickyFloatingFormsExitFrequencyValue = 1,
        stickyFloatingFormsExitFrequencyUnit = 'minutes',
        stickyFloatingFormsAutoOpen = false,
        stickyFloatingFormsDelay = 5,
        stickyFloatingFormsReduceMotion = true,

        stickyFloatingFormsDisplayFor = 'all',
        stickyFloatingFormsDisplayOn = 'everywhere',

        stickyFloatingFormsAttentionEffect = false,
        stickyFloatingFormsAttentionEffectType = 'pulse',
        stickyFloatingFormsUnreadBadge = false,

        stickyFloatingFormsWidgetStyle = {
            bgColor: '#004bcb',
            textColor: '#ffffff',
            fontSize: '15px',
        },

        stickyFloatingFormsButtonStyle = {
            submitBtnBg: '#004bcb',
            submitTextColor: '#fff',
            closeBtnBg: '#ffffff00',
            closeTextColor: '#000',
        },

    } = data || {};

    // ─── Contact Form Picker ─────────────────────────────────────
    const availableForms = contactForms[stickyFloatingFormsFormPlugin] || [];

    const selectedContactFormId = (() => {
        const match = /id=["']?(\d+)["']?/.exec(stickyFloatingFormsShortcode || '');
        return match ? match[1] : '';
    })();

    const CONTACT_FORM_SELECT_OPTIONS = [
        {
            label: wp.i18n.__('— Select a form —', 'all-in-one-wp-sticky-anything'),
            value: '',
        },
        ...availableForms.map((form) => ({
            label: form.title,
            value: String(form.id),
        })),
    ];

    const CONTACT_FORM_PLUGIN_LABELS = {
        cf7: wp.i18n.__('Contact Form 7', 'all-in-one-wp-sticky-anything'),
        wpforms: wp.i18n.__('WPForms', 'all-in-one-wp-sticky-anything'),
    };

    // ─── Reorder Effects ─────────────────────────────────────────
    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    return (
        <div className="ai1wpsa-settings-content">

            {/* Header */}
            <div className="ai1wpsa-settings-content-header">
                <i className="dashicons dashicons-format-chat"></i>
                <span>{wp.i18n.__('Sticky Floating Forms Settings', 'all-in-one-wp-sticky-anything')}</span>
            </div>

            <div className="settings-content">

                {/* ── GENERAL ───────────────────────────────────── */}
                <Group
                    icon="⚙️"
                    title={wp.i18n.__('General', 'all-in-one-wp-sticky-anything')}
                >

                    {/* Enable */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__(
                                'Sticky Floating Forms',
                                'all-in-one-wp-sticky-anything'
                            )}
                            <ProIcon />
                        </h4>

                        <div className="settings-field-content">

                            <FormToggle
                                checked={stickyFloatingForms}
                                className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                onChange={() => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({
                                        ...data,
                                        stickyFloatingForms: !stickyFloatingForms,
                                    });
                                }}
                            />

                            <p className="description">
                                {wp.i18n.__(
                                    'Enable or disable the sticky floating contact form.',
                                    'all-in-one-wp-sticky-anything'
                                )}
                            </p>

                        </div>
                    </div>

                    {(!!stickyFloatingForms || !isPro) && (
                        <>

                            {/* Layout */}
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Layout', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">

                                    <ButtonGroup className="ai1wpsa-floating-forms-layout">

                                        {LAYOUT_OPTIONS.map(({ label, value, pro, isComing }) => (
                                            <Button
                                                key={value}
                                                className={!!pro && !isPro ? 'ai1wpsa-pro-feature ai1wpsa-disabled' : ''}
                                                isPrimary={stickyFloatingFormsLayout === value}
                                                onClick={() => {

                                                    if (!!pro && !isPro) {
                                                        showProModal();
                                                        return;
                                                    }

                                                    setData({
                                                        ...data,
                                                        stickyFloatingFormsLayout: value,
                                                    });
                                                }}
                                            >
                                                <span>{label} - {isComing ? wp.i18n.__('Coming soon', 'all-in-one-wp-sticky-anything') : ''}</span>
                                            </Button>
                                        ))}

                                    </ButtonGroup>

                                    {!isPro && (
                                        <Tooltip
                                            anchorSelect=".ai1wpsa-pro-feature"
                                            variant="warning"
                                            content={wp.i18n.__(
                                                'Pro Feature',
                                                'all-in-one-wp-sticky-anything'
                                            )}
                                        />
                                    )}

                                </div>
                            </div>

                            {/* Position */}
                            {stickyFloatingFormsLayout !== 'bar' && (
                                <div className="settings-field">

                                    <h4 className="settings-field-label">
                                        {wp.i18n.__('Position', 'all-in-one-wp-sticky-anything')}
                                        <ProIcon />
                                    </h4>

                                    <div className="settings-field-content">

                                        <ButtonGroup>

                                            {POSITION_OPTIONS.map(({ label, value, pro }) => (
                                                <Button
                                                    key={value}
                                                    className={!!pro && !isPro ? 'ai1wpsa-pro-feature ai1wpsa-disabled' : ''}
                                                    isPrimary={stickyFloatingFormsPosition === value}
                                                    onClick={() => {

                                                        if (!!pro && !isPro) {
                                                            showProModal();
                                                            return;
                                                        }

                                                        setData({
                                                            ...data,
                                                            stickyFloatingFormsPosition: value,
                                                        });
                                                    }}
                                                >
                                                    {label}
                                                </Button>
                                            ))}

                                        </ButtonGroup>

                                    </div>
                                </div>
                            )}

                            {/* Device */}
                            {isPro && (
                                <div className="settings-field">

                                    <h4 className="settings-field-label">
                                        {wp.i18n.__('Device', 'all-in-one-wp-sticky-anything')}
                                        <ProIcon />
                                    </h4>

                                    <div className="settings-field-content">

                                        <ButtonGroup>

                                            {DEVICE_OPTIONS.map(({ label, value }) => (
                                                <Button
                                                    key={value}
                                                    isPrimary={stickyFloatingFormsDevice === value}
                                                    onClick={() => {
                                                        if (!isPro) {
                                                            return;
                                                        }

                                                        setData({
                                                            ...data,
                                                            stickyFloatingFormsDevice: value,
                                                        })
                                                    }}
                                                >
                                                    {label}
                                                </Button>
                                            ))}

                                        </ButtonGroup>

                                    </div>
                                </div>
                            )}

                            {/* Hide on Scroll */}
                            {stickyFloatingFormsLayout !== 'bar' && (
                                <div className="settings-field">
                                    <h4 className="settings-field-label">
                                        {wp.i18n.__('Hide on Scroll', 'all-in-one-wp-sticky-anything')}
                                        <ProIcon />
                                    </h4>

                                    <div className="settings-field-content">
                                        <FormToggle
                                            checked={stickyFloatingFormsHideOnScroll}
                                            className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                            onChange={() => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({
                                                    ...data,
                                                    stickyFloatingFormsHideOnScroll: !stickyFloatingFormsHideOnScroll,
                                                });
                                            }}
                                        />

                                        <p className="description">
                                            {wp.i18n.__(
                                                'Hide the floating button while scrolling down, and show it again when scrolling up. Turn off to keep it always visible.',
                                                'all-in-one-wp-sticky-anything'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Button Text */}
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Button Text', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">

                                    <TextControl
                                        value={stickyFloatingFormsButtonText}
                                        className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                        onChange={(value) => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            setData({
                                                ...data,
                                                stickyFloatingFormsButtonText: value,
                                            });
                                        }}
                                    />

                                    <p className="description">
                                        {wp.i18n.__(
                                            'Text shown on the floating trigger button.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>

                                </div>
                            </div>

                            {/* Teaser Message */}
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Teaser Message', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">

                                    <TextareaControl
                                        value={stickyFloatingFormsTeaserMessage}
                                        className={`ai1wpsa-textarea-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                        onChange={(value) => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            setData({
                                                ...data,
                                                stickyFloatingFormsTeaserMessage: value,
                                            });
                                        }}
                                    />

                                    <p className="description">
                                        {wp.i18n.__(
                                            'A short bubble message shown once, a few seconds after the page loads.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>

                                </div>
                            </div>

                            {/* Modal Title */}
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Modal Title', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">

                                    <TextControl
                                        value={stickyFloatingFormsModalTitle}
                                        className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                        onChange={(value) => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            setData({
                                                ...data,
                                                stickyFloatingFormsModalTitle: value,
                                            });
                                        }}
                                    />

                                </div>
                            </div>

                            {/* Modal Subtitle */}
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Modal Subtitle', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">

                                    <TextControl
                                        value={stickyFloatingFormsModalSubtitle}
                                        className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                        onChange={(value) => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            setData({
                                                ...data,
                                                stickyFloatingFormsModalSubtitle: value,
                                            });
                                        }}
                                    />

                                </div>
                            </div>

                            {/* Close Button */}
                            <div className="settings-field">
                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Close Button', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">
                                    <FormToggle
                                        checked={stickyFloatingFormsCloseButton}
                                        className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                        onChange={() => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            setData({
                                                ...data,
                                                stickyFloatingFormsCloseButton: !stickyFloatingFormsCloseButton,
                                            });
                                        }}
                                    />

                                    <p className="description">
                                        {wp.i18n.__(
                                            'Show or hide the close (×) icon on the modal.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}

                </Group>

                {/* Target & Trigger settings are now available in the "Target & Trigger" tab. */}
                {(!!stickyFloatingForms || !isPro) && (
                    <Group
                        icon="👀"
                        title={wp.i18n.__('Target & Trigger', 'all-in-one-wp-sticky-anything')}
                    >
                        {/* Exit Intent */}
                        <div className="settings-field">
                            <h4 className="settings-field-label">
                                {wp.i18n.__('Exit Intent Popup', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>

                            <div className="settings-field-content">
                                <FormToggle
                                    checked={stickyFloatingFormsExitIntent}
                                    className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                    onChange={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }

                                        setData({
                                            ...data,
                                            stickyFloatingFormsExitIntent: !stickyFloatingFormsExitIntent,
                                        });
                                    }}
                                />

                                <p className="description">
                                    {wp.i18n.__(
                                        'Open the modal automatically when a visitor looks about to leave.',
                                        'all-in-one-wp-sticky-anything'
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Exit Intent Frequency */}
                        {!!stickyFloatingFormsExitIntent && (
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Exit Intent Frequency', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">

                                    <ButtonGroup>

                                        {EXIT_FREQUENCY_OPTIONS.map(({ label, value, pro }) => (
                                            <Button
                                                key={value}
                                                className={!!pro && !isPro ? 'ai1wpsa-pro-feature ai1wpsa-disabled' : ''}
                                                isPrimary={stickyFloatingFormsExitFrequency === value}
                                                onClick={() => {

                                                    if (!!pro && !isPro) {
                                                        showProModal();
                                                        return;
                                                    }

                                                    setData({
                                                        ...data,
                                                        stickyFloatingFormsExitFrequency: value,
                                                    });
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        ))}

                                    </ButtonGroup>

                                    {!isPro && (
                                        <Tooltip
                                            anchorSelect=".ai1wpsa-pro-feature"
                                            variant="warning"
                                            content={wp.i18n.__(
                                                'Pro Feature',
                                                'all-in-one-wp-sticky-anything'
                                            )}
                                        />
                                    )}

                                    <p className="description">
                                        {wp.i18n.__(
                                            'How often the same visitor can be shown the exit-intent popup. "Always Show" is intended for testing — it will repeatedly reopen the modal with no cooldown.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>

                                </div>
                            </div>
                        )}

                        {/* Exit Intent Frequency: Time Based interval */}
                        {!!stickyFloatingFormsExitIntent && (stickyFloatingFormsExitFrequency === 'time-based' || !isPro) && (
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Repeat Every', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">

                                    <div className="settings-sub-field flex">

                                        <TextControl
                                            type="number"
                                            min={1}
                                            step={1}
                                            value={stickyFloatingFormsExitFrequencyValue}
                                            className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                const parsed = parseInt(value, 10);

                                                setData({
                                                    ...data,
                                                    stickyFloatingFormsExitFrequencyValue: isNaN(parsed) ? 1 : Math.max(1, parsed),
                                                });
                                            }}
                                        />

                                        <SelectControl
                                            value={stickyFloatingFormsExitFrequencyUnit}
                                            className={`ai1wpsa-select-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                            options={EXIT_FREQUENCY_UNIT_OPTIONS}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({
                                                    ...data,
                                                    stickyFloatingFormsExitFrequencyUnit: value,
                                                });
                                            }}
                                        />

                                    </div>

                                    <p className="description">
                                        {wp.i18n.__(
                                            'The same visitor won\'t see the exit-intent popup again until this interval has passed.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>

                                </div>
                            </div>
                        )}

                        {/* Auto Open */}
                        <div className="settings-field">
                            <h4 className="settings-field-label">
                                {wp.i18n.__('Auto Open', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>

                            <div className="settings-field-content">
                                <FormToggle
                                    checked={stickyFloatingFormsAutoOpen}
                                    className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                    onChange={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }

                                        setData({
                                            ...data,
                                            stickyFloatingFormsAutoOpen: !stickyFloatingFormsAutoOpen,
                                        });
                                    }}
                                />

                                <p className="description">
                                    {wp.i18n.__(
                                        'Automatically open the modal a few seconds after the page loads, without waiting for exit intent.',
                                        'all-in-one-wp-sticky-anything'
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Auto Open Delay */}
                        {(stickyFloatingFormsAutoOpen || !isPro) && (
                            <div className="settings-field">
                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Delay (seconds)', 'all-in-one-wp-sticky-anything')}
                                    <ProIcon />
                                </h4>

                                <div className="settings-field-content">
                                    <TextControl
                                        type="number"
                                        min={0}
                                        step={1}
                                        value={stickyFloatingFormsDelay}
                                        className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                        onChange={(value) => {
                                            if (!isPro) {
                                                showProModal();
                                                return;
                                            }

                                            const parsed = parseInt(value, 10);

                                            setData({
                                                ...data,
                                                stickyFloatingFormsDelay: isNaN(parsed) ? 0 : Math.max(0, parsed),
                                            });
                                        }}
                                    />

                                    <p className="description">
                                        {wp.i18n.__(
                                            'How long to wait, in seconds, before automatically opening the modal.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Reduce Motion */}
                        <div className="settings-field">
                            <h4 className="settings-field-label">
                                {wp.i18n.__('Respect Reduced Motion', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>

                            <div className="settings-field-content">
                                <FormToggle
                                    checked={stickyFloatingFormsReduceMotion}
                                    className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                    onChange={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }

                                        setData({
                                            ...data,
                                            stickyFloatingFormsReduceMotion: !stickyFloatingFormsReduceMotion,
                                        });
                                    }}
                                />

                                <p className="description">
                                    {wp.i18n.__(
                                        'Skip the pulse animation and exit-intent popup for visitors who request reduced motion.',
                                        'all-in-one-wp-sticky-anything'
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Display For */}
                        <div className="settings-field">
                            <h4 className="settings-field-label">
                                {wp.i18n.__('Display For', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>

                            <div className="settings-field-content">
                                <ButtonGroup>

                                    {DISPLAY_FOR_OPTIONS.map(({ label, value, pro }) => (
                                        <Button
                                            key={value}
                                            className={!!pro && !isPro ? 'ai1wpsa-pro-feature ai1wpsa-disabled' : ''}
                                            isPrimary={stickyFloatingFormsDisplayFor === value}
                                            onClick={() => {
                                                if (!!pro && !isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({
                                                    ...data,
                                                    stickyFloatingFormsDisplayFor: value,
                                                })
                                            }}
                                        >
                                            {label}
                                        </Button>
                                    ))}

                                </ButtonGroup>

                                {!isPro && (
                                    <Tooltip
                                        anchorSelect=".ai1wpsa-pro-feature"
                                        variant="warning"
                                        content={wp.i18n.__(
                                            'Pro Feature',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Display on */}
                        <div className="settings-field">
                            <h4 className="settings-field-label">
                                {wp.i18n.__('Display On', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>

                            <div className="settings-field-content">
                                <ButtonGroup>
                                    {DISPLAY_ON_OPTIONS.map(({ label, value, pro }) => (
                                        <Button
                                            key={value}
                                            className={!!pro && !isPro ? 'ai1wpsa-pro-feature ai1wpsa-disabled' : ''}
                                            isPrimary={stickyFloatingFormsDisplayOn === value}
                                            onClick={() => {
                                                if (!!pro && !isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({
                                                    ...data,
                                                    stickyFloatingFormsDisplayOn: value,
                                                })
                                            }}
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>

                                {!isPro && (
                                    <Tooltip
                                        anchorSelect=".ai1wpsa-pro-feature"
                                        variant="warning"
                                        content={wp.i18n.__(
                                            'Pro Feature',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                    </Group>
                )}

                {/* ── FORMS ─────────────────────────────────────── */}
                {(!!stickyFloatingForms || !isPro) && (
                    <Group
                        icon="📝"
                        title={wp.i18n.__('Forms', 'all-in-one-wp-sticky-anything')}
                    >

                        {/* Form Type */}
                        <div className="settings-field">

                            <h4 className="settings-field-label">
                                {wp.i18n.__('Form Type', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>

                            <div className="settings-field-content">

                                <ButtonGroup className="ai1wpsa-floating-forms-type">

                                    {FORM_TYPE_OPTIONS.map(({ label, value, pro }) => (
                                        <Button
                                            key={value}
                                            className={!!pro && !isPro ? 'ai1wpsa-pro-feature ai1wpsa-disabled' : ''}
                                            isPrimary={stickyFloatingFormsFormType === value}
                                            onClick={() => {

                                                if (!!pro && !isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({
                                                    ...data,
                                                    stickyFloatingFormsFormType: value,
                                                });
                                            }}
                                        >
                                            {label}
                                        </Button>
                                    ))}

                                </ButtonGroup>

                                {!isPro && (
                                    <Tooltip
                                        anchorSelect=".ai1wpsa-floating-forms-type .ai1wpsa-pro-feature"
                                        variant="warning"
                                        content={wp.i18n.__(
                                            'Pro Feature',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    />
                                )}

                                <p className="description">
                                    {wp.i18n.__(
                                        'Use the built-in demo fields (Name, Email, Message), or connect an existing form built with Contact Form 7, WPForms, or another form plugin.',
                                        'all-in-one-wp-sticky-anything'
                                    )}
                                </p>

                            </div>
                        </div>

                        {stickyFloatingFormsFormType === 'contact-forms' && (
                            <>

                                {/* Contact Form Plugin */}
                                <div className="settings-field">

                                    <h4 className="settings-field-label">
                                        {wp.i18n.__('Contact Form Plugin', 'all-in-one-wp-sticky-anything')}
                                        <ProIcon />
                                    </h4>

                                    <div className="settings-field-content">

                                        <ButtonGroup className="ai1wpsa-floating-forms-plugin">

                                            {CONTACT_FORM_PLUGIN_OPTIONS.map(({ label, value, pro }) => (
                                                <Button
                                                    key={value}
                                                    className={!!pro && !isPro ? 'ai1wpsa-pro-feature ai1wpsa-disabled' : ''}
                                                    isPrimary={stickyFloatingFormsFormPlugin === value}
                                                    onClick={() => {

                                                        if (!!pro && !isPro) {
                                                            showProModal();
                                                            return;
                                                        }

                                                        setData({
                                                            ...data,
                                                            stickyFloatingFormsFormPlugin: value,
                                                            stickyFloatingFormsShortcode: '',
                                                        });
                                                    }}
                                                >
                                                    {label}
                                                </Button>
                                            ))}

                                        </ButtonGroup>

                                        {!isPro && (
                                            <Tooltip
                                                anchorSelect=".ai1wpsa-floating-forms-plugin .ai1wpsa-pro-feature"
                                                variant="warning"
                                                content={wp.i18n.__(
                                                    'Pro Feature',
                                                    'all-in-one-wp-sticky-anything'
                                                )}
                                            />
                                        )}

                                        <p className="description">
                                            {wp.i18n.__(
                                                'Choose which plugin the form below belongs to, so we can render it correctly.',
                                                'all-in-one-wp-sticky-anything'
                                            )}
                                        </p>

                                    </div>
                                </div>

                                {/* Form Picker (CF7 / WPForms) or Shortcode (Other Forms) */}
                                {stickyFloatingFormsFormPlugin === 'other' ? (
                                    <div className="settings-field">

                                        <h4 className="settings-field-label">
                                            {wp.i18n.__('Form Shortcode', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <div className="settings-field-content">

                                            <TextControl
                                                value={stickyFloatingFormsShortcode}
                                                className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                                placeholder={CONTACT_FORM_PLUGIN_PLACEHOLDERS.other}
                                                onChange={(value) => {
                                                    if (!isPro) {
                                                        showProModal();
                                                        return;
                                                    }

                                                    setData({
                                                        ...data,
                                                        stickyFloatingFormsShortcode: value,
                                                    });
                                                }}
                                            />

                                            <p className="description">
                                                {wp.i18n.__(
                                                    'Paste the shortcode of the existing form you want to render inside the modal.',
                                                    'all-in-one-wp-sticky-anything'
                                                )}
                                            </p>

                                        </div>
                                    </div>
                                ) : (
                                    <div className="settings-field">

                                        <h4 className="settings-field-label">
                                            {wp.i18n.__('Select Form', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <div className="settings-field-content">

                                            {availableForms.length > 0 ? (
                                                <>
                                                    <SelectControl
                                                        value={selectedContactFormId}
                                                        className={`ai1wpsa-select-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                                        options={CONTACT_FORM_SELECT_OPTIONS}
                                                        onChange={(value) => {
                                                            if (!isPro) {
                                                                showProModal();
                                                                return;
                                                            }

                                                            const form = availableForms.find(
                                                                (f) => String(f.id) === value
                                                            );

                                                            setData({
                                                                ...data,
                                                                stickyFloatingFormsShortcode: form ? form.shortcode : '',
                                                            });
                                                        }}
                                                    />

                                                    <p className="description">
                                                        {wp.i18n.__(
                                                            'Pick an existing form — its shortcode will be inserted automatically.',
                                                            'all-in-one-wp-sticky-anything'
                                                        )}
                                                    </p>

                                                    {!!stickyFloatingFormsShortcode && (
                                                        <code className="ai1wpsa-shortcode-preview">
                                                            {stickyFloatingFormsShortcode}
                                                        </code>
                                                    )}
                                                </>
                                            ) : (
                                                <p className="description">
                                                    {wp.i18n.__(
                                                        'No',
                                                        'all-in-one-wp-sticky-anything'
                                                    )}{' '}
                                                    {CONTACT_FORM_PLUGIN_LABELS[stickyFloatingFormsFormPlugin] || stickyFloatingFormsFormPlugin}{' '}
                                                    {wp.i18n.__(
                                                        'forms were found. Create a form in that plugin first, then come back here to select it.',
                                                        'all-in-one-wp-sticky-anything'
                                                    )}
                                                </p>
                                            )}

                                        </div>
                                    </div>
                                )}

                            </>
                        )}

                        {stickyFloatingFormsFormType === 'default' && (
                            <>
                                {/* Recipient email(s) */}
                                <div class="settings-field">
                                    <h4 class="settings-field-label">
                                        {wp.i18n.__('Send To', 'all-in-one-wp-sticky-anything')}
                                        <ProIcon />
                                    </h4>
                                    <div class="settings-field-content">
                                        <TextControl
                                            type="text"
                                            value={stickyFloatingFormsDefaultMail}
                                            className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                            placeholder={adminEmail}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({
                                                    ...data,
                                                    stickyFloatingFormsDefaultMail: value,
                                                });
                                            }}
                                        />
                                        <p class="description">{wp.i18n.__('Where form submissions are emailed. Defaults to the site admin email — separate multiple addresses with commas.', 'all-in-one-wp-sticky-anything')}</p>
                                    </div>
                                </div>

                                {/* Honeypot field */}
                                <div class="settings-field">
                                    <h4 class="settings-field-label">
                                        {wp.i18n.__('Honeypot field', 'all-in-one-wp-sticky-anything')}
                                        <ProIcon />
                                    </h4>
                                    <div class="settings-field-content">
                                        <FormToggle
                                            checked={stickyFloatingFormsHoneypot}
                                            className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                            onChange={() => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                };

                                                setData({ ...data, stickyFloatingFormsHoneypot: !stickyFloatingFormsHoneypot })
                                            }}
                                        />
                                        <p class="description">{wp.i18n.__('If enabled, the form will not be submitted if the honeypot field is filled in. Prevent bot spam form submissions.', 'all-in-one-wp-sticky-anything')}</p>
                                    </div>
                                </div>

                                {/* Success message */}
                                <div class="settings-field">
                                    <h4 class="settings-field-label">
                                        {wp.i18n.__('Success message', 'all-in-one-wp-sticky-anything')}
                                        <ProIcon />
                                    </h4>
                                    <div class="settings-field-content">
                                        <TextareaControl
                                            value={stickyFloatingFormsSuccessMessage}
                                            className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({
                                                    ...data,
                                                    stickyFloatingFormsSuccessMessage: value,
                                                });
                                            }}
                                        />
                                        <p class="description">{wp.i18n.__('Message to show when the form has been successfully submitted.', 'all-in-one-wp-sticky-anything')}</p>
                                    </div>
                                </div>
                            </>
                        )}

                    </Group>
                )}

                {/* ── EFFECTS ───────────────────────────────────── */}
                {(!!stickyFloatingForms || !isPro) && (
                    <Group
                        icon="✨"
                        title={wp.i18n.__('Attention effects', 'all-in-one-wp-sticky-anything')}
                    >
                        {/* Effects start here */}
                        <div class="settings-field">
                            <h4 class="settings-field-label">
                                {wp.i18n.__('Attention Effects', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>
                            <div class="settings-field-content">
                                <FormToggle
                                    checked={stickyFloatingFormsAttentionEffect}
                                    className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                    onChange={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        };

                                        setData({ ...data, stickyFloatingFormsAttentionEffect: !stickyFloatingFormsAttentionEffect })
                                    }}
                                />

                                <p className="description">{wp.i18n.__('Turn individual attention effects on or off, and reorder them.', 'all-in-one-wp-sticky-anything')}</p>
                            </div>
                        </div>
                        {/* Effects stop here */}

                        {(stickyFloatingFormsAttentionEffect || !isPro) && (
                            <>
                                {/* Effects Type start here */}
                                <div class="settings-field">
                                    <h4 class="settings-field-label">
                                        {wp.i18n.__('Effects Type', 'all-in-one-wp-sticky-anything')}
                                        <ProIcon />
                                    </h4>
                                    <div class="settings-field-content">
                                        <ButtonGroup className="ai1wpsa-animation-group">
                                            {ATTENTION_EFFECTS_OPTIONS.map(({ label, value }) => (
                                                <Button
                                                    key={value}
                                                    className={`${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                                    isPrimary={stickyFloatingFormsAttentionEffectType === value}
                                                    onClick={() => {
                                                        if (!isPro) {
                                                            showProModal();
                                                            return;
                                                        }

                                                        setData({ ...data, stickyFloatingFormsAttentionEffectType: value });
                                                    }}
                                                >
                                                    <div className={`ai1wpsa-attn-preview-container ${value}`}>
                                                        <div className="ai1wpsa-attn-preview"></div>
                                                    </div>
                                                    <p>{label}</p>
                                                </Button>
                                            ))}
                                        </ButtonGroup>

                                        <p className="description">
                                            {wp.i18n.__('Choose how the floating button should draw attention.', 'all-in-one-wp-sticky-anything')}
                                        </p>
                                    </div>
                                </div>
                                {/* Effects Type stop here */}
                            </>
                        )}

                        {/* Unread Badge start here */}
                        <div class="settings-field">
                            <h4 class="settings-field-label">
                                {wp.i18n.__('Unread Badge', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>
                            <div class="settings-field-content">
                                <FormToggle
                                    checked={stickyFloatingFormsUnreadBadge}
                                    className={`${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                    onChange={() => {
                                        if (!isPro) {
                                            showProModal();
                                            return;
                                        }
                                        setData({ ...data, stickyFloatingFormsUnreadBadge: !stickyFloatingFormsUnreadBadge })
                                    }}
                                />

                                <p className="description">{wp.i18n.__('Show or hide the unread badge on the floating trigger button.', 'all-in-one-wp-sticky-anything')}</p>
                            </div>
                        </div>
                        {/* Unread Badge stop here */}

                    </Group>
                )}

                {/* ── STYLES ───────────────────────────────────── */}
                {(!!stickyFloatingForms || !isPro) && (
                    <Group
                        icon="🎨"
                        title={wp.i18n.__('Styles', 'all-in-one-wp-sticky-anything')}
                    >

                        {/* Widget Style */}
                        <div className="settings-field">

                            <h4 className="settings-field-label">
                                {wp.i18n.__('Widget Style', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>

                            <div className="settings-field-content">
                                <div className="settings-sub-field flex">
                                    {/* background color start here */}
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">
                                            {wp.i18n.__('Background Color', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <ColorPickerWrapper
                                            value={stickyFloatingFormsWidgetStyle.bgColor}
                                            customClassName={!isPro ? 'ai1wpsa-disabled' : ''}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, stickyFloatingFormsWidgetStyle: { ...stickyFloatingFormsWidgetStyle, bgColor: value } });
                                            }}
                                            allowReset={true}
                                            resetValue="#1b4332"
                                        />
                                    </div>
                                    {/* background color stop here */}

                                    {/* text color start here */}
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">
                                            {wp.i18n.__('Text Color', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <ColorPickerWrapper
                                            value={stickyFloatingFormsWidgetStyle.textColor}
                                            customClassName={!isPro ? 'ai1wpsa-disabled' : ''}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, stickyFloatingFormsWidgetStyle: { ...stickyFloatingFormsWidgetStyle, textColor: value } });
                                            }}
                                            allowReset={true}
                                            resetValue="#ffffff"
                                        />
                                    </div>
                                    {/* text color stop here */}

                                    {/* font size start here */}
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">
                                            {wp.i18n.__('Font Size', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <TextControl
                                            value={stickyFloatingFormsWidgetStyle.fontSize}
                                            className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                            placeholder={wp.i18n.__('15px', 'all-in-one-wp-sticky-anything')}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, stickyFloatingFormsWidgetStyle: { ...stickyFloatingFormsWidgetStyle, fontSize: value } });
                                            }}
                                        />
                                    </div>
                                    {/* font size stop here */}
                                </div>
                            </div>
                        </div>

                        {/* Button Style */}
                        <div class="settings-field">
                            <h4 class="settings-field-label">
                                {wp.i18n.__('Button Style', 'all-in-one-wp-sticky-anything')}
                                <ProIcon />
                            </h4>
                            <div class="settings-field-content">

                                <div className="settings-sub-field flex">
                                    {/* background color start here */}
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">
                                            {wp.i18n.__('Submit Button Background Color', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <ColorPickerWrapper
                                            value={stickyFloatingFormsButtonStyle.submitBtnBg}
                                            customClassName={!isPro ? 'ai1wpsa-disabled' : ''}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, stickyFloatingFormsButtonStyle: { ...stickyFloatingFormsButtonStyle, submitBtnBg: value } });
                                            }}
                                            allowReset={true}
                                            resetValue="#1b4332"
                                        />
                                    </div>
                                    {/* background color stop here */}

                                    {/* text color start here */}
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">
                                            {wp.i18n.__('Submit Button Text Color', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <ColorPickerWrapper
                                            value={stickyFloatingFormsButtonStyle.submitTextColor}
                                            customClassName={!isPro ? 'ai1wpsa-disabled' : ''}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, stickyFloatingFormsButtonStyle: { ...stickyFloatingFormsButtonStyle, submitTextColor: value } });
                                            }}
                                            allowReset={true}
                                            resetValue="#ffffff"
                                        />
                                    </div>
                                </div>
                                <div className="settings-sub-field flex">
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">
                                            {wp.i18n.__('Close Button Background Color', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <ColorPickerWrapper
                                            value={stickyFloatingFormsButtonStyle.closeBtnBg}
                                            customClassName={!isPro ? 'ai1wpsa-disabled' : ''}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, stickyFloatingFormsButtonStyle: { ...stickyFloatingFormsButtonStyle, closeBtnBg: value } });
                                            }}
                                            allowReset={true}
                                            resetValue="#ffffff00"
                                        />
                                    </div>

                                    <div className="settings-field">
                                        <h4 class="settings-field-label">
                                            {wp.i18n.__('Close Button Text Color', 'all-in-one-wp-sticky-anything')}
                                            <ProIcon />
                                        </h4>

                                        <ColorPickerWrapper
                                            value={stickyFloatingFormsButtonStyle.closeTextColor}
                                            customClassName={!isPro ? 'ai1wpsa-disabled' : ''}
                                            onChange={(value) => {
                                                if (!isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, stickyFloatingFormsButtonStyle: { ...stickyFloatingFormsButtonStyle, closeTextColor: value } });
                                            }}
                                            allowReset={true}
                                            resetValue="#000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Group>
                )}

            </div>
        </div>
    );
}