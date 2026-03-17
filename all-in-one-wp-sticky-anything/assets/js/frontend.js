/******/ (() => { // webpackBootstrap
;
(function ($) {
  var app = {
    init: function init() {},
    ready: function ready() {
      var _ai1wpsa = ai1wpsa,
        settings = _ai1wpsa.settings,
        isLoggedIn = _ai1wpsa.isLoggedIn;
      var stickyClass = settings.stickyClass,
        stickyZIndex = settings.stickyZIndex,
        fixDefaultSticky = settings.fixDefaultSticky,
        stickyHeader = settings.stickyHeader,
        stickySidebar = settings.stickySidebar,
        stickyCookieConsent = settings.stickyCookieConsent,
        fixedWidget = settings.fixedWidget,
        clicktoCall = settings.clicktoCall;
      var topOffset = isLoggedIn ? 32 : 0;
      var elementorStickyHeader = $('.elementor-element.ai1wpsa-yes');
      if (!fixDefaultSticky) {
        jQuery('.sticky').stickr({
          duration: 0,
          offsetTop: 0,
          offsetBottom: 30
        });
        jQuery(stickyClass).stickr({
          duration: 0,
          offsetTop: topOffset,
          offsetBottom: 30,
          closeButton: false
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
      var _ai1wpsa2 = ai1wpsa,
        settings = _ai1wpsa2.settings;
      var stickyClass = settings.stickyClass;
      var header = $(stickyClass);
      if (!header.length) return;
      var stickyOffset = header.offset().top;
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
      var _ai1wpsa3;
      var _ref = ((_ai1wpsa3 = ai1wpsa) === null || _ai1wpsa3 === void 0 ? void 0 : _ai1wpsa3.settings) || {},
        stickyCIndex = _ref.stickyCIndex;
      var element = $('header.site-header, header#site-header, header.header, header#header, header#zak-masthead');
      if (!element.length) return;
      var stickyOffset = element.offset().top;

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
    handleStickySidebar: function handleStickySidebar() {
      var _$;
      var _ai1wpsa4 = ai1wpsa,
        settings = _ai1wpsa4.settings;
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
      var _$2, _$3;
      var settings = (_$2 = $(element)) !== null && _$2 !== void 0 && _$2.data('settings') ? (_$3 = $(element)) === null || _$3 === void 0 ? void 0 : _$3.data('settings') : {};
      var stickyStatus = settings === null || settings === void 0 ? void 0 : settings.ai1wpsa_status;
      var stickyZIndex = (settings === null || settings === void 0 ? void 0 : settings.ai1wpsa_z_index) || 99999;
      var stickyOffset = element.offset().top;
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
    handleStickyCookieConsentClose: function handleStickyCookieConsentClose() {
      var element = $('.ai1wpsa-cookie-consent button.close-button');
      if (!element.length) return;
      element.on('click', function () {
        $(this).parent().hide();
      });
    },
    handleStickyCookieConsentActions: function handleStickyCookieConsentActions(e) {
      e.preventDefault();
      var element = $(e.currentTarget);
      var isAccept = element === null || element === void 0 ? void 0 : element.hasClass('accept');
      element.closest('.ai1wpsa-cookie-consent').hide();
      var cookieData = {
        essential: true,
        statistics: isAccept ? true : false,
        marketing: isAccept ? true : false
      };
      var cookieValue = JSON.stringify(cookieData);
      var expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
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
          var _ai1wpsa$settings$fix, _ai1wpsa5;
          var topOffset = parseInt((_ai1wpsa$settings$fix = (_ai1wpsa5 = ai1wpsa) === null || _ai1wpsa5 === void 0 || (_ai1wpsa5 = _ai1wpsa5.settings) === null || _ai1wpsa5 === void 0 ? void 0 : _ai1wpsa5.fixedWidgetTopOffset) !== null && _ai1wpsa$settings$fix !== void 0 ? _ai1wpsa$settings$fix : 100, 10);
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
      var _ai1wpsa$settings, _ai1wpsa6;
      var _ref2 = (_ai1wpsa$settings = (_ai1wpsa6 = ai1wpsa) === null || _ai1wpsa6 === void 0 ? void 0 : _ai1wpsa6.settings) !== null && _ai1wpsa$settings !== void 0 ? _ai1wpsa$settings : {},
        _ref2$clicktoCall = _ref2.clicktoCall,
        clicktoCall = _ref2$clicktoCall === void 0 ? false : _ref2$clicktoCall,
        _ref2$clicktoCallPosi = _ref2.clicktoCallPosition,
        clicktoCallPosition = _ref2$clicktoCallPosi === void 0 ? 'bottom-center' : _ref2$clicktoCallPosi,
        _ref2$clicktoCallPhon = _ref2.clicktoCallPhones,
        clicktoCallPhones = _ref2$clicktoCallPhon === void 0 ? [{
          label: 'Support',
          number: '+8801512345678'
        }] : _ref2$clicktoCallPhon,
        _ref2$clicktoCallStyl = _ref2.clicktoCallStyleType,
        clicktoCallStyleType = _ref2$clicktoCallStyl === void 0 ? 'launcher' : _ref2$clicktoCallStyl,
        _ref2$clicktoCallStyl2 = _ref2.clicktoCallStyle,
        clicktoCallStyle = _ref2$clicktoCallStyl2 === void 0 ? 'popup' : _ref2$clicktoCallStyl2,
        _ref2$clicktoCallBgCo = _ref2.clicktoCallBgColor,
        clicktoCallBgColor = _ref2$clicktoCallBgCo === void 0 ? '#004bcb' : _ref2$clicktoCallBgCo,
        _ref2$clicktoCallIcon = _ref2.clicktoCallIconColor,
        clicktoCallIconColor = _ref2$clicktoCallIcon === void 0 ? '#ffffff' : _ref2$clicktoCallIcon,
        _ref2$clicktoCallDevi = _ref2.clicktoCallDevice,
        clicktoCallDevice = _ref2$clicktoCallDevi === void 0 ? 'all' : _ref2$clicktoCallDevi,
        _ref2$clicktoCallAnim = _ref2.clicktoCallAnimation,
        clicktoCallAnimation = _ref2$clicktoCallAnim === void 0 ? 'none' : _ref2$clicktoCallAnim,
        _ref2$clicktoCallAuto = _ref2.clicktoCallAutoOpen,
        clicktoCallAutoOpen = _ref2$clicktoCallAuto === void 0 ? false : _ref2$clicktoCallAuto,
        _ref2$clicktoCallAuto2 = _ref2.clicktoCallAutoOpenDelay,
        clicktoCallAutoOpenDelay = _ref2$clicktoCallAuto2 === void 0 ? 0 : _ref2$clicktoCallAuto2,
        _ref2$clicktoCallBadg = _ref2.clicktoCallBadge,
        clicktoCallBadge = _ref2$clicktoCallBadg === void 0 ? false : _ref2$clicktoCallBadg,
        _ref2$clicktoCallBadg2 = _ref2.clicktoCallBadgeCount,
        clicktoCallBadgeCount = _ref2$clicktoCallBadg2 === void 0 ? 0 : _ref2$clicktoCallBadg2,
        _ref2$clicktoCallshow = _ref2.clicktoCallshowHours,
        clicktoCallshowHours = _ref2$clicktoCallshow === void 0 ? false : _ref2$clicktoCallshow,
        _ref2$clicktoCallShow = _ref2.clicktoCallShowChip,
        clicktoCallShowChip = _ref2$clicktoCallShow === void 0 ? false : _ref2$clicktoCallShow,
        _ref2$clicktoCallshow2 = _ref2.clicktoCallshowChipDot,
        clicktoCallshowChipDot = _ref2$clicktoCallshow2 === void 0 ? false : _ref2$clicktoCallshow2,
        _ref2$clicktoCallSche = _ref2.clicktoCallSchedules,
        clicktoCallSchedules = _ref2$clicktoCallSche === void 0 ? {
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
        } : _ref2$clicktoCallSche;
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
    }
  };
  app.init();
  $(document).ready(app.ready);
})(jQuery);
/******/ })()
;