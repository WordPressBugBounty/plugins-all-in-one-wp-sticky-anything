; (function ($) {

    const { applyFilters } = wp.hooks;

    const app = {
        init: () => {
            const { settings } = ai1wpsa;
            const {
                stickyToc,
            } = settings;

            // Sticky Table of Content
            if (!!stickyToc) {
                app.handleStickyToc();
            }
        },

        ready: () => {
            const { settings, isLoggedIn } = ai1wpsa;
            const {
                stickyClass,
                stickyZIndex,
                fixDefaultSticky,
                stickyHeader,
                stickySidebar,
                stickyCookieConsent,
                fixedWidget,
                clicktoCall,
            } = settings;
            const topOffset = isLoggedIn ? 32 : 0;
            const elementorStickyHeader = $('.elementor-element.ai1wpsa-yes');

            // Whether the sticky header runs at all. The Premium add-on can
            // turn this off (e.g. on mobile-sized screens, via its "Disable
            // Sticky on Mobile" option); the free plugin always keeps it on.
            const stickyHeaderEnabled = applyFilters('ai1wpsa_sticky_header_enabled', true);

            if (stickyHeaderEnabled) {

                // Fix Sticky
                if (!fixDefaultSticky || !!fixDefaultSticky ) {
                    app.handleFixDefaultSticky();
                }

                // Customizer sticky
                if (!!stickyHeader) {
                    app.handleCustomizerStickyHeader();
                }

                // set z-index
                $(stickyClass).css('z-index', stickyZIndex);

                // Logo swap on sticky
                app.handleLogoSwap();
            }

            // Sticky Sidebar
            if (!!stickySidebar) {
                app.handleStickySidebar();
            }

            // Elementor Sticky
            if (!!elementorStickyHeader.length) {
                app.handleElementorStickyHeader(elementorStickyHeader);
            }

            // sticky cookie consent close
            if (!!stickyCookieConsent) {
                app.handleStickyCookieConsentClose();
                $(document).on('click', '.ai1wpsa-cookie-consent .ai1wpsa-cookie-consent-button', app.handleStickyCookieConsentActions);

                // Modal layout: lock page scroll while the backdrop is showing.
                if ($('.ai1wpsa-cookie-consent-overlay').length) {
                    $('html').addClass('ai1wpsa-cookie-lock');
                }
            }

            // Fixed Widget
            if (!!fixedWidget) {
                app.handleFixedWidget();
            }

            // Click to Call
            if (!!clicktoCall) {
                app.handleClicktoCall();
            }
        },

        handleFixDefaultSticky: () => {
            const { settings } = ai1wpsa;
            const { stickyClass, stickyScrollOffset = 0 } = settings;

            const header = $(stickyClass);

            if (!header.length) return;

            const scrollOffset = parseInt(stickyScrollOffset, 10) || 0;
            const stickyOffset = header.offset().top + scrollOffset;

            $(window).on('scroll', function () {
                if ($(window).scrollTop() > stickyOffset) {
                    // added fix sticky class
                    header.addClass('ai1wpsa-fix-sticky');

                    if (!header.hasClass('sticky')) {
                        header.addClass('sticky');
                    }
                } else {
                    header.removeClass('sticky');
                }
            });
        },

        handleCustomizerStickyHeader: () => {
            const { stickyCIndex, stickyScrollOffset = 0 } = ai1wpsa?.settings || {};
            const element = $('header.site-header, header#site-header, header.header, header#header, header#zak-masthead');

            if (!element.length) return;

            const scrollOffset = parseInt(stickyScrollOffset, 10) || 0;
            const stickyOffset = element.offset().top + scrollOffset;

            // reset any existing listeners
            $(window).off('.ai1wpsaSticky');

            element.css('z-index', stickyCIndex);
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
        },

        // Logo Swap on Sticky — a no-op whenever the selector/image settings
        // are empty (nothing configured yet).
        //
        // Decoupled from which sticky mechanism is active: it just watches
        // for the shared `.ai1wpsa-fix-sticky.sticky` pair every sticky-header
        // code path above (fix-default, Customizer, Elementor) adds, same as
        // the Sticky Header Background/Shrink CSS in Hooks.php does.
        handleLogoSwap: () => {
            const { settings } = ai1wpsa;
            const {
                stickyLogoSwapSelector = '',
                stickyLogoSwapImage = '',
            } = settings;

            if (!stickyLogoSwapSelector || !stickyLogoSwapImage) return;

            const logo = $(stickyLogoSwapSelector);

            if (!logo.length) return;

            const originalSrc = logo.attr('src');
            let isSwapped = false;

            $(window).on('scroll.ai1wpsaLogoSwap', function () {
                const isSticky = $('.ai1wpsa-fix-sticky.sticky').length > 0;

                if (isSticky && !isSwapped) {
                    logo.attr('src', stickyLogoSwapImage);
                    isSwapped = true;
                } else if (!isSticky && isSwapped) {
                    logo.attr('src', originalSrc);
                    isSwapped = false;
                }
            });

            // Covers the page loading already past the sticky threshold
            // (e.g. reloaded mid-scroll, or arriving via an in-page anchor).
            $(window).trigger('scroll.ai1wpsaLogoSwap');
        },

        handleStickySidebar: () => {
            const { settings } = ai1wpsa;
            const {
                stickySidebarElement,
                stickySidebarContainer,
                StickySidebarMarginTop,
                StickySidebarMarginBottom,
                stickyMinWidth,
                stickySidebarHeight,
            } = settings;

            // check & return if not script loaded
            if (typeof $.fn.theiaStickySidebar !== 'function') {
                return;
            }

            $(stickySidebarElement)?.theiaStickySidebar({
                containerSelector: stickySidebarContainer,
                additionalMarginTop: StickySidebarMarginTop,
                additionalMarginBottom: StickySidebarMarginBottom,
                minWidth: stickyMinWidth,
                updateSidebarHeight: stickySidebarHeight
            })
        },

        handleElementorStickyHeader: (element) => {
            const settings = $(element)?.data('settings') ? $(element)?.data('settings') : {};
            const stickyStatus = settings?.ai1wpsa_status;
            const stickyZIndex = settings?.ai1wpsa_z_index || 99999;
            const { stickyScrollOffset = 0 } = ai1wpsa?.settings || {};
            const scrollOffset = parseInt(stickyScrollOffset, 10) || 0;
            const stickyOffset = element.offset().top + scrollOffset;

            if (stickyStatus == 'yes') {

                $('.ai1wpsa-yes').css('z-index', stickyZIndex);

                $(window).on('scroll', function () {
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

        handleStickyCookieConsentClose: () => {
            const element = $('.ai1wpsa-cookie-consent button.close-button');

            if (!element.length) return;

            element.on('click', function () {
                app.dismissCookieConsent($(this).closest('.ai1wpsa-cookie-consent'));
            });
        },

        // Hides the banner (and its modal backdrop, if any) and releases the scroll lock.
        dismissCookieConsent: (bannerEl) => {
            const overlay = bannerEl.closest('.ai1wpsa-cookie-consent-overlay');

            (overlay.length ? overlay : bannerEl).hide();
            $('html').removeClass('ai1wpsa-cookie-lock');
        },

        handleStickyCookieConsentActions: (e) => {
            const { settings } = ai1wpsa;
            const {
                stickyCookieConsentExpires = 90,
                stickyCookieConsentRejectRedirect = false,
                stickyCookieConsentRejectURL = '',
            } = settings;

            e.preventDefault();
            const element = $(e.currentTarget);
            const isAccept = element?.hasClass('accept');
            const isReject = element?.hasClass('reject');

            app.dismissCookieConsent(element.closest('.ai1wpsa-cookie-consent'));

            if (isReject && stickyCookieConsentRejectRedirect && stickyCookieConsentRejectURL) {
                window.location.href = stickyCookieConsentRejectURL;
                return;
            }

            const cookieData = {
                essential: true,
                statistics: isAccept ? true : false,
                marketing: isAccept ? true : false,
            };

            const cookieValue = JSON.stringify(cookieData);

            const expires = new Date(Date.now() + stickyCookieConsentExpires * 24 * 60 * 60 * 1000).toUTCString();

            document.cookie = `ai1wpsa_preferences=${cookieValue}; expires=${expires}; path=/; SameSite=Lax`;
        },

        handleFixedWidget: () => {
            const fixedWidgets = $('[data-ai1wpsa-fixed="true"]');
            if (!fixedWidgets.length) return;

            const widgets = fixedWidgets.closest('.widget');

            const widgetData = [];

            widgets.each(function (i) {
                const $el = $(this);
                widgetData[i] = {
                    el: $el,
                    width: $el.outerWidth(),
                    left: $el.offset().left
                };
            });

            const widgetOffset = widgets.first().offset().top;

            $(window).on('scroll', function () {
                // disable on small screen
                if ($(window).width() < 992) {
                    widgets.css({
                        position: '',
                        top: '',
                        left: '',
                        width: ''
                    });
                    return;
                }

                if ($(window).scrollTop() > widgetOffset) {

                    let topOffset = parseInt(ai1wpsa?.settings?.fixedWidgetTopOffset ?? 100, 10);

                    widgetData.forEach(item => {
                        item.el.css({
                            position: 'fixed',
                            top: `${topOffset}px`,
                            left: 'auto',
                            right: 'auto',
                            width: item.width + 'px'
                        });

                        topOffset += item.el.outerHeight() + 10; // 10px gap
                    });

                } else {
                    widgets.css({
                        position: '',
                        top: '',
                        left: '',
                        width: ''
                    });
                }
            });

        },

        handleClicktoCall: () => {
            const {
                clicktoCall = false,
                clicktoCallPosition = 'bottom-center',
                clicktoCallPhones = [
                    { label: 'Support', number: '+8801512345678' }
                ],
                clicktoCallBgColor = '#004bcb',
                clicktoCallIconColor = '#ffffff',
            } = ai1wpsa?.settings ?? {};

            if (!clicktoCall) return;

            // Free-tier widget options. The Premium add-on appends the
            // premium ones (widget style, device targeting, animation,
            // auto-open, badge, chip, schedules, …) through this filter.
            const options = applyFilters('ai1wpsa_click_to_call_options', {
                phones: clicktoCallPhones,
                style: 'popup',
                theme: {
                    '--ctc-bg': clicktoCallBgColor,
                    '--ctc-icon': clicktoCallIconColor,
                },
                labels: {},
                showHours: false,
                showChip: false,
                showChipDot: false,
                position: clicktoCallPosition,
                display: 'all',
                animation: 'none',
                autoOpen: 0,
                badge: 0,
                schedule: {},
            });

            CTC.init(options);
        },

        handleStickyToc: () => {
            const { settings } = ai1wpsa;

            const {
                // Content
                stickyTocTitle = 'Table of Contents',
                stickyTocTarget = 'body .entry-content',
                stickyTocMinHeadings = 2,
                stickyTocHeadingLevels = ['h2', 'h3'],
                stickyTocMaxDepth = 3,
                stickyTocShowNumbers = true,
                stickyTocScrollOffset = 80,

                // Inline TOC block
                stickyTocShowInline = true,
                stickyTocStartCollapsed = false,

                // Sidebar
                stickyTocSidebar = false,
                stickyTocSidebarPosition = 'right',

                // Scroll behaviour
                stickyTocScrollBehavior = 'smooth',

                // Theme CSS variables
                stickyTocAccentColor = '#004bcb',
                stickyTocBgColor = '#ffffff',
                stickyTocRadius = 0,
            } = settings;

            // Free-tier TOC options. The Premium add-on appends the premium
            // ones (inline / sidebar presets, sidebar edge gap, progress
            // bars) through this filter.
            const options = applyFilters('ai1wpsa_sticky_toc_options', {
                target: stickyTocTarget,
                minHeadings: stickyTocMinHeadings,
                title: stickyTocTitle,
                scrollOffset: stickyTocScrollOffset,
                headingLevels: stickyTocHeadingLevels,
                maxDepth: stickyTocMaxDepth,
                showNumbers: stickyTocShowNumbers,
                inline: {
                    show: stickyTocShowInline,
                    preset: 'card',
                    collapsed: stickyTocStartCollapsed,
                    injectInto: 'auto',
                },
                sidebar: {
                    enabled: stickyTocSidebar,
                    preset: 'default',
                    position: stickyTocSidebarPosition,
                    edgeGap: 24,
                    progress: false,
                },
                showProgressBar: false,
                vars: {
                    '--stoc-color': stickyTocAccentColor,
                    '--stoc-color-bg': stickyTocBgColor,
                    '--stoc-radius': `${stickyTocRadius}px`,
                },
                scrollBehavior: stickyTocScrollBehavior,
                onInit: null,
                onActivate: null,
            });

            new SmartTOC(options).init();

        },
    }

    // Run on DOM ready so every wp.hooks filter the Premium add-on registers
    // (in its own footer script, which loads after this one but before
    // DOMContentLoaded) is in place before we build the widget options.
    $(document).ready(() => {
        app.init();
        app.ready();
    });

})(jQuery);
