(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./resources/js/pages/Theme/Colors/Colors.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/Theme/Colors/Colors.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ThemeView =
/*#__PURE__*/
function (_Component) {
  _inherits(ThemeView, _Component);

  function ThemeView(props) {
    var _this;

    _classCallCheck(this, ThemeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ThemeView).call(this, props));
    _this.state = {
      bgColor: 'rgb(255, 255, 255)'
    };
    return _this;
  }

  _createClass(ThemeView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line
      var elem = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this).parentNode.firstChild;
      var color = window.getComputedStyle(elem).getPropertyValue('background-color');
      this.setState(function (previousState) {
        return {
          bgColor: color || previousState.bgColor
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var bgColor = this.state.bgColor;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-muted"
      }, "HEX:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "font-weight-bold"
      }, Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["rgbToHex"])(bgColor))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-muted"
      }, "RGB:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "font-weight-bold"
      }, bgColor))));
    }
  }]);

  return ThemeView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ThemeColor = function ThemeColor(properties) {
  var className = properties.className,
      children = properties.children;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'theme-color w-75 rounded mb-3');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "2",
    md: "4",
    sm: "6",
    xs: "12",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes,
    style: {
      paddingTop: '75%'
    }
  }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeView, null));
};

var Colors = function Colors() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animated fadeIn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-drop"
  }), ' ', "Theme colors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Primary Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Secondary Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-success"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Success Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-danger"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Danger Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-warning"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Warning Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Info Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Light Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Dark Color"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-drop"
  }), ' ', "Grays"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 100 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 200 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 300 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 400 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-500"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 500 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-600"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 600 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-700"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 700 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-800"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 800 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-gray-900"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 900 Color"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-drop"
  }), ' ', "Additional colors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Blue Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-light-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Light Blue Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-indigo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Indigo Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-purple"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Purple Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-pink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Pink Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-red"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Red Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Orange Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-yellow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Yellow Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-green"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Green Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-teal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Teal Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
    className: "bg-cyan"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Cyan Color"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Colors);

/***/ })

}]);