/******/ (() => { // webpackBootstrap
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  ToggleControl = _wp$components.ToggleControl;
;
(function ($) {
  var blockEditor = {
    init: function init() {
      // Add attribute
      addFilter('blocks.registerBlockType', 'fixed-widget/attribute', function (settings, name) {
        settings.attributes = _objectSpread(_objectSpread({}, settings.attributes), {}, {
          fixedWidget: {
            type: 'boolean',
            "default": false
          }
        });
        return settings;
      });

      // Add control
      var addFixedWidgetControl = function addFixedWidgetControl(BlockEdit) {
        return function (props) {
          var name = props.name,
            attributes = props.attributes,
            setAttributes = props.setAttributes;

          // retrive selected attributes from the block
          var fixedWidget = attributes.fixedWidget;
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
            title: wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything'),
            initialOpen: false
          }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
            label: wp.i18n.__('Enable Fixed Widget', 'all-in-one-wp-sticky-anything'),
            checked: !!fixedWidget,
            onChange: function onChange() {
              return setAttributes({
                fixedWidget: !fixedWidget
              });
            },
            help: wp.i18n.__('Make this widget a fixed widget.', 'all-in-one-wp-sticky-anything')
          })))));
        };
      };
      addFilter('editor.BlockEdit', 'fixed-widget/control', addFixedWidgetControl);

      // Save props
      addFilter('blocks.getSaveContent.extraProps', 'fixed-widget/save-props', function (props, blockType, attributes) {
        var fixedWidget = attributes.fixedWidget;
        if (!fixedWidget) {
          return props;
        }
        var classes = (props.className || '').split(' ').filter(Boolean);
        if (!classes.includes('fixed')) {
          classes.push('fixed');
        }
        return _objectSpread(_objectSpread({}, props), {}, {
          // className: classes.join(' '),
          'data-ai1wpsa-fixed': 'true'
        });
      });
    }
  };
  blockEditor.init();
})(jQuery);
/******/ })()
;