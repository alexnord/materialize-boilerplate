(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/_nav.js":
/*!******************************!*\
  !*** ./resources/js/_nav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }, {
    title: true,
    name: 'Theme',
    wrapper: {
      // optional wrapper object
      element: '',
      // required valid HTML5 element tag
      attributes: {} // optional valid JS object with JS API naming ex:
      // { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}

    },
    "class": '' // optional class names space delimited list for title item ex: "text-center"

  }, {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  }, {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  }, {
    title: true,
    name: 'Components',
    wrapper: {
      element: '',
      attributes: {}
    }
  }, {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [{
      name: 'Breadcrumbs',
      url: '/base/breadcrumbs',
      icon: 'icon-puzzle'
    }, {
      name: 'Cards',
      url: '/base/cards',
      icon: 'icon-puzzle'
    }, {
      name: 'Carousels',
      url: '/base/carousels',
      icon: 'icon-puzzle'
    }, {
      name: 'Collapses',
      url: '/base/collapses',
      icon: 'icon-puzzle'
    }, {
      name: 'Dropdowns',
      url: '/base/dropdowns',
      icon: 'icon-puzzle'
    }, {
      name: 'Forms',
      url: '/base/forms',
      icon: 'icon-puzzle'
    }, {
      name: 'Jumbotrons',
      url: '/base/jumbotrons',
      icon: 'icon-puzzle'
    }, {
      name: 'List groups',
      url: '/base/list-groups',
      icon: 'icon-puzzle'
    }, {
      name: 'Navs',
      url: '/base/navs',
      icon: 'icon-puzzle'
    }, {
      name: 'Paginations',
      url: '/base/paginations',
      icon: 'icon-puzzle'
    }, {
      name: 'Popovers',
      url: '/base/popovers',
      icon: 'icon-puzzle'
    }, {
      name: 'Progress Bar',
      url: '/base/progress-bar',
      icon: 'icon-puzzle'
    }, {
      name: 'Switches',
      url: '/base/switches',
      icon: 'icon-puzzle'
    }, {
      name: 'Tables',
      url: '/base/tables',
      icon: 'icon-puzzle'
    }, {
      name: 'Tabs',
      url: '/base/tabs',
      icon: 'icon-puzzle'
    }, {
      name: 'Tooltips',
      url: '/base/tooltips',
      icon: 'icon-puzzle'
    }]
  }, {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [{
      name: 'Buttons',
      url: '/buttons/buttons',
      icon: 'icon-cursor'
    }, {
      name: 'Button dropdowns',
      url: '/buttons/button-dropdowns',
      icon: 'icon-cursor'
    }, {
      name: 'Button groups',
      url: '/buttons/button-groups',
      icon: 'icon-cursor'
    }, {
      name: 'Brand Buttons',
      url: '/buttons/brand-buttons',
      icon: 'icon-cursor'
    }]
  }, {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  }, {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [{
      name: 'CoreUI Icons',
      url: '/icons/coreui-icons',
      icon: 'icon-star',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }, {
      name: 'Flags',
      url: '/icons/flags',
      icon: 'icon-star'
    }, {
      name: 'Font Awesome',
      url: '/icons/font-awesome',
      icon: 'icon-star',
      badge: {
        variant: 'secondary',
        text: '4.7'
      }
    }, {
      name: 'Simple Line Icons',
      url: '/icons/simple-line-icons',
      icon: 'icon-star'
    }]
  }, {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [{
      name: 'Alerts',
      url: '/notifications/alerts',
      icon: 'icon-bell'
    }, {
      name: 'Badges',
      url: '/notifications/badges',
      icon: 'icon-bell'
    }, {
      name: 'Modals',
      url: '/notifications/modals',
      icon: 'icon-bell'
    }]
  }, {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }, {
    divider: true
  }, {
    title: true,
    name: 'Extras'
  }, {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [{
      name: 'Login',
      url: '/login',
      icon: 'icon-star'
    }, {
      name: 'Register',
      url: '/register',
      icon: 'icon-star'
    }, {
      name: 'Error 404',
      url: '/404',
      icon: 'icon-star'
    }, {
      name: 'Error 500',
      url: '/500',
      icon: 'icon-star'
    }]
  }, {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    attributes: {
      disabled: true
    }
  }, {
    name: 'Download CoreUI',
    url: 'https://coreui.io/react/',
    icon: 'icon-cloud-download',
    "class": 'mt-auto',
    variant: 'success',
    attributes: {
      target: '_blank',
      rel: 'noopener'
    }
  }, {
    name: 'Try CoreUI PRO',
    url: 'https://coreui.io/pro/react/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: {
      target: '_blank',
      rel: 'noopener'
    }
  }]
});

/***/ }),

/***/ "./resources/js/containers/DefaultLayout/DefaultLayout.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/DefaultLayout/DefaultLayout.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_nav */ "./resources/js/_nav.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // sidebar nav config

 // routes config


