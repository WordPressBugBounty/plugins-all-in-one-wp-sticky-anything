const { useContext } = wp.element;

const {
  FormToggle,
  TextControl,
  ButtonGroup,
  Button,
} = wp.components;

const { applyFilters } = wp.hooks;

import SettingsContext from "../../Contexts/SettingsContext";
import { pickElementOnPage } from "../../includes/SelectorPicker";
import ExperimentalBadge from "../../includes/ExperimentalBadge";
import ColorPickerWrapper from "./ColorPickerWrapper";

// ─── Sticky Device Options ───────────────────────────────────────
const STICKY_DEVICE_OPTIONS = [
  { label: wp.i18n.__('All', 'all-in-one-wp-sticky-anything'), value: 'all' },
  { label: wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything'), value: 'desktop' },
  { label: wp.i18n.__('Tablet', 'all-in-one-wp-sticky-anything'), value: 'tablet' },
  { label: wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything'), value: 'mobile' },
];

// ─── Sticky Header Background Options ────────────────────────────
// Background Image and Gradient are Premium — the free plugin doesn't know
// they exist. It only ever offers "Color"/"Solid" here; the sticky-anything-
// pro plugin (when active) hooks these two filters to append its own
// 'image'/'gradient' options, and hooks ai1wpsa_sticky_header_bg_extra_fields
// below to render whatever fields those extra options need.
const BASE_BG_TYPE_OPTIONS = [
  { label: wp.i18n.__('Color', 'all-in-one-wp-sticky-anything'), value: 'color' },
];

const BASE_COLOR_TYPE_OPTIONS = [
  { label: wp.i18n.__('Solid', 'all-in-one-wp-sticky-anything'), value: 'solid' },
];

export default function General() {
  const { data, setData } = useContext(SettingsContext);

  const {
    stickyClass = '',
    stickyScrollOffset = '',
    stickyZIndex = '',
    stickyHeaderBgType = 'color',
    stickyHeaderColorType = 'solid',
    stickyHeaderBgColor = '',
    stickyShrink = false,
    stickyShrinkHeight = '',
    stickyShrinkLogoSelector = '',
    stickyShrinkLogoWidth = '',
    stickyLogoSwap = false,
    stickyLogoSwapSelector = '',
    stickyLogoSwapImage = '',
  } = data || {};

  // Background Image/Gradient options (and their fields) are appended by
  // the Pro add-on's own JS via wp.hooks - see the filters called in the
  // JSX below. Re-computed every render so a Pro script that registers its
  // addFilter() after this component's first mount still gets picked up.
  const BG_TYPE_OPTIONS = applyFilters('ai1wpsa_sticky_header_bg_type_options', BASE_BG_TYPE_OPTIONS);
  const COLOR_TYPE_OPTIONS = applyFilters('ai1wpsa_sticky_header_color_type_options', BASE_COLOR_TYPE_OPTIONS);

  // Opens the WP Media Library modal for the alternate ("sticky") logo image.
  const openLogoSwapImagePicker = () => {
    const frame = wp.media({
      title: wp.i18n.__('Select Sticky Logo Image', 'all-in-one-wp-sticky-anything'),
      button: { text: wp.i18n.__('Use this Image', 'all-in-one-wp-sticky-anything') },
      multiple: false,
      library: { type: 'image' },
    });

    frame.on('select', () => {
      const attachment = frame.state().get('selection').first().toJSON();
      setData((current) => ({ ...current, stickyLogoSwapImage: attachment.url }));
    });

    frame.open();
  };

  return (
    <div className="ai1wpsa-settings-content">
      <div class="ai1wpsa-settings-content-header">
        <i class="dashicons dashicons-admin-generic"></i>
        <span>{wp.i18n.__('General Settings', 'all-in-one-wp-sticky-anything')}</span>
      </div>
      <div className="settings-content">
        {/* sticky class start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">{wp.i18n.__('Sticky Class', 'all-in-one-wp-sticky-anything')}</h4>
          <div class="settings-field-content">

            <div className="ai1wpsa-selector-field">
              <TextControl
                value={stickyClass}
                placeholder={wp.i18n.__('ex: #main-navigaion or .header', 'all-in-one-wp-sticky-anything')}
                onChange={(value) => setData({ ...data, stickyClass: value })} />

              <Button
                variant="secondary"
                onClick={() => pickElementOnPage((selector) => setData((current) => ({ ...current, stickyClass: selector })))}
              >
                {wp.i18n.__('🖱️ Pick Header on Page', 'all-in-one-wp-sticky-anything')}
              </Button>
            </div>

            <p className="description">{wp.i18n.__('Write your sticky selector here, or click "Pick Header on Page" to click your header directly on your live site instead. Make anything sticky by use sticky class. example: `<div class="sticky">I am sticky</div>`', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>
        {/* sticky class stop here */}

        {/* sticky scroll offset start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">{wp.i18n.__('Scroll Offset', 'all-in-one-wp-sticky-anything')}</h4>
          <div class="settings-field-content">

            <TextControl
              type="number"
              value={stickyScrollOffset}
              placeholder={wp.i18n.__('ex: 100', 'all-in-one-wp-sticky-anything')}
              onChange={(value) => setData({ ...data, stickyScrollOffset: value })} />

            <p className="description">{wp.i18n.__('Number of pixels the page must be scrolled before the header becomes sticky. ex: 100 makes the header stick only after scrolling 100px. Leave empty to stick as soon as it reaches the top.', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>
        {/* sticky scroll offset stop here */}

        {/* sticky header background start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">{wp.i18n.__('Sticky Header Background', 'all-in-one-wp-sticky-anything')}</h4>
          <div class="settings-field-content">

            {/* A lone "Color" button serves no purpose - the group only
                shows once the Pro add-on has appended a second option. */}
            {BG_TYPE_OPTIONS.length > 1 && (
              <ButtonGroup>
                {BG_TYPE_OPTIONS.map(({ label, value }) => (
                  <Button
                    key={value}
                    isPrimary={stickyHeaderBgType === value}
                    onClick={() => setData({ ...data, stickyHeaderBgType: value })}
                  >
                    {label}
                  </Button>
                ))}
              </ButtonGroup>
            )}

            <p className="description">{wp.i18n.__('Applied only while the header is actually stuck to the top of the screen (its "active" sticky state) — leave everything below empty to keep your theme\'s own header background.', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>

        {stickyHeaderBgType === 'color' && COLOR_TYPE_OPTIONS.length > 1 && (
          <div class="settings-field">
            <h4 class="settings-field-label">{wp.i18n.__('Color Type', 'all-in-one-wp-sticky-anything')}</h4>
            <div class="settings-field-content">

              <ButtonGroup>
                {COLOR_TYPE_OPTIONS.map(({ label, value }) => (
                  <Button
                    key={value}
                    isPrimary={stickyHeaderColorType === value}
                    onClick={() => setData({ ...data, stickyHeaderColorType: value })}
                  >
                    {label}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          </div>
        )}

        {stickyHeaderBgType === 'color' && stickyHeaderColorType === 'solid' && (
          <div class="settings-field">
            <h4 class="settings-field-label">{wp.i18n.__('Background Color', 'all-in-one-wp-sticky-anything')}</h4>
            <div class="settings-field-content">

              <ColorPickerWrapper
                value={stickyHeaderBgColor}
                onChange={(value) => setData({ ...data, stickyHeaderBgColor: value })}
                allowReset={true}
                resetValue={''}
              />
            </div>
          </div>
        )}

        {/* Anything beyond the free "color"/"solid" combo above — Background
            Image, Background Gradient, or any other bg type/color type the
            Pro add-on registers via the two filters above — is entirely its
            own concern. It hooks this filter to render whatever fields that
            extra option needs; unhooked, nothing renders here. */}
        {applyFilters('ai1wpsa_sticky_header_bg_extra_fields', null, {
          stickyHeaderBgType,
          stickyHeaderColorType,
          data,
          setData,
        })}
        {/* sticky header background stop here */}

        {/* shrink header on sticky start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">
            {wp.i18n.__('Shrink Header on Sticky', 'all-in-one-wp-sticky-anything')}
            <ExperimentalBadge />
          </h4>
          <div class="settings-field-content">

            <FormToggle
              checked={stickyShrink}
              className="ai1wpsa-form-toggle"
              onChange={() => setData({ ...data, stickyShrink: !stickyShrink })}
            />

            <p className="description">{wp.i18n.__('Reduce the header (and optionally its logo) once it becomes sticky, so it takes up less space while visitors scroll.', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>

        {!!stickyShrink && (
          <div class="settings-field">
            <h4 class="settings-field-label">
              {wp.i18n.__('Sticky Header Height', 'all-in-one-wp-sticky-anything')}
              <ExperimentalBadge />
            </h4>
            <div class="settings-field-content">

              <TextControl
                type="number"
                value={stickyShrinkHeight}
                placeholder={wp.i18n.__('ex: 60', 'all-in-one-wp-sticky-anything')}
                onChange={(value) => setData({ ...data, stickyShrinkHeight: value })} />

              <p className="description">{wp.i18n.__('Height (in px) the header shrinks to once it\'s stuck to the top.', 'all-in-one-wp-sticky-anything')}</p>
            </div>
          </div>
        )}

        {!!stickyShrink && (
          <div class="settings-field">
            <h4 class="settings-field-label">
              {wp.i18n.__('Sticky Logo', 'all-in-one-wp-sticky-anything')}
              <ExperimentalBadge />
            </h4>
            <div class="settings-field-content">

              <div className="ai1wpsa-selector-field">
                <TextControl
                  value={stickyShrinkLogoSelector}
                  placeholder={wp.i18n.__('ex: .site-logo img', 'all-in-one-wp-sticky-anything')}
                  onChange={(value) => setData({ ...data, stickyShrinkLogoSelector: value })} />

                <Button
                  variant="secondary"
                  onClick={() => pickElementOnPage((selector) => setData((current) => ({ ...current, stickyShrinkLogoSelector: selector })), { target: 'image' })}
                >
                  {wp.i18n.__('🖱️ Pick Logo on Page', 'all-in-one-wp-sticky-anything')}
                </Button>
              </div>

              <TextControl
                type="number"
                value={stickyShrinkLogoWidth}
                placeholder={wp.i18n.__('ex: 120', 'all-in-one-wp-sticky-anything')}
                onChange={(value) => setData({ ...data, stickyShrinkLogoWidth: value })} />

              <p className="description">{wp.i18n.__('Optional. Pick your logo and set the width (in px) it should shrink to. Leave the selector empty to only shrink the header height.', 'all-in-one-wp-sticky-anything')}</p>
            </div>
          </div>
        )}
        {/* shrink header on sticky stop here */}

        {/* logo swap start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">{wp.i18n.__('Logo Swap on Sticky', 'all-in-one-wp-sticky-anything')}</h4>
          <div class="settings-field-content">

            <FormToggle
              checked={stickyLogoSwap}
              className="ai1wpsa-form-toggle"
              onChange={() => setData({ ...data, stickyLogoSwap: !stickyLogoSwap })}
            />

            <p className="description">{wp.i18n.__('Show a different logo (e.g. a smaller or dark/light variant) once the header becomes sticky, then switch back when it un-sticks.', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>

        {!!stickyLogoSwap && (
          <div class="settings-field">
            <h4 class="settings-field-label">{wp.i18n.__('Logo Element', 'all-in-one-wp-sticky-anything')}</h4>
            <div class="settings-field-content">

              <div className="ai1wpsa-selector-field">
                <TextControl
                  value={stickyLogoSwapSelector}
                  placeholder={wp.i18n.__('ex: .site-logo img', 'all-in-one-wp-sticky-anything')}
                  onChange={(value) => setData({ ...data, stickyLogoSwapSelector: value })} />

                <Button
                  variant="secondary"
                  onClick={() => pickElementOnPage((selector) => setData((current) => ({ ...current, stickyLogoSwapSelector: selector })), { target: 'image' })}
                >
                  {wp.i18n.__('🖱️ Pick Logo on Page', 'all-in-one-wp-sticky-anything')}
                </Button>
              </div>

              <p className="description">{wp.i18n.__('The `<img>` on your live site whose source should swap once sticky.', 'all-in-one-wp-sticky-anything')}</p>
            </div>
          </div>
        )}

        {!!stickyLogoSwap && (
          <div class="settings-field">
            <h4 class="settings-field-label">{wp.i18n.__('Sticky Logo Image', 'all-in-one-wp-sticky-anything')}</h4>
            <div class="settings-field-content">

              <div className="ai1wpsa-media-picker">
                {!!stickyLogoSwapImage &&
                  <img src={stickyLogoSwapImage} alt="" className="ai1wpsa-media-picker__preview" />
                }

                <Button variant="secondary" onClick={openLogoSwapImagePicker}>
                  {stickyLogoSwapImage
                    ? wp.i18n.__('Change Image', 'all-in-one-wp-sticky-anything')
                    : wp.i18n.__('Select Image', 'all-in-one-wp-sticky-anything')}
                </Button>

                {!!stickyLogoSwapImage &&
                  <Button
                    variant="link"
                    isDestructive
                    onClick={() => setData({ ...data, stickyLogoSwapImage: '' })}
                  >
                    {wp.i18n.__('Remove', 'all-in-one-wp-sticky-anything')}
                  </Button>
                }
              </div>

              <p className="description">{wp.i18n.__('Picked from your Media Library. Swapped in only while the header is stuck to the top; your original logo returns once it un-sticks.', 'all-in-one-wp-sticky-anything')}</p>
            </div>
          </div>
        )}
        {/* logo swap stop here */}

        {/* Pro field slot — the Pro add-on (when active) renders its own
            General fields here, e.g. "Disable Sticky on Mobile". */}
        {applyFilters('ai1wpsa_settings_fields_general', null, { area: 'main', data, setData })}

        {/* z-index start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">{wp.i18n.__('z-index', 'all-in-one-wp-sticky-anything')}</h4>
          <div class="settings-field-content">

            <TextControl
              value={stickyZIndex}
              placeholder={wp.i18n.__('ex: 9999', 'all-in-one-wp-sticky-anything')}
              onChange={(value) => setData({ ...data, stickyZIndex: value })} />

            <p className="description">{wp.i18n.__('Set your desire z-index value for your target element.', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>
        {/* z-index stop here */}
      </div>
    </div>
  )
}
