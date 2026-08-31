import General from "./General";
import StickySidebar from "./StickySidebar";
import Css from "./Css";
import Tools from "./Tools";
import AnnouncementBar from "./AnnouncementBar";
import StickySocial from "./StickySocial";
import StickyCookieConsent from "./StickyCookieConsent";
import FixedWidget from "./FixedWidget";
import ClickToCall from "./ClickToCall";
import StickyToc from "./StickyToc";
import StickyForms from "./StickyForms";
import StickyNotes from "./StickyNotes";

const { useState, useEffect } = wp.element;

export default function Content() {
  const { isPro } = ai1wpsa;
  const [tab, setTab] = useState(localStorage.getItem('ai1wp_tab') || 'general');

  useEffect(() => {
    localStorage.setItem('ai1wp_tab', tab);
  }, [tab]);

  const menus = [
    {
      id: 'general',
      title: wp.i18n.__('General', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-admin-generic',
    },
    {
      id: 'click-to-call',
      title: wp.i18n.__('Click to Call', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-phone',
    },
    {
      id: 'fixed-widget',
      title: wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-screenoptions',
    },
    {
      id: 'sticky-sidebar',
      title: wp.i18n.__('Sticky Sidebar', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-align-pull-left',
    },
    {
      id: 'sticky-social-icons',
      title: wp.i18n.__('Sticky Social Icons', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-share',
    },
    {
      id: 'sticky-cookie-consent',
      title: wp.i18n.__('Sticky Cookie Consent', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-privacy',
    },
    {
      id: 'sticky-forms',
      title: wp.i18n.__('Sticky Forms', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-feedback',
    },
    {
      id: 'sticky-toc',
      title: wp.i18n.__('Sticky Table of Content', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-sticky',
    },
    {
      id: 'sticky-notes',
      title: wp.i18n.__('Sticky Notes', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-admin-post',
    },

    // {
    //   id: 'announcement',
    //   title: wp.i18n.__('Announcement Bar', 'all-in-one-wp-sticky-anything'),
    //   icon: 'dashicons dashicons-megaphone',
    // },
    {
      id: 'css',
      title: wp.i18n.__('Custom CSS', 'all-in-one-wp-sticky-anything'),
      icon: ' dashicons dashicons-editor-code',
    },
    {
      id: 'tools',
      title: wp.i18n.__('Tools', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-admin-tools',
    },
  ]

  return (
    <div className="ai1wpsa-settings-content">
      <div className="ai1wpsa-settings-menu">
        {
          menus.map(({ id, title, icon }) =>
            <div className={`ai1wpsa-settings-menu-item ${id} ${tab === id ? 'active' : ''} `} onClick={() => setTab(id)}>
              <i className={icon}></i>
              {title}
            </div>
          )
        }
      </div>

      {tab === 'general' && <General />}
      {tab === 'fixed-widget' && <FixedWidget />}
      {tab === 'click-to-call' && <ClickToCall />}
      {tab === 'sticky-sidebar' && <StickySidebar />}
      {tab === 'sticky-social-icons' && <StickySocial />}
      {tab === 'sticky-cookie-consent' && <StickyCookieConsent />}
      {tab === 'sticky-forms' && <StickyForms />}
      {tab === 'sticky-toc' && <StickyToc />}
      {tab === 'sticky-notes' && <StickyNotes />}
      {tab === 'announcement' && <AnnouncementBar />}
      {tab === 'css' && <Css />}
      {tab === 'tools' && <Tools />}
    </div>
  )
}
