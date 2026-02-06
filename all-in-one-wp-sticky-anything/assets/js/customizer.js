/******/ (() => { // webpackBootstrap
;
(function ($) {
  var app = {
    init: function init() {},
    ready: function ready() {
      app.handleStickyHeader();
      app.handleCustomizer();
    },
    handleStickyHeader: function handleStickyHeader() {
      var element = $('header.site-header, header#site-header, header.header, header#header, header#zak-masthead');
      if (!element.length) return;
      var stickyStatus = !!wp.customize('ai1wpsa_sticky_header')();
      var stickyZIndex = parseInt(wp.customize('ai1wpsa_z_index')(), 10) || 9999;
      var stickyOffset = element.offset().top;

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
    handleCustomizer: function handleCustomizer() {
      wp.customize('ai1wpsa_sticky_header', function (value) {
        value.bind(function (newVal) {
          var header = $('header');
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
    }
  };
  app.init();
  $(document).ready(app.ready);
})(jQuery);
/******/ })()
;