const { useContext } = wp.element;

const {
  FormToggle,
  TextControl,
  ButtonGroup,
  Button,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";
import ProIcon from "../../includes/ProIcon";
import { showProModal } from "../../includes/ProModal";

// ─── Sticky Device Options ───────────────────────────────────────
const STICKY_DEVICE_OPTIONS = [
  { label: wp.i18n.__('All', 'all-in-one-wp-sticky-anything'), value: 'all' },
  { label: wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything'), value: 'desktop' },
  { label: wp.i18n.__('Tablet', 'all-in-one-wp-sticky-anything'), value: 'tablet' },
  { label: wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything'), value: 'mobile' },
];

export default function General() {
  const { isPro } = ai1wpsa;
  const { data, setData } = useContext(SettingsContext);

  const {
    stickyClass = '',
    stickyZIndex = '',
    fixDefaultSticky = false,
    stickyDisableMobile = false,
  } = data || {};

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

            <TextControl
              value={stickyClass}
              placeholder={wp.i18n.__('ex: #main-navigaion or .header', 'all-in-one-wp-sticky-anything')}
              onChange={(value) => setData({ ...data, stickyClass: value })} />

            <p className="description">{wp.i18n.__('Write your sticky selector here. Make anything sticky by use sticky class. example: `<div class="sticky">I am sticky</div>`', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>
        {/* sticky class stop here */}

        {/* fix default sticy start here */}
        <div class="settings-field">
          <h4 class="settings-field-label">{wp.i18n.__('Fix Sticky', 'all-in-one-wp-sticky-anything')}</h4>
          <div class="settings-field-content">

            <FormToggle
              checked={fixDefaultSticky}
              onChange={() => setData({ ...data, fixDefaultSticky: !fixDefaultSticky })}
            />

            <p className="description">{wp.i18n.__('Enable this option to fix the sticky header if the default method doesn’t work.', 'all-in-one-wp-sticky-anything')}</p>
          </div>
        </div>
        {/* sticky sidebar stop here */}

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