var DefaultAside = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./DefaultAside */ "./resources/js/containers/DefaultLayout/DefaultAside.js"));
});
var DefaultFooter = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./DefaultFooter */ "./resources/js/containers/DefaultLayout/DefaultFooter.js"));
});
var DefaultHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./DefaultHeader */ "./resources/js/containers/DefaultLayout/DefaultHeader.js"));
});
var propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
  }).isRequired
};

var DefaultLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultLayout, _Component);

  function DefaultLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DefaultLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DefaultLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "loading", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn pt-1 text-center"
      }, "Loading...");
    });

    return _this;
  }

  _createClass(DefaultLayout, [{
    key: "signOut",
    value: function signOut(e) {
      e.preventDefault();
      var history = this.props.history;
      history.push('/login');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppHeader"], {
        fixed: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultHeader, {
        onLogout: function onLogout(e) {
          return _this2.signOut(e);
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebar"], {
        fixed: true,
        display: "lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarForm"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarNav"], _extends({
        navConfig: _nav__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, this.props))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarFooter"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSidebarMinimizer"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumb"], {
        appRoutes: _routes__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (route) {
        return route.component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: route.name,
          path: route.path,
          exact: route.exact,
          name: route.name,
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props);
          }
        }) : null;
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        from: "/",
        to: "/dashboard"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppAside"], {
        fixed: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultAside, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultFooter, null))));
    }
  }]);

  return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DefaultLayout.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Breadcrumbs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./pages/Base/Breadcrumbs */ "./resources/js/pages/Base/Breadcrumbs/Breadcrumbs.js"));
});
var Cards = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./pages/Base/Cards */ "./resources/js/pages/Base/Cards/Cards.js"));
});
var Carousels = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./pages/Base/Carousels */ "./resources/js/pages/Base/Carousels/Carousels.js"));
});
var Collapses = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./pages/Base/Collapses */ "./resources/js/pages/Base/Collapses/Collapses.js"));
});
var Dropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./pages/Base/Dropdowns */ "./resources/js/pages/Base/Dropdowns/Dropdowns.js"));
});
var Forms = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./pages/Base/Forms */ "./resources/js/pages/Base/Forms/Forms.js"));
});
var Jumbotrons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./pages/Base/Jumbotrons */ "./resources/js/pages/Base/Jumbotrons/Jumbotrons.js"));
});
var ListGroups = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./pages/Base/ListGroups */ "./resources/js/pages/Base/ListGroups/ListGroups.js"));
});
var Navbars = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./pages/Base/Navbars */ "./resources/js/pages/Base/Navbars/Navbars.js"));
});
var Navs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./pages/Base/Navs */ "./resources/js/pages/Base/Navs/Navs.js"));
});
var Paginations = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./pages/Base/Paginations */ "./resources/js/pages/Base/Paginations/Pagnations.js"));
});
var Popovers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./pages/Base/Popovers */ "./resources/js/pages/Base/Popovers/Popovers.js"));
});
var ProgressBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./pages/Base/ProgressBar */ "./resources/js/pages/Base/ProgressBar/ProgressBar.js"));
});
var Switches = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./pages/Base/Switches */ "./resources/js/pages/Base/Switches/Switches.js"));
});
var Tables = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./pages/Base/Tables */ "./resources/js/pages/Base/Tables/Tables.js"));
});
var Tabs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./pages/Base/Tabs */ "./resources/js/pages/Base/Tabs/Tabs.js"));
});
var Tooltips = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./pages/Base/Tooltips */ "./resources/js/pages/Base/Tooltips/Tooltips.js"));
});
var BrandButtons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./pages/Buttons/BrandButtons */ "./resources/js/pages/Buttons/BrandButtons/BrandButtons.js"));
});
var ButtonDropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./pages/Buttons/ButtonDropdowns */ "./resources/js/pages/Buttons/ButtonDropdowns/ButtonDropdowns.js"));
});
var ButtonGroups = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./pages/Buttons/ButtonGroups */ "./resources/js/pages/Buttons/ButtonGroups/ButtonGroups.js"));
});
var Buttons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./pages/Buttons/Buttons */ "./resources/js/pages/Buttons/Buttons/Buttons.js"));
});
var Charts = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./pages/Charts */ "./resources/js/pages/Charts/Charts.js"));
});
var Dashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./pages/Dashboard */ "./resources/js/pages/Dashboard/Dashboard.js"));
});
var CoreUIIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./pages/Icons/CoreUIIcons */ "./resources/js/pages/Icons/CoreUIIcons/CoreUIIcons.js"));
});
var Flags = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./pages/Icons/Flags */ "./resources/js/pages/Icons/Flags/Flags.js"));
});
var FontAwesome = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./pages/Icons/FontAwesome */ "./resources/js/pages/Icons/FontAwesome/FontAwesome.js"));
});
var SimpleLineIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./pages/Icons/SimpleLineIcons */ "./resources/js/pages/Icons/SimpleLineIcons/SimpleLineIcons.js"));
});
var Alerts = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./pages/Notifications/Alerts */ "./resources/js/pages/Notifications/Alerts/Alerts.js"));
});
var Badges = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./pages/Notifications/Badges */ "./resources/js/pages/Notifications/Badges/Badges.js"));
});
var Modals = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./pages/Notifications/Modals */ "./resources/js/pages/Notifications/Modals/Modals.js"));
});
var Colors = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, /*! ./pages/Theme/Colors */ "./resources/js/pages/Theme/Colors/Colors.js"));
});
var Typography = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! ./pages/Theme/Typography */ "./resources/js/pages/Theme/Typography/Typography.js"));
});
var Widgets = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./pages/Widgets/Widgets */ "./resources/js/pages/Widgets/Widgets.js"));
});
var Users = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./pages/Users/Users */ "./resources/js/pages/Users/Users.js"));
});
var User = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./pages/Users/User */ "./resources/js/pages/Users/User.js"));
}); // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

