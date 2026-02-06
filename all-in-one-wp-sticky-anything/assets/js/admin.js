/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 942:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/js/Contexts/SettingsContext.js
var SettingsContext = React.createContext();
/* harmony default export */ const Contexts_SettingsContext = (SettingsContext);
var SettingsProvider = SettingsContext.Provider;
var SettingsConsumer = SettingsContext.Consumer;
;// ./src/js/components/Settings/Header.js
var useContext = wp.element.useContext;
var Spinner = wp.components.Spinner;

function Header() {
  var _useContext = useContext(Contexts_SettingsContext),
    loading = _useContext.loading,
    setLoading = _useContext.setLoading,
    handleSaveSettings = _useContext.handleSaveSettings;
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-app-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-title"
  }, /*#__PURE__*/React.createElement("img", {
    src: "".concat(ai1wpsa.pluginUrl, "/assets/images/logo.jpg"),
    alt: wp.i18n.__('All-in-One WP Sticky Anything', 'all-in-one-wp-sticky-anything')
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('All-in-One WP Sticky Anything Settings', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "header-actions"
  }, /*#__PURE__*/React.createElement("buttton", {
    type: "button",
    className: "ai1wpsa-btn save-btn",
    onClick: handleSaveSettings
  }, loading && /*#__PURE__*/React.createElement(Spinner, null), /*#__PURE__*/React.createElement("span", {
    className: "dashicons dashicons-saved"
  }), wp.i18n.__('Save', 'all-in-one-wp-sticky-anything'))));
}
;// ./src/js/components/Settings/General.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var General_useContext = wp.element.useContext;
var _wp$components = wp.components,
  FormToggle = _wp$components.FormToggle,
  TextControl = _wp$components.TextControl;

function General() {
  var _useContext = General_useContext(Contexts_SettingsContext),
    data = _useContext.data,
    setData = _useContext.setData;
  var _ref = data || {},
    _ref$stickyClass = _ref.stickyClass,
    stickyClass = _ref$stickyClass === void 0 ? '' : _ref$stickyClass,
    _ref$stickyZIndex = _ref.stickyZIndex,
    stickyZIndex = _ref$stickyZIndex === void 0 ? '' : _ref$stickyZIndex,
    _ref$fixDefaultSticky = _ref.fixDefaultSticky,
    fixDefaultSticky = _ref$fixDefaultSticky === void 0 ? false : _ref$fixDefaultSticky;
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-admin-generic"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('General Settings', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Sticky Class', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(TextControl, {
    value: stickyClass,
    placeholder: wp.i18n.__('ex: #main-navigaion or .header', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        stickyClass: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Write your sticky selector here. Make anything sticky by use sticky class. example: `<div class="sticky">I am sticky</div>`', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Fix Sticky', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(FormToggle, {
    checked: fixDefaultSticky,
    onChange: function onChange() {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        fixDefaultSticky: !fixDefaultSticky
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Enable this option to fix the sticky header if the default method doesn’t work.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('z-index', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(TextControl, {
    value: stickyZIndex,
    placeholder: wp.i18n.__('ex: 9999', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        stickyZIndex: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Set your desire z-index value for your target element.', 'all-in-one-wp-sticky-anything'))))));
}
;// ./src/js/components/Settings/StickySidebar.js
function StickySidebar_typeof(o) { "@babel/helpers - typeof"; return StickySidebar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, StickySidebar_typeof(o); }
function StickySidebar_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function StickySidebar_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? StickySidebar_ownKeys(Object(t), !0).forEach(function (r) { StickySidebar_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : StickySidebar_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function StickySidebar_defineProperty(e, r, t) { return (r = StickySidebar_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function StickySidebar_toPropertyKey(t) { var i = StickySidebar_toPrimitive(t, "string"); return "symbol" == StickySidebar_typeof(i) ? i : i + ""; }
function StickySidebar_toPrimitive(t, r) { if ("object" != StickySidebar_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != StickySidebar_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StickySidebar_useContext = wp.element.useContext;
var StickySidebar_wp$components = wp.components,
  Button = StickySidebar_wp$components.Button,
  ButtonGroup = StickySidebar_wp$components.ButtonGroup,
  StickySidebar_FormToggle = StickySidebar_wp$components.FormToggle,
  StickySidebar_TextControl = StickySidebar_wp$components.TextControl;

function StickySidebar() {
  var _ai1wpsa = ai1wpsa,
    isPro = _ai1wpsa.isPro;
  var _useContext = StickySidebar_useContext(Contexts_SettingsContext),
    data = _useContext.data,
    setData = _useContext.setData;
  var _ref = data || {},
    _ref$stickySidebar = _ref.stickySidebar,
    stickySidebar = _ref$stickySidebar === void 0 ? false : _ref$stickySidebar,
    _ref$stickySidebarEle = _ref.stickySidebarElement,
    stickySidebarElement = _ref$stickySidebarEle === void 0 ? '' : _ref$stickySidebarEle,
    _ref$stickySidebarCon = _ref.stickySidebarContainer,
    stickySidebarContainer = _ref$stickySidebarCon === void 0 ? '' : _ref$stickySidebarCon,
    _ref$stickySidebarDev = _ref.stickySidebarDevice,
    stickySidebarDevice = _ref$stickySidebarDev === void 0 ? 'all' : _ref$stickySidebarDev,
    _ref$StickySidebarMar = _ref.StickySidebarMarginTop,
    StickySidebarMarginTop = _ref$StickySidebarMar === void 0 ? '90' : _ref$StickySidebarMar,
    _ref$StickySidebarMar2 = _ref.StickySidebarMarginBottom,
    StickySidebarMarginBottom = _ref$StickySidebarMar2 === void 0 ? '0' : _ref$StickySidebarMar2,
    _ref$stickyMinWidth = _ref.stickyMinWidth,
    stickyMinWidth = _ref$stickyMinWidth === void 0 ? '795' : _ref$stickyMinWidth,
    _ref$stickySidebarHei = _ref.stickySidebarHeight,
    stickySidebarHeight = _ref$stickySidebarHei === void 0 ? false : _ref$stickySidebarHei,
    _ref$stickyDisableOn = _ref.stickyDisableOn,
    stickyDisableOn = _ref$stickyDisableOn === void 0 ? [] : _ref$stickyDisableOn;
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-welcome-widgets-menus"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Sticky Sidebar Settings', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Sticky Sidebar', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySidebar_FormToggle, {
    checked: stickySidebar,
    onChange: function onChange() {
      return setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickySidebar: !stickySidebar
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Enable or disable the sticky sidebar.', 'all-in-one-wp-sticky-anything')))), !!stickySidebar && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Sticky Sidebar Selector', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySidebar_TextControl, {
    value: stickySidebarElement,
    placeholder: wp.i18n.__('ex: #sidebar or .sidebar', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickySidebarElement: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Write your sidebar element CSS selector (class or id) here. Astra: #secondary, Neve: .blog-sidebar', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Sidebar Container Selector', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySidebar_TextControl, {
    value: stickySidebarContainer,
    placeholder: wp.i18n.__('ex: #main', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickySidebarContainer: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Write your sidebar container element CSS selector (class or id) here. It must be element that contains both sidebar and content. If left blank script will try to guess. Usually it\'s #main or #main-content. Astra: .ast-container, Neve: .archive-container .row', 'all-in-one-wp-sticky-anything')))), isPro && /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Device', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      if (!isPro) {
        return;
      }
      setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickySidebarDevice: 'all'
      }));
    },
    variant: stickySidebarDevice === 'all' ? 'primary' : ''
  }, wp.i18n.__('All', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      if (!isPro) {
        return;
      }
      setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickySidebarDevice: 'desktop'
      }));
    },
    variant: stickySidebarDevice === 'desktop' ? 'primary' : ''
  }, wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      if (!isPro) {
        return;
      }
      setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickySidebarDevice: 'tablet'
      }));
    },
    variant: stickySidebarDevice === 'tablet' ? 'primary' : ''
  }, wp.i18n.__('Tablet', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      if (!isPro) {
        return;
      }
      setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickySidebarDevice: 'mobile'
      }));
    },
    variant: stickySidebarDevice === 'mobile' ? 'primary' : ''
  }, wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Set your desire z-index value for your target element.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Additional Top Margin', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySidebar_TextControl, {
    type: "number",
    value: StickySidebarMarginTop,
    placeholder: wp.i18n.__('ex: 30', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        StickySidebarMarginTop: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Set additional top margin for your sidebar.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Additional Top Margin', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySidebar_TextControl, {
    type: "number",
    value: StickySidebarMarginBottom,
    placeholder: wp.i18n.__('ex: 30', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        StickySidebarMarginBottom: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Set additional bottom margin for your sidebar.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Disable in small screens', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySidebar_TextControl, {
    type: "number",
    value: stickyMinWidth,
    placeholder: wp.i18n.__('ex: 767', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickyMinWidth: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Disable if screen width is smaller than this value. Set only width value. Don\'t add px.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Update sidebar height', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySidebar_FormToggle, {
    checked: stickySidebarHeight,
    onChange: function onChange() {
      return setData(StickySidebar_objectSpread(StickySidebar_objectSpread({}, data), {}, {
        stickySidebarHeight: !stickySidebarHeight
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Troubleshooting option, try this if your sidebar loses its background color.', 'all-in-one-wp-sticky-anything')))))));
}
;// ./src/js/includes/Notice.js
function Notice(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'info' : _ref$type,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? '' : _ref$message,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    _ref$openNewTab = _ref.openNewTab,
    openNewTab = _ref$openNewTab === void 0 ? true : _ref$openNewTab;
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-notice ".concat(type)
  }, /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-info"
  }), /*#__PURE__*/React.createElement("p", null, message), actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, actions.map(function (action, index) {
    return /*#__PURE__*/React.createElement("a", {
      key: index,
      href: action.url,
      target: "".concat(openNewTab ? '_blank' : 'self')
    }, action.label);
  })));
}
;// ./src/js/components/Settings/Css.js
function Css_typeof(o) { "@babel/helpers - typeof"; return Css_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Css_typeof(o); }
function Css_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Css_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Css_ownKeys(Object(t), !0).forEach(function (r) { Css_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Css_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Css_defineProperty(e, r, t) { return (r = Css_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Css_toPropertyKey(t) { var i = Css_toPrimitive(t, "string"); return "symbol" == Css_typeof(i) ? i : i + ""; }
function Css_toPrimitive(t, r) { if ("object" != Css_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Css_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _wp$element = wp.element,
  Css_useContext = _wp$element.useContext,
  useEffect = _wp$element.useEffect;
var TextareaControl = wp.components.TextareaControl;


function Css() {
  var _useContext = Css_useContext(Contexts_SettingsContext),
    data = _useContext.data,
    setData = _useContext.setData;
  var _data$customCss = data.customCss,
    customCss = _data$customCss === void 0 ? '' : _data$customCss;
  useEffect(function () {
    var editor = document.querySelectorAll('.ai1wpsa-custom-css textarea');
    var instance = wp.codeEditor.initialize(editor, Css_objectSpread(Css_objectSpread({}, wp.codeEditor.defaultSettings), {}, {
      mode: 'css',
      wordWrap: true,
      tabSize: 2,
      autoComplete: {
        enable: true,
        showDescriptions: true,
        caseSensitive: true,
        autoTrigger: true,
        delay: 0,
        maxItems: 10,
        sortBy: 'score',
        maxLength: 0,
        maxResults: 10,
        highlightMatches: true,
        maxHighlightLength: 0,
        style: 'popup'
      },
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      showLineNumbers: true,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableCodeFolding: true,
      enableCodeFormatting: true
    }));
    instance.codemirror.on('change', function (codemirror) {
      var value = codemirror.getValue();
      setData(function (data) {
        return Css_objectSpread(Css_objectSpread({}, data), {}, {
          customCss: value
        });
      });
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-editor-code"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Custom CSS', 'ai1wpsa'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement(Notice, {
    message: wp.i18n.__('Custom CSS feature will be discontinued soon. Please save your custom CSS in advance. For assistance, please use the support forum.', 'all-in-one-wp-sticky-anything'),
    actions: [{
      label: wp.i18n.__('Visit Support Forum', 'all-in-one-wp-sticky-anything'),
      url: 'https://wordpress.org/support/plugin/all-in-one-wp-sticky-anything/'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Custom CSS', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(TextareaControl, {
    value: customCss,
    className: "ai1wpsa-custom-css",
    placeholder: wp.i18n.__('ex: .header{ // your css code here.}', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(Css_objectSpread(Css_objectSpread({}, data), {}, {
        customCss: value.target.value
      }));
    },
    rows: 12
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Write your custom CSS here.', 'all-in-one-wp-sticky-anything'))))));
}
;// ./src/js/components/Settings/Tools.js
var Tools_useContext = wp.element.useContext;

function Tools() {
  var _useContext = Tools_useContext(Contexts_SettingsContext),
    handleResetSettings = _useContext.handleResetSettings;
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-admin-tools"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Tools', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Reset Data', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ai1wpsa-btn reset-btn",
    onClick: handleResetSettings
  }, /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-update"
  }), wp.i18n.__('Reset', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Reset all settings to default.', 'all-in-one-wp-sticky-anything'))))));
}
;// external "React"
const external_React_namespaceObject = React;
;// ./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const floating_ui_utils_sides = (/* unused pure expression or super */ null && (['top', 'right', 'bottom', 'left']));
const alignments = (/* unused pure expression or super */ null && (['start', 'end']));
const floating_ui_utils_placements = /*#__PURE__*/(/* unused pure expression or super */ null && (floating_ui_utils_sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), [])));
const floating_ui_utils_min = Math.min;
const floating_ui_utils_max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return floating_ui_utils_max(start, floating_ui_utils_min(value, end));
}
function floating_ui_utils_evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function floating_ui_utils_getSide(placement) {
  return placement.split('-')[0];
}
function floating_ui_utils_getAlignment(placement) {
  return placement.split('-')[1];
}
function floating_ui_utils_getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function floating_ui_utils_getSideAxis(placement) {
  return ['top', 'bottom'].includes(floating_ui_utils_getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return floating_ui_utils_getOppositeAxis(floating_ui_utils_getSideAxis(placement));
}
function floating_ui_utils_getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = floating_ui_utils_getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [floating_ui_utils_getOppositeAlignmentPlacement(placement), oppositePlacement, floating_ui_utils_getOppositeAlignmentPlacement(oppositePlacement)];
}
function floating_ui_utils_getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = floating_ui_utils_getAlignment(placement);
  let list = getSideList(floating_ui_utils_getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(floating_ui_utils_getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function floating_ui_utils_getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function floating_ui_utils_rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}



;// ./node_modules/@floating-ui/core/dist/floating-ui.core.mjs



function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = floating_ui_utils_getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = floating_ui_utils_getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (floating_ui_utils_getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = floating_ui_utils_evaluate(options, state);
  const paddingObject = floating_ui_utils_getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = floating_ui_utils_rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = floating_ui_utils_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = floating_ui_utils_evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = floating_ui_utils_getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = floating_ui_utils_min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = floating_ui_utils_min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && floating_ui_utils_getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = floating_ui_utils_getSide(placement);
      const initialSideAxis = floating_ui_utils_getSideAxis(initialPlacement);
      const isBasePlacement = floating_ui_utils_getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = floating_ui_utils_getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = floating_ui_utils_getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = min(...rects.map(rect => rect.left));
  const minY = min(...rects.map(rect => rect.top));
  const maxX = max(...rects.map(rect => rect.right));
  const maxY = max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = floating_ui_utils_getSide(placement);
  const alignment = floating_ui_utils_getAlignment(placement);
  const isVertical = floating_ui_utils_getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = floating_ui_utils_evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = floating_ui_utils_getSideAxis(floating_ui_utils_getSide(placement));
      const mainAxis = floating_ui_utils_getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};



;// ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = floating_ui_utils_dom_getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? floating_ui_utils_dom_getComputedStyle(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function floating_ui_utils_dom_getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}



;// ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs





function getCssDimensions(element) {
  const css = floating_ui_utils_dom_getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = floating_ui_utils_dom_getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return floating_ui_utils_rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = floating_ui_utils_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = floating_ui_utils_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (floating_ui_utils_dom_getComputedStyle(body).direction === 'rtl') {
    x += floating_ui_utils_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return floating_ui_utils_rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return floating_ui_utils_dom_getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = floating_ui_utils_dom_getComputedStyle(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = floating_ui_utils_dom_getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_utils_max(rect.top, accRect.top);
    accRect.right = floating_ui_utils_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_utils_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_utils_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
      // Firefox with layout.scrollbar.side = 3 in about:config to test this.
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return floating_ui_utils_dom_getComputedStyle(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || floating_ui_utils_dom_getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return floating_ui_utils_dom_getComputedStyle(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: floating_ui_utils_max(0, floating_ui_utils_min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const floating_ui_dom_detectOverflow = (/* unused pure expression or super */ null && (detectOverflow$1));

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const floating_ui_dom_offset = offset;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const floating_ui_dom_autoPlacement = (/* unused pure expression or super */ null && (autoPlacement$1));

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const floating_ui_dom_shift = shift;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const floating_ui_dom_flip = flip;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const floating_ui_dom_size = (/* unused pure expression or super */ null && (size$1));

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const floating_ui_dom_hide = (/* unused pure expression or super */ null && (hide$1));

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const floating_ui_dom_arrow = arrow;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const floating_ui_dom_inline = (/* unused pure expression or super */ null && (inline$1));

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const floating_ui_dom_limitShift = (/* unused pure expression or super */ null && (limitShift$1));

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const floating_ui_dom_computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};



// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(942);
;// ./node_modules/react-tooltip/dist/react-tooltip.min.mjs
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const h="react-tooltip-core-styles",w="react-tooltip-base-styles",b={core:!1,base:!1};function S({css:e,id:t=w,type:o="base",ref:l}){var r,n;if(!e||"undefined"==typeof document||b[o])return;if("core"===o&&"undefined"!=typeof process&&(null===(r=null===process||void 0===process?void 0:process.env)||void 0===r?void 0:r.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==o&&"undefined"!=typeof process&&(null===(n=null===process||void 0===process?void 0:process.env)||void 0===n?void 0:n.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===o&&(t=h),l||(l={});const{insertAt:i}=l;if(document.getElementById(t))return;const c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),b[o]=!0}function g({type:e="base",id:t=w}={}){if(!b[e])return;"core"===e&&(t=h);const o=document.getElementById(t);"style"===(null==o?void 0:o.tagName)?null==o||o.remove():console.warn(`[react-tooltip] Failed to remove 'style' element with id '${t}'. Call \`injectStyle()\` first`),b[e]=!1}const E=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:o=null,place:l="top",offset:r=10,strategy:n="absolute",middlewares:i=[floating_ui_dom_offset(Number(r)),floating_ui_dom_flip({fallbackAxisSideDirection:"start"}),floating_ui_dom_shift({padding:5})],border:c})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:l};if(null===t)return{tooltipStyles:{},tooltipArrowStyles:{},place:l};const s=i;return o?(s.push(floating_ui_dom_arrow({element:o,padding:5})),floating_ui_dom_computePosition(e,t,{placement:l,strategy:n,middleware:s}).then((({x:e,y:t,placement:o,middlewareData:l})=>{var r,n;const i={left:`${e}px`,top:`${t}px`,border:c},{x:s,y:a}=null!==(r=l.arrow)&&void 0!==r?r:{x:0,y:0},u=null!==(n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]])&&void 0!==n?n:"bottom",d=c&&{borderBottom:c,borderRight:c};let p=0;if(c){const e=`${c}`.match(/(\d+)px/);p=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=s?`${s}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...d,[u]:`-${4+p}px`},place:o}}))):floating_ui_dom_computePosition(e,t,{placement:"bottom",strategy:n,middleware:s}).then((({x:e,y:t,placement:o})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:o})))},A=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),_=(e,t,o)=>{let l=null;const r=function(...r){const n=()=>{l=null,o||e.apply(this,r)};o&&!l&&(e.apply(this,r),l=setTimeout(n,t)),o||(l&&clearTimeout(l),l=setTimeout(n,t))};return r.cancel=()=>{l&&(clearTimeout(l),l=null)},r},O=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,k=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every(((e,o)=>k(e,t[o])));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!O(e)||!O(t))return e===t;const o=Object.keys(e),l=Object.keys(t);return o.length===l.length&&o.every((o=>k(e[o],t[o])))},T=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const o=t.getPropertyValue(e);return"auto"===o||"scroll"===o}))},L=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(T(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},C="undefined"!=typeof window?external_React_namespaceObject.useLayoutEffect:external_React_namespaceObject.useEffect,R=e=>{e.current&&(clearTimeout(e.current),e.current=null)},x="DEFAULT_TOOLTIP_ID",N={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},$=(0,external_React_namespaceObject.createContext)({getTooltipData:()=>N}),I=({children:t})=>{const[o,l]=r({[x]:new Set}),[c,s]=r({[x]:{current:null}}),a=(e,...t)=>{l((o=>{var l;const r=null!==(l=o[e])&&void 0!==l?l:new Set;return t.forEach((e=>r.add(e))),{...o,[e]:new Set(r)}}))},u=(e,...t)=>{l((o=>{const l=o[e];return l?(t.forEach((e=>l.delete(e))),{...o}):o}))},d=n(((e=x)=>{var t,l;return{anchorRefs:null!==(t=o[e])&&void 0!==t?t:new Set,activeAnchor:null!==(l=c[e])&&void 0!==l?l:{current:null},attach:(...t)=>a(e,...t),detach:(...t)=>u(e,...t),setActiveAnchor:t=>((e,t)=>{s((o=>{var l;return(null===(l=o[e])||void 0===l?void 0:l.current)===t.current?o:{...o,[e]:t}}))})(e,t)}}),[o,c,a,u]),p=i((()=>({getTooltipData:d})),[d]);return e.createElement($.Provider,{value:p},t)};function j(e=x){return (0,external_React_namespaceObject.useContext)($).getTooltipData(e)}const B=({tooltipId:t,children:l,className:r,place:n,content:i,html:c,variant:a,offset:u,wrapper:d,events:p,positionStrategy:v,delayShow:m,delayHide:f})=>{const{attach:h,detach:w}=j(t),b=s(null);return o((()=>(h(b),()=>{w(b)})),[]),e.createElement("span",{ref:b,className:y("react-tooltip-wrapper",r),"data-tooltip-place":n,"data-tooltip-content":i,"data-tooltip-html":c,"data-tooltip-variant":a,"data-tooltip-offset":u,"data-tooltip-wrapper":d,"data-tooltip-events":p,"data-tooltip-position-strategy":v,"data-tooltip-delay-show":m,"data-tooltip-delay-hide":f},l)};var z={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},D={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const q=({forwardRef:t,id:l,className:i,classNameArrow:c,variant:u="dark",anchorId:d,anchorSelect:p,place:v="top",offset:m=10,events:h=["hover"],openOnClick:w=!1,positionStrategy:b="absolute",middlewares:S,wrapper:g,delayShow:A=0,delayHide:O=0,float:T=!1,hidden:x=!1,noArrow:N=!1,clickable:$=!1,closeOnEsc:I=!1,closeOnScroll:B=!1,closeOnResize:q=!1,openEvents:H,closeEvents:M,globalCloseEvents:W,imperativeModeOnly:P,style:V,position:F,afterShow:K,afterHide:U,disableTooltip:X,content:Y,contentWrapperRef:G,isOpen:Z,defaultIsOpen:J=!1,setIsOpen:Q,activeAnchor:ee,setActiveAnchor:te,border:oe,opacity:le,arrowColor:re,role:ne="tooltip"})=>{var ie;const ce=(0,external_React_namespaceObject.useRef)(null),se=(0,external_React_namespaceObject.useRef)(null),ae=(0,external_React_namespaceObject.useRef)(null),ue=(0,external_React_namespaceObject.useRef)(null),de=(0,external_React_namespaceObject.useRef)(null),[pe,ve]=(0,external_React_namespaceObject.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:v}),[me,fe]=(0,external_React_namespaceObject.useState)(!1),[ye,he]=(0,external_React_namespaceObject.useState)(!1),[we,be]=(0,external_React_namespaceObject.useState)(null),Se=(0,external_React_namespaceObject.useRef)(!1),ge=(0,external_React_namespaceObject.useRef)(null),{anchorRefs:Ee,setActiveAnchor:Ae}=j(l),_e=(0,external_React_namespaceObject.useRef)(!1),[Oe,ke]=(0,external_React_namespaceObject.useState)([]),Te=(0,external_React_namespaceObject.useRef)(!1),Le=w||h.includes("click"),Ce=Le||(null==H?void 0:H.click)||(null==H?void 0:H.dblclick)||(null==H?void 0:H.mousedown),Re=H?{...H}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!H&&Le&&Object.assign(Re,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});const xe=M?{...M}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!M&&Le&&Object.assign(xe,{mouseleave:!1,blur:!1,mouseout:!1});const Ne=W?{...W}:{escape:I||!1,scroll:B||!1,resize:q||!1,clickOutsideAnchor:Ce||!1};P&&(Object.assign(Re,{mouseover:!1,focus:!1,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(xe,{mouseout:!1,blur:!1,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(Ne,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),C((()=>(Te.current=!0,()=>{Te.current=!1})),[]);const $e=e=>{Te.current&&(e&&he(!0),setTimeout((()=>{Te.current&&(null==Q||Q(e),void 0===Z&&fe(e))}),10))};(0,external_React_namespaceObject.useEffect)((()=>{if(void 0===Z)return()=>null;Z&&he(!0);const e=setTimeout((()=>{fe(Z)}),10);return()=>{clearTimeout(e)}}),[Z]),(0,external_React_namespaceObject.useEffect)((()=>{if(me!==Se.current)if(R(de),Se.current=me,me)null==K||K();else{const e=(e=>{const t=e.match(/^([\d.]+)(ms|s)$/);if(!t)return 0;const[,o,l]=t;return Number(o)*("ms"===l?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));de.current=setTimeout((()=>{he(!1),be(null),null==U||U()}),e+25)}}),[me]);const Ie=e=>{ve((t=>k(t,e)?t:e))},je=(e=A)=>{R(ae),ye?$e(!0):ae.current=setTimeout((()=>{$e(!0)}),e)},Be=(e=O)=>{R(ue),ue.current=setTimeout((()=>{_e.current||$e(!1)}),e)},ze=e=>{var t;if(!e)return;const o=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==o?void 0:o.isConnected))return te(null),void Ae({current:null});A?je():$e(!0),te(o),Ae({current:o}),R(ue)},De=()=>{$?Be(O||100):O?Be():$e(!1),R(ae)},qe=({x:e,y:t})=>{var o;const l={getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})};E({place:null!==(o=null==we?void 0:we.place)&&void 0!==o?o:v,offset:m,elementReference:l,tooltipReference:ce.current,tooltipArrowReference:se.current,strategy:b,middlewares:S,border:oe}).then((e=>{Ie(e)}))},He=e=>{if(!e)return;const t=e,o={x:t.clientX,y:t.clientY};qe(o),ge.current=o},Me=e=>{var t;if(!me)return;const o=e.target;if(!o.isConnected)return;if(null===(t=ce.current)||void 0===t?void 0:t.contains(o))return;[document.querySelector(`[id='${d}']`),...Oe].some((e=>null==e?void 0:e.contains(o)))||($e(!1),R(ae))},We=_(ze,50,!0),Pe=_(De,50,!0),Ve=e=>{Pe.cancel(),We(e)},Fe=()=>{We.cancel(),Pe()},Ke=(0,external_React_namespaceObject.useCallback)((()=>{var e,t;const o=null!==(e=null==we?void 0:we.position)&&void 0!==e?e:F;o?qe(o):T?ge.current&&qe(ge.current):(null==ee?void 0:ee.isConnected)&&E({place:null!==(t=null==we?void 0:we.place)&&void 0!==t?t:v,offset:m,elementReference:ee,tooltipReference:ce.current,tooltipArrowReference:se.current,strategy:b,middlewares:S,border:oe}).then((e=>{Te.current&&Ie(e)}))}),[me,ee,Y,V,v,null==we?void 0:we.place,m,b,F,null==we?void 0:we.position,T]);(0,external_React_namespaceObject.useEffect)((()=>{var e,t;const o=new Set(Ee);Oe.forEach((e=>{(null==X?void 0:X(e))||o.add({current:e})}));const l=document.querySelector(`[id='${d}']`);l&&!(null==X?void 0:X(l))&&o.add({current:l});const r=()=>{$e(!1)},n=L(ee),i=L(ce.current);Ne.scroll&&(window.addEventListener("scroll",r),null==n||n.addEventListener("scroll",r),null==i||i.addEventListener("scroll",r));let c=null;Ne.resize?window.addEventListener("resize",r):ee&&ce.current&&(c=autoUpdate(ee,ce.current,Ke,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const s=e=>{"Escape"===e.key&&$e(!1)};Ne.escape&&window.addEventListener("keydown",s),Ne.clickOutsideAnchor&&window.addEventListener("click",Me);const a=[],u=e=>Boolean((null==e?void 0:e.target)&&(null==ee?void 0:ee.contains(e.target))),p=e=>{me&&u(e)||ze(e)},v=e=>{me&&u(e)&&De()},m=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],y=["click","dblclick","mousedown","mouseup"];Object.entries(Re).forEach((([e,t])=>{t&&(m.includes(e)?a.push({event:e,listener:Ve}):y.includes(e)&&a.push({event:e,listener:p}))})),Object.entries(xe).forEach((([e,t])=>{t&&(m.includes(e)?a.push({event:e,listener:Fe}):y.includes(e)&&a.push({event:e,listener:v}))})),T&&a.push({event:"pointermove",listener:He});const h=()=>{_e.current=!0},w=()=>{_e.current=!1,De()},b=$&&(xe.mouseout||xe.mouseleave);return b&&(null===(e=ce.current)||void 0===e||e.addEventListener("mouseover",h),null===(t=ce.current)||void 0===t||t.addEventListener("mouseout",w)),a.forEach((({event:e,listener:t})=>{o.forEach((o=>{var l;null===(l=o.current)||void 0===l||l.addEventListener(e,t)}))})),()=>{var e,t;Ne.scroll&&(window.removeEventListener("scroll",r),null==n||n.removeEventListener("scroll",r),null==i||i.removeEventListener("scroll",r)),Ne.resize?window.removeEventListener("resize",r):null==c||c(),Ne.clickOutsideAnchor&&window.removeEventListener("click",Me),Ne.escape&&window.removeEventListener("keydown",s),b&&(null===(e=ce.current)||void 0===e||e.removeEventListener("mouseover",h),null===(t=ce.current)||void 0===t||t.removeEventListener("mouseout",w)),a.forEach((({event:e,listener:t})=>{o.forEach((o=>{var l;null===(l=o.current)||void 0===l||l.removeEventListener(e,t)}))}))}}),[ee,Ke,ye,Ee,Oe,H,M,W,Le,A,O]),(0,external_React_namespaceObject.useEffect)((()=>{var e,t;let o=null!==(t=null!==(e=null==we?void 0:we.anchorSelect)&&void 0!==e?e:p)&&void 0!==t?t:"";!o&&l&&(o=`[data-tooltip-id='${l.replace(/'/g,"\\'")}']`);const r=new MutationObserver((e=>{const t=[],r=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName){e.target.getAttribute("data-tooltip-id")===l?t.push(e.target):e.oldValue===l&&r.push(e.target)}if("childList"===e.type){if(ee){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(o)try{r.push(...t.filter((e=>e.matches(o)))),r.push(...t.flatMap((e=>[...e.querySelectorAll(o)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,ee))&&(he(!1),$e(!1),te(null),R(ae),R(ue),!0)}))}if(o)try{const l=[...e.addedNodes].filter((e=>1===e.nodeType));t.push(...l.filter((e=>e.matches(o)))),t.push(...l.flatMap((e=>[...e.querySelectorAll(o)])))}catch(e){}}})),(t.length||r.length)&&ke((e=>[...e.filter((e=>!r.includes(e))),...t]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{r.disconnect()}}),[l,p,null==we?void 0:we.anchorSelect,ee]),(0,external_React_namespaceObject.useEffect)((()=>{Ke()}),[Ke]),(0,external_React_namespaceObject.useEffect)((()=>{if(!(null==G?void 0:G.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>Ke()))}));return e.observe(G.current),()=>{e.disconnect()}}),[Y,null==G?void 0:G.current]),(0,external_React_namespaceObject.useEffect)((()=>{var e;const t=document.querySelector(`[id='${d}']`),o=[...Oe,t];ee&&o.includes(ee)||te(null!==(e=Oe[0])&&void 0!==e?e:t)}),[d,Oe,ee]),(0,external_React_namespaceObject.useEffect)((()=>(J&&$e(!0),()=>{R(ae),R(ue)})),[]),(0,external_React_namespaceObject.useEffect)((()=>{var e;let t=null!==(e=null==we?void 0:we.anchorSelect)&&void 0!==e?e:p;if(!t&&l&&(t=`[data-tooltip-id='${l.replace(/'/g,"\\'")}']`),t)try{const e=Array.from(document.querySelectorAll(t));ke(e)}catch(e){ke([])}}),[l,p,null==we?void 0:we.anchorSelect]),(0,external_React_namespaceObject.useEffect)((()=>{ae.current&&(R(ae),je(A))}),[A]);const Ue=null!==(ie=null==we?void 0:we.content)&&void 0!==ie?ie:Y,Xe=me&&Object.keys(pe.tooltipStyles).length>0;return (0,external_React_namespaceObject.useImperativeHandle)(t,(()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(t){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}be(null!=e?e:null),(null==e?void 0:e.delay)?je(e.delay):$e(!0)},close:e=>{(null==e?void 0:e.delay)?Be(e.delay):$e(!1)},activeAnchor:ee,place:pe.place,isOpen:Boolean(ye&&!x&&Ue&&Xe)}))),ye&&!x&&Ue?external_React_namespaceObject.createElement(g,{id:l,role:ne,className:classnames("react-tooltip",z.tooltip,D.tooltip,D[u],i,`react-tooltip__place-${pe.place}`,z[Xe?"show":"closing"],Xe?"react-tooltip__show":"react-tooltip__closing","fixed"===b&&z.fixed,$&&z.clickable),onTransitionEnd:e=>{R(de),me||"opacity"!==e.propertyName||(he(!1),be(null),null==U||U())},style:{...V,...pe.tooltipStyles,opacity:void 0!==le&&Xe?le:void 0},ref:ce},Ue,external_React_namespaceObject.createElement(g,{className:classnames("react-tooltip-arrow",z.arrow,D.arrow,c,N&&z.noArrow),style:{...pe.tooltipArrowStyles,background:re?`linear-gradient(to right bottom, transparent 50%, ${re} 50%)`:void 0},ref:se})):null},H=({content:t})=>external_React_namespaceObject.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),M=external_React_namespaceObject.forwardRef((({id:t,anchorId:l,anchorSelect:n,content:i,html:c,render:a,className:u,classNameArrow:d,variant:p="dark",place:v="top",offset:m=10,wrapper:f="div",children:h=null,events:w=["hover"],openOnClick:b=!1,positionStrategy:S="absolute",middlewares:g,delayShow:E=0,delayHide:_=0,float:O=!1,hidden:k=!1,noArrow:T=!1,clickable:L=!1,closeOnEsc:C=!1,closeOnScroll:R=!1,closeOnResize:x=!1,openEvents:N,closeEvents:$,globalCloseEvents:I,imperativeModeOnly:B=!1,style:z,position:D,isOpen:M,defaultIsOpen:W=!1,disableStyleInjection:P=!1,border:V,opacity:F,arrowColor:K,setIsOpen:U,afterShow:X,afterHide:Y,disableTooltip:G,role:Z="tooltip"},J)=>{const[Q,ee]=(0,external_React_namespaceObject.useState)(i),[te,oe]=(0,external_React_namespaceObject.useState)(c),[le,re]=(0,external_React_namespaceObject.useState)(v),[ne,ie]=(0,external_React_namespaceObject.useState)(p),[ce,se]=(0,external_React_namespaceObject.useState)(m),[ae,ue]=(0,external_React_namespaceObject.useState)(E),[de,pe]=(0,external_React_namespaceObject.useState)(_),[ve,me]=(0,external_React_namespaceObject.useState)(O),[fe,ye]=(0,external_React_namespaceObject.useState)(k),[he,we]=(0,external_React_namespaceObject.useState)(f),[be,Se]=(0,external_React_namespaceObject.useState)(w),[ge,Ee]=(0,external_React_namespaceObject.useState)(S),[Ae,_e]=(0,external_React_namespaceObject.useState)(null),[Oe,ke]=(0,external_React_namespaceObject.useState)(null),Te=(0,external_React_namespaceObject.useRef)(P),{anchorRefs:Le,activeAnchor:Ce}=j(t),Re=e=>null==e?void 0:e.getAttributeNames().reduce(((t,o)=>{var l;if(o.startsWith("data-tooltip-")){t[o.replace(/^data-tooltip-/,"")]=null!==(l=null==e?void 0:e.getAttribute(o))&&void 0!==l?l:null}return t}),{}),xe=e=>{const t={place:e=>{var t;re(null!==(t=e)&&void 0!==t?t:v)},content:e=>{ee(null!=e?e:i)},html:e=>{oe(null!=e?e:c)},variant:e=>{var t;ie(null!==(t=e)&&void 0!==t?t:p)},offset:e=>{se(null===e?m:Number(e))},wrapper:e=>{var t;we(null!==(t=e)&&void 0!==t?t:f)},events:e=>{const t=null==e?void 0:e.split(" ");Se(null!=t?t:w)},"position-strategy":e=>{var t;Ee(null!==(t=e)&&void 0!==t?t:S)},"delay-show":e=>{ue(null===e?E:Number(e))},"delay-hide":e=>{pe(null===e?_:Number(e))},float:e=>{me(null===e?O:"true"===e)},hidden:e=>{ye(null===e?k:"true"===e)},"class-name":e=>{_e(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,o])=>{var l;null===(l=t[e])||void 0===l||l.call(t,o)}))};(0,external_React_namespaceObject.useEffect)((()=>{ee(i)}),[i]),(0,external_React_namespaceObject.useEffect)((()=>{oe(c)}),[c]),(0,external_React_namespaceObject.useEffect)((()=>{re(v)}),[v]),(0,external_React_namespaceObject.useEffect)((()=>{ie(p)}),[p]),(0,external_React_namespaceObject.useEffect)((()=>{se(m)}),[m]),(0,external_React_namespaceObject.useEffect)((()=>{ue(E)}),[E]),(0,external_React_namespaceObject.useEffect)((()=>{pe(_)}),[_]),(0,external_React_namespaceObject.useEffect)((()=>{me(O)}),[O]),(0,external_React_namespaceObject.useEffect)((()=>{ye(k)}),[k]),(0,external_React_namespaceObject.useEffect)((()=>{Ee(S)}),[S]),(0,external_React_namespaceObject.useEffect)((()=>{Te.current!==P&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[P]),(0,external_React_namespaceObject.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===P,disableBase:P}}))}),[]),(0,external_React_namespaceObject.useEffect)((()=>{var e;const o=new Set(Le);let r=n;if(!r&&t&&(r=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),r)try{document.querySelectorAll(r).forEach((e=>{o.add({current:e})}))}catch(e){console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`)}const i=document.querySelector(`[id='${l}']`);if(i&&o.add({current:i}),!o.size)return()=>null;const c=null!==(e=null!=Oe?Oe:i)&&void 0!==e?e:Ce.current,s=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const o=Re(c);xe(o)}))})),a={attributes:!0,childList:!1,subtree:!1};if(c){const e=Re(c);xe(e),s.observe(c,a)}return()=>{s.disconnect()}}),[Le,Ce,Oe,l,n]),(0,external_React_namespaceObject.useEffect)((()=>{(null==z?void 0:z.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),V&&!A("border",`${V}`)&&console.warn(`[react-tooltip] "${V}" is not a valid \`border\`.`),(null==z?void 0:z.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),F&&!A("opacity",`${F}`)&&console.warn(`[react-tooltip] "${F}" is not a valid \`opacity\`.`)}),[]);let Ne=h;const $e=(0,external_React_namespaceObject.useRef)(null);if(a){const t=a({content:(null==Oe?void 0:Oe.getAttribute("data-tooltip-content"))||Q||null,activeAnchor:Oe});Ne=t?external_React_namespaceObject.createElement("div",{ref:$e,className:"react-tooltip-content-wrapper"},t):null}else Q&&(Ne=Q);te&&(Ne=external_React_namespaceObject.createElement(H,{content:te}));const Ie={forwardRef:J,id:t,anchorId:l,anchorSelect:n,className:classnames(u,Ae),classNameArrow:d,content:Ne,contentWrapperRef:$e,place:le,variant:ne,offset:ce,wrapper:he,events:be,openOnClick:b,positionStrategy:ge,middlewares:g,delayShow:ae,delayHide:de,float:ve,hidden:fe,noArrow:T,clickable:L,closeOnEsc:C,closeOnScroll:R,closeOnResize:x,openEvents:N,closeEvents:$,globalCloseEvents:I,imperativeModeOnly:B,style:z,position:D,isOpen:M,defaultIsOpen:W,border:V,opacity:F,arrowColor:K,setIsOpen:U,afterShow:X,afterHide:Y,disableTooltip:G,activeAnchor:Oe,setActiveAnchor:e=>ke(e),role:Z};return external_React_namespaceObject.createElement(q,{...Ie})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||S({css:`:root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}`,type:"core"}),e.detail.disableBase||S({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})}));

;// ./src/js/includes/ColorPickerWrapper.js

var ColorPicker = wp.components.ColorPicker;
function ColorPickerWrapper(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    _ref$allowReset = _ref.allowReset,
    allowReset = _ref$allowReset === void 0 ? false : _ref$allowReset,
    _ref$resetValue = _ref.resetValue,
    resetValue = _ref$resetValue === void 0 ? '#000' : _ref$resetValue;
  var uniqueId = 'ai1wpsa-color-picker-' + Math.random().toString(36).substring(7);
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-color-picker-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    "data-tooltip-id": uniqueId,
    className: "ai1wpsa-color-picker-holder",
    style: {
      backgroundColor: value
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-tooltip-id": uniqueId,
    className: "ai1wpsa-color-edit dashicons dashicons-edit"
  }), allowReset && !!value && /*#__PURE__*/React.createElement("i", {
    className: "ai1wpsa-color-picker-reset dashicons dashicons-image-rotate",
    onClick: function onClick() {
      return _onChange(resetValue);
    }
  }), /*#__PURE__*/React.createElement(M, {
    id: uniqueId,
    effect: "solid",
    place: "top",
    variant: "light",
    openOnClick: true,
    clickable: true,
    delayHide: 100,
    className: "ai1wpsa-color-picker-tooltip",
    positionStrategy: "absolute",
    border: true
  }, /*#__PURE__*/React.createElement(ColorPicker, {
    value: value,
    onChange: _onChange,
    enableAlpha: true
  })));
}
;// ./src/js/components/Settings/AnnouncementBar.js
function AnnouncementBar_typeof(o) { "@babel/helpers - typeof"; return AnnouncementBar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, AnnouncementBar_typeof(o); }
function AnnouncementBar_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function AnnouncementBar_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? AnnouncementBar_ownKeys(Object(t), !0).forEach(function (r) { AnnouncementBar_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : AnnouncementBar_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function AnnouncementBar_defineProperty(e, r, t) { return (r = AnnouncementBar_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function AnnouncementBar_toPropertyKey(t) { var i = AnnouncementBar_toPrimitive(t, "string"); return "symbol" == AnnouncementBar_typeof(i) ? i : i + ""; }
function AnnouncementBar_toPrimitive(t, r) { if ("object" != AnnouncementBar_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != AnnouncementBar_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AnnouncementBar_useContext = wp.element.useContext;
var AnnouncementBar_wp$components = wp.components,
  AnnouncementBar_Button = AnnouncementBar_wp$components.Button,
  AnnouncementBar_ButtonGroup = AnnouncementBar_wp$components.ButtonGroup,
  AnnouncementBar_FormToggle = AnnouncementBar_wp$components.FormToggle,
  AnnouncementBar_TextControl = AnnouncementBar_wp$components.TextControl,
  SelectControl = AnnouncementBar_wp$components.SelectControl;


function AnnouncementBar() {
  var _ai1wpsa = ai1wpsa,
    isPro = _ai1wpsa.isPro;
  var _useContext = AnnouncementBar_useContext(Contexts_SettingsContext),
    data = _useContext.data,
    setData = _useContext.setData;
  var _ref = data || {},
    _ref$announcementBar = _ref.announcementBar,
    announcementBar = _ref$announcementBar === void 0 ? false : _ref$announcementBar,
    _ref$announcementBars = _ref.announcementBars,
    announcementBars = _ref$announcementBars === void 0 ? [{
      id: 1,
      layoutType: 'default',
      layout: '1',
      title: '',
      message: 'Get up to 80% off on your first purchase!',
      btnText: 'Get Started',
      BtnUrl: '#',
      position: 'top',
      titleColor: '#fff',
      titleFontFamily: 'inherit',
      titleFontSize: 16,
      titleLineHeight: 1,
      titleLetterSpacing: 0,
      titleFontWeight: 600,
      titleFontStyle: 'normal',
      messageColor: '#fff',
      messageFontFamily: 'inherit',
      messageFontSize: 14,
      messageLineHeight: 1,
      messageFontWeight: 400,
      messageFontStyle: 'normal',
      btnColor: '#fff',
      btnBgColor: '#ff0000',
      btnFontFamily: 'inherit',
      btnFontSize: 12,
      btnLineHeight: 1,
      btnFontWeight: 600,
      btnFontStyle: 'normal',
      sticky: false,
      background: '#000',
      displayOn: 'all'
    }] : _ref$announcementBars;
  var announcementBarNextId = announcementBars.reduce(function (maxId, item) {
    return Math.max(maxId, item.id);
  }, 0) + 1;
  console.log(announcementBarNextId);
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-megaphone"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Announcement Bar Settings', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Announcement Bar', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(AnnouncementBar_FormToggle, {
    checked: announcementBar,
    onChange: function onChange() {
      return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
        announcementBar: !announcementBar
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Enable or disable the announcemnt bar.', 'all-in-one-wp-sticky-anything')))), !!announcementBar && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Announcement Bar Items', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-sub-field"
  }, announcementBars.map(function (bar, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Announcement Bar', 'all-in-one-wp-sticky-anything'), " ", index + 1)), bar.layoutType !== 'default' && /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.title,
      placeholder: wp.i18n.__('Title', 'all-in-one-wp-sticky-anything'),
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              title: value
            }) : bar;
          })
        }));
      }
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Message', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.message,
      placeholder: wp.i18n.__('Message', 'all-in-one-wp-sticky-anything'),
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              message: value
            }) : bar;
          })
        }));
      }
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Button Text', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.btnText,
      placeholder: wp.i18n.__('Button Text', 'all-in-one-wp-sticky-anything'),
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              btnText: value
            }) : bar;
          })
        }));
      }
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Button URL', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, "                                                        ", /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.BtnUrl,
      placeholder: wp.i18n.__('Button URL', 'all-in-one-wp-sticky-anything'),
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              btnUrl: value
            }) : bar;
          })
        }));
      }
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Position', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_ButtonGroup, null, /*#__PURE__*/React.createElement(AnnouncementBar_Button, {
      variant: bar.position === 'top' ? 'primary' : 'secondary',
      onClick: function onClick() {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              position: 'top'
            }) : bar;
          })
        }));
      }
    }, wp.i18n.__('Top', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(AnnouncementBar_Button, {
      variant: bar.position === 'bottom' ? 'primary' : 'secondary',
      onClick: function onClick() {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              position: 'bottom'
            }) : bar;
          })
        }));
      }
    }, wp.i18n.__('Bottom', 'all-in-one-wp-sticky-anything'))))), bar.layoutType === 'default' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title Text Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(ColorPickerWrapper, {
      value: bar.titleColor,
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              titleColor: value
            }) : bar;
          })
        }));
      },
      allowReset: true,
      resetValue: '#fff'
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title Font Family', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.titleFontFamily,
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              titleFontFamily: value
            }) : bar;
          })
        }));
      },
      placeholder: wp.i18n.__('Title Font Family', 'all-in-one-wp-sticky-anything')
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title Font Size', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.titleFontSize,
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              titleFontSize: value
            }) : bar;
          })
        }));
      },
      placeholder: wp.i18n.__('Title Font Size', 'all-in-one-wp-sticky-anything')
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title Font Weight', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.titleFontWeight,
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              titleFontWeight: value
            }) : bar;
          })
        }));
      },
      placeholder: wp.i18n.__('Title Font Weight', 'all-in-one-wp-sticky-anything')
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title Line Height', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.titleLineHeight,
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              titleLineHeight: value
            }) : bar;
          })
        }));
      },
      placeholder: wp.i18n.__('Title Line Height', 'all-in-one-wp-sticky-anything')
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title Letter Spacing', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(AnnouncementBar_TextControl, {
      value: bar.titleLetterSpacing,
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              titleLetterSpacing: value
            }) : bar;
          })
        }));
      },
      placeholder: wp.i18n.__('Title Letter Spacing', 'all-in-one-wp-sticky-anything')
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title Font Weight', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      className: "settings-field-content"
    }, /*#__PURE__*/React.createElement(SelectControl, {
      value: bar.titleFontWeight,
      className: "ai1wpsa-select-control",
      options: [{
        value: '100',
        label: wp.i18n.__('100', 'all-in-one-wp-sticky-anything')
      }, {
        value: '200',
        label: wp.i18n.__('200', 'all-in-one-wp-sticky-anything')
      }, {
        value: '300',
        label: wp.i18n.__('300', 'all-in-one-wp-sticky-anything')
      }, {
        value: '400',
        label: wp.i18n.__('400', 'all-in-one-wp-sticky-anything')
      }, {
        value: '500',
        label: wp.i18n.__('500', 'all-in-one-wp-sticky-anything')
      }, {
        value: '600',
        label: wp.i18n.__('600', 'all-in-one-wp-sticky-anything')
      }, {
        value: '700',
        label: wp.i18n.__('700', 'all-in-one-wp-sticky-anything')
      }, {
        value: '800',
        label: wp.i18n.__('800', 'all-in-one-wp-sticky-anything')
      }, {
        value: '900',
        label: wp.i18n.__('900', 'all-in-one-wp-sticky-anything')
      }],
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              titleFontWeight: value
            }) : bar;
          })
        }));
      }
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field"
    }, /*#__PURE__*/React.createElement("h5", {
      "class": "settings-field-label"
    }, wp.i18n.__('Title Font Style', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
      "class": "settings-field-content"
    }, /*#__PURE__*/React.createElement(SelectControl, {
      value: bar.titleFontStyle,
      className: "ai1wpsa-select-control",
      options: [{
        value: 'normal',
        label: wp.i18n.__('Normal', 'all-in-one-wp-sticky-anything')
      }, {
        value: 'italic',
        label: wp.i18n.__('Italic', 'all-in-one-wp-sticky-anything')
      }, {
        value: 'oblique',
        label: wp.i18n.__('Oblique', 'all-in-one-wp-sticky-anything')
      }],
      onChange: function onChange(value) {
        return setData(AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, data), {}, {
          announcementBars: announcementBars.map(function (bar, i) {
            return i === index ? AnnouncementBar_objectSpread(AnnouncementBar_objectSpread({}, bar), {}, {
              titleFontStyle: value
            }) : bar;
          })
        }));
      }
    })))));
  })))))));
}
;// ./src/js/components/Settings/ColorPickerWrapper.js

