const { useContext } = wp.element;

const {
    Button,
    ButtonGroup,
    FormToggle,
    TextControl,
    SelectControl,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";
import ColorPickerWrapper from "../../includes/ColorPickerWrapper";

export default function AnnouncementBar() {
    const { isPro } = ai1wpsa;
    const { data, setData } = useContext(SettingsContext);

    const {
        announcementBar = false,
        announcementBars = [
            {
                id: 1,
                layoutType: 'default',
                layout: '1',

                title: '',
                message: 'Get up to 80% off on your first purchase!',
                btnText: 'Get Started',
                BtnUrl: '#',

                position: 'top',
                titleColor: '#fff',
                titleFontFamily: 'inherit',
                titleFontSize: 16,
                titleLineHeight: 1,
                titleLetterSpacing: 0,
                titleFontWeight: 600,
                titleFontStyle: 'normal',

                messageColor: '#fff',
                messageFontFamily: 'inherit',
                messageFontSize: 14,
                messageLineHeight: 1,
                messageFontWeight: 400,
                messageFontStyle: 'normal',

                btnColor: '#fff',
                btnBgColor: '#ff0000',
                btnFontFamily: 'inherit',
                btnFontSize: 12,
                btnLineHeight: 1,
                btnFontWeight: 600,
                btnFontStyle: 'normal',

                sticky: false,
                background: '#000',

                displayOn: 'all',
            },
        ],
    } = data || {};

    const announcementBarNextId = announcementBars.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-megaphone"></i>
                <span>{wp.i18n.__('Announcement Bar Settings', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content">
                {/* announcement bar start here */}
                <div class="settings-field">
                    <h4 class="settings-field-label">{wp.i18n.__('Announcement Bar', 'all-in-one-wp-sticky-anything')}</h4>
                    <div class="settings-field-content">

                        <FormToggle
                            checked={announcementBar}
                            onChange={() => setData({ ...data, announcementBar: !announcementBar })}
                        />

                        <p className="description">{wp.i18n.__('Enable or disable the announcemnt bar.', 'all-in-one-wp-sticky-anything')}</p>
                    </div>
                </div>
                {/* sticky sidebar stop here */}

                {!!announcementBar && <>
                    {/* announcement bars start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Announcement Bar Items', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">
                            <div class="settings-sub-field">
                                {
                                    announcementBars.map((bar, index) => {
                                        return (
                                            <>
                                                <div className="settings-field">
                                                    <h5 class="settings-field-label">{wp.i18n.__('Announcement Bar', 'all-in-one-wp-sticky-anything')} {index + 1}</h5>
                                                </div>

                                                {bar.layoutType !== 'default' && <div class="settings-field">
                                                    <h5 class="settings-field-label">{wp.i18n.__('Title', 'all-in-one-wp-sticky-anything')}</h5>

                                                    <div class="settings-field-content">
                                                        <TextControl
                                                            value={bar.title}
                                                            placeholder={wp.i18n.__('Title', 'all-in-one-wp-sticky-anything')}
                                                            onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, title: value } : bar) })}
                                                        />
                                                    </div>
                                                </div>
                                                }

                                                <div class="settings-field">
                                                    <h5 class="settings-field-label">{wp.i18n.__('Message', 'all-in-one-wp-sticky-anything')}</h5>

                                                    <div class="settings-field-content">
                                                        <TextControl
                                                            value={bar.message}
                                                            placeholder={wp.i18n.__('Message', 'all-in-one-wp-sticky-anything')}
                                                            onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, message: value } : bar) })}
                                                        />

                                                    </div>
                                                </div>

                                                <div class="settings-field">
                                                    <h5 class="settings-field-label">{wp.i18n.__('Button Text', 'all-in-one-wp-sticky-anything')}</h5>

                                                    <div class="settings-field-content">
                                                        <TextControl
                                                            value={bar.btnText}
                                                            placeholder={wp.i18n.__('Button Text', 'all-in-one-wp-sticky-anything')} onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, btnText: value } : bar) })}
                                                        />

                                                    </div>
                                                </div>

                                                <div class="settings-field">
                                                    <h5 class="settings-field-label">{wp.i18n.__('Button URL', 'all-in-one-wp-sticky-anything')}</h5>

                                                    <div class="settings-field-content">                                                        <TextControl
                                                        value={bar.BtnUrl}
                                                        placeholder={wp.i18n.__('Button URL', 'all-in-one-wp-sticky-anything')} onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, btnUrl: value } : bar) })}
                                                    />

                                                    </div>
                                                </div>

                                                <div class="settings-field">
                                                    <h5 class="settings-field-label">{wp.i18n.__('Position', 'all-in-one-wp-sticky-anything')}</h5>

                                                    <div class="settings-field-content">
                                                        {/* Position */}
                                                        <ButtonGroup>
                                                            <Button
                                                                variant={bar.position === 'top' ? 'primary' : 'secondary'}
                                                                onClick={() => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, position: 'top' } : bar) })}
                                                            >
                                                                {wp.i18n.__('Top', 'all-in-one-wp-sticky-anything')}
                                                            </Button>
                                                            <Button
                                                                variant={bar.position === 'bottom' ? 'primary' : 'secondary'}
                                                                onClick={() => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, position: 'bottom' } : bar) })}
                                                            >
                                                                {wp.i18n.__('Bottom', 'all-in-one-wp-sticky-anything')}
                                                            </Button>
                                                        </ButtonGroup>
                                                    </div>
                                                </div>

                                                {bar.layoutType === 'default' &&
                                                    <>
                                                        {/* Title Text Color */}
                                                        <div class="settings-field">
                                                            <h5 class="settings-field-label">{wp.i18n.__('Title Text Color', 'all-in-one-wp-sticky-anything')}</h5>

                                                            <div class="settings-field-content">
                                                                <ColorPickerWrapper
                                                                    value={bar.titleColor}
                                                                    onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, titleColor: value } : bar) })}
                                                                    allowReset={true}
                                                                    resetValue={'#fff'}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Title font family */}
                                                        <div class="settings-field">
                                                            <h5 class="settings-field-label">{wp.i18n.__('Title Font Family', 'all-in-one-wp-sticky-anything')}</h5>

                                                            <div class="settings-field-content">
                                                                <TextControl
                                                                    value={bar.titleFontFamily}
                                                                    onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, titleFontFamily: value } : bar) })}
                                                                    placeholder={wp.i18n.__('Title Font Family', 'all-in-one-wp-sticky-anything')}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Title font size */}
                                                        <div class="settings-field">
                                                            <h5 class="settings-field-label">{wp.i18n.__('Title Font Size', 'all-in-one-wp-sticky-anything')}</h5>

                                                            <div class="settings-field-content">
                                                                <TextControl
                                                                    value={bar.titleFontSize}
                                                                    onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, titleFontSize: value } : bar) })}
                                                                    placeholder={wp.i18n.__('Title Font Size', 'all-in-one-wp-sticky-anything')}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Title font weight */}
                                                        <div class="settings-field">
                                                            <h5 class="settings-field-label">{wp.i18n.__('Title Font Weight', 'all-in-one-wp-sticky-anything')}</h5>

                                                            <div class="settings-field-content">
                                                                <TextControl
                                                                    value={bar.titleFontWeight}
                                                                    onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, titleFontWeight: value } : bar) })}
                                                                    placeholder={wp.i18n.__('Title Font Weight', 'all-in-one-wp-sticky-anything')}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Title line height */}
                                                        <div class="settings-field">
                                                            <h5 class="settings-field-label">{wp.i18n.__('Title Line Height', 'all-in-one-wp-sticky-anything')}</h5>

                                                            <div class="settings-field-content">
                                                                <TextControl
                                                                    value={bar.titleLineHeight}
                                                                    onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, titleLineHeight: value } : bar) })}
                                                                    placeholder={wp.i18n.__('Title Line Height', 'all-in-one-wp-sticky-anything')}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Title letter spacing */}
                                                        <div class="settings-field">
                                                            <h5 class="settings-field-label">{wp.i18n.__('Title Letter Spacing', 'all-in-one-wp-sticky-anything')}</h5>

                                                            <div class="settings-field-content">
                                                                <TextControl
                                                                    value={bar.titleLetterSpacing}
                                                                    onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, titleLetterSpacing: value } : bar) })}
                                                                    placeholder={wp.i18n.__('Title Letter Spacing', 'all-in-one-wp-sticky-anything')}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Title font weight */}
                                                        <div class="settings-field">
                                                            <h5 class="settings-field-label">{wp.i18n.__('Title Font Weight', 'all-in-one-wp-sticky-anything')}</h5>

                                                            <div className="settings-field-content">
                                                                <SelectControl
                                                                    value={bar.titleFontWeight}
                                                                    className="ai1wpsa-select-control"
                                                                    options={[
                                                                        { value: '100', label: wp.i18n.__('100', 'all-in-one-wp-sticky-anything') },
                                                                        { value: '200', label: wp.i18n.__('200', 'all-in-one-wp-sticky-anything') },
                                                                        { value: '300', label: wp.i18n.__('300', 'all-in-one-wp-sticky-anything') },
                                                                        { value: '400', label: wp.i18n.__('400', 'all-in-one-wp-sticky-anything') },
                                                                        { value: '500', label: wp.i18n.__('500', 'all-in-one-wp-sticky-anything') },
                                                                        { value: '600', label: wp.i18n.__('600', 'all-in-one-wp-sticky-anything') },
                                                                        { value: '700', label: wp.i18n.__('700', 'all-in-one-wp-sticky-anything') },
                                                                        { value: '800', label: wp.i18n.__('800', 'all-in-one-wp-sticky-anything') },
                                                                        { value: '900', label: wp.i18n.__('900', 'all-in-one-wp-sticky-anything') },
                                                                    ]}
                                                                    onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, titleFontWeight: value } : bar) })}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Title font style */}
                                                        <div class="settings-field">
                                                            <h5 class="settings-field-label">{wp.i18n.__('Title Font Style', 'all-in-one-wp-sticky-anything')}</h5>

                                                            <div class="settings-field-content">
                                                                <SelectControl
                                                                    value={bar.titleFontStyle}
                                                                    className="ai1wpsa-select-control"
                                                                    options={[
                                                                        { value: 'normal', label: wp.i18n.__('Normal', 'all-in-one-wp-sticky-anything') },
                                                                        { value: 'italic', label: wp.i18n.__('Italic', 'all-in-one-wp-sticky-anything') },
                                                                        { value: 'oblique', label: wp.i18n.__('Oblique', 'all-in-one-wp-sticky-anything') },
                                                                    ]}
                                                                    onChange={(value) => setData({ ...data, announcementBars: announcementBars.map((bar, i) => i === index ? { ...bar, titleFontStyle: value } : bar) })}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div>


                        </div>
                    </div>
                    {/* announcement bars stop here */}
                </>}
            </div>
        </div>
    )
}
