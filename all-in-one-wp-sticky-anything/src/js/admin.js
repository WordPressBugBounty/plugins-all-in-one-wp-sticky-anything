import Settings from "./components/Settings";
import GettingStarted from "./components/GettingStarted";
import Dashboard from "./includes/dashboard";

import SettingsContext from "./Contexts/SettingsContext";
import ColorPickerWrapper from "./components/Settings/ColorPickerWrapper";
import ExperimentalBadge from "./includes/ExperimentalBadge";
import Group from "./includes/Group";

// Shared surface consumed by the Pro add-on's own admin bundle (which cannot
// import these across plugin boundaries). `ai1wpsa` is the localized object
// from Enqueue::get_localize_data(); attaching properties to it is safe and
// is the documented extension contract.
if (window.ai1wpsa) {
    window.ai1wpsa.SettingsContext = SettingsContext;
    window.ai1wpsa.components = { ColorPickerWrapper, ExperimentalBadge, Group };
}

; (function ($) {
    const app = {

        init: () => { },

        // Rendered on DOM ready (not at script-eval time) so that every
        // wp.hooks.addFilter() registered by a footer script that loads after
        // this one — in practice the Pro add-on's bundle — is in place before
        // the settings app reads its slots for the first time.
        ready: () => {
            Dashboard.init();
            app.initSettings();
            app.initGettingStarted();
        },

        initSettings: () => {
            const element = document.getElementById('ai1wpsa-settings');

            if (element) {
                ReactDOM.render(<Settings />, element);
            }
        },

        initGettingStarted: () => {
            const element = document.getElementById('ai1wpsa-getting-started');

            if (element) {
                ReactDOM.render(<GettingStarted />, element);
            }
        },
    }

    app.init();
    $(document).ready(app.ready);

})(jQuery);
