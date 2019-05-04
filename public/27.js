(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./resources/js/pages/Base/Switches/Switches.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/Base/Switches/Switches.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Switches =
/*#__PURE__*/
function (_Component) {
  _inherits(Switches, _Component);

  function Switches() {
    _classCallCheck(this, Switches);

    return _possibleConstructorReturn(this, _getPrototypeOf(Switches).apply(this, arguments));
  }

  _createClass(Switches, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch default"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "secondary",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "success",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "warning",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "info",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "danger",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "light",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "dark",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch pills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "secondary",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "success",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "warning",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "info",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "danger",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "light",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "dark",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        defaultChecked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "secondary",
        defaultChecked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "success",
        defaultChecked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "warning",
        defaultChecked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "info",
        defaultChecked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "danger",
        defaultChecked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "light",
        defaultChecked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "dark",
        defaultChecked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "disabled")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        checked: true,
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "secondary",
        checked: true,
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "success",
        checked: true,
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "warning",
        checked: true,
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "info",
        checked: true,
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "danger",
        checked: true,
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "light",
        checked: true,
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "dark",
        checked: true,
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "outline=\"alt\"")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        checked: true,
        outline: "alt"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "secondary",
        checked: true,
        outline: "alt"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "success",
        checked: true,
        outline: "alt"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "warning",
        checked: true,
        outline: "alt"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "info",
        checked: true,
        outline: "alt"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "danger",
        checked: true,
        outline: "alt"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "light",
        checked: true,
        outline: "alt"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "dark",
        checked: true,
        outline: "alt"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        outline: "alt",
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "label")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "secondary",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "success",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "warning",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "info",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "danger",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "light",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "dark",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "outline=\"alt\" label")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "primary",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "secondary",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "success",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "warning",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "info",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "danger",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "light",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "dark",
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "primary",
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "outline=\"alt\" label")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "primary",
        defaultChecked: true,
        label: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "secondary",
        defaultChecked: true,
        label: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "success",
        defaultChecked: true,
        label: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "warning",
        defaultChecked: true,
        label: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "info",
        defaultChecked: true,
        label: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "danger",
        defaultChecked: true,
        label: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "light",
        defaultChecked: true,
        label: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "dark",
        defaultChecked: true,
        label: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        outline: "alt",
        color: "primary",
        label: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch outline", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "secondary",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "success",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "warning",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "info",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "danger",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "light",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "dark",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: true,
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch outline pills", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "secondary",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "success",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "warning",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "info",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "danger",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "light",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "dark",
        outline: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: true,
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch outline alternative", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "secondary",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "success",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "warning",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "info",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "danger",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "light",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "dark",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: "alt",
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch outline alternative - pills", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "secondary",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "success",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "warning",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "info",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "danger",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "light",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "dark",
        outline: "alt",
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: "alt",
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "secondary",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "success",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "warning",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "info",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "danger",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "light",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "dark",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        label: true,
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text pills", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "secondary",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "success",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "warning",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "info",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "danger",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "light",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "dark",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        label: true,
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "secondary",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "success",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "warning",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "info",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "danger",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "light",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "dark",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: true,
        label: true,
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline pills", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "secondary",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "success",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "warning",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "info",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "danger",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "light",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "dark",
        outline: true,
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: true,
        label: true,
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative pills", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "secondary",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "success",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "warning",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "info",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "danger",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "light",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "dark",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: "alt",
        label: true,
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative pills", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "secondary",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "success",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "warning",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "info",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "danger",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "light",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "dark",
        outline: "alt",
        label: true,
        checked: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: "alt",
        label: true,
        disabled: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "secondary",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "success",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "warning",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "info",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "danger",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "light",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "dark",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: true,
        disabled: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative pills", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "secondary",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "success",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "warning",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "info",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "danger",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "light",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "dark",
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: true,
        disabled: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "secondary",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "success",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "warning",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "info",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "danger",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "light",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "dark",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        color: "primary",
        outline: "alt",
        disabled: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative pills", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "secondary",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "success",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "warning",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "info",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "danger",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "light",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "dark",
        outline: "alt",
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "pill",
        color: "primary",
        outline: "alt",
        disabled: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Sizes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
        className: "p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        hover: true,
        striped: true,
        className: "table-align-middle mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Example"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Props"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Large"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        checked: true,
        size: "lg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Add", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=", 'lg'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        checked: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Small"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: "mx-1",
        variant: "3d",
        color: "primary",
        checked: true,
        size: "sm"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Add", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=", 'sm'))))))))));
    }
  }]);

  return Switches;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Switches);

/***/ })

}]);