var routes = [{
  path: '/',
  exact: true,
  name: 'Home'
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/theme',
  exact: true,
  name: 'Theme',
  component: Colors
}, {
  path: '/theme/colors',
  name: 'Colors',
  component: Colors
}, {
  path: '/theme/typography',
  name: 'Typography',
  component: Typography
}, {
  path: '/base',
  exact: true,
  name: 'Base',
  component: Cards
}, {
  path: '/base/cards',
  name: 'Cards',
  component: Cards
}, {
  path: '/base/forms',
  name: 'Forms',
  component: Forms
}, {
  path: '/base/switches',
  name: 'Switches',
  component: Switches
}, {
  path: '/base/tables',
  name: 'Tables',
  component: Tables
}, {
  path: '/base/tabs',
  name: 'Tabs',
  component: Tabs
}, {
  path: '/base/breadcrumbs',
  name: 'Breadcrumbs',
  component: Breadcrumbs
}, {
  path: '/base/carousels',
  name: 'Carousel',
  component: Carousels
}, {
  path: '/base/collapses',
  name: 'Collapse',
  component: Collapses
}, {
  path: '/base/dropdowns',
  name: 'Dropdowns',
  component: Dropdowns
}, {
  path: '/base/jumbotrons',
  name: 'Jumbotrons',
  component: Jumbotrons
}, {
  path: '/base/list-groups',
  name: 'List Groups',
  component: ListGroups
}, {
  path: '/base/navbars',
  name: 'Navbars',
  component: Navbars
}, {
  path: '/base/navs',
  name: 'Navs',
  component: Navs
}, {
  path: '/base/paginations',
  name: 'Paginations',
  component: Paginations
}, {
  path: '/base/popovers',
  name: 'Popovers',
  component: Popovers
}, {
  path: '/base/progress-bar',
  name: 'Progress Bar',
  component: ProgressBar
}, {
  path: '/base/tooltips',
  name: 'Tooltips',
  component: Tooltips
}, {
  path: '/buttons',
  exact: true,
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/buttons',
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/button-dropdowns',
  name: 'Button Dropdowns',
  component: ButtonDropdowns
}, {
  path: '/buttons/button-groups',
  name: 'Button Groups',
  component: ButtonGroups
}, {
  path: '/buttons/brand-buttons',
  name: 'Brand Buttons',
  component: BrandButtons
}, {
  path: '/icons',
  exact: true,
  name: 'Icons',
  component: CoreUIIcons
}, {
  path: '/icons/coreui-icons',
  name: 'CoreUI Icons',
  component: CoreUIIcons
}, {
  path: '/icons/flags',
  name: 'Flags',
  component: Flags
}, {
  path: '/icons/font-awesome',
  name: 'Font Awesome',
  component: FontAwesome
}, {
  path: '/icons/simple-line-icons',
  name: 'Simple Line Icons',
  component: SimpleLineIcons
}, {
  path: '/notifications',
  exact: true,
  name: 'Notifications',
  component: Alerts
}, {
  path: '/notifications/alerts',
  name: 'Alerts',
  component: Alerts
}, {
  path: '/notifications/badges',
  name: 'Badges',
  component: Badges
}, {
  path: '/notifications/modals',
  name: 'Modals',
  component: Modals
}, {
  path: '/widgets',
  name: 'Widgets',
  component: Widgets
}, {
  path: '/charts',
  name: 'Charts',
  component: Charts
}, {
  path: '/users',
  exact: true,
  name: 'Users',
  component: Users
}, {
  path: '/users/:id',
  exact: true,
  name: 'User Details',
  component: User
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);