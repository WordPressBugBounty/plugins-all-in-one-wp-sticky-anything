; (function ($) {

    const app = {
        init: () => {

        },

        ready: () => {
            app.handleStickyHeader();
            app.handleCustomizer();
        },

        handleStickyHeader: () => {
            const element = $('header.site-header, header#site-header, header.header, header#header, header#zak-masthead');

            if (!element.length) return;

            const stickyStatus = !!wp.customize('ai1wpsa_sticky_header')();
            const stickyZIndex = parseInt(wp.customize('ai1wpsa_z_index')(), 10) || 9999;
            const stickyOffset = element.offset().top;

            // reset any existing listeners
            $(window).off('.ai1wpsaSticky');

            if (stickyStatus) {
                element.css('z-index', stickyZIndex);
                element.css('top', '0');

                $(window).on('scroll.ai1wpsaSticky', function () {
                    if ($(window).scrollTop() > stickyOffset) {
                        // added fix sticky class
                        element.addClass('ai1wpsa-fix-sticky');

                        if (!element.hasClass('sticky')) {
                            element.addClass('sticky');
                        }
                    } else {
                        element.removeClass('sticky');
                    }
                });
            }
        },

        handleCustomizer: () => {
            wp.customize('ai1wpsa_sticky_header', function (value) {
                value.bind(function (newVal) {
                    const header = $('header');
                    if (newVal) {
                        app.handleStickyHeader();
                    } else {
                        header.removeClass('ai1wpsa-fix-sticky sticky');
                        $(window).off('.ai1wpsaSticky');
                    }
                });
            });

            wp.customize('ai1wpsa_z_index', function (value) {
                value.bind(function (newVal) {
                    $('header').css('z-index', newVal);
                });
            });
        },
    }

    app.init();

    $(document).ready(app.ready);

})(jQuery);
