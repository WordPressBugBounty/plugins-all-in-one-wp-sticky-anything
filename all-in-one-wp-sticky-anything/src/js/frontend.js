; (function ($) {

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
                stickyDisableMobile,
                stickyHeader,
                stickySidebar,
                stickyCookieConsent,
                fixedWidget,
                clicktoCall,
            } = settings;
            const topOffset = isLoggedIn ? 32 : 0;
            const elementorStickyHeader = $('.elementor-element.ai1wpsa-yes');

            // Sticky header behavior is skipped entirely on mobile-sized screens when disabled.
            const isMobileViewport = window.innerWidth <= 767;
            const stickyHeaderEnabled = !(stickyDisableMobile && isMobileViewport);

            if (stickyHeaderEnabled) {
                if (!fixDefaultSticky) {
                    const $stickyDefault = jQuery('.sticky').stickr({
                        duration: 0,
                        offsetTop: 0,
                        offsetBottom: 30
                    });

                    const $stickyCustom = jQuery(stickyClass).stickr({
                        duration: 0,
                        offsetTop: topOffset,
                        offsetBottom: 30,
                        closeButton: false,
                    });
                }

                // Fix Sticky
                if (!!fixDefaultSticky) {
                    app.handleFixDefaultSticky();
                }

                // Customizer sticky
                if (!!stickyHeader) {
                    app.handleCustomizerStickyHeader();
                }

                // set z-index
                $(stickyClass).css('z-index', stickyZIndex);
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
            const { stickyClass } = settings;

            const header = $(stickyClass);

            if (!header.length) return;

            const stickyOffset = header.offset().top;

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
            const { stickyCIndex } = ai1wpsa?.settings || {};
            const element = $('header.site-header, header#site-header, header.header, header#header, header#zak-masthead');

            if (!element.length) return;

            const stickyOffset = element.offset().top;

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
            const stickyOffset = element.offset().top;

            if (stickyStatus == 'yes') {
                // jQuery(element).stickr({
                //     duration: 0,
                //     offsetTop: 0,
                //     offsetBottom: 30,
                //     closeButton: false,
                // });

                // $('body').addClass('ai1wpsa-astra-elementor');

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
                clicktoCallStyleType = 'launcher',
                clicktoCallStyle = 'popup',
                clicktoCallBgColor = '#004bcb',
                clicktoCallIconColor = '#ffffff',
                clicktoCallDevice = 'all',
                clicktoCallAnimation = 'none',
                clicktoCallAutoOpen = false,
                clicktoCallAutoOpenDelay = 0,
                clicktoCallBadge = false,
                clicktoCallBadgeCount = 0,
                clicktoCallshowHours = false,
                clicktoCallShowChip = false,
                clicktoCallshowChipDot = false,
                clicktoCallSchedules = {
                    Monday: { on: true, open: '00:00', close: '23:59' },
                    Tuesday: { on: true, open: '00:00', close: '23:59' },
                    Wednesday: { on: true, open: '00:00', close: '23:59' },
                    Thursday: { on: true, open: '00:00', close: '23:59' },
                    Friday: { on: true, open: '00:00', close: '23:59' },
                    Saturday: { on: true, open: '00:00', close: '23:59' },
                    Sunday: { on: true, open: '00:00', close: '23:59' }
                }
            } = ai1wpsa?.settings ?? {};

            if (!clicktoCall) return;

            CTC.init({
                phones: clicktoCallPhones,
                style: clicktoCallStyle,

                theme: {
                    '--ctc-bg': clicktoCallBgColor,
                    '--ctc-icon': clicktoCallIconColor,
                },
                labels: {},
                showHours: clicktoCallshowHours,
                showChip: clicktoCallShowChip,
                showChipDot: clicktoCallshowChipDot,
                position: clicktoCallPosition,
                display: clicktoCallDevice,
                animation: clicktoCallAnimation,
                autoOpen: clicktoCallAutoOpen ? clicktoCallAutoOpenDelay : 0,
                badge: clicktoCallBadge ? clicktoCallBadgeCount : 0,
                schedule: clicktoCallSchedules,
            });
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
                stickyTocInlinePreset = 'card',
                stickyTocStartCollapsed = false,

                // Sidebar
                stickyTocSidebar = false,
                stickyTocSidebarPreset = 'default',
                stickyTocSidebarPosition = 'right',
                stickyTocSidebarEdgeGap = 24,
                stickyTocSidebarShowProgress = false,

                // Progress bar
                stickyTocShowProgressBar = false,

                // Scroll behaviour
                stickyTocScrollBehavior = 'smooth',

                // Theme CSS variables
                stickyTocAccentColor = '#004bcb',
                stickyTocBgColor = '#ffffff',
                stickyTocRadius = 0,
            } = settings;

            new SmartTOC({
                target: stickyTocTarget,
                minHeadings: stickyTocMinHeadings,
                title: stickyTocTitle,
                scrollOffset: stickyTocScrollOffset,
                headingLevels: stickyTocHeadingLevels,
                maxDepth: stickyTocMaxDepth,
                showNumbers: stickyTocShowNumbers,
                inline: {
                    show: stickyTocShowInline,
                    preset: stickyTocInlinePreset,
                    collapsed: stickyTocStartCollapsed,
                    injectInto: 'auto',
                },
                sidebar: {
                    enabled: stickyTocSidebar,
                    preset: stickyTocSidebarPreset,
                    position: stickyTocSidebarPosition,
                    edgeGap: stickyTocSidebarEdgeGap,
                    progress: stickyTocSidebarShowProgress,
                },
                showProgressBar: stickyTocShowProgressBar,
                vars: {
                    '--stoc-color': stickyTocAccentColor,
                    '--stoc-color-bg': stickyTocBgColor,
                    '--stoc-radius': `${stickyTocRadius}px`,
                },
                scrollBehavior: stickyTocScrollBehavior,
                onInit: null,
                onActivate: null,
            }).init();

        },
    }

    app.init();

    $(document).ready(app.ready);

})(jQuery);
