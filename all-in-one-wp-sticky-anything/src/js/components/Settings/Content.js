import General from "./General";
import StickySidebar from "./StickySidebar";
import Tools from "./Tools";
import StickySocial from "./StickySocial";
import StickyCookieConsent from "./StickyCookieConsent";
import FixedWidget from "./FixedWidget";
import ClickToCall from "./ClickToCall";
import StickyToc from "./StickyToc";
import StickyNotes from "./StickyNotes";

const { useState, useEffect, useContext } = wp.element;
const { applyFilters } = wp.hooks;

import SettingsContext from "../../Contexts/SettingsContext";

export default function Content() {
  const { data, setData } = useContext(SettingsContext);
  const [tab, setTab] = useState(localStorage.getItem('ai1wp_tab') || 'general');

  useEffect(() => {
    localStorage.setItem('ai1wp_tab', tab);
  }, [tab]);

  // The free tabs. Each entry carries its own render function so the Pro
  // add-on can append whole tabs of its own through the
  // `ai1wpsa_settings_tabs` filter without this file knowing about them.
  const baseTabs = [
    {
      id: 'general',
      title: wp.i18n.__('General', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-admin-generic',
      render: () => <General />,
    },
    {
      id: 'click-to-call',
      title: wp.i18n.__('Click to Call', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-phone',
      render: () => <ClickToCall />,
    },
    {
      id: 'fixed-widget',
      title: wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-screenoptions',
      render: () => <FixedWidget />,
    },
    {
      id: 'sticky-sidebar',
      title: wp.i18n.__('Sticky Sidebar', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-align-pull-left',
      render: () => <StickySidebar />,
    },
    {
      id: 'sticky-social-icons',
      title: wp.i18n.__('Sticky Social Icons', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-share',
      render: () => <StickySocial />,
    },
    {
      id: 'sticky-cookie-consent',
      title: wp.i18n.__('Sticky Cookie Consent', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-privacy',
      render: () => <StickyCookieConsent />,
    },
    {
      id: 'sticky-toc',
      title: wp.i18n.__('Sticky Table of Content', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-sticky',
      render: () => <StickyToc />,
    },
    {
      id: 'sticky-notes',
      title: wp.i18n.__('Sticky Notes', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-admin-post',
      render: () => <StickyNotes />,
    },
    {
      id: 'tools',
      title: wp.i18n.__('Tools', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-admin-tools',
      render: () => <Tools />,
    },
  ];

  const tabs = applyFilters('ai1wpsa_settings_tabs', baseTabs, { data, setData });

  // Falls back to the first tab when a stored id no longer exists (e.g. the
  // Pro add-on was deactivated after its tab had been selected).
  const active = tabs.find(({ id }) => id === tab) || tabs[0];

  return (
    <div className="ai1wpsa-settings-content">
      <div className="ai1wpsa-settings-menu">
        {
          tabs.map(({ id, title, icon }) =>
            <div className={`ai1wpsa-settings-menu-item ${id} ${tab === id ? 'active' : ''} `} onClick={() => setTab(id)}>
              <i className={icon}></i>
              {title}
            </div>
          )
        }
      </div>

      {active && typeof active.render === 'function' && active.render()}
    </div>
  )
}
