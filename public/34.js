(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/js/pages/Buttons/Buttons/Buttons.js":
/*!*******************************************************!*\
  !*** ./resources/js/pages/Buttons/Buttons/Buttons.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Buttons =
/*#__PURE__*/
function (_Component) {
  _inherits(Buttons, _Component);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, _getPrototypeOf(Buttons).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Standard Buttons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "primary"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "secondary"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "success"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "warning"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "danger"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "info"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "light"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "dark"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "link"
      }, "Link"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Active State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "primary",
        "aria-pressed": "true"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "secondary",
        "aria-pressed": "true"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "success",
        "aria-pressed": "true"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "warning",
        "aria-pressed": "true"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "danger",
        "aria-pressed": "true"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "info",
        "aria-pressed": "true"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "light",
        "aria-pressed": "true"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "dark",
        "aria-pressed": "true"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "link",
        "aria-pressed": "true"
      }, "Link"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Disabled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "primary",
        disabled: true
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "secondary",
        disabled: true
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "success",
        disabled: true
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "warning",
        disabled: true
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "danger",
        disabled: true
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "info",
        disabled: true
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "light",
        disabled: true
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "dark",
        disabled: true
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "link",
        disabled: true
      }, "Link"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Outline Buttons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Use", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "outline"), ' ', "prop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "primary"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "secondary"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "success"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "warning"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "danger"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "info"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "light"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "dark"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Active State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        active: true,
        color: "primary",
        "aria-pressed": "true"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        active: true,
        color: "secondary",
        "aria-pressed": "true"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        active: true,
        color: "success",
        "aria-pressed": "true"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        active: true,
        color: "warning",
        "aria-pressed": "true"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        active: true,
        color: "danger",
        "aria-pressed": "true"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        active: true,
        color: "info",
        "aria-pressed": "true"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        active: true,
        color: "light",
        "aria-pressed": "true"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        active: true,
        color: "dark",
        "aria-pressed": "true"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Disabled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "primary",
        disabled: true
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "secondary",
        disabled: true
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "success",
        disabled: true
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "warning",
        disabled: true
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "danger",
        disabled: true
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "info",
        disabled: true
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "light",
        disabled: true
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        outline: true,
        color: "dark",
        disabled: true
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Ghost Buttons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Use", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-ghost-*"), ' ', "class for ghost buttons."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-primary"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-secondary"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-success"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-warning"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-danger"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-info"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-light"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-dark"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Active State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        active: true,
        color: "ghost-primary",
        "aria-pressed": "true"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        active: true,
        color: "ghost-secondary",
        "aria-pressed": "true"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        active: true,
        color: "ghost-success",
        "aria-pressed": "true"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        active: true,
        color: "ghost-warning",
        "aria-pressed": "true"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        active: true,
        color: "ghost-danger",
        "aria-pressed": "true"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        active: true,
        color: "ghost-info",
        "aria-pressed": "true"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        active: true,
        color: "ghost-light",
        "aria-pressed": "true"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        active: true,
        color: "ghost-dark",
        "aria-pressed": "true"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Disabled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-primary",
        disabled: true
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-secondary",
        disabled: true
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-success",
        disabled: true
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-warning",
        disabled: true
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-danger",
        disabled: true
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-info",
        disabled: true
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-light",
        disabled: true
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "ghost-dark",
        disabled: true
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Square Buttons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Use", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-square"), ' ', "class for square buttons."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "primary",
        className: "btn-square"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "secondary",
        className: "btn-square"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "success",
        className: "btn-square"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "warning",
        className: "btn-square"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "danger",
        className: "btn-square"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "info",
        className: "btn-square"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "light",
        className: "btn-square"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "dark",
        className: "btn-square"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "link",
        className: "btn-square"
      }, "Link"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Active State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "primary",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "secondary",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "success",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "warning",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "danger",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "info",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "light",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "dark",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "link",
        className: "btn-square",
        "aria-pressed": "true"
      }, "Link"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Disabled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "primary",
        className: "btn-square",
        disabled: true
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "secondary",
        className: "btn-square",
        disabled: true
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "success",
        className: "btn-square",
        disabled: true
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "warning",
        className: "btn-square",
        disabled: true
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "danger",
        className: "btn-square",
        disabled: true
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "info",
        className: "btn-square",
        disabled: true
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "light",
        className: "btn-square",
        disabled: true
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "dark",
        className: "btn-square",
        disabled: true
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "link",
        className: "btn-square",
        disabled: true
      }, "Link"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Pill Buttons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Use", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-pill"), ' ', "class for pill buttons."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "primary",
        className: "btn-pill"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "secondary",
        className: "btn-pill"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "success",
        className: "btn-pill"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "warning",
        className: "btn-pill"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "danger",
        className: "btn-pill"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "info",
        className: "btn-pill"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "light",
        className: "btn-pill"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "dark",
        className: "btn-pill"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "link",
        className: "btn-pill"
      }, "Link"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Active State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "primary",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "secondary",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "success",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "warning",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "danger",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "info",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "light",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "dark",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        active: true,
        block: true,
        color: "link",
        className: "btn-pill",
        "aria-pressed": "true"
      }, "Link"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "12",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Disabled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "primary",
        className: "btn-pill",
        disabled: true
      }, "Primary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "secondary",
        className: "btn-pill",
        disabled: true
      }, "Secondary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "success",
        className: "btn-pill",
        disabled: true
      }, "Success")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "warning",
        className: "btn-pill",
        disabled: true
      }, "Warning")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "danger",
        className: "btn-pill",
        disabled: true
      }, "Danger")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "info",
        className: "btn-pill",
        disabled: true
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "light",
        className: "btn-pill",
        disabled: true
      }, "Light")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "dark",
        className: "btn-pill",
        disabled: true
      }, "Dark")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "6",
        sm: "4",
        md: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        color: "link",
        className: "btn-pill",
        disabled: true
      }, "Link"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sizes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Fancy larger or smaller buttons? Add", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=\"lg\""), ' ', "or", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=\"sm\""), ' ', "for additional sizes."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Small"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "primary",
        size: "sm"
      }, "Standard Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "secondary",
        outline: true,
        size: "sm"
      }, "Outline Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        color: "ghost-success"
      }, "Ghost Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        size: "sm",
        className: "btn-square"
      }, "Square Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        size: "sm",
        className: "btn-pill"
      }, "Pill Button"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "primary"
      }, "Standard Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "secondary"
      }, "Outline Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "ghost-success"
      }, "Ghost Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        className: "btn-square"
      }, "Square Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        className: "btn-pill"
      }, "Pill Button"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        xl: true,
        className: "mb-3 mb-xl-0"
      }, "Large"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "primary",
        size: "lg"
      }, "Standard Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "secondary",
        size: "lg"
      }, "Outline Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "ghost-success",
        size: "lg"
      }, "Ghost Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        size: "lg",
        className: "btn-square"
      }, "Square Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        col: "2",
        className: "mb-3 mb-xl-0 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        size: "lg",
        className: "btn-pill"
      }, "Pill Button"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "With Icons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "align-items-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: true,
        xs: "12",
        className: "text-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "primary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-lightbulb-o"
      }), "\xA0Standard Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: true,
        xs: "12",
        className: "text-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "secondary",
        outline: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-lightbulb-o"
      }), "\xA0Outline Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: true,
        xs: "12",
        className: "text-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "ghost-success"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-lightbulb-o"
      }), "\xA0Ghost Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: true,
        xs: "12",
        className: "text-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        className: "btn-square"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-lightbulb-o"
      }), "\xA0Square Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: true,
        xs: "12",
        className: "text-center mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        className: "btn-pill"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-lightbulb-o"
      }), "\xA0Pill Button"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Block Level Buttons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Add prop", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "block")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "secondary",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "primary",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "success",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "info",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "link",
        size: "lg",
        block: true
      }, "Block level button")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Block Level Buttons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Add prop", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "block")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "secondary",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "primary",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "success",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "info",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "warning",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "danger",
        size: "lg",
        block: true
      }, "Block level button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "ghost-info",
        size: "lg",
        block: true
      }, "Block level button"))))));
    }
  }]);

  return Buttons;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ })

}]);