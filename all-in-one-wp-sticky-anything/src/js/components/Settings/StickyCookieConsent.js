const { useContext } = wp.element;
const { applyFilters } = wp.hooks;

const {
    FormToggle,
    TextControl,
    TextareaControl,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";
import ColorPickerWrapper from "./ColorPickerWrapper";
import Group from "../../includes/Group";

export default function StickyCookieConsent() {

    const { data, setData } = useContext(SettingsContext);

    const {
        stickyCookieConsent = false,
        stickyCookieConsentMessage = wp.i18n.__(
            'We use cookies to improve your experience on our site. By using our site, you consent to cookies.',
            'all-in-one-wp-sticky-anything'
        ),

        stickyCookieConsentExpires = 90,
        stickyCookieConsentRejectRedirect = false,
        stickyCookieConsentRejectURL = '',

        stickyCookieConsentButtons = [
            {
                id: 'accept',
                label: wp.i18n.__('Accept Button', 'all-in-one-wp-sticky-anything'),
                text: wp.i18n.__('Accept', 'all-in-one-wp-sticky-anything'),
                status: true,
            },
            {
                id: 'reject',
                label: wp.i18n.__('Reject Button', 'all-in-one-wp-sticky-anything'),
                text: wp.i18n.__('Reject', 'all-in-one-wp-sticky-anything'),
                status: true,
            },
        ],

        stickyCookieConsentCloseButton = true,

        stickyCookieConsentBannerStyle = {
            bgColor: '#fff',
            textColor: '#5c637e',
            fontSize: '16px',
        },

        stickyCookieConsentButtonStyle = {
            acceptBtnBg: '#004bcb',
            acceptTextColor: '#fff',
            rejectBtnBg: '#ffffff00',
            rejectTextColor: '#000',
        },

    } = data || {};

    // ─── Reorder Buttons ─────────────────────────────────────────
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
                <i className="dashicons dashicons dashicons-privacy"></i>
                <span>{wp.i18n.__('Sticky Cookie Consent Settings', 'all-in-one-wp-sticky-anything')}</span>
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
                                'Sticky Cookie Consent',
                                'all-in-one-wp-sticky-anything'
                            )}
                        </h4>

                        <div className="settings-field-content">

                            <FormToggle
                                checked={stickyCookieConsent}
                                onChange={() =>
                                    setData({
                                        ...data,
                                        stickyCookieConsent: !stickyCookieConsent,
                                    })
                                }
                            />

                            <p className="description">
                                {wp.i18n.__(
                                    'Enable or disable the sticky cookie consent.',
                                    'all-in-one-wp-sticky-anything'
                                )}
                            </p>

                        </div>
                    </div>

                    {!!stickyCookieConsent && (
                        <>

                            {/* Pro field slot — Layout / Position / Device are
                                rendered by the Pro add-on when active. */}
                            {applyFilters('ai1wpsa_settings_fields_sticky_cookie', null, { area: 'layout', data, setData })}

                            {/* Message */}
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Message', 'all-in-one-wp-sticky-anything')}
                                </h4>

                                <div className="settings-field-content">

                                    <TextareaControl
                                        value={stickyCookieConsentMessage}
                                        className="ai1wpsa-textarea-control"
                                        onChange={(value) =>
                                            setData({
                                                ...data,
                                                stickyCookieConsentMessage: value,
                                            })
                                        }
                                    />

                                </div>
                            </div>

                            {/* Expiry */}
                            <div className="settings-field">

                                <h4 className="settings-field-label">
                                    {wp.i18n.__(
                                        'Cookie Expiry (days)',
                                        'all-in-one-wp-sticky-anything'
                                    )}
                                </h4>

                                <div className="settings-field-content">

                                    <TextControl
                                        value={stickyCookieConsentExpires}
                                        className="ai1wpsa-text-control"
                                        onChange={(value) =>
                                            setData({
                                                ...data,
                                                stickyCookieConsentExpires: value,
                                            })
                                        }
                                    />

                                    <p className="description">
                                        {wp.i18n.__(
                                            'Set the number of days until the cookie consent expires.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>

                                </div>
                            </div>

                            {/* Reject Redirect */}
                            <div className="settings-field">
                                <h4 className="settings-field-label">
                                    {wp.i18n.__('Reject Redirect', 'all-in-one-wp-sticky-anything')}
                                </h4>

                                <div className="settings-field-content">
                                    <FormToggle
                                        checked={stickyCookieConsentRejectRedirect}
                                        onChange={() =>
                                            setData({
                                                ...data,
                                                stickyCookieConsentRejectRedirect: !stickyCookieConsentRejectRedirect,
                                            })
                                        }
                                    />

                                    <p className="description">
                                        {wp.i18n.__(
                                            'Redirect to a specific page/url when user reject cookie consent.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Reject URL */}
                            <div className="settings-field">
                                <h4 className="settings-field-label">{wp.i18n.__('Reject Redirect URL', 'all-in-one-wp-sticky-anything')}</h4>

                                <div className="settings-field-content">
                                    <TextControl
                                        value={stickyCookieConsentRejectURL}
                                        className="ai1wpsa-text-control"
                                        placeholder="https://example.com"
                                        onChange={(value) =>
                                            setData({
                                                ...data,
                                                stickyCookieConsentRejectURL: value,
                                            })
                                        }
                                    />

                                    <p className="description">
                                        {wp.i18n.__(
                                            'Write the URL you want to redirect when user reject cookie consent.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Close Button */}
                            <div className="settings-field">
                                <h4 className="settings-field-label">{wp.i18n.__('Close Button', 'all-in-one-wp-sticky-anything')}</h4>

                                <div className="settings-field-content">
                                    <FormToggle
                                        checked={stickyCookieConsentCloseButton}
                                        onChange={() =>
                                            setData({
                                                ...data,
                                                stickyCookieConsentCloseButton: !stickyCookieConsentCloseButton,
                                            })
                                        }
                                    />

                                    <p className="description">
                                        {wp.i18n.__(
                                            'Show or hide the close button on the cookie consent banner.',
                                            'all-in-one-wp-sticky-anything'
                                        )}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}

                </Group>

                {/* ── BUTTONS ───────────────────────────────────── */}
                {!!stickyCookieConsent && (
                    <Group
                        icon="🔘"
                        title={wp.i18n.__('Buttons', 'all-in-one-wp-sticky-anything')}
                    >
                        {/* Buttons start here */}
                        <div class="settings-field">
                            <h4 class="settings-field-label">{wp.i18n.__('Buttons', 'all-in-one-wp-sticky-anything')}</h4>
                            <div class="settings-field-content">
                                <div className="ai1wpsa-cookie-consent-buttons">

                                    {stickyCookieConsentButtons.map(({ id, label, text, status }, index) => (
                                        <div
                                            key={id}
                                            className="ai1wpsa-button-row"
                                            draggable
                                            onDragStart={(e) => {
                                                e.dataTransfer.setData('text/plain', index);
                                                e.dataTransfer.effectAllowed = 'move';
                                            }}
                                            onDragOver={(e) => {
                                                e.preventDefault();
                                                e.dataTransfer.dropEffect = 'move';
                                            }}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                const fromIndex = Number(e.dataTransfer.getData('text/plain'));
                                                const toIndex = index;

                                                if (fromIndex === toIndex) return;

                                                setData({
                                                    ...data,
                                                    stickyCookieConsentButtons: reorder(
                                                        stickyCookieConsentButtons,
                                                        fromIndex,
                                                        toIndex
                                                    ),
                                                });
                                            }}
                                        >

                                            {/* Drag Handle */}
                                            <span className="ai1wpsa-drag-handle">
                                                <i className="dashicons dashicons-menu-alt3"></i>
                                            </span>

                                            {/* Label */}
                                            <div className="ai1wpsa-button-label">
                                                {label}
                                            </div>

                                            {/* Button text */}
                                            <TextControl
                                                className="ai1wpsa-text-control"
                                                value={text}
                                                placeholder={label}
                                                onChange={(newText) => {
                                                    setData({
                                                        ...data,
                                                        stickyCookieConsentButtons:
                                                            stickyCookieConsentButtons.map(btn =>
                                                                btn.id === id
                                                                    ? { ...btn, text: newText }
                                                                    : btn
                                                            ),
                                                    });
                                                }}
                                            />

                                            {/* Status */}
                                            <FormToggle
                                                className="ai1wpsa-checkbox-control"
                                                checked={status}
                                                onChange={() => {
                                                    setData({
                                                        ...data,
                                                        stickyCookieConsentButtons:
                                                            stickyCookieConsentButtons.map(btn =>
                                                                btn.id === id
                                                                    ? { ...btn, status: !btn.status }
                                                                    : btn
                                                            ),
                                                    });
                                                }}
                                            />

                                        </div>
                                    ))}
                                </div>

                                <p className="description">{wp.i18n.__('Set your cookie consent buttons.', 'all-in-one-wp-sticky-anything')}</p>
                            </div>
                        </div>
                        {/* Buttons stop here */}


                    </Group>
                )}

                {/* ── STYLES ───────────────────────────────────── */}
                {!!stickyCookieConsent && (
                    <Group
                        icon="🎨"
                        title={wp.i18n.__('Styles', 'all-in-one-wp-sticky-anything')}
                    >

                        {/* Banner Style */}
                        <div className="settings-field">

                            <h4 className="settings-field-label">{wp.i18n.__('Banner Style', 'all-in-one-wp-sticky-anything')}</h4>

                            <div className="settings-field-content">
                                <div className="settings-sub-field flex">
                                    {/* background color start here */}
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">{wp.i18n.__('Background Color', 'all-in-one-wp-sticky-anything')}</h4>

                                        <ColorPickerWrapper
                                            value={stickyCookieConsentBannerStyle.bgColor}
                                            onChange={(value) => {
                                                setData({ ...data, stickyCookieConsentBannerStyle: { ...stickyCookieConsentBannerStyle, bgColor: value } });
                                            }}
                                            allowReset={true}
                                            resetValue="#fff"
                                        />
                                    </div>
                                    {/* background color stop here */}

                                    {/* text color start here */}
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">{wp.i18n.__('Text Color', 'all-in-one-wp-sticky-anything')}</h4>

                                        <ColorPickerWrapper
                                            value={stickyCookieConsentBannerStyle.textColor}
                                            onChange={(value) => {
                                                setData({ ...data, stickyCookieConsentBannerStyle: { ...stickyCookieConsentBannerStyle, textColor: value } });
                                            }}
                                            allowReset={true}
                                            resetValue="#5c637e"
                                        />
                                    </div>
                                    {/* text color stop here */}

                                    {/* font size start here */}
                                    <div className="settings-field">
                                        <h4 class="settings-field-label">{wp.i18n.__('Font Size', 'all-in-one-wp-sticky-anything')}</h4>

                                        <TextControl
                                            value={stickyCookieConsentBannerStyle.fontSize}
                                            className={`ai1wpsa-text-control`}
                                            placeholder={wp.i18n.__('16px', 'all-in-one-wp-sticky-anything')}
                                            onChange={(value) => {
                                                setData({ ...data, stickyCookieConsentBannerStyle: { ...stickyCookieConsentBannerStyle, fontSize: value } });
                                            }}
                                        />
                                    </div>
                                    {/* font size stop here */}
                                </div>
                            </div>
                        </div>

                        {/* Button Style */}
                        <div class="settings-field">
                            <h4 class="settings-field-label">{wp.i18n.__('Button Style', 'all-in-one-wp-sticky-anything')}</h4>
                            <div class="settings-field-content">

                                {/* Accept row */}
                                <div className="ai1wpsa-style-row">
                                    <span className="ai1wpsa-style-row__title">
                                        {wp.i18n.__('Accept Button', 'all-in-one-wp-sticky-anything')}
                                    </span>

                                    <div className="settings-sub-field flex">
                                        {/* background color start here */}
                                        <div className="settings-field">
                                            <h4 class="settings-field-label">{wp.i18n.__('Background Color', 'all-in-one-wp-sticky-anything')}</h4>

                                            <ColorPickerWrapper
                                                value={stickyCookieConsentButtonStyle.acceptBtnBg}
                                                onChange={(value) => {
                                                    setData({ ...data, stickyCookieConsentButtonStyle: { ...stickyCookieConsentButtonStyle, acceptBtnBg: value } });
                                                }}
                                                allowReset={true}
                                                resetValue="#004bcb"
                                            />
                                        </div>
                                        {/* background color stop here */}

                                        {/* text color start here */}
                                        <div className="settings-field">
                                            <h4 class="settings-field-label">{wp.i18n.__('Text Color', 'all-in-one-wp-sticky-anything')}</h4>

                                            <ColorPickerWrapper
                                                value={stickyCookieConsentButtonStyle.acceptTextColor}
                                                onChange={(value) => {
                                                    setData({ ...data, stickyCookieConsentButtonStyle: { ...stickyCookieConsentButtonStyle, acceptTextColor: value } });
                                                }}
                                                allowReset={true}
                                                resetValue="#ffffff"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Reject row */}
                                <div className="ai1wpsa-style-row">
                                    <span className="ai1wpsa-style-row__title">
                                        {wp.i18n.__('Reject Button', 'all-in-one-wp-sticky-anything')}
                                    </span>

                                    <div className="settings-sub-field flex">
                                        <div className="settings-field">
                                            <h4 class="settings-field-label">{wp.i18n.__('Background Color', 'all-in-one-wp-sticky-anything')}</h4>

                                            <ColorPickerWrapper
                                                value={stickyCookieConsentButtonStyle.rejectBtnBg}
                                                onChange={(value) => {
                                                    setData({ ...data, stickyCookieConsentButtonStyle: { ...stickyCookieConsentButtonStyle, rejectBtnBg: value } });
                                                }}
                                                allowReset={true}
                                                resetValue="#ffffff00"
                                            />
                                        </div>

                                        <div className="settings-field">
                                            <h4 class="settings-field-label">{wp.i18n.__('Text Color', 'all-in-one-wp-sticky-anything')}</h4>

                                            <ColorPickerWrapper
                                                value={stickyCookieConsentButtonStyle.rejectTextColor}
                                                onChange={(value) => {
                                                    setData({ ...data, stickyCookieConsentButtonStyle: { ...stickyCookieConsentButtonStyle, rejectTextColor: value } });
                                                }}
                                                allowReset={true}
                                                resetValue="#000"
                                            />
                                        </div>
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