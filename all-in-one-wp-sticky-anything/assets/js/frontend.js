/******/ (() => { // webpackBootstrap
;
(function ($) {
  var app = {
    init: function init() {
      var _ai1wpsa = ai1wpsa,
        settings = _ai1wpsa.settings;
      var stickyToc = settings.stickyToc;

      // Sticky Table of Content
      if (!!stickyToc) {
        app.handleStickyToc();
      }
    },
    ready: function ready() {
      var _ai1wpsa2 = ai1wpsa,
        settings = _ai1wpsa2.settings,
        isLoggedIn = _ai1wpsa2.isLoggedIn;
      var stickyClass = settings.stickyClass,
        stickyZIndex = settings.stickyZIndex,
        fixDefaultSticky = settings.fixDefaultSticky,
        stickyDisableMobile = settings.stickyDisableMobile,
        stickyHeader = settings.stickyHeader,
        stickySidebar = settings.stickySidebar,
        stickyCookieConsent = settings.stickyCookieConsent,
        fixedWidget = settings.fixedWidget,
        clicktoCall = settings.clicktoCall;
      var topOffset = isLoggedIn ? 32 : 0;
      var elementorStickyHeader = $('.elementor-element.ai1wpsa-yes');

      // Sticky header behavior is skipped entirely on mobile-sized screens when disabled.
      var isMobileViewport = window.innerWidth <= 767;
      var stickyHeaderEnabled = !(stickyDisableMobile && isMobileViewport);
      if (stickyHeaderEnabled) {
        // Fix Sticky
        if (!fixDefaultSticky || !!fixDefaultSticky) {
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
    handleFixDefaultSticky: function handleFixDefaultSticky() {
      var _ai1wpsa3 = ai1wpsa,
        settings = _ai1wpsa3.settings;
      var stickyClass = settings.stickyClass,
        _settings$stickyScrol = settings.stickyScrollOffset,
        stickyScrollOffset = _settings$stickyScrol === void 0 ? 0 : _settings$stickyScrol;
      var header = $(stickyClass);
      if (!header.length) return;
      var scrollOffset = parseInt(stickyScrollOffset, 10) || 0;
      var stickyOffset = header.offset().top + scrollOffset;
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
    handleCustomizerStickyHeader: function handleCustomizerStickyHeader() {
      var _ai1wpsa4;
      var _ref = ((_ai1wpsa4 = ai1wpsa) === null || _ai1wpsa4 === void 0 ? void 0 : _ai1wpsa4.settings) || {},
        stickyCIndex = _ref.stickyCIndex,
        _ref$stickyScrollOffs = _ref.stickyScrollOffset,
        stickyScrollOffset = _ref$stickyScrollOffs === void 0 ? 0 : _ref$stickyScrollOffs;
      var element = $('header.site-header, header#site-header, header.header, header#header, header#zak-masthead');
      if (!element.length) return;
      var scrollOffset = parseInt(stickyScrollOffset, 10) || 0;
      var stickyOffset = element.offset().top + scrollOffset;

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
    handleLogoSwap: function handleLogoSwap() {
      var _ai1wpsa5 = ai1wpsa,
        settings = _ai1wpsa5.settings;
      var _settings$stickyLogoS = settings.stickyLogoSwapSelector,
        stickyLogoSwapSelector = _settings$stickyLogoS === void 0 ? '' : _settings$stickyLogoS,
        _settings$stickyLogoS2 = settings.stickyLogoSwapImage,
        stickyLogoSwapImage = _settings$stickyLogoS2 === void 0 ? '' : _settings$stickyLogoS2;
      if (!stickyLogoSwapSelector || !stickyLogoSwapImage) return;
      var logo = $(stickyLogoSwapSelector);
      if (!logo.length) return;
      var originalSrc = logo.attr('src');
      var isSwapped = false;
      $(window).on('scroll.ai1wpsaLogoSwap', function () {
        var isSticky = $('.ai1wpsa-fix-sticky.sticky').length > 0;
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
    handleStickySidebar: function handleStickySidebar() {
      var _$;
      var _ai1wpsa6 = ai1wpsa,
        settings = _ai1wpsa6.settings;
      var stickySidebarElement = settings.stickySidebarElement,
        stickySidebarContainer = settings.stickySidebarContainer,
        StickySidebarMarginTop = settings.StickySidebarMarginTop,
        StickySidebarMarginBottom = settings.StickySidebarMarginBottom,
        stickyMinWidth = settings.stickyMinWidth,
        stickySidebarHeight = settings.stickySidebarHeight;

      // check & return if not script loaded
      if (typeof $.fn.theiaStickySidebar !== 'function') {
        return;
      }
      (_$ = $(stickySidebarElement)) === null || _$ === void 0 || _$.theiaStickySidebar({
        containerSelector: stickySidebarContainer,
        additionalMarginTop: StickySidebarMarginTop,
        additionalMarginBottom: StickySidebarMarginBottom,
        minWidth: stickyMinWidth,
        updateSidebarHeight: stickySidebarHeight
      });
    },
    handleElementorStickyHeader: function handleElementorStickyHeader(element) {
      var _$2, _$3, _ai1wpsa7;
      var settings = (_$2 = $(element)) !== null && _$2 !== void 0 && _$2.data('settings') ? (_$3 = $(element)) === null || _$3 === void 0 ? void 0 : _$3.data('settings') : {};
      var stickyStatus = settings === null || settings === void 0 ? void 0 : settings.ai1wpsa_status;
      var stickyZIndex = (settings === null || settings === void 0 ? void 0 : settings.ai1wpsa_z_index) || 99999;
      var _ref2 = ((_ai1wpsa7 = ai1wpsa) === null || _ai1wpsa7 === void 0 ? void 0 : _ai1wpsa7.settings) || {},
        _ref2$stickyScrollOff = _ref2.stickyScrollOffset,
        stickyScrollOffset = _ref2$stickyScrollOff === void 0 ? 0 : _ref2$stickyScrollOff;
      var scrollOffset = parseInt(stickyScrollOffset, 10) || 0;
      var stickyOffset = element.offset().top + scrollOffset;
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
    handleStickyCookieConsentClose: function handleStickyCookieConsentClose() {
      var element = $('.ai1wpsa-cookie-consent button.close-button');
      if (!element.length) return;
      element.on('click', function () {
        app.dismissCookieConsent($(this).closest('.ai1wpsa-cookie-consent'));
      });
    },
    // Hides the banner (and its modal backdrop, if any) and releases the scroll lock.
    dismissCookieConsent: function dismissCookieConsent(bannerEl) {
      var overlay = bannerEl.closest('.ai1wpsa-cookie-consent-overlay');
      (overlay.length ? overlay : bannerEl).hide();
      $('html').removeClass('ai1wpsa-cookie-lock');
    },
    handleStickyCookieConsentActions: function handleStickyCookieConsentActions(e) {
      var _ai1wpsa8 = ai1wpsa,
        settings = _ai1wpsa8.settings;
      var _settings$stickyCooki = settings.stickyCookieConsentExpires,
        stickyCookieConsentExpires = _settings$stickyCooki === void 0 ? 90 : _settings$stickyCooki,
        _settings$stickyCooki2 = settings.stickyCookieConsentRejectRedirect,
        stickyCookieConsentRejectRedirect = _settings$stickyCooki2 === void 0 ? false : _settings$stickyCooki2,
        _settings$stickyCooki3 = settings.stickyCookieConsentRejectURL,
        stickyCookieConsentRejectURL = _settings$stickyCooki3 === void 0 ? '' : _settings$stickyCooki3;
      e.preventDefault();
      var element = $(e.currentTarget);
      var isAccept = element === null || element === void 0 ? void 0 : element.hasClass('accept');
      var isReject = element === null || element === void 0 ? void 0 : element.hasClass('reject');
      app.dismissCookieConsent(element.closest('.ai1wpsa-cookie-consent'));
      if (isReject && stickyCookieConsentRejectRedirect && stickyCookieConsentRejectURL) {
        window.location.href = stickyCookieConsentRejectURL;
        return;
      }
      var cookieData = {
        essential: true,
        statistics: isAccept ? true : false,
        marketing: isAccept ? true : false
      };
      var cookieValue = JSON.stringify(cookieData);
      var expires = new Date(Date.now() + stickyCookieConsentExpires * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = "ai1wpsa_preferences=".concat(cookieValue, "; expires=").concat(expires, "; path=/; SameSite=Lax");
    },
    handleFixedWidget: function handleFixedWidget() {
      var fixedWidgets = $('[data-ai1wpsa-fixed="true"]');
      if (!fixedWidgets.length) return;
      var widgets = fixedWidgets.closest('.widget');
      var widgetData = [];
      widgets.each(function (i) {
        var $el = $(this);
        widgetData[i] = {
          el: $el,
          width: $el.outerWidth(),
          left: $el.offset().left
        };
      });
      var widgetOffset = widgets.first().offset().top;
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
          var _ai1wpsa$settings$fix, _ai1wpsa9;
          var topOffset = parseInt((_ai1wpsa$settings$fix = (_ai1wpsa9 = ai1wpsa) === null || _ai1wpsa9 === void 0 || (_ai1wpsa9 = _ai1wpsa9.settings) === null || _ai1wpsa9 === void 0 ? void 0 : _ai1wpsa9.fixedWidgetTopOffset) !== null && _ai1wpsa$settings$fix !== void 0 ? _ai1wpsa$settings$fix : 100, 10);
          widgetData.forEach(function (item) {
            item.el.css({
              position: 'fixed',
              top: "".concat(topOffset, "px"),
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
    handleClicktoCall: function handleClicktoCall() {
      var _ai1wpsa$settings, _ai1wpsa10;
      var _ref3 = (_ai1wpsa$settings = (_ai1wpsa10 = ai1wpsa) === null || _ai1wpsa10 === void 0 ? void 0 : _ai1wpsa10.settings) !== null && _ai1wpsa$settings !== void 0 ? _ai1wpsa$settings : {},
        _ref3$clicktoCall = _ref3.clicktoCall,
        clicktoCall = _ref3$clicktoCall === void 0 ? false : _ref3$clicktoCall,
        _ref3$clicktoCallPosi = _ref3.clicktoCallPosition,
        clicktoCallPosition = _ref3$clicktoCallPosi === void 0 ? 'bottom-center' : _ref3$clicktoCallPosi,
        _ref3$clicktoCallPhon = _ref3.clicktoCallPhones,
        clicktoCallPhones = _ref3$clicktoCallPhon === void 0 ? [{
          label: 'Support',
          number: '+8801512345678'
        }] : _ref3$clicktoCallPhon,
        _ref3$clicktoCallStyl = _ref3.clicktoCallStyleType,
        clicktoCallStyleType = _ref3$clicktoCallStyl === void 0 ? 'launcher' : _ref3$clicktoCallStyl,
        _ref3$clicktoCallStyl2 = _ref3.clicktoCallStyle,
        clicktoCallStyle = _ref3$clicktoCallStyl2 === void 0 ? 'popup' : _ref3$clicktoCallStyl2,
        _ref3$clicktoCallBgCo = _ref3.clicktoCallBgColor,
        clicktoCallBgColor = _ref3$clicktoCallBgCo === void 0 ? '#004bcb' : _ref3$clicktoCallBgCo,
        _ref3$clicktoCallIcon = _ref3.clicktoCallIconColor,
        clicktoCallIconColor = _ref3$clicktoCallIcon === void 0 ? '#ffffff' : _ref3$clicktoCallIcon,
        _ref3$clicktoCallDevi = _ref3.clicktoCallDevice,
        clicktoCallDevice = _ref3$clicktoCallDevi === void 0 ? 'all' : _ref3$clicktoCallDevi,
        _ref3$clicktoCallAnim = _ref3.clicktoCallAnimation,
        clicktoCallAnimation = _ref3$clicktoCallAnim === void 0 ? 'none' : _ref3$clicktoCallAnim,
        _ref3$clicktoCallAuto = _ref3.clicktoCallAutoOpen,
        clicktoCallAutoOpen = _ref3$clicktoCallAuto === void 0 ? false : _ref3$clicktoCallAuto,
        _ref3$clicktoCallAuto2 = _ref3.clicktoCallAutoOpenDelay,
        clicktoCallAutoOpenDelay = _ref3$clicktoCallAuto2 === void 0 ? 0 : _ref3$clicktoCallAuto2,
        _ref3$clicktoCallBadg = _ref3.clicktoCallBadge,
        clicktoCallBadge = _ref3$clicktoCallBadg === void 0 ? false : _ref3$clicktoCallBadg,
        _ref3$clicktoCallBadg2 = _ref3.clicktoCallBadgeCount,
        clicktoCallBadgeCount = _ref3$clicktoCallBadg2 === void 0 ? 0 : _ref3$clicktoCallBadg2,
        _ref3$clicktoCallshow = _ref3.clicktoCallshowHours,
        clicktoCallshowHours = _ref3$clicktoCallshow === void 0 ? false : _ref3$clicktoCallshow,
        _ref3$clicktoCallShow = _ref3.clicktoCallShowChip,
        clicktoCallShowChip = _ref3$clicktoCallShow === void 0 ? false : _ref3$clicktoCallShow,
        _ref3$clicktoCallshow2 = _ref3.clicktoCallshowChipDot,
        clicktoCallshowChipDot = _ref3$clicktoCallshow2 === void 0 ? false : _ref3$clicktoCallshow2,
        _ref3$clicktoCallSche = _ref3.clicktoCallSchedules,
        clicktoCallSchedules = _ref3$clicktoCallSche === void 0 ? {
          Monday: {
            on: true,
            open: '00:00',
            close: '23:59'
          },
          Tuesday: {
            on: true,
            open: '00:00',
            close: '23:59'
          },
          Wednesday: {
            on: true,
            open: '00:00',
            close: '23:59'
          },
          Thursday: {
            on: true,
            open: '00:00',
            close: '23:59'
          },
          Friday: {
            on: true,
            open: '00:00',
            close: '23:59'
          },
          Saturday: {
            on: true,
            open: '00:00',
            close: '23:59'
          },
          Sunday: {
            on: true,
            open: '00:00',
            close: '23:59'
          }
        } : _ref3$clicktoCallSche;
      if (!clicktoCall) return;
      CTC.init({
        phones: clicktoCallPhones,
        style: clicktoCallStyle,
        theme: {
          '--ctc-bg': clicktoCallBgColor,
          '--ctc-icon': clicktoCallIconColor
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
        schedule: clicktoCallSchedules
      });
    },
    handleStickyToc: function handleStickyToc() {
      var _ai1wpsa11 = ai1wpsa,
        settings = _ai1wpsa11.settings;
      var _settings$stickyTocTi = settings.stickyTocTitle,
        stickyTocTitle = _settings$stickyTocTi === void 0 ? 'Table of Contents' : _settings$stickyTocTi,
        _settings$stickyTocTa = settings.stickyTocTarget,
        stickyTocTarget = _settings$stickyTocTa === void 0 ? 'body .entry-content' : _settings$stickyTocTa,
        _settings$stickyTocMi = settings.stickyTocMinHeadings,
        stickyTocMinHeadings = _settings$stickyTocMi === void 0 ? 2 : _settings$stickyTocMi,
        _settings$stickyTocHe = settings.stickyTocHeadingLevels,
        stickyTocHeadingLevels = _settings$stickyTocHe === void 0 ? ['h2', 'h3'] : _settings$stickyTocHe,
        _settings$stickyTocMa = settings.stickyTocMaxDepth,
        stickyTocMaxDepth = _settings$stickyTocMa === void 0 ? 3 : _settings$stickyTocMa,
        _settings$stickyTocSh = settings.stickyTocShowNumbers,
        stickyTocShowNumbers = _settings$stickyTocSh === void 0 ? true : _settings$stickyTocSh,
        _settings$stickyTocSc = settings.stickyTocScrollOffset,
        stickyTocScrollOffset = _settings$stickyTocSc === void 0 ? 80 : _settings$stickyTocSc,
        _settings$stickyTocSh2 = settings.stickyTocShowInline,
        stickyTocShowInline = _settings$stickyTocSh2 === void 0 ? true : _settings$stickyTocSh2,
        _settings$stickyTocIn = settings.stickyTocInlinePreset,
        stickyTocInlinePreset = _settings$stickyTocIn === void 0 ? 'card' : _settings$stickyTocIn,
        _settings$stickyTocSt = settings.stickyTocStartCollapsed,
        stickyTocStartCollapsed = _settings$stickyTocSt === void 0 ? false : _settings$stickyTocSt,
        _settings$stickyTocSi = settings.stickyTocSidebar,
        stickyTocSidebar = _settings$stickyTocSi === void 0 ? false : _settings$stickyTocSi,
        _settings$stickyTocSi2 = settings.stickyTocSidebarPreset,
        stickyTocSidebarPreset = _settings$stickyTocSi2 === void 0 ? 'default' : _settings$stickyTocSi2,
        _settings$stickyTocSi3 = settings.stickyTocSidebarPosition,
        stickyTocSidebarPosition = _settings$stickyTocSi3 === void 0 ? 'right' : _settings$stickyTocSi3,
        _settings$stickyTocSi4 = settings.stickyTocSidebarEdgeGap,
        stickyTocSidebarEdgeGap = _settings$stickyTocSi4 === void 0 ? 24 : _settings$stickyTocSi4,
        _settings$stickyTocSi5 = settings.stickyTocSidebarShowProgress,
        stickyTocSidebarShowProgress = _settings$stickyTocSi5 === void 0 ? false : _settings$stickyTocSi5,
        _settings$stickyTocSh3 = settings.stickyTocShowProgressBar,
        stickyTocShowProgressBar = _settings$stickyTocSh3 === void 0 ? false : _settings$stickyTocSh3,
        _settings$stickyTocSc2 = settings.stickyTocScrollBehavior,
        stickyTocScrollBehavior = _settings$stickyTocSc2 === void 0 ? 'smooth' : _settings$stickyTocSc2,
        _settings$stickyTocAc = settings.stickyTocAccentColor,
        stickyTocAccentColor = _settings$stickyTocAc === void 0 ? '#004bcb' : _settings$stickyTocAc,
        _settings$stickyTocBg = settings.stickyTocBgColor,
        stickyTocBgColor = _settings$stickyTocBg === void 0 ? '#ffffff' : _settings$stickyTocBg,
        _settings$stickyTocRa = settings.stickyTocRadius,
        stickyTocRadius = _settings$stickyTocRa === void 0 ? 0 : _settings$stickyTocRa;
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
          injectInto: 'auto'
        },
        sidebar: {
          enabled: stickyTocSidebar,
          preset: stickyTocSidebarPreset,
          position: stickyTocSidebarPosition,
          edgeGap: stickyTocSidebarEdgeGap,
          progress: stickyTocSidebarShowProgress
        },
        showProgressBar: stickyTocShowProgressBar,
        vars: {
          '--stoc-color': stickyTocAccentColor,
          '--stoc-color-bg': stickyTocBgColor,
          '--stoc-radius': "".concat(stickyTocRadius, "px")
        },
        scrollBehavior: stickyTocScrollBehavior,
        onInit: null,
        onActivate: null
      }).init();
    }
  };
  app.init();
  $(document).ready(app.ready);
})(jQuery);
/******/ })()
;