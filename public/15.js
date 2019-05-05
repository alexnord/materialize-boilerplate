(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/containers/DefaultLayout/DefaultFooter.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/DefaultLayout/DefaultFooter.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
var defaultProps = {
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div')
};

var DefaultFooter = function DefaultFooter(props) {
  // eslint-disable-next-line
  var children = props.children,
      attributes = _objectWithoutProperties(props, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://coreui.io"
  }, "CoreUI"), ' ', "\xA9 2018 creativeLabs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-auto"
  }, "Powered by", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://coreui.io/react"
  }, "CoreUI for React")));
};

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DefaultFooter);

/***/ })

}]);