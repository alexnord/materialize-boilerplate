(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/reactstrap/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/reactstrap/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.getScrollbarWidth = getScrollbarWidth;
exports.setScrollbarWidth = setScrollbarWidth;
exports.isBodyOverflowing = isBodyOverflowing;
exports.getOriginalBodyPadding = getOriginalBodyPadding;
exports.conditionallyUpdateScrollbar = conditionallyUpdateScrollbar;
exports.setGlobalCssModule = setGlobalCssModule;
exports.mapToCssModules = mapToCssModules;
exports.omit = omit;
exports.pick = pick;
exports.warnOnce = warnOnce;
exports.deprecated = deprecated;
exports.DOMElement = DOMElement;
exports.isReactRefObj = isReactRefObj;
exports.findDOMElements = findDOMElements;
exports.isArrayOrNodeList = isArrayOrNodeList;
exports.getTarget = getTarget;
exports.addMultipleEventListeners = addMultipleEventListeners;
exports.focusableElements = exports.defaultToggleEvents = exports.canUseDOM = exports.PopperPlacements = exports.keyCodes = exports.TransitionStatuses = exports.TransitionPropTypeKeys = exports.TransitionTimeouts = exports.tagPropType = exports.targetPropType = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isfunction */ "./node_modules/lodash.isfunction/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}

function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}

function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

var globalCssModule;

function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */


function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */


function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}

var warned = {};

function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
}

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}

var targetPropType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, DOMElement, _propTypes.default.shape({
  current: _propTypes.default.any
})]);

exports.targetPropType = targetPropType;

var tagPropType = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.shape({
  $$typeof: _propTypes.default.symbol,
  render: _propTypes.default.func
}), _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.shape({
  $$typeof: _propTypes.default.symbol,
  render: _propTypes.default.func
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss


exports.tagPropType = tagPropType;
var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600 // $carousel-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

exports.TransitionTimeouts = TransitionTimeouts;
var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
exports.TransitionPropTypeKeys = TransitionPropTypeKeys;
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
exports.TransitionStatuses = TransitionStatuses;
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
exports.keyCodes = keyCodes;
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
exports.PopperPlacements = PopperPlacements;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;

function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if ((0, _lodash.default)(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}

function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}

function getTarget(target) {
  var els = findDOMElements(target);

  if (isArrayOrNodeList(els)) {
    return els[0];
  }

  return els;
}

var defaultToggleEvents = ['touchstart', 'click'];
exports.defaultToggleEvents = defaultToggleEvents;

function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}

var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
exports.focusableElements = focusableElements;

/***/ }),

/***/ "./resources/coreui/src/views/Widgets/Widget03.js":
/*!********************************************************!*\
  !*** ./resources/coreui/src/views/Widgets/Widget03.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/lib/utils */ "./node_modules/reactstrap/lib/utils.js");
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dataBox: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var defaultProps = {
  dataBox: function dataBox() {
    return {
      variant: 'facebook',
      friends: '-',
      feeds: '-'
    };
  }
};

var Widget03 =
/*#__PURE__*/
function (_Component) {
  _inherits(Widget03, _Component);

  function Widget03() {
    _classCallCheck(this, Widget03);

    return _possibleConstructorReturn(this, _getPrototypeOf(Widget03).apply(this, arguments));
  }

  _createClass(Widget03, [{
    key: "render",
    value: function render() {
      // eslint-disable-next-line
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          dataBox = _this$props.dataBox,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "cssModule", "dataBox"]); // demo purposes only


      var data = dataBox();
      var variant = data.variant;

      if (!variant || ['facebook', 'twitter', 'linkedin', 'google-plus'].indexOf(variant) < 0) {
        return null;
      }

      var back = 'bg-' + variant;
      var icon = 'fa fa-' + variant;
      var keys = Object.keys(data);
      var vals = Object.values(data);
      var classCard = 'brand-card';
      var classCardHeader = classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(classCard, "-header"), back);
      var classCardBody = classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(classCard, "-body"));
      var classes = Object(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_3__["mapToCssModules"])(classnames__WEBPACK_IMPORTED_MODULE_2___default()(classCard, className), cssModule);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classCardHeader
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: icon
      }), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classCardBody
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, vals[1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-uppercase text-muted small"
      }, keys[1])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, vals[2]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-uppercase text-muted small"
      }, keys[2]))));
    }
  }]);

  return Widget03;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Widget03.propTypes = propTypes;
Widget03.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Widget03);

/***/ })

}]);