var ColorPickerWrapper_ColorPicker = wp.components.ColorPicker;
function ColorPickerWrapper_ColorPickerWrapper(_ref) {
  var id = _ref.id,
    value = _ref.value,
    _onChange = _ref.onChange,
    _ref$allowReset = _ref.allowReset,
    allowReset = _ref$allowReset === void 0 ? false : _ref$allowReset,
    _ref$resetValue = _ref.resetValue,
    resetValue = _ref$resetValue === void 0 ? '' : _ref$resetValue,
    _ref$customClassName = _ref.customClassName,
    customClassName = _ref$customClassName === void 0 ? '' : _ref$customClassName;
  var uniqueId = 'color-picker-' + Math.random().toString(36).substring(7);
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-color-picker-wrapper",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "color-holder-wrap ".concat(customClassName)
  }, /*#__PURE__*/React.createElement("div", {
    "data-tooltip-id": uniqueId,
    className: "ai1wpsa-color-holder",
    style: {
      background: value
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "color-input",
    value: value || resetValue,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-tooltip-id": uniqueId,
    className: "ai1wpsa-popup-edit color-edit dashicons dashicons-edit"
  }), allowReset && !!value && /*#__PURE__*/React.createElement("i", {
    className: "popup-settings-reset dashicons dashicons-image-rotate",
    onClick: function onClick() {
      return _onChange(resetValue);
    },
    title: wp.i18n.__('Reset', 'ultimate-addons-for-wpforms')
  }), /*#__PURE__*/React.createElement(M, {
    id: uniqueId,
    effect: "solid",
    place: "top",
    variant: "light",
    openOnClick: true,
    clickable: true,
    delayHide: 100,
    className: "eacf7-tooltip color-picker-tooltip",
    positionStrategy: "absolute",
    border: '1px solid #ccc'
  }, /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPicker, {
    color: value,
    onChange: _onChange,
    enableAlpha: true
  }))));
}
;// ./src/js/components/Settings/StickySocial.js
function StickySocial_typeof(o) { "@babel/helpers - typeof"; return StickySocial_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, StickySocial_typeof(o); }
function StickySocial_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function StickySocial_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? StickySocial_ownKeys(Object(t), !0).forEach(function (r) { StickySocial_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : StickySocial_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function StickySocial_defineProperty(e, r, t) { return (r = StickySocial_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function StickySocial_toPropertyKey(t) { var i = StickySocial_toPrimitive(t, "string"); return "symbol" == StickySocial_typeof(i) ? i : i + ""; }
function StickySocial_toPrimitive(t, r) { if ("object" != StickySocial_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != StickySocial_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var StickySocial_useContext = wp.element.useContext;
var StickySocial_wp$components = wp.components,
  StickySocial_Button = StickySocial_wp$components.Button,
  StickySocial_ButtonGroup = StickySocial_wp$components.ButtonGroup,
  StickySocial_FormToggle = StickySocial_wp$components.FormToggle,
  StickySocial_TextControl = StickySocial_wp$components.TextControl,
  StickySocial_SelectControl = StickySocial_wp$components.SelectControl;



function StickySocial() {
  var _ai1wpsa = ai1wpsa,
    isPro = _ai1wpsa.isPro,
    postTypes = _ai1wpsa.postTypes;
  var _useContext = StickySocial_useContext(Contexts_SettingsContext),
    data = _useContext.data,
    setData = _useContext.setData;
  var _ref = data || {},
    _ref$stickySocialIcon = _ref.stickySocialIcon,
    stickySocialIcon = _ref$stickySocialIcon === void 0 ? false : _ref$stickySocialIcon,
    _ref$stickySocialIcon2 = _ref.stickySocialIconType,
    stickySocialIconType = _ref$stickySocialIcon2 === void 0 ? 'dashicons' : _ref$stickySocialIcon2,
    _ref$stickySocialIcon3 = _ref.stickySocialIconPosition,
    stickySocialIconPosition = _ref$stickySocialIcon3 === void 0 ? 'left' : _ref$stickySocialIcon3,
    _ref$stickySocialIcon4 = _ref.stickySocialIconStyle,
    stickySocialIconStyle = _ref$stickySocialIcon4 === void 0 ? 'square' : _ref$stickySocialIcon4,
    _ref$stickySocialIcon5 = _ref.stickySocialIconDisplay,
    stickySocialIconDisplay = _ref$stickySocialIcon5 === void 0 ? 'everywhere' : _ref$stickySocialIcon5,
    _ref$stickySocialIcon6 = _ref.stickySocialIconDevice,
    stickySocialIconDevice = _ref$stickySocialIcon6 === void 0 ? 'all' : _ref$stickySocialIcon6,
    _ref$stickySocialIcon7 = _ref.stickySocialIcons,
    stickySocialIcons = _ref$stickySocialIcon7 === void 0 ? [] : _ref$stickySocialIcon7,
    _ref$stickySocialIcon8 = _ref.stickySocialIconsMenuBgColor,
    stickySocialIconsMenuBgColor = _ref$stickySocialIcon8 === void 0 ? '#004bcb' : _ref$stickySocialIcon8,
    _ref$stickySocialIcon9 = _ref.stickySocialIconsIconColor,
    stickySocialIconsIconColor = _ref$stickySocialIcon9 === void 0 ? '#fff' : _ref$stickySocialIcon9,
    _ref$stickySocialIcon10 = _ref.stickySocialIconsIconHoverColor,
    stickySocialIconsIconHoverColor = _ref$stickySocialIcon10 === void 0 ? '' : _ref$stickySocialIcon10,
    _ref$stickySocialIcon11 = _ref.stickySocialIconsIconBgColor,
    stickySocialIconsIconBgColor = _ref$stickySocialIcon11 === void 0 ? '#000' : _ref$stickySocialIcon11,
    _ref$stickySocialIcon12 = _ref.stickySocialIconsIconHoverBgColor,
    stickySocialIconsIconHoverBgColor = _ref$stickySocialIcon12 === void 0 ? '' : _ref$stickySocialIcon12;
  var iconOptions = [{
    value: 'dashicons',
    label: wp.i18n.__('Dashicons', 'all-in-one-wp-sticky-anything'),
    pro: false
  }, {
    value: 'fontawesome',
    label: wp.i18n.__('Fontawesome', 'all-in-one-wp-sticky-anything'),
    pro: true
  }, {
    value: 'bootstrap',
    label: wp.i18n.__('Bootstrap', 'all-in-one-wp-sticky-anything'),
    pro: true
  }, {
    value: 'remixicon',
    label: wp.i18n.__('RemixIcon', 'all-in-one-wp-sticky-anything'),
    pro: true
  }, {
    value: 'lineicon',
    label: wp.i18n.__('Lineicons', 'all-in-one-wp-sticky-anything'),
    pro: true
  }];
  var displayLocationOptions = [{
    value: 'everywhere',
    label: wp.i18n.__('Everywhere', 'all-in-one-wp-sticky-anything')
  }, {
    value: 'home',
    label: wp.i18n.__('Homepage', 'all-in-one-wp-sticky-anything'),
    pro: true
  }, {
    value: 'blog',
    label: wp.i18n.__('Posts Page', 'all-in-one-wp-sticky-anything'),
    pro: true
  }].concat(_toConsumableArray(postTypes.map(function (postType) {
    return StickySocial_objectSpread(StickySocial_objectSpread({}, postType), {}, {
      pro: true
    });
  })));
  var positionOptions = [{
    value: 'left',
    label: wp.i18n.__('Left', 'all-in-one-wp-sticky-anything')
  }, {
    value: 'right',
    label: wp.i18n.__('Right', 'all-in-one-wp-sticky-anything')
  }, {
    value: 'bottom',
    label: wp.i18n.__('Bottom', 'all-in-one-wp-sticky-anything'),
    pro: true
  }];
  var styleOptions = [{
    value: 'circle',
    label: wp.i18n.__('Circle', 'all-in-one-wp-sticky-anything')
  }, {
    value: 'square',
    label: wp.i18n.__('Square', 'all-in-one-wp-sticky-anything')
  }, {
    value: 'rounded',
    label: wp.i18n.__('Rounded', 'all-in-one-wp-sticky-anything')
  }];
  var deviceOptions = [{
    value: 'all',
    label: wp.i18n.__('All', 'all-in-one-wp-sticky-anything')
  }, {
    value: 'desktop',
    label: wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything'),
    pro: true
  }, {
    value: 'mobile',
    label: wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything'),
    pro: true
  }];
  var socialIconOptions = {
    dashicons: [{
      label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'),
      value: ''
    }, {
      label: wp.i18n.__('Amazon', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-amazon'
    }, {
      label: wp.i18n.__('bbPress', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-bbpress'
    }, {
      label: wp.i18n.__('BuddyPress', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-buddypress'
    }, {
      label: wp.i18n.__('Facebook', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-facebook'
    }, {
      label: wp.i18n.__('Facebook (alt)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-facebook-alt'
    }, {
      label: wp.i18n.__('Google', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-google'
    }, {
      label: wp.i18n.__('Twitter', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-twitter'
    }, {
      label: wp.i18n.__('Twitter (alt)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-twitter-alt'
    }, {
      label: wp.i18n.__('Instagram', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-instagram'
    }, {
      label: wp.i18n.__('LinkedIn', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-linkedin'
    }, {
      label: wp.i18n.__('YouTube', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-youtube'
    }, {
      label: wp.i18n.__('Pinterest', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-pinterest'
    }, {
      label: wp.i18n.__('Podio', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-podio'
    }, {
      label: wp.i18n.__('Reddit', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-reddit'
    }, {
      label: wp.i18n.__('WhatsApp', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-whatsapp'
    }, {
      label: wp.i18n.__('WordPress', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-wordpress'
    }, {
      label: wp.i18n.__('WordPress (alt)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-wordpress-alt'
    }, {
      label: wp.i18n.__('Twitch', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-twitch'
    }, {
      label: wp.i18n.__('Spotify', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-spotify'
    }, {
      label: wp.i18n.__('RSS', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-rss'
    }, {
      label: wp.i18n.__('Email', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-email'
    }, {
      label: wp.i18n.__('Email (alt)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-email-alt'
    }, {
      label: wp.i18n.__('Email (alt2)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-email-alt2'
    }, {
      label: wp.i18n.__('Phone', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-phone'
    }, {
      label: wp.i18n.__('Links', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-links'
    }, {
      label: wp.i18n.__('Share', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-share'
    }, {
      label: wp.i18n.__('Share (alt)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-share-alt'
    }, {
      label: wp.i18n.__('Share (alt2)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-share-alt2'
    }, {
      label: wp.i18n.__('Site', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-admin-site'
    }, {
      label: wp.i18n.__('Site (alt)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-admin-site-alt'
    }, {
      label: wp.i18n.__('Site (alt2)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-admin-site-alt2'
    }, {
      label: wp.i18n.__('Site (alt3)', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-admin-site-alt3'
    }, {
      label: wp.i18n.__('Xing', 'all-in-one-wp-sticky-anything'),
      value: 'dashicons-xing'
    }],
    fontawesome: [{
      label: wp.i18n.__('42 Group', 'all-in-one-wp-sticky-anything'),
      value: 'fa-42-group'
    }, {
      label: wp.i18n.__('500px', 'all-in-one-wp-sticky-anything'),
      value: 'fa-500px'
    }, {
      label: wp.i18n.__('Accusoft', 'all-in-one-wp-sticky-anything'),
      value: 'fa-accusoft'
    }, {
      label: wp.i18n.__('Accessible Icon', 'all-in-one-wp-sticky-anything'),
      value: 'fa-accessible-icon'
    }, {
      label: wp.i18n.__('ADN', 'all-in-one-wp-sticky-anything'),
      value: 'fa-adn'
    }, {
      label: wp.i18n.__('Affiliatetheme', 'all-in-one-wp-sticky-anything'),
      value: 'fa-affiliatetheme'
    }, {
      label: wp.i18n.__('Airbnb', 'all-in-one-wp-sticky-anything'),
      value: 'fa-airbnb'
    }, {
      label: wp.i18n.__('Algolia', 'all-in-one-wp-sticky-anything'),
      value: 'fa-algolia'
    }, {
      label: wp.i18n.__('Alipay', 'all-in-one-wp-sticky-anything'),
      value: 'fa-alipay'
    }, {
      label: wp.i18n.__('Amazon', 'all-in-one-wp-sticky-anything'),
      value: 'fa-amazon'
    }, {
      label: wp.i18n.__('Amazon Pay', 'all-in-one-wp-sticky-anything'),
      value: 'fa-amazon-pay'
    }, {
      label: wp.i18n.__('Amilia', 'all-in-one-wp-sticky-anything'),
      value: 'fa-amilia'
    }, {
      label: wp.i18n.__('Android', 'all-in-one-wp-sticky-anything'),
      value: 'fa-android'
    }, {
      label: wp.i18n.__('AngelList', 'all-in-one-wp-sticky-anything'),
      value: 'fa-angellist'
    }, {
      label: wp.i18n.__('Angry Creative', 'all-in-one-wp-sticky-anything'),
      value: 'fa-angrycreative'
    }, {
      label: wp.i18n.__('Angular', 'all-in-one-wp-sticky-anything'),
      value: 'fa-angular'
    }, {
      label: wp.i18n.__('App Store', 'all-in-one-wp-sticky-anything'),
      value: 'fa-app-store'
    }, {
      label: wp.i18n.__('App Store iOS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-app-store-ios'
    }, {
      label: wp.i18n.__('Apper', 'all-in-one-wp-sticky-anything'),
      value: 'fa-apper'
    }, {
      label: wp.i18n.__('Apple', 'all-in-one-wp-sticky-anything'),
      value: 'fa-apple'
    }, {
      label: wp.i18n.__('Apple Pay', 'all-in-one-wp-sticky-anything'),
      value: 'fa-apple-pay'
    }, {
      label: wp.i18n.__('ArtStation', 'all-in-one-wp-sticky-anything'),
      value: 'fa-artstation'
    }, {
      label: wp.i18n.__('Asymmetrik', 'all-in-one-wp-sticky-anything'),
      value: 'fa-asymmetrik'
    }, {
      label: wp.i18n.__('Atlassian', 'all-in-one-wp-sticky-anything'),
      value: 'fa-atlassian'
    }, {
      label: wp.i18n.__('Audible', 'all-in-one-wp-sticky-anything'),
      value: 'fa-audible'
    }, {
      label: wp.i18n.__('Autoprefixer', 'all-in-one-wp-sticky-anything'),
      value: 'fa-autoprefixer'
    }, {
      label: wp.i18n.__('Avianex', 'all-in-one-wp-sticky-anything'),
      value: 'fa-avianex'
    }, {
      label: wp.i18n.__('Aviato', 'all-in-one-wp-sticky-anything'),
      value: 'fa-aviato'
    }, {
      label: wp.i18n.__('AWS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-aws'
    }, {
      label: wp.i18n.__('Bandcamp', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bandcamp'
    }, {
      label: wp.i18n.__('Battle.net', 'all-in-one-wp-sticky-anything'),
      value: 'fa-battle-net'
    }, {
      label: wp.i18n.__('Behance', 'all-in-one-wp-sticky-anything'),
      value: 'fa-behance'
    }, {
      label: wp.i18n.__('Bilibili', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bilibili'
    }, {
      label: wp.i18n.__('Bimobject', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bimobject'
    }, {
      label: wp.i18n.__('Bitcoin', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bitcoin'
    }, {
      label: wp.i18n.__('Bitbucket', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bitbucket'
    }, {
      label: wp.i18n.__('Bity', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bity'
    }, {
      label: wp.i18n.__('Black Tie', 'all-in-one-wp-sticky-anything'),
      value: 'fa-black-tie'
    }, {
      label: wp.i18n.__('BlackBerry', 'all-in-one-wp-sticky-anything'),
      value: 'fa-blackberry'
    }, {
      label: wp.i18n.__('Blogger', 'all-in-one-wp-sticky-anything'),
      value: 'fa-blogger'
    }, {
      label: wp.i18n.__('Blogger B', 'all-in-one-wp-sticky-anything'),
      value: 'fa-blogger-b'
    }, {
      label: wp.i18n.__('Bluetooth', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bluetooth'
    }, {
      label: wp.i18n.__('Bluetooth B', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bluetooth-b'
    }, {
      label: wp.i18n.__('Bootstrap', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bootstrap'
    }, {
      label: wp.i18n.__('Bots', 'all-in-one-wp-sticky-anything'),
      value: 'fa-bots'
    }, {
      label: wp.i18n.__('Brave', 'all-in-one-wp-sticky-anything'),
      value: 'fa-brave'
    }, {
      label: wp.i18n.__('Brave Reverse', 'all-in-one-wp-sticky-anything'),
      value: 'fa-brave-reverse'
    }, {
      label: wp.i18n.__('BTC', 'all-in-one-wp-sticky-anything'),
      value: 'fa-btc'
    }, {
      label: wp.i18n.__('Buffer', 'all-in-one-wp-sticky-anything'),
      value: 'fa-buffer'
    }, {
      label: wp.i18n.__('Buy n Large', 'all-in-one-wp-sticky-anything'),
      value: 'fa-buy-n-large'
    }, {
      label: wp.i18n.__('BuySellAds', 'all-in-one-wp-sticky-anything'),
      value: 'fa-buysellads'
    }, {
      label: wp.i18n.__('Buromobelexperte', 'all-in-one-wp-sticky-anything'),
      value: 'fa-buromobelexperte'
    }, {
      label: wp.i18n.__('CC Amazon Pay', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-amazon-pay'
    }, {
      label: wp.i18n.__('CC Amex', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-amex'
    }, {
      label: wp.i18n.__('CC Apple Pay', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-apple-pay'
    }, {
      label: wp.i18n.__('CC Diners Club', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-diners-club'
    }, {
      label: wp.i18n.__('CC Discover', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-discover'
    }, {
      label: wp.i18n.__('CC JCB', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-jcb'
    }, {
      label: wp.i18n.__('CC Mastercard', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-mastercard'
    }, {
      label: wp.i18n.__('CC PayPal', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-paypal'
    }, {
      label: wp.i18n.__('CC Stripe', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-stripe'
    }, {
      label: wp.i18n.__('CC Visa', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cc-visa'
    }, {
      label: wp.i18n.__('Canadian Maple Leaf', 'all-in-one-wp-sticky-anything'),
      value: 'fa-canadian-maple-leaf'
    }, {
      label: wp.i18n.__('Cash App', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cash-app'
    }, {
      label: wp.i18n.__('Centercode', 'all-in-one-wp-sticky-anything'),
      value: 'fa-centercode'
    }, {
      label: wp.i18n.__('CentOS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-centos'
    }, {
      label: wp.i18n.__('Chrome', 'all-in-one-wp-sticky-anything'),
      value: 'fa-chrome'
    }, {
      label: wp.i18n.__('Chromecast', 'all-in-one-wp-sticky-anything'),
      value: 'fa-chromecast'
    }, {
      label: wp.i18n.__('Cloudflare', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cloudflare'
    }, {
      label: wp.i18n.__('Cloudscale', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cloudscale'
    }, {
      label: wp.i18n.__('Cloudsmith', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cloudsmith'
    }, {
      label: wp.i18n.__('Cloudversify', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cloudversify'
    }, {
      label: wp.i18n.__('Cmplid', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cmplid'
    }, {
      label: wp.i18n.__('Codie Pie', 'all-in-one-wp-sticky-anything'),
      value: 'fa-codiepie'
    }, {
      label: wp.i18n.__('CodePen', 'all-in-one-wp-sticky-anything'),
      value: 'fa-codepen'
    }, {
      label: wp.i18n.__('Confluence', 'all-in-one-wp-sticky-anything'),
      value: 'fa-confluence'
    }, {
      label: wp.i18n.__('Connect Develop', 'all-in-one-wp-sticky-anything'),
      value: 'fa-connectdevelop'
    }, {
      label: wp.i18n.__('Contao', 'all-in-one-wp-sticky-anything'),
      value: 'fa-contao'
    }, {
      label: wp.i18n.__('Cotton Bureau', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cotton-bureau'
    }, {
      label: wp.i18n.__('cPanel', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cpanel'
    }, {
      label: wp.i18n.__('Creative Commons', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons'
    }, {
      label: wp.i18n.__('Creative Commons BY', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-by'
    }, {
      label: wp.i18n.__('Creative Commons NC', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-nc'
    }, {
      label: wp.i18n.__('Creative Commons NC EU', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-nc-eu'
    }, {
      label: wp.i18n.__('Creative Commons NC JP', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-nc-jp'
    }, {
      label: wp.i18n.__('Creative Commons ND', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-nd'
    }, {
      label: wp.i18n.__('Creative Commons PD', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-pd'
    }, {
      label: wp.i18n.__('Creative Commons PD Alt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-pd-alt'
    }, {
      label: wp.i18n.__('Creative Commons Remix', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-remix'
    }, {
      label: wp.i18n.__('Creative Commons SA', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-sa'
    }, {
      label: wp.i18n.__('Creative Commons Sampling', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-sampling'
    }, {
      label: wp.i18n.__('Creative Commons Sampling Plus', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-sampling-plus'
    }, {
      label: wp.i18n.__('Creative Commons Share', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-share'
    }, {
      label: wp.i18n.__('Creative Commons Zero', 'all-in-one-wp-sticky-anything'),
      value: 'fa-creative-commons-zero'
    }, {
      label: wp.i18n.__('Critical Role', 'all-in-one-wp-sticky-anything'),
      value: 'fa-critical-role'
    }, {
      label: wp.i18n.__('CSS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-css'
    }, {
      label: wp.i18n.__('CSS3', 'all-in-one-wp-sticky-anything'),
      value: 'fa-css3'
    }, {
      label: wp.i18n.__('CSS3 Alt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-css3-alt'
    }, {
      label: wp.i18n.__('Cuttlefish', 'all-in-one-wp-sticky-anything'),
      value: 'fa-cuttlefish'
    }, {
      label: wp.i18n.__('D and D', 'all-in-one-wp-sticky-anything'),
      value: 'fa-d-and-d'
    }, {
      label: wp.i18n.__('D and D Beyond', 'all-in-one-wp-sticky-anything'),
      value: 'fa-d-and-d-beyond'
    }, {
      label: wp.i18n.__('Dailymotion', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dailymotion'
    }, {
      label: wp.i18n.__('Dart Lang', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dart-lang'
    }, {
      label: wp.i18n.__('Dashcube', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dashcube'
    }, {
      label: wp.i18n.__('Deezer', 'all-in-one-wp-sticky-anything'),
      value: 'fa-deezer'
    }, {
      label: wp.i18n.__('Debian', 'all-in-one-wp-sticky-anything'),
      value: 'fa-debian'
    }, {
      label: wp.i18n.__('Delicious', 'all-in-one-wp-sticky-anything'),
      value: 'fa-delicious'
    }, {
      label: wp.i18n.__('Deploydog', 'all-in-one-wp-sticky-anything'),
      value: 'fa-deploydog'
    }, {
      label: wp.i18n.__('Deskpro', 'all-in-one-wp-sticky-anything'),
      value: 'fa-deskpro'
    }, {
      label: wp.i18n.__('Dev', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dev'
    }, {
      label: wp.i18n.__('DeviantArt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-deviantart'
    }, {
      label: wp.i18n.__('DHL', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dhl'
    }, {
      label: wp.i18n.__('Diaspora', 'all-in-one-wp-sticky-anything'),
      value: 'fa-diaspora'
    }, {
      label: wp.i18n.__('Digg', 'all-in-one-wp-sticky-anything'),
      value: 'fa-digg'
    }, {
      label: wp.i18n.__('Digital Ocean', 'all-in-one-wp-sticky-anything'),
      value: 'fa-digital-ocean'
    }, {
      label: wp.i18n.__('Discord', 'all-in-one-wp-sticky-anything'),
      value: 'fa-discord'
    }, {
      label: wp.i18n.__('Discourse', 'all-in-one-wp-sticky-anything'),
      value: 'fa-discourse'
    }, {
      label: wp.i18n.__('Disqus', 'all-in-one-wp-sticky-anything'),
      value: 'fa-disqus'
    }, {
      label: wp.i18n.__('DocHub', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dochub'
    }, {
      label: wp.i18n.__('Docker', 'all-in-one-wp-sticky-anything'),
      value: 'fa-docker'
    }, {
      label: wp.i18n.__('Draft2digital', 'all-in-one-wp-sticky-anything'),
      value: 'fa-draft2digital'
    }, {
      label: wp.i18n.__('Dribbble', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dribbble'
    }, {
      label: wp.i18n.__('Dropbox', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dropbox'
    }, {
      label: wp.i18n.__('Drupal', 'all-in-one-wp-sticky-anything'),
      value: 'fa-drupal'
    }, {
      label: wp.i18n.__('Duolingo', 'all-in-one-wp-sticky-anything'),
      value: 'fa-duolingo'
    }, {
      label: wp.i18n.__('Dyalog', 'all-in-one-wp-sticky-anything'),
      value: 'fa-dyalog'
    }, {
      label: wp.i18n.__('Earlybirds', 'all-in-one-wp-sticky-anything'),
      value: 'fa-earlybirds'
    }, {
      label: wp.i18n.__('eBay', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ebay'
    }, {
      label: wp.i18n.__('Edge', 'all-in-one-wp-sticky-anything'),
      value: 'fa-edge'
    }, {
      label: wp.i18n.__('Edge Legacy', 'all-in-one-wp-sticky-anything'),
      value: 'fa-edge-legacy'
    }, {
      label: wp.i18n.__('Elementor', 'all-in-one-wp-sticky-anything'),
      value: 'fa-elementor'
    }, {
      label: wp.i18n.__('Eleventy', 'all-in-one-wp-sticky-anything'),
      value: 'fa-eleventy'
    }, {
      label: wp.i18n.__('Ello', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ello'
    }, {
      label: wp.i18n.__('Ember', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ember'
    }, {
      label: wp.i18n.__('Empire', 'all-in-one-wp-sticky-anything'),
      value: 'fa-empire'
    }, {
      label: wp.i18n.__('Envira', 'all-in-one-wp-sticky-anything'),
      value: 'fa-envira'
    }, {
      label: wp.i18n.__('Erlang', 'all-in-one-wp-sticky-anything'),
      value: 'fa-erlang'
    }, {
      label: wp.i18n.__('Ethereum', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ethereum'
    }, {
      label: wp.i18n.__('Etsy', 'all-in-one-wp-sticky-anything'),
      value: 'fa-etsy'
    }, {
      label: wp.i18n.__('Evernote', 'all-in-one-wp-sticky-anything'),
      value: 'fa-evernote'
    }, {
      label: wp.i18n.__('ExpeditedSSL', 'all-in-one-wp-sticky-anything'),
      value: 'fa-expeditedssl'
    }, {
      label: wp.i18n.__('Fantasy Flight Games', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fantasy-flight-games'
    }, {
      label: wp.i18n.__('Facebook', 'all-in-one-wp-sticky-anything'),
      value: 'fa-facebook'
    }, {
      label: wp.i18n.__('Facebook F', 'all-in-one-wp-sticky-anything'),
      value: 'fa-facebook-f'
    }, {
      label: wp.i18n.__('Facebook Messenger', 'all-in-one-wp-sticky-anything'),
      value: 'fa-facebook-messenger'
    }, {
      label: wp.i18n.__('FedEx', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fedex'
    }, {
      label: wp.i18n.__('Fedora', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fedora'
    }, {
      label: wp.i18n.__('Figma', 'all-in-one-wp-sticky-anything'),
      value: 'fa-figma'
    }, {
      label: wp.i18n.__('Files Pinwheel', 'all-in-one-wp-sticky-anything'),
      value: 'fa-files-pinwheel'
    }, {
      label: wp.i18n.__('Firefox', 'all-in-one-wp-sticky-anything'),
      value: 'fa-firefox'
    }, {
      label: wp.i18n.__('Firefox Browser', 'all-in-one-wp-sticky-anything'),
      value: 'fa-firefox-browser'
    }, {
      label: wp.i18n.__('First Order', 'all-in-one-wp-sticky-anything'),
      value: 'fa-first-order'
    }, {
      label: wp.i18n.__('First Order Alt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-first-order-alt'
    }, {
      label: wp.i18n.__('Firstdraft', 'all-in-one-wp-sticky-anything'),
      value: 'fa-firstdraft'
    }, {
      label: wp.i18n.__('Flickr', 'all-in-one-wp-sticky-anything'),
      value: 'fa-flickr'
    }, {
      label: wp.i18n.__('Flipboard', 'all-in-one-wp-sticky-anything'),
      value: 'fa-flipboard'
    }, {
      label: wp.i18n.__('Flutter', 'all-in-one-wp-sticky-anything'),
      value: 'fa-flutter'
    }, {
      label: wp.i18n.__('Fly', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fly'
    }, {
      label: wp.i18n.__('Font Awesome', 'all-in-one-wp-sticky-anything'),
      value: 'fa-font-awesome'
    }, {
      label: wp.i18n.__('Fonticons', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fonticons'
    }, {
      label: wp.i18n.__('Fonticons Fi', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fonticons-fi'
    }, {
      label: wp.i18n.__('Fort Awesome', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fort-awesome'
    }, {
      label: wp.i18n.__('Fort Awesome Alt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fort-awesome-alt'
    }, {
      label: wp.i18n.__('Forumbee', 'all-in-one-wp-sticky-anything'),
      value: 'fa-forumbee'
    }, {
      label: wp.i18n.__('Foursquare', 'all-in-one-wp-sticky-anything'),
      value: 'fa-foursquare'
    }, {
      label: wp.i18n.__('Free Code Camp', 'all-in-one-wp-sticky-anything'),
      value: 'fa-free-code-camp'
    }, {
      label: wp.i18n.__('FreeBSD', 'all-in-one-wp-sticky-anything'),
      value: 'fa-freebsd'
    }, {
      label: wp.i18n.__('Fulcrum', 'all-in-one-wp-sticky-anything'),
      value: 'fa-fulcrum'
    }, {
      label: wp.i18n.__('Galactic Republic', 'all-in-one-wp-sticky-anything'),
      value: 'fa-galactic-republic'
    }, {
      label: wp.i18n.__('Galactic Senate', 'all-in-one-wp-sticky-anything'),
      value: 'fa-galactic-senate'
    }, {
      label: wp.i18n.__('Get Pocket', 'all-in-one-wp-sticky-anything'),
      value: 'fa-get-pocket'
    }, {
      label: wp.i18n.__('GG', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gg'
    }, {
      label: wp.i18n.__('GG Circle', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gg-circle'
    }, {
      label: wp.i18n.__('Git', 'all-in-one-wp-sticky-anything'),
      value: 'fa-git'
    }, {
      label: wp.i18n.__('Git Alt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-git-alt'
    }, {
      label: wp.i18n.__('GitHub', 'all-in-one-wp-sticky-anything'),
      value: 'fa-github'
    }, {
      label: wp.i18n.__('GitHub Alt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-github-alt'
    }, {
      label: wp.i18n.__('GitKraken', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gitkraken'
    }, {
      label: wp.i18n.__('GitLab', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gitlab'
    }, {
      label: wp.i18n.__('Gitter', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gitter'
    }, {
      label: wp.i18n.__('Glide', 'all-in-one-wp-sticky-anything'),
      value: 'fa-glide'
    }, {
      label: wp.i18n.__('Glide G', 'all-in-one-wp-sticky-anything'),
      value: 'fa-glide-g'
    }, {
      label: wp.i18n.__('Gofore', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gofore'
    }, {
      label: wp.i18n.__('Golang', 'all-in-one-wp-sticky-anything'),
      value: 'fa-golang'
    }, {
      label: wp.i18n.__('Goodreads', 'all-in-one-wp-sticky-anything'),
      value: 'fa-goodreads'
    }, {
      label: wp.i18n.__('Goodreads G', 'all-in-one-wp-sticky-anything'),
      value: 'fa-goodreads-g'
    }, {
      label: wp.i18n.__('Google', 'all-in-one-wp-sticky-anything'),
      value: 'fa-google'
    }, {
      label: wp.i18n.__('Google Drive', 'all-in-one-wp-sticky-anything'),
      value: 'fa-google-drive'
    }, {
      label: wp.i18n.__('Google Pay', 'all-in-one-wp-sticky-anything'),
      value: 'fa-google-pay'
    }, {
      label: wp.i18n.__('Google Play', 'all-in-one-wp-sticky-anything'),
      value: 'fa-google-play'
    }, {
      label: wp.i18n.__('Google Plus', 'all-in-one-wp-sticky-anything'),
      value: 'fa-google-plus'
    }, {
      label: wp.i18n.__('Google Plus G', 'all-in-one-wp-sticky-anything'),
      value: 'fa-google-plus-g'
    }, {
      label: wp.i18n.__('Google Scholar', 'all-in-one-wp-sticky-anything'),
      value: 'fa-google-scholar'
    }, {
      label: wp.i18n.__('Google Wallet', 'all-in-one-wp-sticky-anything'),
      value: 'fa-google-wallet'
    }, {
      label: wp.i18n.__('Gratipay', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gratipay'
    }, {
      label: wp.i18n.__('Grav', 'all-in-one-wp-sticky-anything'),
      value: 'fa-grav'
    }, {
      label: wp.i18n.__('Gripfire', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gripfire'
    }, {
      label: wp.i18n.__('Grunt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-grunt'
    }, {
      label: wp.i18n.__('Guilded', 'all-in-one-wp-sticky-anything'),
      value: 'fa-guilded'
    }, {
      label: wp.i18n.__('Gulp', 'all-in-one-wp-sticky-anything'),
      value: 'fa-gulp'
    }, {
      label: wp.i18n.__('Hacker News', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hacker-news'
    }, {
      label: wp.i18n.__('HackerRank', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hackerrank'
    }, {
      label: wp.i18n.__('Hashnode', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hashnode'
    }, {
      label: wp.i18n.__('Hire A Helper', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hire-a-helper'
    }, {
      label: wp.i18n.__('Hive', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hive'
    }, {
      label: wp.i18n.__('HIPS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hips'
    }, {
      label: wp.i18n.__('Hooli', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hooli'
    }, {
      label: wp.i18n.__('Hornbill', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hornbill'
    }, {
      label: wp.i18n.__('Hotjar', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hotjar'
    }, {
      label: wp.i18n.__('Houzz', 'all-in-one-wp-sticky-anything'),
      value: 'fa-houzz'
    }, {
      label: wp.i18n.__('HTML5', 'all-in-one-wp-sticky-anything'),
      value: 'fa-html5'
    }, {
      label: wp.i18n.__('HubSpot', 'all-in-one-wp-sticky-anything'),
      value: 'fa-hubspot'
    }, {
      label: wp.i18n.__('Ideal', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ideal'
    }, {
      label: wp.i18n.__('IMDB', 'all-in-one-wp-sticky-anything'),
      value: 'fa-imdb'
    }, {
      label: wp.i18n.__('Instagram', 'all-in-one-wp-sticky-anything'),
      value: 'fa-instagram'
    }, {
      label: wp.i18n.__('Instalod', 'all-in-one-wp-sticky-anything'),
      value: 'fa-instalod'
    }, {
      label: wp.i18n.__('Intercom', 'all-in-one-wp-sticky-anything'),
      value: 'fa-intercom'
    }, {
      label: wp.i18n.__('Internet Explorer', 'all-in-one-wp-sticky-anything'),
      value: 'fa-internet-explorer'
    }, {
      label: wp.i18n.__('Invision', 'all-in-one-wp-sticky-anything'),
      value: 'fa-invision'
    }, {
      label: wp.i18n.__('IOXHost', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ioxhost'
    }, {
      label: wp.i18n.__('Itch.io', 'all-in-one-wp-sticky-anything'),
      value: 'fa-itch-io'
    }, {
      label: wp.i18n.__('iTunes', 'all-in-one-wp-sticky-anything'),
      value: 'fa-itunes'
    }, {
      label: wp.i18n.__('iTunes Note', 'all-in-one-wp-sticky-anything'),
      value: 'fa-itunes-note'
    }, {
      label: wp.i18n.__('Java', 'all-in-one-wp-sticky-anything'),
      value: 'fa-java'
    }, {
      label: wp.i18n.__('Jedi Order', 'all-in-one-wp-sticky-anything'),
      value: 'fa-jedi-order'
    }, {
      label: wp.i18n.__('Jenkins', 'all-in-one-wp-sticky-anything'),
      value: 'fa-jenkins'
    }, {
      label: wp.i18n.__('Jira', 'all-in-one-wp-sticky-anything'),
      value: 'fa-jira'
    }, {
      label: wp.i18n.__('Joomla', 'all-in-one-wp-sticky-anything'),
      value: 'fa-joomla'
    }, {
      label: wp.i18n.__('Joget', 'all-in-one-wp-sticky-anything'),
      value: 'fa-joget'
    }, {
      label: wp.i18n.__('JS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-js'
    }, {
      label: wp.i18n.__('JSFiddle', 'all-in-one-wp-sticky-anything'),
      value: 'fa-jsfiddle'
    }, {
      label: wp.i18n.__('JXL', 'all-in-one-wp-sticky-anything'),
      value: 'fa-jxl'
    }, {
      label: wp.i18n.__('Kaggle', 'all-in-one-wp-sticky-anything'),
      value: 'fa-kaggle'
    }, {
      label: wp.i18n.__('Kakao Talk', 'all-in-one-wp-sticky-anything'),
      value: 'fa-kakao-talk'
    }, {
      label: wp.i18n.__('Keybase', 'all-in-one-wp-sticky-anything'),
      value: 'fa-keybase'
    }, {
      label: wp.i18n.__('KeyCDN', 'all-in-one-wp-sticky-anything'),
      value: 'fa-keycdn'
    }, {
      label: wp.i18n.__('Kickstarter', 'all-in-one-wp-sticky-anything'),
      value: 'fa-kickstarter'
    }, {
      label: wp.i18n.__('Kickstarter K', 'all-in-one-wp-sticky-anything'),
      value: 'fa-kickstarter-k'
    }, {
      label: wp.i18n.__('Korvue', 'all-in-one-wp-sticky-anything'),
      value: 'fa-korvue'
    }, {
      label: wp.i18n.__('Laravel', 'all-in-one-wp-sticky-anything'),
      value: 'fa-laravel'
    }, {
      label: wp.i18n.__('Last.fm', 'all-in-one-wp-sticky-anything'),
      value: 'fa-lastfm'
    }, {
      label: wp.i18n.__('Leanpub', 'all-in-one-wp-sticky-anything'),
      value: 'fa-leanpub'
    }, {
      label: wp.i18n.__('Less', 'all-in-one-wp-sticky-anything'),
      value: 'fa-less'
    }, {
      label: wp.i18n.__('Letterboxd', 'all-in-one-wp-sticky-anything'),
      value: 'fa-letterboxd'
    }, {
      label: wp.i18n.__('Line', 'all-in-one-wp-sticky-anything'),
      value: 'fa-line'
    }, {
      label: wp.i18n.__('LinkedIn', 'all-in-one-wp-sticky-anything'),
      value: 'fa-linkedin'
    }, {
      label: wp.i18n.__('LinkedIn In', 'all-in-one-wp-sticky-anything'),
      value: 'fa-linkedin-in'
    }, {
      label: wp.i18n.__('Linode', 'all-in-one-wp-sticky-anything'),
      value: 'fa-linode'
    }, {
      label: wp.i18n.__('Linktree', 'all-in-one-wp-sticky-anything'),
      value: 'fa-linktree'
    }, {
      label: wp.i18n.__('Linux', 'all-in-one-wp-sticky-anything'),
      value: 'fa-linux'
    }, {
      label: wp.i18n.__('Lumon', 'all-in-one-wp-sticky-anything'),
      value: 'fa-lumon'
    }, {
      label: wp.i18n.__('Lumon Drop', 'all-in-one-wp-sticky-anything'),
      value: 'fa-lumon-drop'
    }, {
      label: wp.i18n.__('Lyft', 'all-in-one-wp-sticky-anything'),
      value: 'fa-lyft'
    }, {
      label: wp.i18n.__('Magento', 'all-in-one-wp-sticky-anything'),
      value: 'fa-magento'
    }, {
      label: wp.i18n.__('Mailchimp', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mailchimp'
    }, {
      label: wp.i18n.__('Mandalorian', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mandalorian'
    }, {
      label: wp.i18n.__('Markdown', 'all-in-one-wp-sticky-anything'),
      value: 'fa-markdown'
    }, {
      label: wp.i18n.__('Mastodon', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mastodon'
    }, {
      label: wp.i18n.__('MaxCDN', 'all-in-one-wp-sticky-anything'),
      value: 'fa-maxcdn'
    }, {
      label: wp.i18n.__('MDB', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mdb'
    }, {
      label: wp.i18n.__('Medapps', 'all-in-one-wp-sticky-anything'),
      value: 'fa-medapps'
    }, {
      label: wp.i18n.__('MedRT', 'all-in-one-wp-sticky-anything'),
      value: 'fa-medrt'
    }, {
      label: wp.i18n.__('Medium', 'all-in-one-wp-sticky-anything'),
      value: 'fa-medium'
    }, {
      label: wp.i18n.__('Meetup', 'all-in-one-wp-sticky-anything'),
      value: 'fa-meetup'
    }, {
      label: wp.i18n.__('Megaport', 'all-in-one-wp-sticky-anything'),
      value: 'fa-megaport'
    }, {
      label: wp.i18n.__('Mendeley', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mendeley'
    }, {
      label: wp.i18n.__('Meta', 'all-in-one-wp-sticky-anything'),
      value: 'fa-meta'
    }, {
      label: wp.i18n.__('Microsoft', 'all-in-one-wp-sticky-anything'),
      value: 'fa-microsoft'
    }, {
      label: wp.i18n.__('Mintbit', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mintbit'
    }, {
      label: wp.i18n.__('Mix', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mix'
    }, {
      label: wp.i18n.__('Mixcloud', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mixcloud'
    }, {
      label: wp.i18n.__('Mixer', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mixer'
    }, {
      label: wp.i18n.__('Mizuni', 'all-in-one-wp-sticky-anything'),
      value: 'fa-mizuni'
    }, {
      label: wp.i18n.__('MODX', 'all-in-one-wp-sticky-anything'),
      value: 'fa-modx'
    }, {
      label: wp.i18n.__('Monero', 'all-in-one-wp-sticky-anything'),
      value: 'fa-monero'
    }, {
      label: wp.i18n.__('Napster', 'all-in-one-wp-sticky-anything'),
      value: 'fa-napster'
    }, {
      label: wp.i18n.__('Neos', 'all-in-one-wp-sticky-anything'),
      value: 'fa-neos'
    }, {
      label: wp.i18n.__('NFC Directional', 'all-in-one-wp-sticky-anything'),
      value: 'fa-nfc-directional'
    }, {
      label: wp.i18n.__('NFC Symbol', 'all-in-one-wp-sticky-anything'),
      value: 'fa-nfc-symbol'
    }, {
      label: wp.i18n.__('Nimblr', 'all-in-one-wp-sticky-anything'),
      value: 'fa-nimblr'
    }, {
      label: wp.i18n.__('Node', 'all-in-one-wp-sticky-anything'),
      value: 'fa-node'
    }, {
      label: wp.i18n.__('Node JS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-node-js'
    }, {
      label: wp.i18n.__('Notion', 'all-in-one-wp-sticky-anything'),
      value: 'fa-notion'
    }, {
      label: wp.i18n.__('NPM', 'all-in-one-wp-sticky-anything'),
      value: 'fa-npm'
    }, {
      label: wp.i18n.__('NS8', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ns8'
    }, {
      label: wp.i18n.__('Nutritionix', 'all-in-one-wp-sticky-anything'),
      value: 'fa-nutritionix'
    }, {
      label: wp.i18n.__('Octopus Deploy', 'all-in-one-wp-sticky-anything'),
      value: 'fa-octopus-deploy'
    }, {
      label: wp.i18n.__('Odnoklassniki', 'all-in-one-wp-sticky-anything'),
      value: 'fa-odnoklassniki'
    }, {
      label: wp.i18n.__('Odysee', 'all-in-one-wp-sticky-anything'),
      value: 'fa-odysee'
    }, {
      label: wp.i18n.__('Old Republic', 'all-in-one-wp-sticky-anything'),
      value: 'fa-old-republic'
    }, {
      label: wp.i18n.__('OpenAI', 'all-in-one-wp-sticky-anything'),
      value: 'fa-openai'
    }, {
      label: wp.i18n.__('OpenCart', 'all-in-one-wp-sticky-anything'),
      value: 'fa-opencart'
    }, {
      label: wp.i18n.__('OpenID', 'all-in-one-wp-sticky-anything'),
      value: 'fa-openid'
    }, {
      label: wp.i18n.__('OpenSUSE', 'all-in-one-wp-sticky-anything'),
      value: 'fa-opensuse'
    }, {
      label: wp.i18n.__('Opera', 'all-in-one-wp-sticky-anything'),
      value: 'fa-opera'
    }, {
      label: wp.i18n.__('OptinMonster', 'all-in-one-wp-sticky-anything'),
      value: 'fa-optin-monster'
    }, {
      label: wp.i18n.__('ORCID', 'all-in-one-wp-sticky-anything'),
      value: 'fa-orcid'
    }, {
      label: wp.i18n.__('OSI', 'all-in-one-wp-sticky-anything'),
      value: 'fa-osi'
    }, {
      label: wp.i18n.__('Padlet', 'all-in-one-wp-sticky-anything'),
      value: 'fa-padlet'
    }, {
      label: wp.i18n.__('Page4', 'all-in-one-wp-sticky-anything'),
      value: 'fa-page4'
    }, {
      label: wp.i18n.__('Pagelines', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pagelines'
    }, {
      label: wp.i18n.__('Palfed', 'all-in-one-wp-sticky-anything'),
      value: 'fa-palfed'
    }, {
      label: wp.i18n.__('Pandora', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pandora'
    }, {
      label: wp.i18n.__('Patreon', 'all-in-one-wp-sticky-anything'),
      value: 'fa-patreon'
    }, {
      label: wp.i18n.__('PayPal', 'all-in-one-wp-sticky-anything'),
      value: 'fa-paypal'
    }, {
      label: wp.i18n.__('Perbyte', 'all-in-one-wp-sticky-anything'),
      value: 'fa-perbyte'
    }, {
      label: wp.i18n.__('Periscope', 'all-in-one-wp-sticky-anything'),
      value: 'fa-periscope'
    }, {
      label: wp.i18n.__('Phabricator', 'all-in-one-wp-sticky-anything'),
      value: 'fa-phabricator'
    }, {
      label: wp.i18n.__('Phoenix Framework', 'all-in-one-wp-sticky-anything'),
      value: 'fa-phoenix-framework'
    }, {
      label: wp.i18n.__('Phoenix Squadron', 'all-in-one-wp-sticky-anything'),
      value: 'fa-phoenix-squadron'
    }, {
      label: wp.i18n.__('PHP', 'all-in-one-wp-sticky-anything'),
      value: 'fa-php'
    }, {
      label: wp.i18n.__('Pied Piper', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pied-piper'
    }, {
      label: wp.i18n.__('Pied Piper Alt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pied-piper-alt'
    }, {
      label: wp.i18n.__('Pied Piper Hat', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pied-piper-hat'
    }, {
      label: wp.i18n.__('Pied Piper PP', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pied-piper-pp'
    }, {
      label: wp.i18n.__('Pinterest', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pinterest'
    }, {
      label: wp.i18n.__('Pinterest P', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pinterest-p'
    }, {
      label: wp.i18n.__('Pix', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pix'
    }, {
      label: wp.i18n.__('PixelFed', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pixelfed'
    }, {
      label: wp.i18n.__('Pixiv', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pixiv'
    }, {
      label: wp.i18n.__('PlayStation', 'all-in-one-wp-sticky-anything'),
      value: 'fa-playstation'
    }, {
      label: wp.i18n.__('Product Hunt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-product-hunt'
    }, {
      label: wp.i18n.__('Pushed', 'all-in-one-wp-sticky-anything'),
      value: 'fa-pushed'
    }, {
      label: wp.i18n.__('Python', 'all-in-one-wp-sticky-anything'),
      value: 'fa-python'
    }, {
      label: wp.i18n.__('QQ', 'all-in-one-wp-sticky-anything'),
      value: 'fa-qq'
    }, {
      label: wp.i18n.__('Quinscape', 'all-in-one-wp-sticky-anything'),
      value: 'fa-quinscape'
    }, {
      label: wp.i18n.__('Quora', 'all-in-one-wp-sticky-anything'),
      value: 'fa-quora'
    }, {
      label: wp.i18n.__('R Project', 'all-in-one-wp-sticky-anything'),
      value: 'fa-r-project'
    }, {
      label: wp.i18n.__('Raspberry Pi', 'all-in-one-wp-sticky-anything'),
      value: 'fa-raspberry-pi'
    }, {
      label: wp.i18n.__('Ravelry', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ravelry'
    }, {
      label: wp.i18n.__('React', 'all-in-one-wp-sticky-anything'),
      value: 'fa-react'
    }, {
      label: wp.i18n.__('Reacteurope', 'all-in-one-wp-sticky-anything'),
      value: 'fa-reacteurope'
    }, {
      label: wp.i18n.__('Readme', 'all-in-one-wp-sticky-anything'),
      value: 'fa-readme'
    }, {
      label: wp.i18n.__('Rebel', 'all-in-one-wp-sticky-anything'),
      value: 'fa-rebel'
    }, {
      label: wp.i18n.__('Red Hat', 'all-in-one-wp-sticky-anything'),
      value: 'fa-redhat'
    }, {
      label: wp.i18n.__('Red River', 'all-in-one-wp-sticky-anything'),
      value: 'fa-red-river'
    }, {
      label: wp.i18n.__('Reddit', 'all-in-one-wp-sticky-anything'),
      value: 'fa-reddit'
    }, {
      label: wp.i18n.__('Reddit Alien', 'all-in-one-wp-sticky-anything'),
      value: 'fa-reddit-alien'
    }, {
      label: wp.i18n.__('Renren', 'all-in-one-wp-sticky-anything'),
      value: 'fa-renren'
    }, {
      label: wp.i18n.__('Replyd', 'all-in-one-wp-sticky-anything'),
      value: 'fa-replyd'
    }, {
      label: wp.i18n.__('ResearchGate', 'all-in-one-wp-sticky-anything'),
      value: 'fa-researchgate'
    }, {
      label: wp.i18n.__('Resolving', 'all-in-one-wp-sticky-anything'),
      value: 'fa-resolving'
    }, {
      label: wp.i18n.__('Rev', 'all-in-one-wp-sticky-anything'),
      value: 'fa-rev'
    }, {
      label: wp.i18n.__('Rocketchat', 'all-in-one-wp-sticky-anything'),
      value: 'fa-rocketchat'
    }, {
      label: wp.i18n.__('Rockrms', 'all-in-one-wp-sticky-anything'),
      value: 'fa-rockrms'
    }, {
      label: wp.i18n.__('Rust', 'all-in-one-wp-sticky-anything'),
      value: 'fa-rust'
    }, {
      label: wp.i18n.__('Safari', 'all-in-one-wp-sticky-anything'),
      value: 'fa-safari'
    }, {
      label: wp.i18n.__('Salesforce', 'all-in-one-wp-sticky-anything'),
      value: 'fa-salesforce'
    }, {
      label: wp.i18n.__('Sass', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sass'
    }, {
      label: wp.i18n.__('Schlix', 'all-in-one-wp-sticky-anything'),
      value: 'fa-schlix'
    }, {
      label: wp.i18n.__('ScreenPal', 'all-in-one-wp-sticky-anything'),
      value: 'fa-screenpal'
    }, {
      label: wp.i18n.__('Scribd', 'all-in-one-wp-sticky-anything'),
      value: 'fa-scribd'
    }, {
      label: wp.i18n.__('Searchengin', 'all-in-one-wp-sticky-anything'),
      value: 'fa-searchengin'
    }, {
      label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'),
      value: ''
    }, {
      label: wp.i18n.__('Sellcast', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sellcast'
    }, {
      label: wp.i18n.__('Sellsy', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sellsy'
    }, {
      label: wp.i18n.__('Servicestack', 'all-in-one-wp-sticky-anything'),
      value: 'fa-servicestack'
    }, {
      label: wp.i18n.__('Shirts In Bulk', 'all-in-one-wp-sticky-anything'),
      value: 'fa-shirtsinbulk'
    }, {
      label: wp.i18n.__('Shoelace', 'all-in-one-wp-sticky-anything'),
      value: 'fa-shoelace'
    }, {
      label: wp.i18n.__('Shopify', 'all-in-one-wp-sticky-anything'),
      value: 'fa-shopify'
    }, {
      label: wp.i18n.__('Shopware', 'all-in-one-wp-sticky-anything'),
      value: 'fa-shopware'
    }, {
      label: wp.i18n.__('Signal Messenger', 'all-in-one-wp-sticky-anything'),
      value: 'fa-signal-messenger'
    }, {
      label: wp.i18n.__('SimplyBuilt', 'all-in-one-wp-sticky-anything'),
      value: 'fa-simplybuilt'
    }, {
      label: wp.i18n.__('Sistrix', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sistrix'
    }, {
      label: wp.i18n.__('Sith', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sith'
    }, {
      label: wp.i18n.__('Sitrox', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sitrox'
    }, {
      label: wp.i18n.__('Sketch', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sketch'
    }, {
      label: wp.i18n.__('SkyAtlas', 'all-in-one-wp-sticky-anything'),
      value: 'fa-skyatlas'
    }, {
      label: wp.i18n.__('Skype', 'all-in-one-wp-sticky-anything'),
      value: 'fa-skype'
    }, {
      label: wp.i18n.__('Slack', 'all-in-one-wp-sticky-anything'),
      value: 'fa-slack'
    }, {
      label: wp.i18n.__('SlideShare', 'all-in-one-wp-sticky-anything'),
      value: 'fa-slideshare'
    }, {
      label: wp.i18n.__('Snapchat', 'all-in-one-wp-sticky-anything'),
      value: 'fa-snapchat'
    }, {
      label: wp.i18n.__('SoundCloud', 'all-in-one-wp-sticky-anything'),
      value: 'fa-soundcloud'
    }, {
      label: wp.i18n.__('Sourcetree', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sourcetree'
    }, {
      label: wp.i18n.__('Space Awesome', 'all-in-one-wp-sticky-anything'),
      value: 'fa-space-awesome'
    }, {
      label: wp.i18n.__('Speakap', 'all-in-one-wp-sticky-anything'),
      value: 'fa-speakap'
    }, {
      label: wp.i18n.__('Speaker Deck', 'all-in-one-wp-sticky-anything'),
      value: 'fa-speaker-deck'
    }, {
      label: wp.i18n.__('Spotify', 'all-in-one-wp-sticky-anything'),
      value: 'fa-spotify'
    }, {
      label: wp.i18n.__('Square Behance', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-behance'
    }, {
      label: wp.i18n.__('Square Bluesky', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-bluesky'
    }, {
      label: wp.i18n.__('Square Dribbble', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-dribbble'
    }, {
      label: wp.i18n.__('Square Facebook', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-facebook'
    }, {
      label: wp.i18n.__('Square Figma', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-figma'
    }, {
      label: wp.i18n.__('Square Font Awesome', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-font-awesome'
    }, {
      label: wp.i18n.__('Square Font Awesome Stroke', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-font-awesome-stroke'
    }, {
      label: wp.i18n.__('Square Git', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-git'
    }, {
      label: wp.i18n.__('Square GitHub', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-github'
    }, {
      label: wp.i18n.__('Square GitLab', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-gitlab'
    }, {
      label: wp.i18n.__('Square Google Plus', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-google-plus'
    }, {
      label: wp.i18n.__('Square Hacker News', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-hacker-news'
    }, {
      label: wp.i18n.__('Square Instagram', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-instagram'
    }, {
      label: wp.i18n.__('Square JS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-js'
    }, {
      label: wp.i18n.__('Square Last.fm', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-lastfm'
    }, {
      label: wp.i18n.__('Square Letterboxd', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-letterboxd'
    }, {
      label: wp.i18n.__('Square LinkedIn', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-linkedin'
    }, {
      label: wp.i18n.__('Square Odnoklassniki', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-odnoklassniki'
    }, {
      label: wp.i18n.__('Square Pied Piper', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-pied-piper'
    }, {
      label: wp.i18n.__('Square Pinterest', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-pinterest'
    }, {
      label: wp.i18n.__('Square Reddit', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-reddit'
    }, {
      label: wp.i18n.__('Square Snapchat', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-snapchat'
    }, {
      label: wp.i18n.__('Square Steam', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-steam'
    }, {
      label: wp.i18n.__('Square Threads', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-threads'
    }, {
      label: wp.i18n.__('Square Tumblr', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-tumblr'
    }, {
      label: wp.i18n.__('Square Twitter', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-twitter'
    }, {
      label: wp.i18n.__('Square Upwork', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-upwork'
    }, {
      label: wp.i18n.__('Square Viadeo', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-viadeo'
    }, {
      label: wp.i18n.__('Square Vimeo', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-vimeo'
    }, {
      label: wp.i18n.__('Square Web Awesome', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-web-awesome'
    }, {
      label: wp.i18n.__('Square Web Awesome Stroke', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-web-awesome-stroke'
    }, {
      label: wp.i18n.__('Square WhatsApp', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-whatsapp'
    }, {
      label: wp.i18n.__('Square X Twitter', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-x-twitter'
    }, {
      label: wp.i18n.__('Square Xing', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-xing'
    }, {
      label: wp.i18n.__('Square YouTube', 'all-in-one-wp-sticky-anything'),
      value: 'fa-square-youtube'
    }, {
      label: wp.i18n.__('Squarespace', 'all-in-one-wp-sticky-anything'),
      value: 'fa-squarespace'
    }, {
      label: wp.i18n.__('Stack Exchange', 'all-in-one-wp-sticky-anything'),
      value: 'fa-stack-exchange'
    }, {
      label: wp.i18n.__('Stack Overflow', 'all-in-one-wp-sticky-anything'),
      value: 'fa-stack-overflow'
    }, {
      label: wp.i18n.__('Stackpath', 'all-in-one-wp-sticky-anything'),
      value: 'fa-stackpath'
    }, {
      label: wp.i18n.__('Staylinked', 'all-in-one-wp-sticky-anything'),
      value: 'fa-staylinked'
    }, {
      label: wp.i18n.__('Steam', 'all-in-one-wp-sticky-anything'),
      value: 'fa-steam'
    }, {
      label: wp.i18n.__('Steam Symbol', 'all-in-one-wp-sticky-anything'),
      value: 'fa-steam-symbol'
    }, {
      label: wp.i18n.__('Sticker Mule', 'all-in-one-wp-sticky-anything'),
      value: 'fa-sticker-mule'
    }, {
      label: wp.i18n.__('Strava', 'all-in-one-wp-sticky-anything'),
      value: 'fa-strava'
    }, {
      label: wp.i18n.__('Stripe', 'all-in-one-wp-sticky-anything'),
      value: 'fa-stripe'
    }, {
      label: wp.i18n.__('Stripe S', 'all-in-one-wp-sticky-anything'),
      value: 'fa-stripe-s'
    }, {
      label: wp.i18n.__('Stubber', 'all-in-one-wp-sticky-anything'),
      value: 'fa-stubber'
    }, {
      label: wp.i18n.__('Studiovinari', 'all-in-one-wp-sticky-anything'),
      value: 'fa-studiovinari'
    }, {
      label: wp.i18n.__('StumbleUpon', 'all-in-one-wp-sticky-anything'),
      value: 'fa-stumbleupon'
    }, {
      label: wp.i18n.__('StumbleUpon Circle', 'all-in-one-wp-sticky-anything'),
      value: 'fa-stumbleupon-circle'
    }, {
      label: wp.i18n.__('Superpowers', 'all-in-one-wp-sticky-anything'),
      value: 'fa-superpowers'
    }, {
      label: wp.i18n.__('Supple', 'all-in-one-wp-sticky-anything'),
      value: 'fa-supple'
    }, {
      label: wp.i18n.__('SUSE', 'all-in-one-wp-sticky-anything'),
      value: 'fa-suse'
    }, {
      label: wp.i18n.__('Swift', 'all-in-one-wp-sticky-anything'),
      value: 'fa-swift'
    }, {
      label: wp.i18n.__('Symfony', 'all-in-one-wp-sticky-anything'),
      value: 'fa-symfony'
    }, {
      label: wp.i18n.__('TeamSpeak', 'all-in-one-wp-sticky-anything'),
      value: 'fa-teamspeak'
    }, {
      label: wp.i18n.__('TeX', 'all-in-one-wp-sticky-anything'),
      value: 'fa-tex'
    }, {
      label: wp.i18n.__('Telegram', 'all-in-one-wp-sticky-anything'),
      value: 'fa-telegram'
    }, {
      label: wp.i18n.__('Tencent Weibo', 'all-in-one-wp-sticky-anything'),
      value: 'fa-tencent-weibo'
    }, {
      label: wp.i18n.__('The Red Yeti', 'all-in-one-wp-sticky-anything'),
      value: 'fa-the-red-yeti'
    }, {
      label: wp.i18n.__('Themeco', 'all-in-one-wp-sticky-anything'),
      value: 'fa-themeco'
    }, {
      label: wp.i18n.__('ThemeIsle', 'all-in-one-wp-sticky-anything'),
      value: 'fa-themeisle'
    }, {
      label: wp.i18n.__('Think Peaks', 'all-in-one-wp-sticky-anything'),
      value: 'fa-think-peaks'
    }, {
      label: wp.i18n.__('Threads', 'all-in-one-wp-sticky-anything'),
      value: 'fa-threads'
    }, {
      label: wp.i18n.__('Tidal', 'all-in-one-wp-sticky-anything'),
      value: 'fa-tidal'
    }, {
      label: wp.i18n.__('TikTok', 'all-in-one-wp-sticky-anything'),
      value: 'fa-tiktok'
    }, {
      label: wp.i18n.__('Trade Federation', 'all-in-one-wp-sticky-anything'),
      value: 'fa-trade-federation'
    }, {
      label: wp.i18n.__('Trello', 'all-in-one-wp-sticky-anything'),
      value: 'fa-trello'
    }, {
      label: wp.i18n.__('Tumblr', 'all-in-one-wp-sticky-anything'),
      value: 'fa-tumblr'
    }, {
      label: wp.i18n.__('Twitch', 'all-in-one-wp-sticky-anything'),
      value: 'fa-twitch'
    }, {
      label: wp.i18n.__('Twitter', 'all-in-one-wp-sticky-anything'),
      value: 'fa-twitter'
    }, {
      label: wp.i18n.__('Typo3', 'all-in-one-wp-sticky-anything'),
      value: 'fa-typo3'
    }, {
      label: wp.i18n.__('Uber', 'all-in-one-wp-sticky-anything'),
      value: 'fa-uber'
    }, {
      label: wp.i18n.__('Ubuntu', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ubuntu'
    }, {
      label: wp.i18n.__('UIkit', 'all-in-one-wp-sticky-anything'),
      value: 'fa-uikit'
    }, {
      label: wp.i18n.__('Umbraco', 'all-in-one-wp-sticky-anything'),
      value: 'fa-umbraco'
    }, {
      label: wp.i18n.__('Uncharted', 'all-in-one-wp-sticky-anything'),
      value: 'fa-uncharted'
    }, {
      label: wp.i18n.__('Unity', 'all-in-one-wp-sticky-anything'),
      value: 'fa-unity'
    }, {
      label: wp.i18n.__('Uniregistry', 'all-in-one-wp-sticky-anything'),
      value: 'fa-uniregistry'
    }, {
      label: wp.i18n.__('Unsplash', 'all-in-one-wp-sticky-anything'),
      value: 'fa-unsplash'
    }, {
      label: wp.i18n.__('Untappd', 'all-in-one-wp-sticky-anything'),
      value: 'fa-untappd'
    }, {
      label: wp.i18n.__('UPS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ups'
    }, {
      label: wp.i18n.__('Upwork', 'all-in-one-wp-sticky-anything'),
      value: 'fa-upwork'
    }, {
      label: wp.i18n.__('USB', 'all-in-one-wp-sticky-anything'),
      value: 'fa-usb'
    }, {
      label: wp.i18n.__('USPS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-usps'
    }, {
      label: wp.i18n.__('Ussunnah', 'all-in-one-wp-sticky-anything'),
      value: 'fa-ussunnah'
    }, {
      label: wp.i18n.__('Vaadin', 'all-in-one-wp-sticky-anything'),
      value: 'fa-vaadin'
    }, {
      label: wp.i18n.__('Viacoin', 'all-in-one-wp-sticky-anything'),
      value: 'fa-viacoin'
    }, {
      label: wp.i18n.__('Viadeo', 'all-in-one-wp-sticky-anything'),
      value: 'fa-viadeo'
    }, {
      label: wp.i18n.__('Viber', 'all-in-one-wp-sticky-anything'),
      value: 'fa-viber'
    }, {
      label: wp.i18n.__('Vimeo', 'all-in-one-wp-sticky-anything'),
      value: 'fa-vimeo'
    }, {
      label: wp.i18n.__('Vimeo V', 'all-in-one-wp-sticky-anything'),
      value: 'fa-vimeo-v'
    }, {
      label: wp.i18n.__('Vine', 'all-in-one-wp-sticky-anything'),
      value: 'fa-vine'
    }, {
      label: wp.i18n.__('VK', 'all-in-one-wp-sticky-anything'),
      value: 'fa-vk'
    }, {
      label: wp.i18n.__('VNV', 'all-in-one-wp-sticky-anything'),
      value: 'fa-vnv'
    }, {
      label: wp.i18n.__('VSCO', 'all-in-one-wp-sticky-anything'),
      value: 'fa-vsco'
    }, {
      label: wp.i18n.__('VueJS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-vuejs'
    }, {
      label: wp.i18n.__('Watchman Monitoring', 'all-in-one-wp-sticky-anything'),
      value: 'fa-watchman-monitoring'
    }, {
      label: wp.i18n.__('Waze', 'all-in-one-wp-sticky-anything'),
      value: 'fa-waze'
    }, {
      label: wp.i18n.__('Webflow', 'all-in-one-wp-sticky-anything'),
      value: 'fa-webflow'
    }, {
      label: wp.i18n.__('Web Awesome', 'all-in-one-wp-sticky-anything'),
      value: 'fa-web-awesome'
    }, {
      label: wp.i18n.__('Weebly', 'all-in-one-wp-sticky-anything'),
      value: 'fa-weebly'
    }, {
      label: wp.i18n.__('Weibo', 'all-in-one-wp-sticky-anything'),
      value: 'fa-weibo'
    }, {
      label: wp.i18n.__('Weixin', 'all-in-one-wp-sticky-anything'),
      value: 'fa-weixin'
    }, {
      label: wp.i18n.__('WhatsApp', 'all-in-one-wp-sticky-anything'),
      value: 'fa-whatsapp'
    }, {
      label: wp.i18n.__('WHMCS', 'all-in-one-wp-sticky-anything'),
      value: 'fa-whmcs'
    }, {
      label: wp.i18n.__('Wikipedia W', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wikipedia-w'
    }, {
      label: wp.i18n.__('Windows', 'all-in-one-wp-sticky-anything'),
      value: 'fa-windows'
    }, {
      label: wp.i18n.__('Wirsindhandwerk', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wirsindhandwerk'
    }, {
      label: wp.i18n.__('Wix', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wix'
    }, {
      label: wp.i18n.__('Wizards of the Coast', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wizards-of-the-coast'
    }, {
      label: wp.i18n.__('Wodu', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wodu'
    }, {
      label: wp.i18n.__('Wolf Pack Battalion', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wolf-pack-battalion'
    }, {
      label: wp.i18n.__('WordPress', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wordpress'
    }, {
      label: wp.i18n.__('WordPress Simple', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wordpress-simple'
    }, {
      label: wp.i18n.__('WPBeginner', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wpbeginner'
    }, {
      label: wp.i18n.__('WPExplorer', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wpexplorer'
    }, {
      label: wp.i18n.__('WPForms', 'all-in-one-wp-sticky-anything'),
      value: 'fa-wpforms'
    }, {
      label: wp.i18n.__('W3C', 'all-in-one-wp-sticky-anything'),
      value: 'fa-w3c'
    }, {
      label: wp.i18n.__('X Twitter', 'all-in-one-wp-sticky-anything'),
      value: 'fa-x-twitter'
    }, {
      label: wp.i18n.__('Xbox', 'all-in-one-wp-sticky-anything'),
      value: 'fa-xbox'
    }, {
      label: wp.i18n.__('Xing', 'all-in-one-wp-sticky-anything'),
      value: 'fa-xing'
    }, {
      label: wp.i18n.__('Y Combinator', 'all-in-one-wp-sticky-anything'),
      value: 'fa-y-combinator'
    }, {
      label: wp.i18n.__('Yahoo', 'all-in-one-wp-sticky-anything'),
      value: 'fa-yahoo'
    }, {
      label: wp.i18n.__('Yammer', 'all-in-one-wp-sticky-anything'),
      value: 'fa-yammer'
    }, {
      label: wp.i18n.__('Yandex', 'all-in-one-wp-sticky-anything'),
      value: 'fa-yandex'
    }, {
      label: wp.i18n.__('Yandex International', 'all-in-one-wp-sticky-anything'),
      value: 'fa-yandex-international'
    }, {
      label: wp.i18n.__('Yarn', 'all-in-one-wp-sticky-anything'),
      value: 'fa-yarn'
    }, {
      label: wp.i18n.__('Yelp', 'all-in-one-wp-sticky-anything'),
      value: 'fa-yelp'
    }, {
      label: wp.i18n.__('Yoast', 'all-in-one-wp-sticky-anything'),
      value: 'fa-yoast'
    }, {
      label: wp.i18n.__('YouTube', 'all-in-one-wp-sticky-anything'),
      value: 'fa-youtube'
    }, {
      label: wp.i18n.__('Zhihu', 'all-in-one-wp-sticky-anything'),
      value: 'fa-zhihu'
    }],
    bootstrap: [{
      label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'),
      value: ''
    }, {
      label: wp.i18n.__('Alexa', 'all-in-one-wp-sticky-anything'),
      value: 'bi-alexa'
    }, {
      label: wp.i18n.__('Alipay', 'all-in-one-wp-sticky-anything'),
      value: 'bi-alipay'
    }, {
      label: wp.i18n.__('Amazon', 'all-in-one-wp-sticky-anything'),
      value: 'bi-amazon'
    }, {
      label: wp.i18n.__('AMD', 'all-in-one-wp-sticky-anything'),
      value: 'bi-amd'
    }, {
      label: wp.i18n.__('Android', 'all-in-one-wp-sticky-anything'),
      value: 'bi-android'
    }, {
      label: wp.i18n.__('Android2', 'all-in-one-wp-sticky-anything'),
      value: 'bi-android2'
    }, {
      label: wp.i18n.__('Anthropic', 'all-in-one-wp-sticky-anything'),
      value: 'bi-anthropic'
    }, {
      label: wp.i18n.__('Apple', 'all-in-one-wp-sticky-anything'),
      value: 'bi-apple'
    }, {
      label: wp.i18n.__('Apple Music', 'all-in-one-wp-sticky-anything'),
      value: 'bi-apple-music'
    }, {
      label: wp.i18n.__('Behance', 'all-in-one-wp-sticky-anything'),
      value: 'bi-behance'
    }, {
      label: wp.i18n.__('Bing', 'all-in-one-wp-sticky-anything'),
      value: 'bi-bing'
    }, {
      label: wp.i18n.__('Bluesky', 'all-in-one-wp-sticky-anything'),
      value: 'bi-bluesky'
    }, {
      label: wp.i18n.__('Browser Chrome', 'all-in-one-wp-sticky-anything'),
      value: 'bi-browser-chrome'
    }, {
      label: wp.i18n.__('Browser Edge', 'all-in-one-wp-sticky-anything'),
      value: 'bi-browser-edge'
    }, {
      label: wp.i18n.__('Browser Firefox', 'all-in-one-wp-sticky-anything'),
      value: 'bi-browser-firefox'
    }, {
      label: wp.i18n.__('Browser Safari', 'all-in-one-wp-sticky-anything'),
      value: 'bi-browser-safari'
    }, {
      label: wp.i18n.__('Claude', 'all-in-one-wp-sticky-anything'),
      value: 'bi-claude'
    }, {
      label: wp.i18n.__('CSS', 'all-in-one-wp-sticky-anything'),
      value: 'bi-css'
    }, {
      label: wp.i18n.__('Discord', 'all-in-one-wp-sticky-anything'),
      value: 'bi-discord'
    }, {
      label: wp.i18n.__('Dribbble', 'all-in-one-wp-sticky-anything'),
      value: 'bi-dribbble'
    }, {
      label: wp.i18n.__('Dropbox', 'all-in-one-wp-sticky-anything'),
      value: 'bi-dropbox'
    }, {
      label: wp.i18n.__('Facebook', 'all-in-one-wp-sticky-anything'),
      value: 'bi-facebook'
    }, {
      label: wp.i18n.__('Git', 'all-in-one-wp-sticky-anything'),
      value: 'bi-git'
    }, {
      label: wp.i18n.__('GitHub', 'all-in-one-wp-sticky-anything'),
      value: 'bi-github'
    }, {
      label: wp.i18n.__('GitLab', 'all-in-one-wp-sticky-anything'),
      value: 'bi-gitlab'
    }, {
      label: wp.i18n.__('Google', 'all-in-one-wp-sticky-anything'),
      value: 'bi-google'
    }, {
      label: wp.i18n.__('Google Play', 'all-in-one-wp-sticky-anything'),
      value: 'bi-google-play'
    }, {
      label: wp.i18n.__('Instagram', 'all-in-one-wp-sticky-anything'),
      value: 'bi-instagram'
    }, {
      label: wp.i18n.__('JavaScript', 'all-in-one-wp-sticky-anything'),
      value: 'bi-javascript'
    }, {
      label: wp.i18n.__('Line', 'all-in-one-wp-sticky-anything'),
      value: 'bi-line'
    }, {
      label: wp.i18n.__('LinkedIn', 'all-in-one-wp-sticky-anything'),
      value: 'bi-linkedin'
    }, {
      label: wp.i18n.__('Mastodon', 'all-in-one-wp-sticky-anything'),
      value: 'bi-mastodon'
    }, {
      label: wp.i18n.__('Medium', 'all-in-one-wp-sticky-anything'),
      value: 'bi-medium'
    }, {
      label: wp.i18n.__('Messenger', 'all-in-one-wp-sticky-anything'),
      value: 'bi-messenger'
    }, {
      label: wp.i18n.__('Meta', 'all-in-one-wp-sticky-anything'),
      value: 'bi-meta'
    }, {
      label: wp.i18n.__('Microsoft', 'all-in-one-wp-sticky-anything'),
      value: 'bi-microsoft'
    }, {
      label: wp.i18n.__('Microsoft Teams', 'all-in-one-wp-sticky-anything'),
      value: 'bi-microsoft-teams'
    }, {
      label: wp.i18n.__('Nintendo Switch', 'all-in-one-wp-sticky-anything'),
      value: 'bi-nintendo-switch'
    }, {
      label: wp.i18n.__('Nvidia', 'all-in-one-wp-sticky-anything'),
      value: 'bi-nvidia'
    }, {
      label: wp.i18n.__('OpenAI', 'all-in-one-wp-sticky-anything'),
      value: 'bi-openai'
    }, {
      label: wp.i18n.__('OpenCollective', 'all-in-one-wp-sticky-anything'),
      value: 'bi-opencollective'
    }, {
      label: wp.i18n.__('PayPal', 'all-in-one-wp-sticky-anything'),
      value: 'bi-paypal'
    }, {
      label: wp.i18n.__('Perplexity', 'all-in-one-wp-sticky-anything'),
      value: 'bi-perplexity'
    }, {
      label: wp.i18n.__('Pinterest', 'all-in-one-wp-sticky-anything'),
      value: 'bi-pinterest'
    }, {
      label: wp.i18n.__('PlayStation', 'all-in-one-wp-sticky-anything'),
      value: 'bi-playstation'
    }, {
      label: wp.i18n.__('Quora', 'all-in-one-wp-sticky-anything'),
      value: 'bi-quora'
    }, {
      label: wp.i18n.__('Reddit', 'all-in-one-wp-sticky-anything'),
      value: 'bi-reddit'
    }, {
      label: wp.i18n.__('Signal', 'all-in-one-wp-sticky-anything'),
      value: 'bi-signal'
    }, {
      label: wp.i18n.__('Sina Weibo', 'all-in-one-wp-sticky-anything'),
      value: 'bi-sina-weibo'
    }, {
      label: wp.i18n.__('Skype', 'all-in-one-wp-sticky-anything'),
      value: 'bi-skype'
    }, {
      label: wp.i18n.__('Slack', 'all-in-one-wp-sticky-anything'),
      value: 'bi-slack'
    }, {
      label: wp.i18n.__('Snapchat', 'all-in-one-wp-sticky-anything'),
      value: 'bi-snapchat'
    }, {
      label: wp.i18n.__('SourceForge', 'all-in-one-wp-sticky-anything'),
      value: 'bi-sourceforge'
    }, {
      label: wp.i18n.__('Spotify', 'all-in-one-wp-sticky-anything'),
      value: 'bi-spotify'
    }, {
      label: wp.i18n.__('Stack Overflow', 'all-in-one-wp-sticky-anything'),
      value: 'bi-stack-overflow'
    }, {
      label: wp.i18n.__('Steam', 'all-in-one-wp-sticky-anything'),
      value: 'bi-steam'
    }, {
      label: wp.i18n.__('Strava', 'all-in-one-wp-sticky-anything'),
      value: 'bi-strava'
    }, {
      label: wp.i18n.__('Stripe', 'all-in-one-wp-sticky-anything'),
      value: 'bi-stripe'
    }, {
      label: wp.i18n.__('Substack', 'all-in-one-wp-sticky-anything'),
      value: 'bi-substack'
    }, {
      label: wp.i18n.__('Telegram', 'all-in-one-wp-sticky-anything'),
      value: 'bi-telegram'
    }, {
      label: wp.i18n.__('Tencent QQ', 'all-in-one-wp-sticky-anything'),
      value: 'bi-tencent-qq'
    }, {
      label: wp.i18n.__('Threads', 'all-in-one-wp-sticky-anything'),
      value: 'bi-threads'
    }, {
      label: wp.i18n.__('Threads Fill', 'all-in-one-wp-sticky-anything'),
      value: 'bi-threads-fill'
    }, {
      label: wp.i18n.__('TikTok', 'all-in-one-wp-sticky-anything'),
      value: 'bi-tiktok'
    }, {
      label: wp.i18n.__('Trello', 'all-in-one-wp-sticky-anything'),
      value: 'bi-trello'
    }, {
      label: wp.i18n.__('Twitch', 'all-in-one-wp-sticky-anything'),
      value: 'bi-twitch'
    }, {
      label: wp.i18n.__('Twitter', 'all-in-one-wp-sticky-anything'),
      value: 'bi-twitter'
    }, {
      label: wp.i18n.__('Twitter X', 'all-in-one-wp-sticky-anything'),
      value: 'bi-twitter-x'
    }, {
      label: wp.i18n.__('Tux', 'all-in-one-wp-sticky-anything'),
      value: 'bi-tux'
    }, {
      label: wp.i18n.__('TypeScript', 'all-in-one-wp-sticky-anything'),
      value: 'bi-typescript'
    }, {
      label: wp.i18n.__('Ubuntu', 'all-in-one-wp-sticky-anything'),
      value: 'bi-ubuntu'
    }, {
      label: wp.i18n.__('Unity', 'all-in-one-wp-sticky-anything'),
      value: 'bi-unity'
    }, {
      label: wp.i18n.__('Vimeo', 'all-in-one-wp-sticky-anything'),
      value: 'bi-vimeo'
    }, {
      label: wp.i18n.__('WeChat', 'all-in-one-wp-sticky-anything'),
      value: 'bi-wechat'
    }, {
      label: wp.i18n.__('WhatsApp', 'all-in-one-wp-sticky-anything'),
      value: 'bi-whatsapp'
    }, {
      label: wp.i18n.__('Wikipedia', 'all-in-one-wp-sticky-anything'),
      value: 'bi-wikipedia'
    }, {
      label: wp.i18n.__('Windows', 'all-in-one-wp-sticky-anything'),
      value: 'bi-windows'
    }, {
      label: wp.i18n.__('WordPress', 'all-in-one-wp-sticky-anything'),
      value: 'bi-wordpress'
    }, {
      label: wp.i18n.__('Xbox', 'all-in-one-wp-sticky-anything'),
      value: 'bi-xbox'
    }, {
      label: wp.i18n.__('Yelp', 'all-in-one-wp-sticky-anything'),
      value: 'bi-yelp'
    }, {
      label: wp.i18n.__('YouTube', 'all-in-one-wp-sticky-anything'),
      value: 'bi-youtube'
    }],
    remixicon: [{
      label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'),
      value: ''
    }, {
      label: wp.i18n.__('Alibaba Cloud Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-alibaba-cloud-fill'
    }, {
      label: wp.i18n.__('Alibaba Cloud Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-alibaba-cloud-line'
    }, {
      label: wp.i18n.__('Alipay Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-alipay-fill'
    }, {
      label: wp.i18n.__('Alipay Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-alipay-line'
    }, {
      label: wp.i18n.__('Amazon Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-amazon-fill'
    }, {
      label: wp.i18n.__('Amazon Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-amazon-line'
    }, {
      label: wp.i18n.__('Android Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-android-fill'
    }, {
      label: wp.i18n.__('Android Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-android-line'
    }, {
      label: wp.i18n.__('AngularJS Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-angularjs-fill'
    }, {
      label: wp.i18n.__('AngularJS Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-angularjs-line'
    }, {
      label: wp.i18n.__('Anthropic Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-anthropic-fill'
    }, {
      label: wp.i18n.__('Anthropic Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-anthropic-line'
    }, {
      label: wp.i18n.__('App Store Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-app-store-fill'
    }, {
      label: wp.i18n.__('App Store Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-app-store-line'
    }, {
      label: wp.i18n.__('Apple Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-apple-fill'
    }, {
      label: wp.i18n.__('Apple Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-apple-line'
    }, {
      label: wp.i18n.__('Baidu Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-baidu-fill'
    }, {
      label: wp.i18n.__('Baidu Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-baidu-line'
    }, {
      label: wp.i18n.__('Bard Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bard-fill'
    }, {
      label: wp.i18n.__('Bard Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bard-line'
    }, {
      label: wp.i18n.__('Behance Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-behance-fill'
    }, {
      label: wp.i18n.__('Behance Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-behance-line'
    }, {
      label: wp.i18n.__('Bilibili Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bilibili-fill'
    }, {
      label: wp.i18n.__('Bilibili Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bilibili-line'
    }, {
      label: wp.i18n.__('Blender Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-blender-fill'
    }, {
      label: wp.i18n.__('Blender Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-blender-line'
    }, {
      label: wp.i18n.__('Blogger Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-blogger-fill'
    }, {
      label: wp.i18n.__('Blogger Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-blogger-line'
    }, {
      label: wp.i18n.__('Bluesky Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bluesky-fill'
    }, {
      label: wp.i18n.__('Bluesky Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bluesky-line'
    }, {
      label: wp.i18n.__('BNB Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bnb-fill'
    }, {
      label: wp.i18n.__('BNB Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bnb-line'
    }, {
      label: wp.i18n.__('Bootstrap Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bootstrap-fill'
    }, {
      label: wp.i18n.__('Bootstrap Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-bootstrap-line'
    }, {
      label: wp.i18n.__('BTC Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-btc-fill'
    }, {
      label: wp.i18n.__('BTC Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-btc-line'
    }, {
      label: wp.i18n.__('CentOS Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-centos-fill'
    }, {
      label: wp.i18n.__('CentOS Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-centos-line'
    }, {
      label: wp.i18n.__('Chrome Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-chrome-fill'
    }, {
      label: wp.i18n.__('Chrome Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-chrome-line'
    }, {
      label: wp.i18n.__('Claude Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-claude-fill'
    }, {
      label: wp.i18n.__('Claude Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-claude-line'
    }, {
      label: wp.i18n.__('Codepen Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-codepen-fill'
    }, {
      label: wp.i18n.__('Codepen Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-codepen-line'
    }, {
      label: wp.i18n.__('Copilot Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-copilot-fill'
    }, {
      label: wp.i18n.__('Copilot Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-copilot-line'
    }, {
      label: wp.i18n.__('CoreOS Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-coreos-fill'
    }, {
      label: wp.i18n.__('CoreOS Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-coreos-line'
    }, {
      label: wp.i18n.__('CSS3 Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-css3-fill'
    }, {
      label: wp.i18n.__('CSS3 Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-css3-line'
    }, {
      label: wp.i18n.__('Deepseek Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-deepseek-fill'
    }, {
      label: wp.i18n.__('Deepseek Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-deepseek-line'
    }, {
      label: wp.i18n.__('DingDing Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-dingding-fill'
    }, {
      label: wp.i18n.__('DingDing Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-dingding-line'
    }, {
      label: wp.i18n.__('Discord Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-discord-fill'
    }, {
      label: wp.i18n.__('Discord Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-discord-line'
    }, {
      label: wp.i18n.__('Disqus Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-disqus-fill'
    }, {
      label: wp.i18n.__('Disqus Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-disqus-line'
    }, {
      label: wp.i18n.__('Douban Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-douban-fill'
    }, {
      label: wp.i18n.__('Douban Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-douban-line'
    }, {
      label: wp.i18n.__('Dribbble Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-dribbble-fill'
    }, {
      label: wp.i18n.__('Dribbble Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-dribbble-line'
    }, {
      label: wp.i18n.__('Dropbox Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-dropbox-fill'
    }, {
      label: wp.i18n.__('Dropbox Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-dropbox-line'
    }, {
      label: wp.i18n.__('Edge Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-edge-fill'
    }, {
      label: wp.i18n.__('Edge Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-edge-line'
    }, {
      label: wp.i18n.__('Edge New Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-edge-new-fill'
    }, {
      label: wp.i18n.__('Edge New Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-edge-new-line'
    }, {
      label: wp.i18n.__('ETH Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-eth-fill'
    }, {
      label: wp.i18n.__('ETH Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-eth-line'
    }, {
      label: wp.i18n.__('Evernote Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-evernote-fill'
    }, {
      label: wp.i18n.__('Evernote Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-evernote-line'
    }, {
      label: wp.i18n.__('Facebook Box Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-facebook-box-fill'
    }, {
      label: wp.i18n.__('Facebook Box Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-facebook-box-line'
    }, {
      label: wp.i18n.__('Facebook Circle Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-facebook-circle-fill'
    }, {
      label: wp.i18n.__('Facebook Circle Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-facebook-circle-line'
    }, {
      label: wp.i18n.__('Facebook Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-facebook-fill'
    }, {
      label: wp.i18n.__('Facebook Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-facebook-line'
    }, {
      label: wp.i18n.__('Fediverse Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-fediverse-fill'
    }, {
      label: wp.i18n.__('Fediverse Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-fediverse-line'
    }, {
      label: wp.i18n.__('Figma Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-figma-fill'
    }, {
      label: wp.i18n.__('Figma Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-figma-line'
    }, {
      label: wp.i18n.__('Finder Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-finder-fill'
    }, {
      label: wp.i18n.__('Finder Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-finder-line'
    }, {
      label: wp.i18n.__('Firebase Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-firebase-fill'
    }, {
      label: wp.i18n.__('Firebase Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-firebase-line'
    }, {
      label: wp.i18n.__('Firefox Browser Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-firefox-browser-fill'
    }, {
      label: wp.i18n.__('Firefox Browser Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-firefox-browser-line'
    }, {
      label: wp.i18n.__('Firefox Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-firefox-fill'
    }, {
      label: wp.i18n.__('Firefox Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-firefox-line'
    }, {
      label: wp.i18n.__('Flickr Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-flickr-fill'
    }, {
      label: wp.i18n.__('Flickr Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-flickr-line'
    }, {
      label: wp.i18n.__('Flutter Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-flutter-fill'
    }, {
      label: wp.i18n.__('Flutter Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-flutter-line'
    }, {
      label: wp.i18n.__('Friendica Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-friendica-fill'
    }, {
      label: wp.i18n.__('Friendica Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-friendica-line'
    }, {
      label: wp.i18n.__('Gatsby Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-gatsby-fill'
    }, {
      label: wp.i18n.__('Gatsby Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-gatsby-line'
    }, {
      label: wp.i18n.__('Gemini Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-gemini-fill'
    }, {
      label: wp.i18n.__('Gemini Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-gemini-line'
    }, {
      label: wp.i18n.__('GitHub Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-github-fill'
    }, {
      label: wp.i18n.__('GitHub Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-github-line'
    }, {
      label: wp.i18n.__('GitLab Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-gitlab-fill'
    }, {
      label: wp.i18n.__('GitLab Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-gitlab-line'
    }, {
      label: wp.i18n.__('Google Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-google-fill'
    }, {
      label: wp.i18n.__('Google Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-google-line'
    }, {
      label: wp.i18n.__('Google Play Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-google-play-fill'
    }, {
      label: wp.i18n.__('Google Play Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-google-play-line'
    }, {
      label: wp.i18n.__('Honor of Kings Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-honor-of-kings-fill'
    }, {
      label: wp.i18n.__('Honor of Kings Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-honor-of-kings-line'
    }, {
      label: wp.i18n.__('HTML5 Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-html5-fill'
    }, {
      label: wp.i18n.__('HTML5 Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-html5-line'
    }, {
      label: wp.i18n.__('IE Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-ie-fill'
    }, {
      label: wp.i18n.__('IE Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-ie-line'
    }, {
      label: wp.i18n.__('Instagram Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-instagram-fill'
    }, {
      label: wp.i18n.__('Instagram Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-instagram-line'
    }, {
      label: wp.i18n.__('Invision Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-invision-fill'
    }, {
      label: wp.i18n.__('Invision Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-invision-line'
    }, {
      label: wp.i18n.__('Java Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-java-fill'
    }, {
      label: wp.i18n.__('Java Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-java-line'
    }, {
      label: wp.i18n.__('JavaScript Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-javascript-fill'
    }, {
      label: wp.i18n.__('JavaScript Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-javascript-line'
    }, {
      label: wp.i18n.__('Kakao Talk Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-kakao-talk-fill'
    }, {
      label: wp.i18n.__('Kakao Talk Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-kakao-talk-line'
    }, {
      label: wp.i18n.__('Kick Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-kick-fill'
    }, {
      label: wp.i18n.__('Kick Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-kick-line'
    }, {
      label: wp.i18n.__('Line Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-line-fill'
    }, {
      label: wp.i18n.__('Line Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-line-line'
    }, {
      label: wp.i18n.__('LinkedIn Box Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-linkedin-box-fill'
    }, {
      label: wp.i18n.__('LinkedIn Box Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-linkedin-box-line'
    }, {
      label: wp.i18n.__('LinkedIn Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-linkedin-fill'
    }, {
      label: wp.i18n.__('LinkedIn Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-linkedin-line'
    }, {
      label: wp.i18n.__('Mac Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-mac-fill'
    }, {
      label: wp.i18n.__('Mac Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-mac-line'
    }, {
      label: wp.i18n.__('Macbook Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-macbook-fill'
    }, {
      label: wp.i18n.__('Macbook Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-macbook-line'
    }, {
      label: wp.i18n.__('Mastercard Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-mastercard-fill'
    }, {
      label: wp.i18n.__('Mastercard Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-mastercard-line'
    }, {
      label: wp.i18n.__('Mastodon Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-mastodon-fill'
    }, {
      label: wp.i18n.__('Mastodon Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-mastodon-line'
    }, {
      label: wp.i18n.__('Medium Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-medium-fill'
    }, {
      label: wp.i18n.__('Medium Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-medium-line'
    }, {
      label: wp.i18n.__('Messenger Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-messenger-fill'
    }, {
      label: wp.i18n.__('Messenger Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-messenger-line'
    }, {
      label: wp.i18n.__('Meta Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-meta-fill'
    }, {
      label: wp.i18n.__('Meta Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-meta-line'
    }, {
      label: wp.i18n.__('Microsoft Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-microsoft-fill'
    }, {
      label: wp.i18n.__('Microsoft Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-microsoft-line'
    }, {
      label: wp.i18n.__('Microsoft Loop Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-microsoft-loop-fill'
    }, {
      label: wp.i18n.__('Microsoft Loop Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-microsoft-loop-line'
    }, {
      label: wp.i18n.__('Mixtral Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-mixtral-fill'
    }, {
      label: wp.i18n.__('Mixtral Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-mixtral-line'
    }, {
      label: wp.i18n.__('Netease Cloud Music Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-netease-cloud-music-fill'
    }, {
      label: wp.i18n.__('Netease Cloud Music Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-netease-cloud-music-line'
    }, {
      label: wp.i18n.__('Netflix Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-netflix-fill'
    }, {
      label: wp.i18n.__('Netflix Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-netflix-line'
    }, {
      label: wp.i18n.__('Next.js Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-nextjs-fill'
    }, {
      label: wp.i18n.__('Next.js Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-nextjs-line'
    }, {
      label: wp.i18n.__('Node.js Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-nodejs-fill'
    }, {
      label: wp.i18n.__('Node.js Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-nodejs-line'
    }, {
      label: wp.i18n.__('Notion Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-notion-fill'
    }, {
      label: wp.i18n.__('Notion Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-notion-line'
    }, {
      label: wp.i18n.__('NPM.js Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-npmjs-fill'
    }, {
      label: wp.i18n.__('NPM.js Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-npmjs-line'
    }, {
      label: wp.i18n.__('OpenAI Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-openai-fill'
    }, {
      label: wp.i18n.__('OpenAI Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-openai-line'
    }, {
      label: wp.i18n.__('Openbase Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-openbase-fill'
    }, {
      label: wp.i18n.__('Openbase Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-openbase-line'
    }, {
      label: wp.i18n.__('Opera Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-opera-fill'
    }, {
      label: wp.i18n.__('Opera Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-opera-line'
    }, {
      label: wp.i18n.__('Patreon Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-patreon-fill'
    }, {
      label: wp.i18n.__('Patreon Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-patreon-line'
    }, {
      label: wp.i18n.__('PayPal Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-paypal-fill'
    }, {
      label: wp.i18n.__('PayPal Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-paypal-line'
    }, {
      label: wp.i18n.__('Perplexity Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-perplexity-fill'
    }, {
      label: wp.i18n.__('Perplexity Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-perplexity-line'
    }, {
      label: wp.i18n.__('PHP Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-php-fill'
    }, {
      label: wp.i18n.__('PHP Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-php-line'
    }, {
      label: wp.i18n.__('Pinterest Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-pinterest-fill'
    }, {
      label: wp.i18n.__('Pinterest Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-pinterest-line'
    }, {
      label: wp.i18n.__('Pix Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-pix-fill'
    }, {
      label: wp.i18n.__('Pix Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-pix-line'
    }, {
      label: wp.i18n.__('Pixelfed Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-pixelfed-fill'
    }, {
      label: wp.i18n.__('Pixelfed Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-pixelfed-line'
    }, {
      label: wp.i18n.__('PlayStation Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-playstation-fill'
    }, {
      label: wp.i18n.__('PlayStation Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-playstation-line'
    }, {
      label: wp.i18n.__('Product Hunt Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-product-hunt-fill'
    }, {
      label: wp.i18n.__('Product Hunt Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-product-hunt-line'
    }, {
      label: wp.i18n.__('QQ Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-qq-fill'
    }, {
      label: wp.i18n.__('QQ Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-qq-line'
    }, {
      label: wp.i18n.__('ReactJS Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-reactjs-fill'
    }, {
      label: wp.i18n.__('ReactJS Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-reactjs-line'
    }, {
      label: wp.i18n.__('Reddit Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-reddit-fill'
    }, {
      label: wp.i18n.__('Reddit Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-reddit-line'
    }, {
      label: wp.i18n.__('Remixicon Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-remixicon-fill'
    }, {
      label: wp.i18n.__('Remixicon Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-remixicon-line'
    }, {
      label: wp.i18n.__('Remix Run Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-remix-run-fill'
    }, {
      label: wp.i18n.__('Remix Run Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-remix-run-line'
    }, {
      label: wp.i18n.__('Safari Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-safari-fill'
    }, {
      label: wp.i18n.__('Safari Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-safari-line'
    }, {
      label: wp.i18n.__('Skype Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-skype-fill'
    }, {
      label: wp.i18n.__('Skype Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-skype-line'
    }, {
      label: wp.i18n.__('Slack Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-slack-fill'
    }, {
      label: wp.i18n.__('Slack Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-slack-line'
    }, {
      label: wp.i18n.__('Snapchat Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-snapchat-fill'
    }, {
      label: wp.i18n.__('Snapchat Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-snapchat-line'
    }, {
      label: wp.i18n.__('SoundCloud Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-soundcloud-fill'
    }, {
      label: wp.i18n.__('SoundCloud Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-soundcloud-line'
    }, {
      label: wp.i18n.__('Spotify Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-spotify-fill'
    }, {
      label: wp.i18n.__('Spotify Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-spotify-line'
    }, {
      label: wp.i18n.__('Stack Overflow Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-stack-overflow-fill'
    }, {
      label: wp.i18n.__('Stack Overflow Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-stack-overflow-line'
    }, {
      label: wp.i18n.__('Stackshare Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-stackshare-fill'
    }, {
      label: wp.i18n.__('Stackshare Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-stackshare-line'
    }, {
      label: wp.i18n.__('Steam Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-steam-fill'
    }, {
      label: wp.i18n.__('Steam Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-steam-line'
    }, {
      label: wp.i18n.__('Supabase Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-supabase-fill'
    }, {
      label: wp.i18n.__('Supabase Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-supabase-line'
    }, {
      label: wp.i18n.__('Svelte Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-svelte-fill'
    }, {
      label: wp.i18n.__('Svelte Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-svelte-line'
    }, {
      label: wp.i18n.__('Tailwind CSS Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-tailwind-css-fill'
    }, {
      label: wp.i18n.__('Tailwind CSS Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-tailwind-css-line'
    }, {
      label: wp.i18n.__('Taobao Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-taobao-fill'
    }, {
      label: wp.i18n.__('Taobao Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-taobao-line'
    }, {
      label: wp.i18n.__('Telegram Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-telegram-fill'
    }, {
      label: wp.i18n.__('Telegram Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-telegram-line'
    }, {
      label: wp.i18n.__('Telegram 2 Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-telegram-2-fill'
    }, {
      label: wp.i18n.__('Telegram 2 Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-telegram-2-line'
    }, {
      label: wp.i18n.__('Threads Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-threads-fill'
    }, {
      label: wp.i18n.__('Threads Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-threads-line'
    }, {
      label: wp.i18n.__('TikTok Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-tiktok-fill'
    }, {
      label: wp.i18n.__('TikTok Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-tiktok-line'
    }, {
      label: wp.i18n.__('Trello Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-trello-fill'
    }, {
      label: wp.i18n.__('Trello Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-trello-line'
    }, {
      label: wp.i18n.__('Tumblr Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-tumblr-fill'
    }, {
      label: wp.i18n.__('Tumblr Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-tumblr-line'
    }, {
      label: wp.i18n.__('Twitch Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-twitch-fill'
    }, {
      label: wp.i18n.__('Twitch Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-twitch-line'
    }, {
      label: wp.i18n.__('Twitter Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-twitter-fill'
    }, {
      label: wp.i18n.__('Twitter Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-twitter-line'
    }, {
      label: wp.i18n.__('Twitter X Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-twitter-x-fill'
    }, {
      label: wp.i18n.__('Twitter X Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-twitter-x-line'
    }, {
      label: wp.i18n.__('Ubuntu Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-ubuntu-fill'
    }, {
      label: wp.i18n.__('Ubuntu Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-ubuntu-line'
    }, {
      label: wp.i18n.__('Unsplash Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-unsplash-fill'
    }, {
      label: wp.i18n.__('Unsplash Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-unsplash-line'
    }, {
      label: wp.i18n.__('Vercel Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-vercel-fill'
    }, {
      label: wp.i18n.__('Vercel Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-vercel-line'
    }, {
      label: wp.i18n.__('Vimeo Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-vimeo-fill'
    }, {
      label: wp.i18n.__('Vimeo Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-vimeo-line'
    }, {
      label: wp.i18n.__('Visa Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-visa-fill'
    }, {
      label: wp.i18n.__('Visa Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-visa-line'
    }, {
      label: wp.i18n.__('VK Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-vk-fill'
    }, {
      label: wp.i18n.__('VK Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-vk-line'
    }, {
      label: wp.i18n.__('VueJS Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-vuejs-fill'
    }, {
      label: wp.i18n.__('VueJS Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-vuejs-line'
    }, {
      label: wp.i18n.__('WeChat Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wechat-fill'
    }, {
      label: wp.i18n.__('WeChat Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wechat-line'
    }, {
      label: wp.i18n.__('WeChat 2 Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wechat-2-fill'
    }, {
      label: wp.i18n.__('WeChat 2 Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wechat-2-line'
    }, {
      label: wp.i18n.__('WeChat Channels Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wechat-channels-fill'
    }, {
      label: wp.i18n.__('WeChat Channels Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wechat-channels-line'
    }, {
      label: wp.i18n.__('WeChat Pay Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wechat-pay-fill'
    }, {
      label: wp.i18n.__('WeChat Pay Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wechat-pay-line'
    }, {
      label: wp.i18n.__('Weibo Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-weibo-fill'
    }, {
      label: wp.i18n.__('Weibo Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-weibo-line'
    }, {
      label: wp.i18n.__('WhatsApp Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-whatsapp-fill'
    }, {
      label: wp.i18n.__('WhatsApp Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-whatsapp-line'
    }, {
      label: wp.i18n.__('Windows Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-windows-fill'
    }, {
      label: wp.i18n.__('Windows Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-windows-line'
    }, {
      label: wp.i18n.__('WordPress Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wordpress-fill'
    }, {
      label: wp.i18n.__('WordPress Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-wordpress-line'
    }, {
      label: wp.i18n.__('Xbox Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-xbox-fill'
    }, {
      label: wp.i18n.__('Xbox Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-xbox-line'
    }, {
      label: wp.i18n.__('Xing Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-xing-fill'
    }, {
      label: wp.i18n.__('Xing Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-xing-line'
    }, {
      label: wp.i18n.__('XRP Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-xrp-fill'
    }, {
      label: wp.i18n.__('XRP Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-xrp-line'
    }, {
      label: wp.i18n.__('XTZ Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-xtz-fill'
    }, {
      label: wp.i18n.__('XTZ Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-xtz-line'
    }, {
      label: wp.i18n.__('YouTube Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-youtube-fill'
    }, {
      label: wp.i18n.__('YouTube Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-youtube-line'
    }, {
      label: wp.i18n.__('Yuque Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-yuque-fill'
    }, {
      label: wp.i18n.__('Yuque Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-yuque-line'
    }, {
      label: wp.i18n.__('Zcool Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-zcool-fill'
    }, {
      label: wp.i18n.__('Zcool Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-zcool-line'
    }, {
      label: wp.i18n.__('Zhihu Fill', 'all-in-one-wp-sticky-anything'),
      value: 'ri-zhihu-fill'
    }, {
      label: wp.i18n.__('Zhihu Line', 'all-in-one-wp-sticky-anything'),
      value: 'ri-zhihu-line'
    }],
    lineicon: [{
      label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'),
      value: ''
    }, {
      label: wp.i18n.__('500px', 'all-in-one-wp-sticky-anything'),
      value: 'lni-500px'
    }, {
      label: wp.i18n.__('Adobe', 'all-in-one-wp-sticky-anything'),
      value: 'lni-adobe'
    }, {
      label: wp.i18n.__('Adonis', 'all-in-one-wp-sticky-anything'),
      value: 'lni-adonis'
    }, {
      label: wp.i18n.__('Airbnb', 'all-in-one-wp-sticky-anything'),
      value: 'lni-airbnb'
    }, {
      label: wp.i18n.__('Airtable', 'all-in-one-wp-sticky-anything'),
      value: 'lni-airtable'
    }, {
      label: wp.i18n.__('Alpinejs', 'all-in-one-wp-sticky-anything'),
      value: 'lni-alpinejs'
    }, {
      label: wp.i18n.__('Amazon', 'all-in-one-wp-sticky-anything'),
      value: 'lni-amazon'
    }, {
      label: wp.i18n.__('Amazon Original', 'all-in-one-wp-sticky-anything'),
      value: 'lni-amazon-original'
    }, {
      label: wp.i18n.__('Amazon Pay', 'all-in-one-wp-sticky-anything'),
      value: 'lni-amazon-pay'
    }, {
      label: wp.i18n.__('AMD', 'all-in-one-wp-sticky-anything'),
      value: 'lni-amd'
    }, {
      label: wp.i18n.__('Amex', 'all-in-one-wp-sticky-anything'),
      value: 'lni-amex'
    }, {
      label: wp.i18n.__('Android', 'all-in-one-wp-sticky-anything'),
      value: 'lni-android'
    }, {
      label: wp.i18n.__('Android Old', 'all-in-one-wp-sticky-anything'),
      value: 'lni-android-old'
    }, {
      label: wp.i18n.__('Angellist', 'all-in-one-wp-sticky-anything'),
      value: 'lni-angellist'
    }, {
      label: wp.i18n.__('Angular', 'all-in-one-wp-sticky-anything'),
      value: 'lni-angular'
    }, {
      label: wp.i18n.__('App Store', 'all-in-one-wp-sticky-anything'),
      value: 'lni-app-store'
    }, {
      label: wp.i18n.__('Apple Brand', 'all-in-one-wp-sticky-anything'),
      value: 'lni-apple-brand'
    }, {
      label: wp.i18n.__('Apple Music', 'all-in-one-wp-sticky-anything'),
      value: 'lni-apple-music'
    }, {
      label: wp.i18n.__('Apple Music Alt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-apple-music-alt'
    }, {
      label: wp.i18n.__('Apple Pay', 'all-in-one-wp-sticky-anything'),
      value: 'lni-apple-pay'
    }, {
      label: wp.i18n.__('Arc Browser', 'all-in-one-wp-sticky-anything'),
      value: 'lni-arc-browser'
    }, {
      label: wp.i18n.__('Asana', 'all-in-one-wp-sticky-anything'),
      value: 'lni-asana'
    }, {
      label: wp.i18n.__('Astro', 'all-in-one-wp-sticky-anything'),
      value: 'lni-astro'
    }, {
      label: wp.i18n.__('Atlassian', 'all-in-one-wp-sticky-anything'),
      value: 'lni-atlassian'
    }, {
      label: wp.i18n.__('Audi', 'all-in-one-wp-sticky-anything'),
      value: 'lni-audi'
    }, {
      label: wp.i18n.__('Audi Alt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-audi-alt'
    }, {
      label: wp.i18n.__('AWS', 'all-in-one-wp-sticky-anything'),
      value: 'lni-aws'
    }, {
      label: wp.i18n.__('Azure', 'all-in-one-wp-sticky-anything'),
      value: 'lni-azure'
    }, {
      label: wp.i18n.__('Behance', 'all-in-one-wp-sticky-anything'),
      value: 'lni-behance'
    }, {
      label: wp.i18n.__('Bing', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bing'
    }, {
      label: wp.i18n.__('Bitbucket', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bitbucket'
    }, {
      label: wp.i18n.__('Bitcoin', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bitcoin'
    }, {
      label: wp.i18n.__('Bittorrent', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bittorrent'
    }, {
      label: wp.i18n.__('Blogger', 'all-in-one-wp-sticky-anything'),
      value: 'lni-blogger'
    }, {
      label: wp.i18n.__('Blogger Alt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-blogger-alt'
    }, {
      label: wp.i18n.__('Bluetooth', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bluetooth'
    }, {
      label: wp.i18n.__('Bluetooth Logo', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bluetooth-logo'
    }, {
      label: wp.i18n.__('BMW', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bmw'
    }, {
      label: wp.i18n.__('Bootstrap 5', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bootstrap-5'
    }, {
      label: wp.i18n.__('Bootstrap 5 Square', 'all-in-one-wp-sticky-anything'),
      value: 'lni-bootstrap-5-square'
    }, {
      label: wp.i18n.__('Brave', 'all-in-one-wp-sticky-anything'),
      value: 'lni-brave'
    }, {
      label: wp.i18n.__('BTC', 'all-in-one-wp-sticky-anything'),
      value: 'lni-btc'
    }, {
      label: wp.i18n.__('Canva', 'all-in-one-wp-sticky-anything'),
      value: 'lni-canva'
    }, {
      label: wp.i18n.__('Cash App', 'all-in-one-wp-sticky-anything'),
      value: 'lni-cash-app'
    }, {
      label: wp.i18n.__('Chrome', 'all-in-one-wp-sticky-anything'),
      value: 'lni-chrome'
    }, {
      label: wp.i18n.__('Chromecast', 'all-in-one-wp-sticky-anything'),
      value: 'lni-chromecast'
    }, {
      label: wp.i18n.__('Cisco', 'all-in-one-wp-sticky-anything'),
      value: 'lni-cisco'
    }, {
      label: wp.i18n.__('Claude', 'all-in-one-wp-sticky-anything'),
      value: 'lni-claude'
    }, {
      label: wp.i18n.__('Clickup', 'all-in-one-wp-sticky-anything'),
      value: 'lni-clickup'
    }, {
      label: wp.i18n.__('Cloudflare', 'all-in-one-wp-sticky-anything'),
      value: 'lni-cloudflare'
    }, {
      label: wp.i18n.__('Codepen', 'all-in-one-wp-sticky-anything'),
      value: 'lni-codepen'
    }, {
      label: wp.i18n.__('Coinbase', 'all-in-one-wp-sticky-anything'),
      value: 'lni-coinbase'
    }, {
      label: wp.i18n.__('Connectdevelop', 'all-in-one-wp-sticky-anything'),
      value: 'lni-connectdevelop'
    }, {
      label: wp.i18n.__('Copilot', 'all-in-one-wp-sticky-anything'),
      value: 'lni-copilot'
    }, {
      label: wp.i18n.__('Coral', 'all-in-one-wp-sticky-anything'),
      value: 'lni-coral'
    }, {
      label: wp.i18n.__('Cpanel', 'all-in-one-wp-sticky-anything'),
      value: 'lni-cpanel'
    }, {
      label: wp.i18n.__('Creative Commons', 'all-in-one-wp-sticky-anything'),
      value: 'lni-creative-commons'
    }, {
      label: wp.i18n.__('CSS3', 'all-in-one-wp-sticky-anything'),
      value: 'lni-css3'
    }, {
      label: wp.i18n.__('Deno', 'all-in-one-wp-sticky-anything'),
      value: 'lni-deno'
    }, {
      label: wp.i18n.__('Dev', 'all-in-one-wp-sticky-anything'),
      value: 'lni-dev'
    }, {
      label: wp.i18n.__('Dialogflow', 'all-in-one-wp-sticky-anything'),
      value: 'lni-dialogflow'
    }, {
      label: wp.i18n.__('Digitalocean', 'all-in-one-wp-sticky-anything'),
      value: 'lni-digitalocean'
    }, {
      label: wp.i18n.__('Diners Club', 'all-in-one-wp-sticky-anything'),
      value: 'lni-diners-club'
    }, {
      label: wp.i18n.__('Discord', 'all-in-one-wp-sticky-anything'),
      value: 'lni-discord'
    }, {
      label: wp.i18n.__('Discord Chat', 'all-in-one-wp-sticky-anything'),
      value: 'lni-discord-chat'
    }, {
      label: wp.i18n.__('Discover', 'all-in-one-wp-sticky-anything'),
      value: 'lni-discover'
    }, {
      label: wp.i18n.__('Docker', 'all-in-one-wp-sticky-anything'),
      value: 'lni-docker'
    }, {
      label: wp.i18n.__('Dribbble', 'all-in-one-wp-sticky-anything'),
      value: 'lni-dribbble'
    }, {
      label: wp.i18n.__('Dribbble Symbol', 'all-in-one-wp-sticky-anything'),
      value: 'lni-dribbble-symbol'
    }, {
      label: wp.i18n.__('Drizzle', 'all-in-one-wp-sticky-anything'),
      value: 'lni-drizzle'
    }, {
      label: wp.i18n.__('Dropbox', 'all-in-one-wp-sticky-anything'),
      value: 'lni-dropbox'
    }, {
      label: wp.i18n.__('Drupal', 'all-in-one-wp-sticky-anything'),
      value: 'lni-drupal'
    }, {
      label: wp.i18n.__('Edge', 'all-in-one-wp-sticky-anything'),
      value: 'lni-edge'
    }, {
      label: wp.i18n.__('Envato', 'all-in-one-wp-sticky-anything'),
      value: 'lni-envato'
    }, {
      label: wp.i18n.__('Ethereum Logo', 'all-in-one-wp-sticky-anything'),
      value: 'lni-ethereum-logo'
    }, {
      label: wp.i18n.__('Expressjs', 'all-in-one-wp-sticky-anything'),
      value: 'lni-expressjs'
    }, {
      label: wp.i18n.__('Facebook', 'all-in-one-wp-sticky-anything'),
      value: 'lni-facebook'
    }, {
      label: wp.i18n.__('Facebook Messenger', 'all-in-one-wp-sticky-anything'),
      value: 'lni-facebook-messenger'
    }, {
      label: wp.i18n.__('Facebook Rounded', 'all-in-one-wp-sticky-anything'),
      value: 'lni-facebook-rounded'
    }, {
      label: wp.i18n.__('Facebook Square', 'all-in-one-wp-sticky-anything'),
      value: 'lni-facebook-square'
    }, {
      label: wp.i18n.__('Facetime', 'all-in-one-wp-sticky-anything'),
      value: 'lni-facetime'
    }, {
      label: wp.i18n.__('Figma', 'all-in-one-wp-sticky-anything'),
      value: 'lni-figma'
    }, {
      label: wp.i18n.__('Firebase', 'all-in-one-wp-sticky-anything'),
      value: 'lni-firebase'
    }, {
      label: wp.i18n.__('Firefox', 'all-in-one-wp-sticky-anything'),
      value: 'lni-firefox'
    }, {
      label: wp.i18n.__('Fitbit', 'all-in-one-wp-sticky-anything'),
      value: 'lni-fitbit'
    }, {
      label: wp.i18n.__('Flickr', 'all-in-one-wp-sticky-anything'),
      value: 'lni-flickr'
    }, {
      label: wp.i18n.__('Flutter', 'all-in-one-wp-sticky-anything'),
      value: 'lni-flutter'
    }, {
      label: wp.i18n.__('Ford', 'all-in-one-wp-sticky-anything'),
      value: 'lni-ford'
    }, {
      label: wp.i18n.__('Framer', 'all-in-one-wp-sticky-anything'),
      value: 'lni-framer'
    }, {
      label: wp.i18n.__('Gatsby', 'all-in-one-wp-sticky-anything'),
      value: 'lni-gatsby'
    }, {
      label: wp.i18n.__('Gemini', 'all-in-one-wp-sticky-anything'),
      value: 'lni-gemini'
    }, {
      label: wp.i18n.__('Git', 'all-in-one-wp-sticky-anything'),
      value: 'lni-git'
    }, {
      label: wp.i18n.__('Github', 'all-in-one-wp-sticky-anything'),
      value: 'lni-github'
    }, {
      label: wp.i18n.__('Go', 'all-in-one-wp-sticky-anything'),
      value: 'lni-go'
    }, {
      label: wp.i18n.__('Goodreads', 'all-in-one-wp-sticky-anything'),
      value: 'lni-goodreads'
    }, {
      label: wp.i18n.__('Google', 'all-in-one-wp-sticky-anything'),
      value: 'lni-google'
    }, {
      label: wp.i18n.__('Google Cloud', 'all-in-one-wp-sticky-anything'),
      value: 'lni-google-cloud'
    }, {
      label: wp.i18n.__('Google Drive', 'all-in-one-wp-sticky-anything'),
      value: 'lni-google-drive'
    }, {
      label: wp.i18n.__('Google Meet', 'all-in-one-wp-sticky-anything'),
      value: 'lni-google-meet'
    }, {
      label: wp.i18n.__('Google Pay', 'all-in-one-wp-sticky-anything'),
      value: 'lni-google-pay'
    }, {
      label: wp.i18n.__('Google Wallet', 'all-in-one-wp-sticky-anything'),
      value: 'lni-google-wallet'
    }, {
      label: wp.i18n.__('Grammarly', 'all-in-one-wp-sticky-anything'),
      value: 'lni-grammarly'
    }, {
      label: wp.i18n.__('Hacker News', 'all-in-one-wp-sticky-anything'),
      value: 'lni-hacker-news'
    }, {
      label: wp.i18n.__('Hashnode', 'all-in-one-wp-sticky-anything'),
      value: 'lni-hashnode'
    }, {
      label: wp.i18n.__('HTML5', 'all-in-one-wp-sticky-anything'),
      value: 'lni-html5'
    }, {
      label: wp.i18n.__('IBM', 'all-in-one-wp-sticky-anything'),
      value: 'lni-ibm'
    }, {
      label: wp.i18n.__('IMDB', 'all-in-one-wp-sticky-anything'),
      value: 'lni-imdb'
    }, {
      label: wp.i18n.__('Instagram', 'all-in-one-wp-sticky-anything'),
      value: 'lni-instagram'
    }, {
      label: wp.i18n.__('Instagram Logotype', 'all-in-one-wp-sticky-anything'),
      value: 'lni-instagram-logotype'
    }, {
      label: wp.i18n.__('Intel', 'all-in-one-wp-sticky-anything'),
      value: 'lni-intel'
    }, {
      label: wp.i18n.__('iOS', 'all-in-one-wp-sticky-anything'),
      value: 'lni-ios'
    }, {
      label: wp.i18n.__('Jaguar', 'all-in-one-wp-sticky-anything'),
      value: 'lni-jaguar'
    }, {
      label: wp.i18n.__('Jamstack', 'all-in-one-wp-sticky-anything'),
      value: 'lni-jamstack'
    }, {
      label: wp.i18n.__('Java', 'all-in-one-wp-sticky-anything'),
      value: 'lni-java'
    }, {
      label: wp.i18n.__('Javascript', 'all-in-one-wp-sticky-anything'),
      value: 'lni-javascript'
    }, {
      label: wp.i18n.__('JCB', 'all-in-one-wp-sticky-anything'),
      value: 'lni-jcb'
    }, {
      label: wp.i18n.__('Joomla', 'all-in-one-wp-sticky-anything'),
      value: 'lni-joomla'
    }, {
      label: wp.i18n.__('JSFiddle', 'all-in-one-wp-sticky-anything'),
      value: 'lni-jsfiddle'
    }, {
      label: wp.i18n.__('Kubernetes', 'all-in-one-wp-sticky-anything'),
      value: 'lni-kubernetes'
    }, {
      label: wp.i18n.__('Laravel', 'all-in-one-wp-sticky-anything'),
      value: 'lni-laravel'
    }, {
      label: wp.i18n.__('Lemon Squeezy', 'all-in-one-wp-sticky-anything'),
      value: 'lni-lemon-squeezy'
    }, {
      label: wp.i18n.__('Line', 'all-in-one-wp-sticky-anything'),
      value: 'lni-line'
    }, {
      label: wp.i18n.__('Lineicons', 'all-in-one-wp-sticky-anything'),
      value: 'lni-lineicons'
    }, {
      label: wp.i18n.__('LinkedIn', 'all-in-one-wp-sticky-anything'),
      value: 'lni-linkedin'
    }, {
      label: wp.i18n.__('Loom', 'all-in-one-wp-sticky-anything'),
      value: 'lni-loom'
    }, {
      label: wp.i18n.__('Magento', 'all-in-one-wp-sticky-anything'),
      value: 'lni-magento'
    }, {
      label: wp.i18n.__('Mailchimp', 'all-in-one-wp-sticky-anything'),
      value: 'lni-mailchimp'
    }, {
      label: wp.i18n.__('Markdown', 'all-in-one-wp-sticky-anything'),
      value: 'lni-markdown'
    }, {
      label: wp.i18n.__('Mastercard', 'all-in-one-wp-sticky-anything'),
      value: 'lni-mastercard'
    }, {
      label: wp.i18n.__('Medium', 'all-in-one-wp-sticky-anything'),
      value: 'lni-medium'
    }, {
      label: wp.i18n.__('Medium Alt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-medium-alt'
    }, {
      label: wp.i18n.__('Mercedes', 'all-in-one-wp-sticky-anything'),
      value: 'lni-mercedes'
    }, {
      label: wp.i18n.__('Meta', 'all-in-one-wp-sticky-anything'),
      value: 'lni-meta'
    }, {
      label: wp.i18n.__('Meta Alt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-meta-alt'
    }, {
      label: wp.i18n.__('Microsoft', 'all-in-one-wp-sticky-anything'),
      value: 'lni-microsoft'
    }, {
      label: wp.i18n.__('Microsoft Edge', 'all-in-one-wp-sticky-anything'),
      value: 'lni-microsoft-edge'
    }, {
      label: wp.i18n.__('Microsoft Teams', 'all-in-one-wp-sticky-anything'),
      value: 'lni-microsoft-teams'
    }, {
      label: wp.i18n.__('MongoDB', 'all-in-one-wp-sticky-anything'),
      value: 'lni-mongodb'
    }, {
      label: wp.i18n.__('MySQL', 'all-in-one-wp-sticky-anything'),
      value: 'lni-mysql'
    }, {
      label: wp.i18n.__('NASA', 'all-in-one-wp-sticky-anything'),
      value: 'lni-nasa'
    }, {
      label: wp.i18n.__('Netflix', 'all-in-one-wp-sticky-anything'),
      value: 'lni-netflix'
    }, {
      label: wp.i18n.__('Netlify', 'all-in-one-wp-sticky-anything'),
      value: 'lni-netlify'
    }, {
      label: wp.i18n.__('Nextjs', 'all-in-one-wp-sticky-anything'),
      value: 'lni-nextjs'
    }, {
      label: wp.i18n.__('Nike', 'all-in-one-wp-sticky-anything'),
      value: 'lni-nike'
    }, {
      label: wp.i18n.__('Nissan', 'all-in-one-wp-sticky-anything'),
      value: 'lni-nissan'
    }, {
      label: wp.i18n.__('Nodejs', 'all-in-one-wp-sticky-anything'),
      value: 'lni-nodejs'
    }, {
      label: wp.i18n.__('Nodejs Alt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-nodejs-alt'
    }, {
      label: wp.i18n.__('Notion', 'all-in-one-wp-sticky-anything'),
      value: 'lni-notion'
    }, {
      label: wp.i18n.__('NPM', 'all-in-one-wp-sticky-anything'),
      value: 'lni-npm'
    }, {
      label: wp.i18n.__('Nuxt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-nuxt'
    }, {
      label: wp.i18n.__('Nvidia', 'all-in-one-wp-sticky-anything'),
      value: 'lni-nvidia'
    }, {
      label: wp.i18n.__('Oculus', 'all-in-one-wp-sticky-anything'),
      value: 'lni-oculus'
    }, {
      label: wp.i18n.__('OpenAI', 'all-in-one-wp-sticky-anything'),
      value: 'lni-open-ai'
    }, {
      label: wp.i18n.__('Opera Mini', 'all-in-one-wp-sticky-anything'),
      value: 'lni-opera-mini'
    }, {
      label: wp.i18n.__('Oracle', 'all-in-one-wp-sticky-anything'),
      value: 'lni-oracle'
    }, {
      label: wp.i18n.__('Paddle', 'all-in-one-wp-sticky-anything'),
      value: 'lni-paddle'
    }, {
      label: wp.i18n.__('Patreon', 'all-in-one-wp-sticky-anything'),
      value: 'lni-patreon'
    }, {
      label: wp.i18n.__('Payoneer', 'all-in-one-wp-sticky-anything'),
      value: 'lni-payoneer'
    }, {
      label: wp.i18n.__('PayPal', 'all-in-one-wp-sticky-anything'),
      value: 'lni-paypal'
    }, {
      label: wp.i18n.__('Pepsi', 'all-in-one-wp-sticky-anything'),
      value: 'lni-pepsi'
    }, {
      label: wp.i18n.__('PHP', 'all-in-one-wp-sticky-anything'),
      value: 'lni-php'
    }, {
      label: wp.i18n.__('Pimjo Logo', 'all-in-one-wp-sticky-anything'),
      value: 'lni-pimjo-logo'
    }, {
      label: wp.i18n.__('Pimjo Symbol', 'all-in-one-wp-sticky-anything'),
      value: 'lni-pimjo-symbol'
    }, {
      label: wp.i18n.__('Pinterest', 'all-in-one-wp-sticky-anything'),
      value: 'lni-pinterest'
    }, {
      label: wp.i18n.__('Plantscale', 'all-in-one-wp-sticky-anything'),
      value: 'lni-plantscale'
    }, {
      label: wp.i18n.__('Play Store', 'all-in-one-wp-sticky-anything'),
      value: 'lni-play-store'
    }, {
      label: wp.i18n.__('Playstation', 'all-in-one-wp-sticky-anything'),
      value: 'lni-playstation'
    }, {
      label: wp.i18n.__('PNPM', 'all-in-one-wp-sticky-anything'),
      value: 'lni-pnpm'
    }, {
      label: wp.i18n.__('PostgreSQL', 'all-in-one-wp-sticky-anything'),
      value: 'lni-postgresql'
    }, {
      label: wp.i18n.__('Postman', 'all-in-one-wp-sticky-anything'),
      value: 'lni-postman'
    }, {
      label: wp.i18n.__('Prisma', 'all-in-one-wp-sticky-anything'),
      value: 'lni-prisma'
    }, {
      label: wp.i18n.__('Producthunt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-producthunt'
    }, {
      label: wp.i18n.__('Proton Mail Logo', 'all-in-one-wp-sticky-anything'),
      value: 'lni-proton-mail-logo'
    }, {
      label: wp.i18n.__('Proton Mail Symbol', 'all-in-one-wp-sticky-anything'),
      value: 'lni-proton-mail-symbol'
    }, {
      label: wp.i18n.__('Python', 'all-in-one-wp-sticky-anything'),
      value: 'lni-python'
    }, {
      label: wp.i18n.__('Quora', 'all-in-one-wp-sticky-anything'),
      value: 'lni-quora'
    }, {
      label: wp.i18n.__('Radis', 'all-in-one-wp-sticky-anything'),
      value: 'lni-radis'
    }, {
      label: wp.i18n.__('React', 'all-in-one-wp-sticky-anything'),
      value: 'lni-react'
    }, {
      label: wp.i18n.__('Reddit', 'all-in-one-wp-sticky-anything'),
      value: 'lni-reddit'
    }, {
      label: wp.i18n.__('Remix JS', 'all-in-one-wp-sticky-anything'),
      value: 'lni-remix-js'
    }, {
      label: wp.i18n.__('Safari', 'all-in-one-wp-sticky-anything'),
      value: 'lni-safari'
    }, {
      label: wp.i18n.__('Sanity', 'all-in-one-wp-sticky-anything'),
      value: 'lni-sanity'
    }, {
      label: wp.i18n.__('Signal App', 'all-in-one-wp-sticky-anything'),
      value: 'lni-signal-app'
    }, {
      label: wp.i18n.__('Sketch', 'all-in-one-wp-sticky-anything'),
      value: 'lni-sketch'
    }, {
      label: wp.i18n.__('Skype', 'all-in-one-wp-sticky-anything'),
      value: 'lni-skype'
    }, {
      label: wp.i18n.__('Slack', 'all-in-one-wp-sticky-anything'),
      value: 'lni-slack'
    }, {
      label: wp.i18n.__('Slideshare', 'all-in-one-wp-sticky-anything'),
      value: 'lni-slideshare'
    }, {
      label: wp.i18n.__('Snapchat', 'all-in-one-wp-sticky-anything'),
      value: 'lni-snapchat'
    }, {
      label: wp.i18n.__('Soundcloud', 'all-in-one-wp-sticky-anything'),
      value: 'lni-soundcloud'
    }, {
      label: wp.i18n.__('SpaceX', 'all-in-one-wp-sticky-anything'),
      value: 'lni-spacex'
    }, {
      label: wp.i18n.__('Spotify', 'all-in-one-wp-sticky-anything'),
      value: 'lni-spotify'
    }, {
      label: wp.i18n.__('Spotify Alt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-spotify-alt'
    }, {
      label: wp.i18n.__('Squarespace', 'all-in-one-wp-sticky-anything'),
      value: 'lni-squarespace'
    }, {
      label: wp.i18n.__('Stackoverflow', 'all-in-one-wp-sticky-anything'),
      value: 'lni-stackoverflow'
    }, {
      label: wp.i18n.__('Statista', 'all-in-one-wp-sticky-anything'),
      value: 'lni-statista'
    }, {
      label: wp.i18n.__('Steam', 'all-in-one-wp-sticky-anything'),
      value: 'lni-steam'
    }, {
      label: wp.i18n.__('Stripe', 'all-in-one-wp-sticky-anything'),
      value: 'lni-stripe'
    }, {
      label: wp.i18n.__('Stumbleupon', 'all-in-one-wp-sticky-anything'),
      value: 'lni-stumbleupon'
    }, {
      label: wp.i18n.__('Supabase', 'all-in-one-wp-sticky-anything'),
      value: 'lni-supabase'
    }, {
      label: wp.i18n.__('Svelte', 'all-in-one-wp-sticky-anything'),
      value: 'lni-svelte'
    }, {
      label: wp.i18n.__('Swift', 'all-in-one-wp-sticky-anything'),
      value: 'lni-swift'
    }, {
      label: wp.i18n.__('Tailwindcss', 'all-in-one-wp-sticky-anything'),
      value: 'lni-tailwindcss'
    }, {
      label: wp.i18n.__('Telegram', 'all-in-one-wp-sticky-anything'),
      value: 'lni-telegram'
    }, {
      label: wp.i18n.__('Tesla', 'all-in-one-wp-sticky-anything'),
      value: 'lni-tesla'
    }, {
      label: wp.i18n.__('TikTok', 'all-in-one-wp-sticky-anything'),
      value: 'lni-tiktok'
    }, {
      label: wp.i18n.__('TikTok Alt', 'all-in-one-wp-sticky-anything'),
      value: 'lni-tiktok-alt'
    }, {
      label: wp.i18n.__('Toyota', 'all-in-one-wp-sticky-anything'),
      value: 'lni-toyota'
    }, {
      label: wp.i18n.__('Trello', 'all-in-one-wp-sticky-anything'),
      value: 'lni-trello'
    }, {
      label: wp.i18n.__('Tumblr', 'all-in-one-wp-sticky-anything'),
      value: 'lni-tumblr'
    }, {
      label: wp.i18n.__('Turborepo', 'all-in-one-wp-sticky-anything'),
      value: 'lni-turborepo'
    }, {
      label: wp.i18n.__('Twitch', 'all-in-one-wp-sticky-anything'),
      value: 'lni-twitch'
    }, {
      label: wp.i18n.__('Twitter Old', 'all-in-one-wp-sticky-anything'),
      value: 'lni-twitter-old'
    }, {
      label: wp.i18n.__('Typescript', 'all-in-one-wp-sticky-anything'),
      value: 'lni-typescript'
    }, {
      label: wp.i18n.__('Uber', 'all-in-one-wp-sticky-anything'),
      value: 'lni-uber'
    }, {
      label: wp.i18n.__('Uber Symbol', 'all-in-one-wp-sticky-anything'),
      value: 'lni-uber-symbol'
    }, {
      label: wp.i18n.__('Ubuntu', 'all-in-one-wp-sticky-anything'),
      value: 'lni-ubuntu'
    }, {
      label: wp.i18n.__('Unsplash', 'all-in-one-wp-sticky-anything'),
      value: 'lni-unsplash'
    }, {
      label: wp.i18n.__('Vercel', 'all-in-one-wp-sticky-anything'),
      value: 'lni-vercel'
    }, {
      label: wp.i18n.__('Vimeo', 'all-in-one-wp-sticky-anything'),
      value: 'lni-vimeo'
    }, {
      label: wp.i18n.__('Visa', 'all-in-one-wp-sticky-anything'),
      value: 'lni-visa'
    }, {
      label: wp.i18n.__('Vite', 'all-in-one-wp-sticky-anything'),
      value: 'lni-vite'
    }, {
      label: wp.i18n.__('VK', 'all-in-one-wp-sticky-anything'),
      value: 'lni-vk'
    }, {
      label: wp.i18n.__('VMware', 'all-in-one-wp-sticky-anything'),
      value: 'lni-vmware'
    }, {
      label: wp.i18n.__('Volkswagen', 'all-in-one-wp-sticky-anything'),
      value: 'lni-volkswagen'
    }, {
      label: wp.i18n.__('VS Code', 'all-in-one-wp-sticky-anything'),
      value: 'lni-vs-code'
    }, {
      label: wp.i18n.__('Vuejs', 'all-in-one-wp-sticky-anything'),
      value: 'lni-vuejs'
    }, {
      label: wp.i18n.__('Webflow', 'all-in-one-wp-sticky-anything'),
      value: 'lni-webflow'
    }, {
      label: wp.i18n.__('Webhooks', 'all-in-one-wp-sticky-anything'),
      value: 'lni-webhooks'
    }, {
      label: wp.i18n.__('WeChat', 'all-in-one-wp-sticky-anything'),
      value: 'lni-wechat'
    }, {
      label: wp.i18n.__('WhatsApp', 'all-in-one-wp-sticky-anything'),
      value: 'lni-whatsapp'
    }, {
      label: wp.i18n.__('Windows', 'all-in-one-wp-sticky-anything'),
      value: 'lni-windows'
    }, {
      label: wp.i18n.__('Wise', 'all-in-one-wp-sticky-anything'),
      value: 'lni-wise'
    }, {
      label: wp.i18n.__('WordPress', 'all-in-one-wp-sticky-anything'),
      value: 'lni-wordpress'
    }, {
      label: wp.i18n.__('X', 'all-in-one-wp-sticky-anything'),
      value: 'lni-x'
    }, {
      label: wp.i18n.__('XAMPP', 'all-in-one-wp-sticky-anything'),
      value: 'lni-xampp'
    }, {
      label: wp.i18n.__('Xbox', 'all-in-one-wp-sticky-anything'),
      value: 'lni-xbox'
    }, {
      label: wp.i18n.__('XRP', 'all-in-one-wp-sticky-anything'),
      value: 'lni-xrp'
    }, {
      label: wp.i18n.__('Yahoo', 'all-in-one-wp-sticky-anything'),
      value: 'lni-yahoo'
    }, {
      label: wp.i18n.__('Yarn', 'all-in-one-wp-sticky-anything'),
      value: 'lni-yarn'
    }, {
      label: wp.i18n.__('YCombinator', 'all-in-one-wp-sticky-anything'),
      value: 'lni-ycombinator'
    }, {
      label: wp.i18n.__('YouTube', 'all-in-one-wp-sticky-anything'),
      value: 'lni-youtube'
    }, {
      label: wp.i18n.__('YouTube Kids', 'all-in-one-wp-sticky-anything'),
      value: 'lni-youtube-kids'
    }, {
      label: wp.i18n.__('YouTube Music', 'all-in-one-wp-sticky-anything'),
      value: 'lni-youtube-music'
    }, {
      label: wp.i18n.__('Zapier', 'all-in-one-wp-sticky-anything'),
      value: 'lni-zapier'
    }, {
      label: wp.i18n.__('Zoom', 'all-in-one-wp-sticky-anything'),
      value: 'lni-zoom'
    }]
  };
  var currentSocialIcons = socialIconOptions[data.stickySocialIconType] || socialIconOptions.dashicons;
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-sticky"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Sticky Social Icons Settings', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Sticky Social Icons', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySocial_FormToggle, {
    checked: stickySocialIcon,
    onChange: function onChange() {
      return setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
        stickySocialIcon: !stickySocialIcon
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Enable or disable the sticky social icons.', 'all-in-one-wp-sticky-anything')))), !!stickySocialIcon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Icons Type', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySocial_ButtonGroup, null, iconOptions.map(function (icon) {
    return /*#__PURE__*/React.createElement(StickySocial_Button, {
      key: icon.value,
      disabled: icon.pro && !isPro,
      className: icon.pro && !isPro ? 'ai1wpsa-pro-feature' : '',
      onClick: function onClick() {
        if (icon.pro && !isPro) return;
        setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIconType: icon.value
        }));
      },
      variant: stickySocialIconType === icon.value ? 'primary' : ''
    }, icon.label);
  })), !isPro && /*#__PURE__*/React.createElement(M, {
    anchorSelect: ".ai1wpsa-pro-feature",
    variant: "warning",
    content: wp.i18n.__('Pro Feature', 'all-in-one-wp-sticky-anything')
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Select the social icons library.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Icons Position', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySocial_ButtonGroup, null, positionOptions.map(function (pos) {
    return /*#__PURE__*/React.createElement(StickySocial_Button, {
      key: pos.value,
      disabled: !isPro && !!pos.pro,
      className: pos.pro && !isPro ? 'ai1wpsa-pro-feature' : '',
      onClick: function onClick() {
        if (pos.pro && !isPro) return;
        setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIconPosition: pos.value
        }));
      },
      title: pos.pro ? wp.i18n.__('Pro Feature', 'all-in-one-wp-sticky-anything') : '',
      variant: stickySocialIconPosition === pos.value ? 'primary' : ''
    }, pos.label);
  })), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Select the social icons position on the frontend.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Icons Style', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySocial_ButtonGroup, null, styleOptions.map(function (style) {
    return /*#__PURE__*/React.createElement(StickySocial_Button, {
      key: style.value,
      onClick: function onClick() {
        return setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIconStyle: style.value
        }));
      },
      variant: stickySocialIconStyle === style.value ? 'primary' : ''
    }, style.label);
  })), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Select the social icons style on the frontend.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Display Location', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySocial_ButtonGroup, null, displayLocationOptions.map(function (display) {
    return /*#__PURE__*/React.createElement(StickySocial_Button, {
      key: display.value,
      className: display.pro && !isPro ? 'ai1wpsa-pro-feature' : '',
      disabled: display.pro && !isPro,
      onClick: function onClick() {
        if (!isPro) return;
        setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIconDisplay: display.value
        }));
      },
      variant: stickySocialIconDisplay === display.value ? 'primary' : '',
      title: !isPro ? wp.i18n.__('Pro feature', 'all-in-one-wp-sticky-anything') : ''
    }, display.label);
  })), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('set the social icon display location visibility on the frontend.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Device', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickySocial_ButtonGroup, null, deviceOptions.map(function (device) {
    return /*#__PURE__*/React.createElement(StickySocial_Button, {
      key: device.value,
      disabled: device.pro && !isPro,
      className: device.pro && !isPro ? 'ai1wpsa-pro-feature' : '',
      onClick: function onClick() {
        if (!isPro) return;
        setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIconDevice: device.value
        }));
      },
      variant: stickySocialIconDevice === device.value ? 'primary' : '',
      title: !isPro ? wp.i18n.__('Pro feature', 'all-in-one-wp-sticky-anything') : ''
    }, device.label);
  })), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('set the social icon device visibility on the frontend.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    className: "settings-field social-icons"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Social Icons', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-list"
  }, stickySocialIcons === null || stickySocialIcons === void 0 ? void 0 : stickySocialIcons.map(function (icon) {
    return /*#__PURE__*/React.createElement("div", {
      className: "icon-list-item",
      key: icon.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement(StickySocial_SelectControl, {
      value: icon.value,
      options: currentSocialIcons,
      className: "ai1wpsa-select-control",
      onChange: function onChange(value) {
        setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIcons: data.stickySocialIcons.map(function (item) {
            return item.id === icon.id ? StickySocial_objectSpread(StickySocial_objectSpread({}, item), {}, {
              value: value
            }) : item;
          })
        }));
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "url"
    }, /*#__PURE__*/React.createElement(StickySocial_TextControl, {
      type: "url",
      value: icon.url,
      className: "ai1wpsa-text-control",
      placeholder: wp.i18n.__('Enter URL', 'all-in-one-wp-sticky-anything'),
      onChange: function onChange(value) {
        setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIcons: data.stickySocialIcons.map(function (item) {
            return item.id === icon.id ? StickySocial_objectSpread(StickySocial_objectSpread({}, item), {}, {
              url: value
            }) : item;
          })
        }));
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, stickySocialIcons.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StickySocial_Button, {
      type: "button",
      className: "ai1wpsa-btn duplicate",
      onClick: function onClick() {
        setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIcons: [].concat(_toConsumableArray(data.stickySocialIcons), [{
            id: Math.random().toString(36).substring(7),
            value: icon.value,
            url: icon.url
          }])
        }));
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "dashicons dashicons-admin-page"
    })), /*#__PURE__*/React.createElement(StickySocial_Button, {
      type: "button",
      className: "ai1wpsa-btn delete",
      onClick: function onClick() {
        setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
          stickySocialIcons: data.stickySocialIcons.filter(function (item) {
            return item.id !== icon.id;
          })
        }));
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "dashicons dashicons-trash"
    })))));
  }), /*#__PURE__*/React.createElement(StickySocial_Button, {
    type: "button",
    className: "ai1wpsa-btn",
    onClick: function onClick() {
      setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
        stickySocialIcons: [].concat(_toConsumableArray(data.stickySocialIcons || []), [{
          id: Math.random().toString(36).substring(7),
          value: '',
          url: ''
        }])
      }));
    }
  }, wp.i18n.__('Add New', 'all-in-one-wp-sticky-anything'))))), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Icon Menu Background Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickySocialIconsMenuBgColor,
    onChange: function onChange(value) {
      return setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
        stickySocialIconsMenuBgColor: value
      }));
    },
    allowReset: true,
    resetValue: '#004bcb'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Icon Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickySocialIconsIconColor,
    onChange: function onChange(value) {
      return setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
        stickySocialIconsIconColor: value
      }));
    },
    allowReset: true,
    resetValue: '#fff'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Icon Hover Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickySocialIconsIconHoverColor,
    customClassName: "".concat(!isPro ? 'ai1wpsa-pro-feature' : ''),
    onChange: function onChange(value) {
      if (!isPro) {
        return;
      }
      setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
        stickySocialIconsIconHoverColor: value
      }));
    },
    allowReset: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Icon Background Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickySocialIconsIconBgColor,
    onChange: function onChange(value) {
      return setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
        stickySocialIconsIconBgColor: value
      }));
    },
    allowReset: true,
    resetValue: '#fff'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Icon Background Hover Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickySocialIconsIconHoverBgColor,
    customClassName: "".concat(!isPro ? 'ai1wpsa-pro-feature' : ''),
    onChange: function onChange(value) {
      if (!isPro) {
        return;
      }
      setData(StickySocial_objectSpread(StickySocial_objectSpread({}, data), {}, {
        stickySocialIconsIconHoverBgColor: value
      }));
    },
    allowReset: true
  }))))));
}
;// ./src/js/components/Settings/StickyCookieConsent.js
function StickyCookieConsent_typeof(o) { "@babel/helpers - typeof"; return StickyCookieConsent_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, StickyCookieConsent_typeof(o); }
function StickyCookieConsent_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function StickyCookieConsent_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? StickyCookieConsent_ownKeys(Object(t), !0).forEach(function (r) { StickyCookieConsent_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : StickyCookieConsent_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function StickyCookieConsent_defineProperty(e, r, t) { return (r = StickyCookieConsent_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function StickyCookieConsent_toPropertyKey(t) { var i = StickyCookieConsent_toPrimitive(t, "string"); return "symbol" == StickyCookieConsent_typeof(i) ? i : i + ""; }
function StickyCookieConsent_toPrimitive(t, r) { if ("object" != StickyCookieConsent_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != StickyCookieConsent_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || StickyCookieConsent_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function StickyCookieConsent_toConsumableArray(r) { return StickyCookieConsent_arrayWithoutHoles(r) || StickyCookieConsent_iterableToArray(r) || StickyCookieConsent_unsupportedIterableToArray(r) || StickyCookieConsent_nonIterableSpread(); }
function StickyCookieConsent_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function StickyCookieConsent_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return StickyCookieConsent_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? StickyCookieConsent_arrayLikeToArray(r, a) : void 0; } }
function StickyCookieConsent_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function StickyCookieConsent_arrayWithoutHoles(r) { if (Array.isArray(r)) return StickyCookieConsent_arrayLikeToArray(r); }
function StickyCookieConsent_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var StickyCookieConsent_useContext = wp.element.useContext;
var StickyCookieConsent_wp$components = wp.components,
  StickyCookieConsent_Button = StickyCookieConsent_wp$components.Button,
  StickyCookieConsent_ButtonGroup = StickyCookieConsent_wp$components.ButtonGroup,
  StickyCookieConsent_FormToggle = StickyCookieConsent_wp$components.FormToggle,
  StickyCookieConsent_TextControl = StickyCookieConsent_wp$components.TextControl,
  StickyCookieConsent_TextareaControl = StickyCookieConsent_wp$components.TextareaControl;


function StickyCookieConsent() {
  var _ai1wpsa = ai1wpsa,
    isPro = _ai1wpsa.isPro;
  var _useContext = StickyCookieConsent_useContext(Contexts_SettingsContext),
    data = _useContext.data,
    setData = _useContext.setData;
  var _ref = data || {},
    _ref$stickyCookieCons = _ref.stickyCookieConsent,
    stickyCookieConsent = _ref$stickyCookieCons === void 0 ? false : _ref$stickyCookieCons,
    _ref$stickyCookieCons2 = _ref.stickyCookieConsentLayout,
    stickyCookieConsentLayout = _ref$stickyCookieCons2 === void 0 ? 'long' : _ref$stickyCookieCons2,
    _ref$stickyCookieCons3 = _ref.stickyCookieConsentPosition,
    stickyCookieConsentPosition = _ref$stickyCookieCons3 === void 0 ? 'bottom-right' : _ref$stickyCookieCons3,
    _ref$stickyCookieCons4 = _ref.stickyCookieConsentDevice,
    stickyCookieConsentDevice = _ref$stickyCookieCons4 === void 0 ? 'all' : _ref$stickyCookieCons4,
    _ref$stickyCookieCons5 = _ref.stickyCookieConsentMessage,
    stickyCookieConsentMessage = _ref$stickyCookieCons5 === void 0 ? wp.i18n.__('We use cookies to improve your experience on our site. By using our site, you consent to cookies.', 'all-in-one-wp-sticky-anything') : _ref$stickyCookieCons5,
    _ref$stickyCookieCons6 = _ref.stickyCookieConsentButtons,
    stickyCookieConsentButtons = _ref$stickyCookieCons6 === void 0 ? [{
      id: 'accept',
      label: wp.i18n.__('Accept Button', 'all-in-one-wp-sticky-anything'),
      text: wp.i18n.__('Accept', 'all-in-one-wp-sticky-anything'),
      status: true
    }, {
      id: 'reject',
      label: wp.i18n.__('Reject Button', 'all-in-one-wp-sticky-anything'),
      text: wp.i18n.__('Reject', 'all-in-one-wp-sticky-anything'),
      status: true
    }] : _ref$stickyCookieCons6,
    _ref$stickyCookieCons7 = _ref.stickyCookieConsentCloseButton,
    stickyCookieConsentCloseButton = _ref$stickyCookieCons7 === void 0 ? true : _ref$stickyCookieCons7,
    _ref$stickyCookieCons8 = _ref.stickyCookieConsentBannerStyle,
    stickyCookieConsentBannerStyle = _ref$stickyCookieCons8 === void 0 ? {
      bgColor: '#fff',
      textColor: '#5c637e',
      fontSize: '16px'
    } : _ref$stickyCookieCons8,
    _ref$stickyCookieCons9 = _ref.stickyCookieConsentButtonStyle,
    stickyCookieConsentButtonStyle = _ref$stickyCookieCons9 === void 0 ? {
      acceptBtnBg: '#004bcb',
      acceptTextColor: '#fff',
      rejectBtnBg: '#ffffff00',
      rejectTextColor: '#000'
    } : _ref$stickyCookieCons9;
  var layoutOptions = [{
    label: wp.i18n.__('Long Banner', 'all-in-one-wp-sticky-anything'),
    value: 'long',
    pro: false
  }, {
    label: wp.i18n.__('Floating Banner', 'all-in-one-wp-sticky-anything'),
    value: 'floating',
    pro: true
  }, {
    label: wp.i18n.__('Modal Banner', 'all-in-one-wp-sticky-anything'),
    value: 'modal',
    pro: true
  }];
  var positionOptions = [{
    label: wp.i18n.__('Bottom Left', 'all-in-one-wp-sticky-anything'),
    value: 'bottom-left',
    pro: true
  }, {
    label: wp.i18n.__('Bottom Right', 'all-in-one-wp-sticky-anything'),
    value: 'bottom-right',
    pro: true
  }];
  var reorder = function reorder(list, startIndex, endIndex) {
    var result = StickyCookieConsent_toConsumableArray(list);
    var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = _slicedToArray(_result$splice, 1),
      removed = _result$splice2[0];
    result.splice(endIndex, 0, removed);
    return result;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-welcome-widgets-menus"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Sticky Cookie Consent Settings', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Sticky Cookie Consent', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickyCookieConsent_FormToggle, {
    checked: stickyCookieConsent,
    onChange: function onChange() {
      return setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsent: !stickyCookieConsent
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Enable or disable the sticky cookie consent.', 'all-in-one-wp-sticky-anything')))), !!stickyCookieConsent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Layout', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickyCookieConsent_ButtonGroup, {
    className: "ai1wpsa-cookie-consent-layout"
  }, layoutOptions.map(function (_ref2) {
    var _ai1wpsa2;
    var label = _ref2.label,
      value = _ref2.value,
      pro = _ref2.pro;
    return /*#__PURE__*/React.createElement(StickyCookieConsent_Button, {
      key: value,
      disabled: !!pro && !isPro,
      className: !!pro && !isPro ? 'ai1wpsa-pro-feature' : '',
      onClick: function onClick() {
        if (!!pro && !isPro) return;
        setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
          stickyCookieConsentLayout: value
        }));
      },
      variant: stickyCookieConsentLayout === value ? 'primary' : ''
    }, /*#__PURE__*/React.createElement("img", {
      src: ((_ai1wpsa2 = ai1wpsa) === null || _ai1wpsa2 === void 0 ? void 0 : _ai1wpsa2.pluginUrl) + "/assets/images/cookie-consent/".concat(value, ".png"),
      alt: label
    }), /*#__PURE__*/React.createElement("span", null, label));
  })), !isPro && /*#__PURE__*/React.createElement(M, {
    anchorSelect: ".ai1wpsa-pro-feature",
    variant: "warning",
    content: wp.i18n.__('Coming Soon', 'all-in-one-wp-sticky-anything')
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Select the layout of the sticky cookie consent.', 'all-in-one-wp-sticky-anything')))), stickyCookieConsentLayout === 'floating' && /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Position', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickyCookieConsent_ButtonGroup, null, positionOptions.map(function (_ref3) {
    var label = _ref3.label,
      value = _ref3.value,
      pro = _ref3.pro;
    return /*#__PURE__*/React.createElement(StickyCookieConsent_Button, {
      key: value,
      disabled: !!pro && !isPro,
      className: !!pro && !isPro ? 'ai1wpsa-pro-feature' : '',
      onClick: function onClick() {
        if (!!pro && !isPro) return;
        setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
          stickyCookieConsentPosition: value
        }));
      },
      variant: stickyCookieConsentPosition === value ? 'primary' : ''
    }, label);
  })), !isPro && /*#__PURE__*/React.createElement(M, {
    anchorSelect: ".ai1wpsa-pro-feature",
    variant: "warning",
    content: wp.i18n.__('Pro Feature', 'all-in-one-wp-sticky-anything')
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Select the position of the sticky cookie consent.', 'all-in-one-wp-sticky-anything')))), isPro && /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Device', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickyCookieConsent_ButtonGroup, null, /*#__PURE__*/React.createElement(StickyCookieConsent_Button, {
    onClick: function onClick() {
      if (!isPro) {
        return;
      }
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentDevice: 'all'
      }));
    },
    variant: stickyCookieConsentDevice === 'all' ? 'primary' : ''
  }, wp.i18n.__('All', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(StickyCookieConsent_Button, {
    onClick: function onClick() {
      if (!isPro) {
        return;
      }
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentDevice: 'desktop'
      }));
    },
    variant: stickyCookieConsentDevice === 'desktop' ? 'primary' : ''
  }, wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(StickyCookieConsent_Button, {
    onClick: function onClick() {
      if (!isPro) {
        return;
      }
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentDevice: 'tablet'
      }));
    },
    variant: stickyCookieConsentDevice === 'tablet' ? 'primary' : ''
  }, wp.i18n.__('Tablet', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(StickyCookieConsent_Button, {
    onClick: function onClick() {
      if (!isPro) {
        return;
      }
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentDevice: 'mobile'
      }));
    },
    variant: stickyCookieConsentDevice === 'mobile' ? 'primary' : ''
  }, wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Set your desire z-index value for your target element.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Message', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickyCookieConsent_TextareaControl, {
    value: stickyCookieConsentMessage,
    className: "ai1wpsa-textarea-control",
    placeholder: wp.i18n.__('ex: We use cookies to improve your experience on our site.', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentMessage: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Set your cookie consent message.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Buttons', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-cookie-consent-buttons"
  }, stickyCookieConsentButtons.map(function (_ref4, index) {
    var id = _ref4.id,
      label = _ref4.label,
      text = _ref4.text,
      status = _ref4.status;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      className: "ai1wpsa-button-row",
      draggable: true,
      onDragStart: function onDragStart(e) {
        e.dataTransfer.setData('text/plain', index);
        e.dataTransfer.effectAllowed = 'move';
      },
      onDragOver: function onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        var fromIndex = Number(e.dataTransfer.getData('text/plain'));
        var toIndex = index;
        if (fromIndex === toIndex) return;
        setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
          stickyCookieConsentButtons: reorder(stickyCookieConsentButtons, fromIndex, toIndex)
        }));
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ai1wpsa-drag-handle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "dashicons dashicons-menu-alt3"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ai1wpsa-button-label"
    }, label), /*#__PURE__*/React.createElement(StickyCookieConsent_TextControl, {
      className: "ai1wpsa-text-control",
      value: text,
      placeholder: label,
      onChange: function onChange(newText) {
        setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
          stickyCookieConsentButtons: stickyCookieConsentButtons.map(function (btn) {
            return btn.id === id ? StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, btn), {}, {
              text: newText
            }) : btn;
          })
        }));
      }
    }), /*#__PURE__*/React.createElement(StickyCookieConsent_FormToggle, {
      className: "ai1wpsa-checkbox-control",
      checked: status,
      onChange: function onChange() {
        setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
          stickyCookieConsentButtons: stickyCookieConsentButtons.map(function (btn) {
            return btn.id === id ? StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, btn), {}, {
              status: !btn.status
            }) : btn;
          })
        }));
      }
    }));
  })), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Set your cookie consent buttons.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Close Button', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(StickyCookieConsent_FormToggle, {
    checked: stickyCookieConsentCloseButton,
    onChange: function onChange() {
      return setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentCloseButton: !stickyCookieConsentCloseButton
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Enable or disable the close button on the cookie consent.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Banner Style', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-sub-field flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Background Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickyCookieConsentBannerStyle.bgColor,
    onChange: function onChange(value) {
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentBannerStyle: StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, stickyCookieConsentBannerStyle), {}, {
          bgColor: value
        })
      }));
    },
    allowReset: true,
    resetValue: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Text Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickyCookieConsentBannerStyle.textColor,
    onChange: function onChange(value) {
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentBannerStyle: StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, stickyCookieConsentBannerStyle), {}, {
          textColor: value
        })
      }));
    },
    allowReset: true,
    resetValue: "#5c637e"
  })), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Font Size', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(StickyCookieConsent_TextControl, {
    value: stickyCookieConsentBannerStyle.fontSize,
    className: "ai1wpsa-text-control",
    placeholder: wp.i18n.__('16px', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentBannerStyle: StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, stickyCookieConsentBannerStyle), {}, {
          fontSize: value
        })
      }));
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Button Style', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-sub-field flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Accept Button Background Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickyCookieConsentButtonStyle.acceptBtnBg,
    onChange: function onChange(value) {
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentButtonStyle: StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, stickyCookieConsentButtonStyle), {}, {
          acceptBtnBg: value
        })
      }));
    },
    allowReset: true,
    resetValue: "#004bcb"
  })), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Accept Button Text Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickyCookieConsentButtonStyle.acceptTextColor,
    onChange: function onChange(value) {
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentButtonStyle: StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, stickyCookieConsentButtonStyle), {}, {
          acceptTextColor: value
        })
      }));
    },
    allowReset: true,
    resetValue: "#ffffff"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "settings-sub-field flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Reject Button Background Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickyCookieConsentButtonStyle.rejectBtnBg,
    onChange: function onChange(value) {
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentButtonStyle: StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, stickyCookieConsentButtonStyle), {}, {
          rejectBtnBg: value
        })
      }));
    },
    allowReset: true,
    resetValue: "#ffffff00"
  })), /*#__PURE__*/React.createElement("div", {
    className: "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Reject Button Text Color', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement(ColorPickerWrapper_ColorPickerWrapper, {
    value: stickyCookieConsentButtonStyle.rejectTextColor,
    onChange: function onChange(value) {
      setData(StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, data), {}, {
        stickyCookieConsentButtonStyle: StickyCookieConsent_objectSpread(StickyCookieConsent_objectSpread({}, stickyCookieConsentButtonStyle), {}, {
          rejectTextColor: value
        })
      }));
    },
    allowReset: true,
    resetValue: "#000"
  }))))))));
}
;// ./src/js/components/Settings/FixedWidget.js
function FixedWidget_typeof(o) { "@babel/helpers - typeof"; return FixedWidget_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, FixedWidget_typeof(o); }
function FixedWidget_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function FixedWidget_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? FixedWidget_ownKeys(Object(t), !0).forEach(function (r) { FixedWidget_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : FixedWidget_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function FixedWidget_defineProperty(e, r, t) { return (r = FixedWidget_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function FixedWidget_toPropertyKey(t) { var i = FixedWidget_toPrimitive(t, "string"); return "symbol" == FixedWidget_typeof(i) ? i : i + ""; }
function FixedWidget_toPrimitive(t, r) { if ("object" != FixedWidget_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != FixedWidget_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FixedWidget_useContext = wp.element.useContext;
var FixedWidget_wp$components = wp.components,
  FixedWidget_Button = FixedWidget_wp$components.Button,
  FixedWidget_ButtonGroup = FixedWidget_wp$components.ButtonGroup,
  FixedWidget_FormToggle = FixedWidget_wp$components.FormToggle,
  FixedWidget_TextControl = FixedWidget_wp$components.TextControl;

function FixedWidget() {
  var _ai1wpsa = ai1wpsa,
    isPro = _ai1wpsa.isPro;
  var _useContext = FixedWidget_useContext(Contexts_SettingsContext),
    data = _useContext.data,
    setData = _useContext.setData;
  var _ref = data || {},
    _ref$fixedWidget = _ref.fixedWidget,
    fixedWidget = _ref$fixedWidget === void 0 ? false : _ref$fixedWidget,
    _ref$fixedWidgetTopOf = _ref.fixedWidgetTopOffset,
    fixedWidgetTopOffset = _ref$fixedWidgetTopOf === void 0 ? '100' : _ref$fixedWidgetTopOf;
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-screenoptions"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Fixed Widget Settings', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(FixedWidget_FormToggle, {
    checked: fixedWidget,
    onChange: function onChange() {
      return setData(FixedWidget_objectSpread(FixedWidget_objectSpread({}, data), {}, {
        fixedWidget: !fixedWidget
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Enable or disable the fixed widget.', 'all-in-one-wp-sticky-anything')))), !!fixedWidget && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "settings-field"
  }, /*#__PURE__*/React.createElement("h4", {
    "class": "settings-field-label"
  }, wp.i18n.__('Fixed Widget Top Offset', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("div", {
    "class": "settings-field-content"
  }, /*#__PURE__*/React.createElement(FixedWidget_TextControl, {
    value: fixedWidgetTopOffset,
    placeholder: wp.i18n.__('ex: 100', 'all-in-one-wp-sticky-anything'),
    onChange: function onChange(value) {
      return setData(FixedWidget_objectSpread(FixedWidget_objectSpread({}, data), {}, {
        fixedWidgetTopOffset: value
      }));
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, wp.i18n.__('Set the top offset when fixed the sticky widget. Example: 100. don\'t include px, rem, em etc.', 'all-in-one-wp-sticky-anything')))))));
}
;// ./src/js/components/Settings/Content.js
function Content_slicedToArray(r, e) { return Content_arrayWithHoles(r) || Content_iterableToArrayLimit(r, e) || Content_unsupportedIterableToArray(r, e) || Content_nonIterableRest(); }
function Content_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Content_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return Content_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Content_arrayLikeToArray(r, a) : void 0; } }
function Content_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Content_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Content_arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var Content_wp$element = wp.element,
  useState = Content_wp$element.useState,
  Content_useEffect = Content_wp$element.useEffect;
function Content() {
  var _ai1wpsa = ai1wpsa,
    isPro = _ai1wpsa.isPro;
  var _useState = useState(localStorage.getItem('ai1wp_tab') || 'general'),
    _useState2 = Content_slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  Content_useEffect(function () {
    localStorage.setItem('ai1wp_tab', tab);
  }, [tab]);
  var menus = [{
    id: 'general',
    title: wp.i18n.__('General', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-admin-generic'
  }, {
    id: 'fixed-widget',
    title: wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-screenoptions'
  }, {
    id: 'sticky-sidebar',
    title: wp.i18n.__('Sticky Sidebar', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-align-pull-left'
  }, {
    id: 'sticky-social-icons',
    title: wp.i18n.__('Sticky Social Icons', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-share'
  }, {
    id: 'sticky-cookie-consent',
    title: wp.i18n.__('Sticky Cookie Consent', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-privacy'
  },
  // {
  //   id: 'announcement',
  //   title: wp.i18n.__('Announcement Bar', 'all-in-one-wp-sticky-anything'),
  //   icon: 'dashicons dashicons-megaphone',
  // },
  {
    id: 'css',
    title: wp.i18n.__('Custom CSS', 'all-in-one-wp-sticky-anything'),
    icon: ' dashicons dashicons-editor-code'
  }, {
    id: 'tools',
    title: wp.i18n.__('Tools', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-admin-tools'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-menu"
  }, menus.map(function (_ref) {
    var id = _ref.id,
      title = _ref.title,
      icon = _ref.icon;
    return /*#__PURE__*/React.createElement("div", {
      className: "ai1wpsa-settings-menu-item ".concat(id, " ").concat(tab === id ? 'active' : '', " "),
      onClick: function onClick() {
        return setTab(id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: icon
    }), title);
  })), tab === 'general' && /*#__PURE__*/React.createElement(General, null), tab === 'fixed-widget' && /*#__PURE__*/React.createElement(FixedWidget, null), tab === 'sticky-sidebar' && /*#__PURE__*/React.createElement(StickySidebar, null), tab === 'sticky-social-icons' && /*#__PURE__*/React.createElement(StickySocial, null), tab === 'sticky-cookie-consent' && /*#__PURE__*/React.createElement(StickyCookieConsent, null), tab === 'announcement' && /*#__PURE__*/React.createElement(AnnouncementBar, null), tab === 'css' && /*#__PURE__*/React.createElement(Css, null), tab === 'tools' && /*#__PURE__*/React.createElement(Tools, null));
}
;// ./src/js/includes/functions.js
function functions_slicedToArray(r, e) { return functions_arrayWithHoles(r) || functions_iterableToArrayLimit(r, e) || functions_unsupportedIterableToArray(r, e) || functions_nonIterableRest(); }
function functions_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function functions_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return functions_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? functions_arrayLikeToArray(r, a) : void 0; } }
function functions_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function functions_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function functions_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function showNotification($text) {
  Swal.fire({
    title: false,
    text: $text,
    icon: 'success',
    toast: true,
    timer: 1500,
    timerProgressBar: true,
    showConfirmButton: false,
    position: 'top-end',
    customClass: {
      container: 'ai1wpsa-swal ai1wpsa-notification'
    }
  });
}
function useMounted() {
  var _React$useState = React.useState(false),
    _React$useState2 = functions_slicedToArray(_React$useState, 2),
    isMounted = _React$useState2[0],
    setIsMounted = _React$useState2[1];
  React.useEffect(function () {
    setIsMounted(true);
  }, []);
  return isMounted;
}
;// ./src/js/components/Settings.js
function Settings_slicedToArray(r, e) { return Settings_arrayWithHoles(r) || Settings_iterableToArrayLimit(r, e) || Settings_unsupportedIterableToArray(r, e) || Settings_nonIterableRest(); }
function Settings_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Settings_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return Settings_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Settings_arrayLikeToArray(r, a) : void 0; } }
function Settings_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Settings_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Settings_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Settings_wp$element = wp.element,
  Settings_useState = Settings_wp$element.useState,
  Settings_useEffect = Settings_wp$element.useEffect;




function Settings() {
  var _ai1wpsa;
  var initData = {
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
    customCss: ''
  };
  var _useState = Settings_useState(((_ai1wpsa = ai1wpsa) === null || _ai1wpsa === void 0 ? void 0 : _ai1wpsa.stickyData) || initData),
    _useState2 = Settings_slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = Settings_useState(false),
    _useState4 = Settings_slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];

  // save settings
  var handleSaveSettings = function handleSaveSettings() {
    wp.ajax.post('ai1wpsa_save_settings', {
      data: data,
      nonce: ai1wpsa.nonce
    }).done(function (response) {
      // show notification
      showNotification(wp.i18n.__('Settings saved successfully.', 'all-in-one-wp-sticky-anything'));
      // save data on localstorage
      // localStorage.setItem('stickySettings', JSON.stringify(data));
    }).fail(function (error) {
      console.log(error);
    });
  };

  // reset settings
  var handleResetSettings = function handleResetSettings() {
    // show notification
    showNotification(wp.i18n.__('Settings Reset successfully.', 'all-in-one-wp-sticky-anything'));
    // Reset data to an empty object
    setData({});
    // Store an empty object in localStorage
    // localStorage.setItem('stickySettings', JSON.stringify({}));
  };

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

  console.log('data', data);
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-wrap"
  }, /*#__PURE__*/React.createElement(SettingsProvider, {
    value: {
      data: data,
      setData: setData,
      loading: loading,
      setLoading: setLoading,
      handleSaveSettings: handleSaveSettings,
      handleResetSettings: handleResetSettings
    }
  }, /*#__PURE__*/React.createElement(Header, null), !loading && /*#__PURE__*/React.createElement(Content, null)));
}
;// ./src/js/components/GettingStarted/BasicUsage.js
function BasicUsage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-media-document"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Basic Usage', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-10"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Fixed Widget')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('You can easily create a fixed (sticky) widget using the All-in-One WP Sticky Anything plugin. Just follow the steps below.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, wp.i18n.__('1. Go to your WordPress Dashboard → Appearance → Widgets.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('2. If you are using the Block Editor, wrap the widget inside a Group block, then enable the Fixed Widget option from the Group settings in the right sidebar.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('3. If you are using the Classic Editor, simply enable the Fixed Widget option and click the Save button.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('4. Your sidebar widget will now remain fixed while scrolling.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-10"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Sticky Header')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('You can make Sticky Header easily by All-in-one WP Sticky Anyting. You need to do some step for it.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, wp.i18n.__('1. Go to WordPress Dashboard > Sticky Anything > Settings > General', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('2. In the "Sticky Class" field, enter the CSS selector of your header. Must you need to provide a valid css class or id selector. example: .header', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('3. If sticky header z-index issue on scroll, then you need to configure the "Z-index" field. Write the max big integer value. ex: 9999999', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('4. Now you can click save button on the header.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-10"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Sticky Header in Elementor')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('You can create a Sticky Header in Elementor without extra plugins. Just follow these steps:', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, wp.i18n.__('1. Open any page with Elementor editor.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('2. Select the container or section you want to make sticky.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('3. Go to the "Advanced" tab in the Elementor panel.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('4. Scroll down to the "Sticky Anything" section and enable the "Sticky" option.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('6. Adjust "Z-index" if needed to control the stacking order.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('7. Update/Publish the page to apply the changes.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "315",
    src: "https://www.youtube.com/embed/HoqbZcAFYFE",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerpolicy: "strict-origin-when-cross-origin",
    allowfullscreen: true
  }))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-10"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Sticky Header via Customizer')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('You can create a Sticky Header via Customizer without any hussle. Just follow these steps:', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, wp.i18n.__('1. Navigate Appearance > Customize.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('2. Navigate to the "Sticky Anything" section.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('3. Navigate to the "Sticky Header" section.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('4. Enable the "Sticky Header" option.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('6. Adjust "Z-index" if needed to control the stacking order.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('7. Click the Publish bytton on the customizer.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "315",
    src: "https://www.youtube.com/embed/AoaESe5hKJY",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerpolicy: "strict-origin-when-cross-origin",
    allowfullscreen: true
  }))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-9"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Sticky Social Icons')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('You can make Sticky Social Icons easily by All-in-one WP Sticky Anyting. You need to do some step for it.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, wp.i18n.__('1. Go to WordPress Dashboard → Sticky Anything → Settings → Social Icons.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('2. Enable the "Sticky Social Icons" option.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('3. Customize the social icons settings to your preference.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('4. Click "Add Icon" to insert social icons, then configure the icon and URL.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('5. Click the "Save" button at the top to apply your changes.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-9"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Sticky Cookie Consent')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('You can make Sticky Social Icons easily by All-in-one WP Sticky Anyting. You need to do some step for it.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, wp.i18n.__('1. Go to WordPress Dashboard → Sticky Anything → Settings → Sticky Cookie Consent.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('2. Enable the "Sticky Cookie Consent" option.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('3. Customize the cookie consent message, button text & style.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('5. Click the "Save" button at the top to apply your changes.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-9"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Sticky Element')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('You can make any sticky element or sidebar easily on your WordPress website by All-in-one WP Sticky Anyting. Integration is super easy. You need add a class on your target element. ex: sticky.', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-9"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Sticky Sidebar')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('Setting up a sticky sidebar on your WordPress site is simple with the All-in-One WP Sticky Anything plugin. Just follow these steps to get started:', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, wp.i18n.__('1. Go to your WordPress Dashboard. Navigate to: Sticky Anything > Settings > Sticky Sidebar.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('2. Enable the Sticky Sidebar. Toggle the option to enable the sticky sidebar functionality.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('3. Enter the Sidebar Selector. This is the class or ID of the sidebar you want to make sticky. Since it varies depending on your theme, right-click on your sidebar in the browser and select Inspect. Copy the relevant selector name (e.g., .sidebar or #secondary) and paste it into the Sidebar Selector field.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('4. Enter the Sidebar Container Selector. This is the outer container that holds the sidebar. Again, inspect the element in your browser and copy the correct selector. Paste it into the Sidebar Container Selector field.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('5. Adjust additonal settings based on your needs.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("li", null, wp.i18n.__('6. Now you can click save button on the header.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-9"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Custom CSS')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('If needed, add custom CSS to fine-tune the appearance and behavior of the sticky header. Your custom css need to paste on the Custom CSS box and Click Save button.', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }))));
}
;// ./src/js/components/GettingStarted/Changelog.js
function Changelog() {
  var logs = [{
    version: 'v1.1.1',
    date: '06-02-2026',
    "new": [wp.i18n.__('Introduce Fixed Widget.', 'all-in-one-wp-sticky-anything')],
    fix: [wp.i18n.__('Settings sync on the multiple devices.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.1.0',
    date: '24-12-2025',
    "new": [wp.i18n.__('Introduce Sticky Cookie Consent.', 'all-in-one-wp-sticky-anything')],
    enhancement: [wp.i18n.__('WordPress 6.9 Compatibility.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.9',
    date: '21-11-2025',
    "new": [wp.i18n.__('Introduce Sticky Social Icons.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.8',
    date: '23-10-2025',
    "new": [wp.i18n.__('Introduce Customizer support for Astra, Blocksy, GeneratePress, Kadence, Neve, OceanWP, Storefront, and Zakra themes.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.7',
    date: '26-09-2025',
    fix: [wp.i18n.__('Astra theme compatibility.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.6',
    date: '20-09-2025',
    "new": [wp.i18n.__('Introduce Elementor Page Builder Sticky Option.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.5',
    date: '20-08-2025',
    "new": [wp.i18n.__('New Option to Fix Sticky Header.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.4',
    date: '22-04-2025',
    fix: [wp.i18n.__('Fixed close icon.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.3',
    date: '19-04-2025',
    "new": [wp.i18n.__('Introduce Sticky Sidebar.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.2',
    date: '07-09-2024',
    fix: [wp.i18n.__('Migrate old data.', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.1',
    date: '07-09-2024',
    "new": [wp.i18n.__('Z-Index', 'all-in-one-wp-sticky-anything'), wp.i18n.__('Custom CSS', 'all-in-one-wp-sticky-anything'), wp.i18n.__('Reset Settings', 'all-in-one-wp-sticky-anything')],
    enhancement: [wp.i18n.__('Improved Dashboard', 'all-in-one-wp-sticky-anything')]
  }, {
    version: 'v1.0.0',
    date: '16-02-2022',
    "new": [wp.i18n.__('Initial Version', 'all-in-one-wp-sticky-anything')],
    fix: [],
    enhancement: []
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-editor-ul"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Changelog', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content changelog"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('What\'s new in the latest changes', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('Check out the latest change logs.', 'all-in-one-wp-sticky-anything')), logs.map(function (log) {
    var _log$new, _log$fix, _log$enhancement;
    return /*#__PURE__*/React.createElement("div", {
      className: "accordion-item ".concat(logs.indexOf(log) === 0 ? 'active' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "accordion-header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "version"
    }, log === null || log === void 0 ? void 0 : log.version), /*#__PURE__*/React.createElement("h3", null, log === null || log === void 0 ? void 0 : log.date), /*#__PURE__*/React.createElement("i", {
      className: "dashicons dashicons-arrow-down-alt2"
    })), /*#__PURE__*/React.createElement("div", {
      className: "accordion-body"
    }, (log === null || log === void 0 || (_log$new = log["new"]) === null || _log$new === void 0 ? void 0 : _log$new.length) > 0 && /*#__PURE__*/React.createElement("div", {
      className: "new"
    }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('New Features', 'all-in-one-wp-sticky-anything')), log === null || log === void 0 ? void 0 : log["new"].map(function (item, index) {
      return /*#__PURE__*/React.createElement("p", {
        key: index
      }, /*#__PURE__*/React.createElement("i", {
        className: "dashicons dashicons-plus-alt2"
      }), item);
    })), (log === null || log === void 0 || (_log$fix = log.fix) === null || _log$fix === void 0 ? void 0 : _log$fix.length) > 0 && /*#__PURE__*/React.createElement("div", {
      className: "fix"
    }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('Fixs', 'all-in-one-wp-sticky-anything')), log === null || log === void 0 ? void 0 : log.fix.map(function (item, index) {
      return /*#__PURE__*/React.createElement("p", {
        key: index
      }, /*#__PURE__*/React.createElement("i", {
        className: "dashicons dashicons-yes"
      }), item);
    })), (log === null || log === void 0 || (_log$enhancement = log.enhancement) === null || _log$enhancement === void 0 ? void 0 : _log$enhancement.length) > 0 && /*#__PURE__*/React.createElement("div", {
      className: "enhancement"
    }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('Enhancements', 'all-in-one-wp-sticky-anything')), log === null || log === void 0 ? void 0 : log.enhancement.map(function (item, index) {
      return /*#__PURE__*/React.createElement("p", {
        key: index
      }, /*#__PURE__*/React.createElement("i", {
        className: "dashicons dashicons-star-filled"
      }), item);
    }))));
  })));
}
;// ./src/js/components/GettingStarted/Help.js
var Help_useState = wp.element.useState;
function Help() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-editor-help"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Help', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Frequently Asked Questions', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-header"
  }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('Can I make multiple elements sticky?', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-arrow-down-alt2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("p", null, wp.i18n.__('Yes.')))), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-header"
  }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('How to sticky anything in WordPress ?', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-arrow-down-alt2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("p", null, wp.i18n.__('Just use .sticky class.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-header"
  }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('How to sticky header in Elementor Page Builder ?', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-arrow-down-alt2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("p", null, wp.i18n.__('Open any page with Elementor → Select a container or section → Go to the `Advanced Tab` → `Sticky Anything` Settings.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-header"
  }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('Will All-in-One WP Sticky Anything slow down my website?', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-arrow-down-alt2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("p", null, wp.i18n.__('No.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-header"
  }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('Which themes support the Sticky Header perfectly on the customizer?', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-arrow-down-alt2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("p", null, wp.i18n.__('Popular classic themes such as Astra, Blocksy, GeneratePress, Kadence, Neve, OceanWP, Storefront, and Zakra provide seamless Sticky Header compatibility.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-header"
  }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('How to disable the sticky?', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-arrow-down-alt2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("p", null, wp.i18n.__('Just remove class from settings.', 'all-in-one-wp-sticky-anything')))), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-header"
  }, /*#__PURE__*/React.createElement("h3", null, wp.i18n.__('I need more help please!', 'all-in-one-wp-stikcy-anything')), /*#__PURE__*/React.createElement("i", {
    className: "dashicons dashicons-arrow-down-alt2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("p", null, wp.i18n.__('Please use the support forum.', 'all-in-one-wp-sticky-anything'), " ", /*#__PURE__*/React.createElement("a", {
    href: "https://wordpress.org/support/plugin/all-in-one-wp-sticky-anything/",
    target: "_blank"
  }, wp.i18n.__('Suport Forum')))))));
}
;// ./src/js/components/GettingStarted/Introduction.js
function Introduction() {
  var features = [{
    id: 'fixed-widget',
    icon: 'dashicons-welcome-widgets-menus',
    title: wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything'),
    desc: wp.i18n.__('Easily make your sidebar widgets sticky to enhance user engagement and accessibility.', 'all-in-one-wp-sticky-anything')
  }, {
    id: 'sticky-element',
    icon: 'dashicons-admin-generic',
    title: wp.i18n.__('Sticky Element', 'all-in-one-wp-sticky-anything'),
    desc: wp.i18n.__('Choose any element on your site to make it sticky as users scroll.', 'all-in-one-wp-sticky-anything')
  }, {
    id: 'sticky-header',
    icon: 'dashicons-editor-kitchensink',
    title: wp.i18n.__('Sticky Header', 'all-in-one-wp-sticky-anything'),
    desc: wp.i18n.__('Keep your header visible while scrolling for better navigation and branding.', 'all-in-one-wp-sticky-anything')
  }, {
    id: 'sticky-sidebar',
    icon: 'dashicons-align-left',
    title: wp.i18n.__('Sticky Sidebar', 'all-in-one-wp-sticky-anything'),
    desc: wp.i18n.__('Make your sidebar stay in view as visitors scroll through your content.', 'all-in-one-wp-sticky-anything')
  }, {
    id: 'sticky-social-icons',
    icon: 'dashicons-sticky',
    title: wp.i18n.__('Sticky Social Icons', 'all-in-one-wp-sticky-anything'),
    desc: wp.i18n.__('Display your social media icons on your site and make them sticky as users scroll.', 'all-in-one-wp-sticky-anything')
  }, {
    id: 'sticky-cookie-consent',
    icon: 'dashicons-privacy',
    title: wp.i18n.__('Sticky Cookie Consent', 'all-in-one-wp-sticky-anything'),
    desc: wp.i18n.__('Make your cookie consent banner sticky to ensure compliance and visibility.', 'all-in-one-wp-sticky-anything')
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "ai1wpsa-settings-content-header"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "dashicons dashicons-info-outline"
  }), /*#__PURE__*/React.createElement("span", null, wp.i18n.__('Introduction', 'all-in-one-wp-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    className: "settings-content introduction"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-row bg-10"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('Sticky Anything Quick Overview')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('The Sticky Anything WordPress plugin is a versatile tool designed to help you make any element on your website sticky as users scroll. It\'s particularly useful for keeping important content like headers, menus, or call-to-action buttons visible, no matter where users are on your page.', 'all-in-one-sticky-anything'))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-col"
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "315",
    src: "https://www.youtube.com/embed/Y2IEuGCVu0Y?si=fLPBh9a8_C641LMF",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerpolicy: "strict-origin-when-cross-origin",
    allowfullscreen: true
  }))), /*#__PURE__*/React.createElement("div", {
    "class": "settings-row features"
  }, features.map(function (_ref) {
    var id = _ref.id,
      title = _ref.title,
      desc = _ref.desc,
      icon = _ref.icon;
    return /*#__PURE__*/React.createElement("div", {
      "class": "settings-col bg-10",
      key: id
    }, /*#__PURE__*/React.createElement("i", {
      className: "dashicons ".concat(icon)
    }), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, desc));
  }))));
}
;// ./src/js/components/GettingStarted/Content.js
function GettingStarted_Content_slicedToArray(r, e) { return GettingStarted_Content_arrayWithHoles(r) || GettingStarted_Content_iterableToArrayLimit(r, e) || GettingStarted_Content_unsupportedIterableToArray(r, e) || GettingStarted_Content_nonIterableRest(); }
function GettingStarted_Content_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function GettingStarted_Content_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return GettingStarted_Content_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? GettingStarted_Content_arrayLikeToArray(r, a) : void 0; } }
function GettingStarted_Content_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function GettingStarted_Content_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function GettingStarted_Content_arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var GettingStarted_Content_wp$element = wp.element,
  Content_useState = GettingStarted_Content_wp$element.useState,
  GettingStarted_Content_useEffect = GettingStarted_Content_wp$element.useEffect;
function Content_Content() {
  var _useState = Content_useState(localStorage.getItem('ai1wp_gs_tab') || 'introduction'),
    _useState2 = GettingStarted_Content_slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  GettingStarted_Content_useEffect(function () {
    localStorage.setItem('ai1wp_gs_tab', tab);
  }, [tab]);
  var menus = [{
    id: 'introduction',
    title: wp.i18n.__('Introduction', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-info-outline'
  }, {
    id: 'basic-usage',
    title: wp.i18n.__('Basic Usage', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-media-document'
  }, {
    id: 'help',
    title: wp.i18n.__('Help', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-editor-help'
  }, {
    id: 'changelog',
    title: wp.i18n.__('Changelog', 'all-in-one-wp-sticky-anything'),
    icon: 'dashicons dashicons-editor-ul'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-settings-menu"
  }, menus.map(function (_ref) {
    var id = _ref.id,
      title = _ref.title,
      icon = _ref.icon;
    return /*#__PURE__*/React.createElement("div", {
      className: "ai1wpsa-settings-menu-item ".concat(id, " ").concat(tab === id ? 'active' : '', " "),
      onClick: function onClick() {
        return setTab(id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: icon
    }), title);
  })), tab === 'introduction' && /*#__PURE__*/React.createElement(Introduction, null), tab === 'basic-usage' && /*#__PURE__*/React.createElement(BasicUsage, null), tab === 'help' && /*#__PURE__*/React.createElement(Help, null), tab === 'changelog' && /*#__PURE__*/React.createElement(Changelog, null));
}
;// ./src/js/components/GettingStarted/Header.js
function Header_Header() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-app-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "".concat(ai1wpsa.pluginUrl, "/assets/images/logo.jpg"),
    alt: wp.i18n.__('All-in-One WP Sticky Anything', 'all-in-one-wp-sticky-anything')
  })), /*#__PURE__*/React.createElement("div", {
    className: "header-title"
  }, /*#__PURE__*/React.createElement("h2", null, wp.i18n.__('All-in-One WP Sticky Anything', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("p", null, wp.i18n.__('All-in-One WP Sticky Anything on Scroll plugin allows to you make any elements sticky or sticky Header on your website.', 'all-in-one-wp-sticky-anything')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn ai1wpsa-btn"
  }, wp.i18n.__('Getting Started'))));
}
;// ./src/js/components/GettingStarted.js
var GettingStarted_useState = wp.element.useState;


function GettingStarted() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ai1wpsa-getting-started-wrap"
  }, /*#__PURE__*/React.createElement(Header_Header, null), /*#__PURE__*/React.createElement(Content_Content, null));
}
;// ./src/js/includes/dashboard.js
var dashboard_$ = jQuery;
var Dashboard = {
  init: function init() {
    // handle accordion
    dashboard_$(document).on('click', '.accordion-item .accordion-header', Dashboard.handleToggleItem);
    dashboard_$(document).on('click', '.ai1wpsa-review-notice .notice-btns a.action', Dashboard.handleReviewNotice);
  },
  handleToggleItem: function handleToggleItem(e) {
    e.preventDefault();
    dashboard_$(this).closest('.accordion-item').toggleClass('active');
    dashboard_$(this).find('i').toggleClass('dashicons-arrow-up-alt2');
  },
  handleReviewNotice: function handleReviewNotice(e) {
    e.preventDefault();
    var action = dashboard_$(this).data('action');
    wp.ajax.post('ai1wpsa_review_notice', {
      data: action,
      nonce: ai1wpsa.nonce
    }).done(function (response) {
      if (response.length > 0) {
        dashboard_$('.ai1wpsa-review-notice').fadeOut();
      }
    }).fail(function (error) {
      console.log(error);
    });
  }
};
/* harmony default export */ const dashboard = (Dashboard);
;// ./src/js/admin.js



;
(function ($) {
  var app = {
    init: function init() {
      app.initSettings();
      app.initGettingStarted();
    },
    ready: function ready() {
      dashboard.init();
    },
    initSettings: function initSettings() {
      var element = document.getElementById('ai1wpsa-settings');
      if (element) {
        ReactDOM.render(/*#__PURE__*/React.createElement(Settings, null), element);
      }
    },
    initGettingStarted: function initGettingStarted() {
      var element = document.getElementById('ai1wpsa-getting-started');
      if (element) {
        ReactDOM.render(/*#__PURE__*/React.createElement(GettingStarted, null), element);
      }
    }
  };
  app.init();
  $(document).ready(app.ready);
})(jQuery);
})();

/******/ })()
;