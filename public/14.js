(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/containers/DefaultLayout/DefaultAside.js":
/*!***************************************************************!*\
  !*** ./resources/js/containers/DefaultLayout/DefaultAside.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
var defaultProps = {
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div')
};

var DefaultAside =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultAside, _Component);

  function DefaultAside(props) {
    var _this;

    _classCallCheck(this, DefaultAside);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultAside).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(DefaultAside, [{
    key: "toggle",
    value: function toggle(tab) {
      var activeTab = this.state.activeTab;

      if (activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // eslint-disable-next-line
      var _this$props = this.props,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["children"]);

      var activeTab = this.state.activeTab;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        tabs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          active: activeTab === '1'
        }),
        onClick: function onClick() {
          _this2.toggle('1');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-list"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          active: activeTab === '2'
        }),
        onClick: function onClick() {
          _this2.toggle('2');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-speech"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          active: activeTab === '3'
        }),
        onClick: function onClick() {
          _this2.toggle('3');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-settings"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
        activeTab: activeTab
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
        tabId: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
        className: "list-group-accent",
        tag: "div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
        className: "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
      }, "Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-warning list-group-item-divider"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-avatar",
        src: "/img/avatars/7.jpg",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Meeting with", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Lucas"), ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted mr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 1 - 3pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-location-pin"
      }), ' ', "Palo Alto, CA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-info list-group-item-divider"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-avatar",
        src: "/img/avatars/4.jpg",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Skype with", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Megan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted mr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 4 - 5pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-social-skype"
      }), ' ', "On-line")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
        className: "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
      }, "Tomorrow"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-danger list-group-item-divider"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "New UI Project -", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "deadline")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted mr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 10 - 11pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-home"
      }), "\xA0 creativeLabs HQ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatars-stack mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/2.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/3.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/4.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/5.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/6.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-success list-group-item-divider"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "#10 Startups.Garden"), ' ', "Meetup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted mr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 1 - 3pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-location-pin"
      }), "\xA0 Palo Alto, CA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-primary list-group-item-divider"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Team meeting")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted mr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 4 - 6pm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-home"
      }), "\xA0 creativeLabs HQ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatars-stack mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/2.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/3.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/4.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/5.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/6.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/7.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar avatar-xs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/8.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
        tabId: "2",
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/7.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-success"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/7.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-success"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/7.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-success"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/7.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-success"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/avatars/7.jpg",
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-success"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
        tabId: "3",
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "aside-options"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix mt-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Option 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSwitch"], {
        className: "float-right",
        variant: "pill",
        label: true,
        color: "success",
        defaultChecked: true,
        size: "sm"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "aside-options"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Option 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSwitch"], {
        className: "float-right",
        variant: "pill",
        label: true,
        color: "success",
        size: "sm"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "aside-options"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Option 3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSwitch"], {
        className: "float-right",
        variant: "pill",
        label: true,
        color: "success",
        defaultChecked: true,
        size: "sm",
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Option disabled.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "aside-options"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Option 4")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["AppSwitch"], {
        className: "float-right",
        variant: "pill",
        label: true,
        color: "success",
        defaultChecked: true,
        size: "sm"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "System Utilization"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-uppercase mb-1 mt-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "CPU Usage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "25"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "348 Processes. 1/4 Cores."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-uppercase mb-1 mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Memory Usage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
        className: "progress-xs",
        color: "warning",
        value: "70"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "11444GB/16384MB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-uppercase mb-1 mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "SSD 1 Usage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "95"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "243GB/256GB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-uppercase mb-1 mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "SSD 2 Usage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
        className: "progress-xs",
        color: "success",
        value: "10"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "25GB/256GB"))));
    }
  }]);

  return DefaultAside;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DefaultAside);

/***/ })

}]);