import Settings from "./components/Settings";
import GettingStarted from "./components/GettingStarted";
import Dashboard from "./includes/dashboard";

; (function ($) {
    const app = {

        init: () => {
            app.initSettings();
            app.initGettingStarted();
        },

        ready: () => {
            Dashboard.init();
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