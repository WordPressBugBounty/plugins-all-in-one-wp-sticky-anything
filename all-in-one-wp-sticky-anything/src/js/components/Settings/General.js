const { useContext } = wp.element;

const {
  FormToggle,
  TextControl,
  ButtonGroup,
  Button,
  GradientPicker,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";
import ProIcon from "../../includes/ProIcon";
import { showProModal } from "../../includes/ProModal";
import { pickElementOnPage } from "../../includes/SelectorPicker";
import ColorPickerWrapper from "./ColorPickerWrapper";

// ─── Sticky Device Options ───────────────────────────────────────
const STICKY_DEVICE_OPTIONS = [
  { label: wp.i18n.__('All', 'all-in-one-wp-sticky-anything'), value: 'all' },
  { label: wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything'), value: 'desktop' },
  { label: wp.i18n.__('Tablet', 'all-in-one-wp-sticky-anything'), value: 'tablet' },
  { label: wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything'), value: 'mobile' },
];

// ─── Sticky Header Background Options ────────────────────────────
const BG_TYPE_OPTIONS = [
  { label: wp.i18n.__('Color', 'all-in-one-wp-sticky-anything'), value: 'color', pro: false },
  { label: wp.i18n.__('Image', 'all-in-one-wp-sticky-anything'), value: 'image', pro: true },
];

const COLOR_TYPE_OPTIONS = [
  { label: wp.i18n.__('Solid', 'all-in-one-wp-sticky-anything'), value: 'solid', pro: false },
  { label: wp.i18n.__('Gradient', 'all-in-one-wp-sticky-anything'), value: 'gradient', pro: true },
];

export default function General() {
  const { isPro } = ai1wpsa;
  const { data, setData } = useContext(SettingsContext);

  const {
    stickyClass = '',
    stickyZIndex = '',
    stickyDisableMobile = false,
    stickyHeaderBgType = 'color',
    stickyHeaderColorType = 'solid',
    stickyHeaderBgColor = '',
    stickyHeaderGradient = '',
    stickyHeaderBgImage = '',
  } = data || {};

  // Opens the WP Media Library modal (requires wp_enqueue_media() — see
  // Enqueue::admin_scripts()) and stores the picked image's URL.
  const openBackgroundImagePicker = () => {
    if (!isPro) {
      showProModal();
      return;
    }

    const frame = wp.media({
      title: wp.i18n.__('Select Sticky Header Background Image', 'all-in-one-wp-sticky-anything'),
      button: { text: wp.i18n.__('Use this Image', 'all-in-one-wp-sticky-anything') },
      multiple: false,
      library: { type: 'image' },
    });

    frame.on('select', () => {
      const attachment = frame.state().get('selection').first().toJSON();
      setData((current) => ({ ...current, stickyHeaderBgImage: attachment.url }));
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

        {/* sticky header background start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">{wp.i18n.__('Sticky Header Background', 'all-in-one-wp-sticky-anything')}</h4>
          <div class="settings-field-content">

            <ButtonGroup>
              {BG_TYPE_OPTIONS.map(({ label, value, pro }) => (
                <Button
                  key={value}
                  className={!!pro && !isPro ? 'ai1wpsa-disabled' : ''}
                  isPrimary={stickyHeaderBgType === value}
                  onClick={() => {
                    if (!!pro && !isPro) {
                      showProModal();
                      return;
                    }

                    setData({ ...data, stickyHeaderBgType: value });
                  }}
                >
                  {label}
                </Button>
              ))}
            </ButtonGroup>

            <p className="description">{wp.i18n.__('Applied only while the header is actually stuck to the top of the screen (its "active" sticky state) — leave everything below empty to keep your theme\'s own header background.', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>

        {stickyHeaderBgType === 'color' && (
          <div class="settings-field">
            <h4 class="settings-field-label">{wp.i18n.__('Color Type', 'all-in-one-wp-sticky-anything')}</h4>
            <div class="settings-field-content">

              <ButtonGroup>
                {COLOR_TYPE_OPTIONS.map(({ label, value, pro }) => (
                  <Button
                    key={value}
                    className={!!pro && !isPro ? 'ai1wpsa-disabled' : ''}
                    isPrimary={stickyHeaderColorType === value}
                    onClick={() => {
                      if (!!pro && !isPro) {
                        showProModal();
                        return;
                      }

                      setData({ ...data, stickyHeaderColorType: value });
                    }}
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

        {stickyHeaderBgType === 'color' && stickyHeaderColorType === 'gradient' && (
          <div class="settings-field">
            <h4 class="settings-field-label">
              {wp.i18n.__('Background Gradient', 'all-in-one-wp-sticky-anything')}
              <ProIcon />
            </h4>
            <div class="settings-field-content">

              <GradientPicker
                value={stickyHeaderGradient}
                onChange={(value) => {
                  if (!isPro) {
                    showProModal();
                    return;
                  }

                  setData({ ...data, stickyHeaderGradient: value || '' });
                }}
                gradients={[]}
                clearable={true}
              />
            </div>
          </div>
        )}

        {stickyHeaderBgType === 'image' && (
          <div class="settings-field">
            <h4 class="settings-field-label">
              {wp.i18n.__('Background Image', 'all-in-one-wp-sticky-anything')}
              <ProIcon />
            </h4>
            <div class="settings-field-content">

              <div className="ai1wpsa-media-picker">
                {!!stickyHeaderBgImage &&
                  <img src={stickyHeaderBgImage} alt="" className="ai1wpsa-media-picker__preview" />
                }

                <Button variant="secondary" onClick={openBackgroundImagePicker}>
                  {stickyHeaderBgImage
                    ? wp.i18n.__('Change Image', 'all-in-one-wp-sticky-anything')
                    : wp.i18n.__('Select Image', 'all-in-one-wp-sticky-anything')}
                </Button>

                {!!stickyHeaderBgImage &&
                  <Button
                    variant="link"
                    isDestructive
                    onClick={() => setData({ ...data, stickyHeaderBgImage: '' })}
                  >
                    {wp.i18n.__('Remove', 'all-in-one-wp-sticky-anything')}
                  </Button>
                }
              </div>

              <p className="description">{wp.i18n.__('Picked from your Media Library. Stretched to cover the header and centered.', 'all-in-one-wp-sticky-anything')}</p>
            </div>
          </div>
        )}
        {/* sticky header background stop here */}

        {/* disable sticky on mobile start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">
            {wp.i18n.__('Disable Sticky on Mobile', 'all-in-one-wp-sticky-anything')}
            <ProIcon />
          </h4>
          <div class="settings-field-content">

            <FormToggle
              checked={stickyDisableMobile}
              className={`ai1wpsa-form-toggle ${!isPro ? 'ai1wpsa-disabled' : ''}`}
              onChange={() => {
                if (!isPro) {
                  showProModal();
                  return;
                }

                setData({ ...data, stickyDisableMobile: !stickyDisableMobile });
              }}
            />

            <p className="description">{wp.i18n.__('Turn off all sticky header behavior on mobile-sized screens.', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>
        {/* disable sticky on mobile stop here */}

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
