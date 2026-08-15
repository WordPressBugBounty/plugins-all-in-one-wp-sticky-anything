const { useState, useEffect } = wp.element;

import { SettingsProvider } from "../Contexts/SettingsContext";

import Header from "./Settings/Header";
import Content from "./Settings/Content";

import { showNotification } from "../includes/functions";

export default function Settings() {
    const initData = {
        stickyClass: '',
        stickyZIndex: '',
        FixedWidget: false,
        fixedWidgetTopOffset: '100',
        stickySidebar: false,
        stickySidebarElement: '',
        stickySidebarContainer: '',
        stickySidebarDevice: 'all',
        StickySidebarMarginTop: '90',
        StickySidebarMarginBottom: '0',
        stickyMinWidth: '795',
        stickySidebarHeight: false,
        stickyDisableOn: [],
        clicktoCall: false,
        stickyToc: false,
        customCss: '',
        deleteData: false,
    };

    const [data, setData] = useState(ai1wpsa?.settings || initData);
    const [loading, setLoading] = useState(false);

    // save settings
    const handleSaveSettings = () => {
        wp.ajax.post('ai1wpsa_save_settings', {
            data: data,
            nonce: ai1wpsa.nonce,
        }).done((response) => {
            // show notification
            showNotification(wp.i18n.__('Settings saved successfully.', 'all-in-one-wp-sticky-anything'));
            // save data on localstorage
            // localStorage.setItem('stickySettings', JSON.stringify(data));
        }).fail((error) => {
            console.log(error);
        })
    }

    // reset settings
    const handleResetSettings = () => {
        // show notification
        showNotification(wp.i18n.__('Settings Reset successfully.', 'all-in-one-wp-sticky-anything'));
        // Reset data to an empty object
        setData({});
        // Store an empty object in localStorage
        // localStorage.setItem('stickySettings', JSON.stringify({}));
    }

    // Get Settings data on init
    // useEffect(() => {
        // setLoading(true);

        // Check localStorage first
        // const storedSettings = localStorage.getItem('stickySettings');

        // if (storedSettings) {
        //     // Parse and set settings from localStorage
        //     setData(JSON.parse(storedSettings));
        //     setLoading(false);
        // } else {
        //     wp.ajax.post('ai1wpsa_get_settings', {
        //         nonce: ai1wpsa.nonce,
        //     }).done(({ data }) => {
        //         if (data && typeof data === 'object' && data.length > 0) {
        //             setData(data);
        //             // Save fetched settings to localStorage
        //             localStorage.setItem('stickySettings', JSON.stringify(data));
        //         }else{
        //             setData(initData);
        //             localStorage.setItem('stickySettings', JSON.stringify(initData));
        //         }
        //         setLoading(false);
        //     });
        // }

    // }, []);
    
    return (
        <div className="ai1wpsa-settings-wrap">
            <SettingsProvider value={{ data, setData, loading, setLoading, handleSaveSettings, handleResetSettings }}>
                <Header />
                {!loading && <Content />}
            </SettingsProvider>
        </div>
    )
}
