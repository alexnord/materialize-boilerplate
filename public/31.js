(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./resources/coreui/src/views/Buttons/BrandButtons/BrandButtons.js":
/*!*************************************************************************!*\
  !*** ./resources/coreui/src/views/Buttons/BrandButtons/BrandButtons.js ***!
  \*************************************************************************/
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




var BrandButtons =
/*#__PURE__*/
function (_Component) {
  _inherits(BrandButtons, _Component);

  function BrandButtons() {
    _classCallCheck(this, BrandButtons);

    return _possibleConstructorReturn(this, _getPrototypeOf(BrandButtons).apply(this, arguments));
  }

  _createClass(BrandButtons, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Brand Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Usage ex. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "<Button className=\"btn-facebook btn-brand\"><i className=\"fa fa-facebook\"></i><span>Facebook</span></Button>")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Small", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Add this class ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-sm"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-facebook btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-twitter btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Twitter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-linkedin btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-linkedin"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-flickr btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-flickr"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Flickr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-tumblr btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-tumblr"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tumblr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-xing btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-xing"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Xing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-github btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-github"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-html5 btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-html5"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "HTML5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-openid btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-openid"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "OpenID")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-stack-overflow btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-stack-overflow"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "StackOverflow")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-css3 btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-css3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CSS3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-youtube btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-youtube"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "YouTube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-dribbble btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dribbble"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dribbble")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-google-plus btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-plus"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Google+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-instagram btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-instagram"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-pinterest btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pinterest"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Pinterest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vk btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vk"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "VK")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-yahoo btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-yahoo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Yahoo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-behance btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-behance"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Behance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-dropbox btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dropbox"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dropbox")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-reddit btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-reddit"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Reddit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-spotify btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-spotify"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Spotify")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vine btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vine"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vine")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-foursquare btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-foursquare"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Forsquare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vimeo btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vimeo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vimeo"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-facebook btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-twitter btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Twitter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-linkedin btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-linkedin"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-flickr btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-flickr"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Flickr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-tumblr btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-tumblr"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tumblr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-xing btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-xing"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Xing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-github btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-github"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-html5 btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-html5"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "HTML5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-openid btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-openid"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "OpenID")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-stack-overflow btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-stack-overflow"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "StackOverflow")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-css3 btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-css3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CSS3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-youtube btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-youtube"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "YouTube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-dribbble btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dribbble"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dribbble")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-google-plus btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-plus"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Google+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-instagram btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-instagram"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-pinterest btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pinterest"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Pinterest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vk btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vk"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "VK")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-yahoo btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-yahoo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Yahoo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-behance btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-behance"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Behance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-dropbox btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dropbox"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dropbox")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-reddit btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-reddit"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Reddit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-spotify btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-spotify"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Spotify")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vine btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vine"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vine")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-foursquare btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-foursquare"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Forsquare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vimeo btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vimeo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vimeo"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Large", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Add this class ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-lg"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-facebook btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-twitter btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Twitter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-linkedin btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-linkedin"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-flickr btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-flickr"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Flickr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-tumblr btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-tumblr"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tumblr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-xing btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-xing"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Xing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-github btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-github"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-html5 btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-html5"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "HTML5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-openid btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-openid"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "OpenID")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-stack-overflow btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-stack-overflow"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "StackOverflow")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-css3 btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-css3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CSS3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-youtube btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-youtube"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "YouTube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-dribbble btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dribbble"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dribbble")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-google-plus btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-plus"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Google+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-instagram btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-instagram"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-pinterest btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pinterest"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Pinterest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vk btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vk"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "VK")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-yahoo btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-yahoo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Yahoo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-behance btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-behance"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Behance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-dropbox btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dropbox"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dropbox")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-reddit btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-reddit"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Reddit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-spotify btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-spotify"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Spotify")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vine btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vine"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vine")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-foursquare btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-foursquare"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Forsquare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vimeo btn-brand mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vimeo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vimeo")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Brand Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Icons only. Usage ex. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "<Button className=\"btn-facebook btn-brand icon\"><i className=\"fa fa-facebook\"></i></Button>")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Small", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Add this class ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-sm"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-facebook btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-twitter btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-linkedin btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-linkedin"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-flickr btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-flickr"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-tumblr btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-tumblr"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-xing btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-xing"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-github btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-github"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-html5 btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-html5"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-openid btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-openid"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-stack-overflow btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-stack-overflow"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-css3 btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-css3"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-youtube btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-youtube"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-dribbble btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dribbble"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-google-plus btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-plus"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-instagram btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-instagram"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-pinterest btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pinterest"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vk btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vk"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-yahoo btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-yahoo"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-behance btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-behance"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-dropbox btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dropbox"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-reddit btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-reddit"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-spotify btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-spotify"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vine btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vine"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-foursquare btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-foursquare"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vimeo btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vimeo"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-facebook btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-twitter btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-linkedin btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-linkedin"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-flickr btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-flickr"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-tumblr btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-tumblr"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-xing btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-xing"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-github btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-github"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-html5 btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-html5"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-openid btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-openid"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-stack-overflow btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-stack-overflow"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-css3 btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-css3"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-youtube btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-youtube"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-dribbble btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dribbble"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-google-plus btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-plus"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-instagram btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-instagram"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-pinterest btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pinterest"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vk btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vk"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-yahoo btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-yahoo"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-behance btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-behance"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-dropbox btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dropbox"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-reddit btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-reddit"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-spotify btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-spotify"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vine btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vine"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-foursquare btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-foursquare"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vimeo btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vimeo"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Large", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Add this class ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-lg"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-facebook btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-twitter btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-linkedin btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-linkedin"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-flickr btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-flickr"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-tumblr btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-tumblr"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-xing btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-xing"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-github btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-github"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-html5 btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-html5"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-openid btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-openid"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-stack-overflow btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-stack-overflow"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-css3 btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-css3"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-youtube btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-youtube"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-dribbble btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dribbble"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-google-plus btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-plus"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-instagram btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-instagram"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-pinterest btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pinterest"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vk btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vk"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-yahoo btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-yahoo"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-behance btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-behance"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-dropbox btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dropbox"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-reddit btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-reddit"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-spotify btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-spotify"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vine btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vine"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-foursquare btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-foursquare"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vimeo btn-brand icon mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-vimeo"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Brand Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Text only. Usage ex. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "<Button className=\"btn-facebook btn-brand text\"><span>Facebook</span></Button>")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Small", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Add this class ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-sm"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-facebook btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-twitter btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Twitter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-linkedin btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-flickr btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Flickr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-tumblr btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tumblr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-xing btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Xing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-github btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-html5 btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "HTML5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-openid btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "OpenID")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-stack-overflow btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "StackOverflow")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-css3 btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CSS3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-youtube btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "YouTube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-dribbble btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dribbble")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-google-plus btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Google+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-instagram btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-pinterest btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Pinterest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vk btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "VK")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-yahoo btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Yahoo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-behance btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Behance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-dropbox btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dropbox")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-reddit btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Reddit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-spotify btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Spotify")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vine btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vine")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-foursquare btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Forsquare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        className: "btn-vimeo btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vimeo"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Normal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-facebook btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-twitter btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Twitter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-linkedin btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-flickr btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Flickr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-tumblr btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tumblr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-xing btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Xing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-github btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-html5 btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "HTML5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-openid btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "OpenID")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-stack-overflow btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "StackOverflow")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-css3 btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CSS3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-youtube btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "YouTube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-dribbble btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dribbble")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-google-plus btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Google+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-instagram btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-pinterest btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Pinterest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vk btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "VK")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-yahoo btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Yahoo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-behance btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Behance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-dropbox btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dropbox")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-reddit btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Reddit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-spotify btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Spotify")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vine btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vine")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-foursquare btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Forsquare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-vimeo btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vimeo"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size Large", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " Add this class ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".btn-lg"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-facebook btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-twitter btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Twitter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-linkedin btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-flickr btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Flickr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-tumblr btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tumblr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-xing btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Xing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-github btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-html5 btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "HTML5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-openid btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "OpenID")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-stack-overflow btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "StackOverflow")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-css3 btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CSS3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-youtube btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "YouTube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-dribbble btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dribbble")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-google-plus btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Google+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-instagram btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-pinterest btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Pinterest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vk btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "VK")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-yahoo btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Yahoo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-behance btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Behance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-dropbox btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dropbox")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-reddit btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Reddit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-spotify btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Spotify")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vine btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vine")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-foursquare btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Forsquare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "lg",
        className: "btn-vimeo btn-brand text mr-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Vimeo"))))))));
    }
  }]);

  return BrandButtons;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BrandButtons);

/***/ })

}]);