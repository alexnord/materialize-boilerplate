(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./resources/js/pages/Theme/Typography/Typography.js":
/*!***********************************************************!*\
  !*** ./resources/js/pages/Theme/Typography/Typography.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Typography =
/*#__PURE__*/
function (_Component) {
  _inherits(Typography, _Component);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, _getPrototypeOf(Typography).apply(this, arguments));
  }

  _createClass(Typography, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Headings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Example"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, "<h1></h1>"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "h1"
      }, "h1. Bootstrap heading"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, "<h2></h2>"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "h2"
      }, "h2. Bootstrap heading"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, "<h3></h3>"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "h3"
      }, "h3. Bootstrap heading"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, "<h4></h4>"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "h4"
      }, "h4. Bootstrap heading"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, "<h5></h5>"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "h5"
      }, "h5. Bootstrap heading"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, "<h6></h6>"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "h6"
      }, "h6. Bootstrap heading"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Headings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, ".h1"), ' ', "through", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, ".h6"), ' ', "classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bd-example"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "h1"
      }, "h1. Bootstrap heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "h2"
      }, "h2. Bootstrap heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "h3"
      }, "h3. Bootstrap heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "h4"
      }, "h4. Bootstrap heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "h5"
      }, "h5. Bootstrap heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "h6"
      }, "h6. Bootstrap heading")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Display headings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "display heading"), "\u2014a larger, slightly more opinionated heading style."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bd-example bd-example-type"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "display-1"
      }, "Display 1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "display-2"
      }, "Display 2"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "display-3"
      }, "Display 3"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "display-4"
      }, "Display 4")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Inline text elements"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "display heading"), "\u2014a larger, slightly more opinionated heading style."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bd-example"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can use the mark tag to", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mark", null, "highlight"), ' ', "text."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", null, "This line of text is meant to be treated as deleted text.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("s", null, "This line of text is meant to be treated as no longer accurate.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ins", null, "This line of text is meant to be treated as an addition to the document.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, "This line of text will render as underlined")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "This line of text is meant to be treated as fine print.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "This line rendered as bold text.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "This line rendered as italicized text."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, "Description list alignment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "highlighter-rouge"
      }, ".text-truncate"), ' ', "class to truncate the text with an ellipsis."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bd-example"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-3"
      }, "Description lists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-9"
      }, "A description list is perfect for defining terms."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-3"
      }, "Euismod"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-9"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Donec id elit non mi porta gravida at eget metus.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-3"
      }, "Malesuada porta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-9"
      }, "Etiam porta sem malesuada magna mollis euismod."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-3 text-truncate"
      }, "Truncated term is truncated"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-9"
      }, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-3"
      }, "Nesting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-9"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-4"
      }, "Nested definition list"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-8"
      }, "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."))))))));
    }
  }]);

  return Typography;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ })

}]);