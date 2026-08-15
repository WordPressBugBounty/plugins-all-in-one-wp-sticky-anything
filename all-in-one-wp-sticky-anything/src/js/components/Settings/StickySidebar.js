const { useContext } = wp.element;

const {
    Button,
    ButtonGroup,
    FormToggle,
    TextControl,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";

export default function StickySidebar() {
    const { isPro } = ai1wpsa;
    const { data, setData } = useContext(SettingsContext);

    const {
        stickySidebar = false,
        stickySidebarElement = '',
        stickySidebarContainer = '',
        stickySidebarDevice = 'all',
        StickySidebarMarginTop = '90',
        StickySidebarMarginBottom = '0',
        stickyMinWidth = '795',
        stickySidebarHeight = false,
        stickyDisableOn = [],
    } = data || {};

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-welcome-widgets-menus"></i>
                <span>{wp.i18n.__('Sticky Sidebar Settings', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content">
                {/* sticky sidebar start here */}
                <div class="settings-field">
                    <h4 class="settings-field-label">{wp.i18n.__('Sticky Sidebar', 'all-in-one-wp-sticky-anything')}</h4>
                    <div class="settings-field-content">

                        <FormToggle
                            checked={stickySidebar}
                            onChange={() => setData({ ...data, stickySidebar: !stickySidebar })}
                        />

                        <p className="description">{wp.i18n.__('Enable or disable the sticky sidebar.', 'all-in-one-wp-sticky-anything')}</p>
                    </div>
                </div>
                {/* sticky sidebar stop here */}

                {!!stickySidebar && <>
                    {/* sticky sidebar element start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Sticky Sidebar Selector', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <TextControl
                                value={stickySidebarElement}
                                placeholder={wp.i18n.__('ex: #sidebar or .sidebar', 'all-in-one-wp-sticky-anything')}
                                onChange={(value) => setData({ ...data, stickySidebarElement: value })} />

                            <p className="description">{wp.i18n.__('Write your sidebar element CSS selector (class or id) here. Astra: #secondary, Neve: .blog-sidebar', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* sticky sidebar element stop here */}

                    {/* sticky sidebar container element start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Sidebar Container Selector', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <TextControl
                                value={stickySidebarContainer}
                                placeholder={wp.i18n.__('ex: #main', 'all-in-one-wp-sticky-anything')}
                                onChange={(value) => setData({ ...data, stickySidebarContainer: value })} />

                            <p className="description">{wp.i18n.__('Write your sidebar container element CSS selector (class or id) here. It must be element that contains both sidebar and content. If left blank script will try to guess. Usually it\'s #main or #main-content. Astra: .ast-container, Neve: .archive-container .row', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* sticky sidebar container element stop here */}

                    {/* device start here */}
                    {isPro &&
                        <div class="settings-field">
                            <h4 class="settings-field-label">{wp.i18n.__('Device', 'all-in-one-wp-sticky-anything')}</h4>
                            <div class="settings-field-content">

                                <ButtonGroup>
                                    <Button
                                        onClick={() => {
                                            if (!isPro) {
                                                return;
                                            }

                                            setData({ ...data, stickySidebarDevice: 'all' });
                                        }}
                                        variant={stickySidebarDevice === 'all' ? 'primary' : ''}
                                    >
                                        {wp.i18n.__('All', 'all-in-one-wp-sticky-anything')}
                                    </Button>

                                    <Button
                                        onClick={() => {
                                            if (!isPro) {
                                                return;
                                            }

                                            setData({ ...data, stickySidebarDevice: 'desktop' });
                                        }}
                                        variant={stickySidebarDevice === 'desktop' ? 'primary' : ''}
                                    >
                                        {wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything')}
                                    </Button>

                                    <Button
                                        onClick={() => {
                                            if (!isPro) {
                                                return;
                                            }

                                            setData({ ...data, stickySidebarDevice: 'tablet' });
                                        }}
                                        variant={stickySidebarDevice === 'tablet' ? 'primary' : ''}
                                    >
                                        {wp.i18n.__('Tablet', 'all-in-one-wp-sticky-anything')}
                                    </Button>

                                    <Button
                                        onClick={() => {
                                            if (!isPro) {
                                                return;
                                            }

                                            setData({ ...data, stickySidebarDevice: 'mobile' });
                                        }}
                                        variant={stickySidebarDevice === 'mobile' ? 'primary' : ''}
                                    >
                                        {wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything')}
                                    </Button>
                                </ButtonGroup>

                                <p className="description">{wp.i18n.__('Set your desire z-index value for your target element.', 'all-in-one-wp-sticky-anything')}</p>
                            </div>
                        </div>
                    }
                    {/* device stop here */}

                    {/* sticky sidebar margin top start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Additional Top Margin', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <TextControl
                                type="number"
                                value={StickySidebarMarginTop}
                                placeholder={wp.i18n.__('ex: 30', 'all-in-one-wp-sticky-anything')}
                                onChange={(value) => setData({ ...data, StickySidebarMarginTop: value })} />

                            <p className="description">{wp.i18n.__('Set additional top margin for your sidebar.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* sticky sidebar margin top stop here */}

                    {/* sticky sidebar margin bottom start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Additional Top Margin', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <TextControl
                                type="number"
                                value={StickySidebarMarginBottom}
                                placeholder={wp.i18n.__('ex: 30', 'all-in-one-wp-sticky-anything')}
                                onChange={(value) => setData({ ...data, StickySidebarMarginBottom: value })} />

                            <p className="description">{wp.i18n.__('Set additional bottom margin for your sidebar.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* sticky sidebar margin bottom stop here */}

                    {/* sticky sidebar min width start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Disable in small screens', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <TextControl
                                type="number"
                                value={stickyMinWidth}
                                placeholder={wp.i18n.__('ex: 767', 'all-in-one-wp-sticky-anything')}
                                onChange={(value) => setData({ ...data, stickyMinWidth: value })} />

                            <p className="description">{wp.i18n.__('Disable if screen width is smaller than this value. Set only width value. Don\'t add px.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* sticky sidebar min width stop here */}

                    {/* sticky sidebar height start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Update sidebar height', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <FormToggle
                                checked={stickySidebarHeight}
                                onChange={() => setData({ ...data, stickySidebarHeight: !stickySidebarHeight })}
                            />

                            <p className="description">{wp.i18n.__('Troubleshooting option, try this if your sidebar loses its background color.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* sticky sidebar height stop here */}
                </>}
            </div>
        </div>
    )
}
