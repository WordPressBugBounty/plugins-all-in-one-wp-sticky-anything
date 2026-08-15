import BasicUsage from "./BasicUsage";
import Changelog from "./Changelog";
import Help from "./Help";
import Introduction from "./Introduction";

const { useState, useEffect } = wp.element;

export default function Content() {
  const [tab, setTab] = useState(localStorage.getItem('ai1wp_gs_tab') || 'introduction');

  useEffect(() => {
    localStorage.setItem('ai1wp_gs_tab', tab);
  }, [tab]);

  const menus = [
    {
      id: 'introduction',
      title: wp.i18n.__('Introduction', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-info-outline',
    },
    {
      id: 'basic-usage',
      title: wp.i18n.__('Basic Usage', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-media-document',
    },
    {
      id: 'help',
      title: wp.i18n.__('Help', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-editor-help',
    },
    {
      id: 'changelog',
      title: wp.i18n.__('Changelog', 'all-in-one-wp-sticky-anything'),
      icon: 'dashicons dashicons-editor-ul',
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

      {tab === 'introduction' && <Introduction />}
      {tab === 'basic-usage' && <BasicUsage />}
      {tab === 'help' && <Help />}
      {tab === 'changelog' && <Changelog />}
    </div>
  )
}
