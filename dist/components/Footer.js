function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import { ensureConfig } from '@edx/frontend-platform';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import facebookIcon from './facebook.png';
import xIcon from './x.png';
import instagramIcon from './instagram.png';
import linkedinIcon from './linkedin.png';
import youtubeIcon from './youtube.png';
import tiktokIcon from './tiktok.png';
import snapchatIcon from './snapchat.png';
import logo from './logo.png';
import '../_footer.scss'; // Correct relative path

ensureConfig(['LMS_BASE_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var Footer = /*#__PURE__*/function (_React$Component) {
  function Footer(props) {
    var _this;
    _classCallCheck(this, Footer);
    _this = _callSuper(this, Footer, [props]);
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_this);
    return _this;
  }
  _inherits(Footer, _React$Component);
  return _createClass(Footer, [{
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute('href');
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: 'outbound_link',
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "render",
    value: function render() {
      var config = this.context.config;
      return /*#__PURE__*/React.createElement("footer", {
        className: "footer-arabic",
        dir: "rtl"
      }, /*#__PURE__*/React.createElement("div", {
        className: "footer-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "footer-top"
      }, /*#__PURE__*/React.createElement("div", {
        className: "footer-brand"
      }, /*#__PURE__*/React.createElement("div", {
        className: "footer-title"
      }, /*#__PURE__*/React.createElement("h2", null, "\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644"), /*#__PURE__*/React.createElement("p", null, "\u0645\u0624\u0633\u0633\u0629 \u0633\u0627\u0644\u0645 \u0628\u0646 \u0645\u062D\u0641\u0648\u0638 \u0627\u0644\u0623\u0647\u0644\u064A\u0629", /*#__PURE__*/React.createElement("br", null), "Salem Bin Mahfouz Foundation")), /*#__PURE__*/React.createElement("img", {
        src: logo,
        alt: "Logo",
        className: "footer-logo"
      })), /*#__PURE__*/React.createElement("div", {
        className: "footer-links-top"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "footer-link",
        onClick: this.externalLinkClickHandler
      }, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629"), /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "footer-link",
        onClick: this.externalLinkClickHandler
      }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"), /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "footer-link",
        onClick: this.externalLinkClickHandler
      }, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"))), /*#__PURE__*/React.createElement("div", {
        className: "footer-divider"
      }), /*#__PURE__*/React.createElement("div", {
        className: "footer-bottom"
      }, /*#__PURE__*/React.createElement("div", {
        className: "footer-links-bottom"
      }, /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/privacy"),
        className: "footer-link",
        onClick: this.externalLinkClickHandler
      }, "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629"), /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/tos"),
        className: "footer-link",
        onClick: this.externalLinkClickHandler
      }, "\u0634\u0631\u0648\u0637 \u0627\u0644\u062E\u062F\u0645\u0629")), /*#__PURE__*/React.createElement("div", {
        className: "footer-social"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/React.createElement("img", {
        src: facebookIcon,
        alt: "Facebook"
      })), /*#__PURE__*/React.createElement("a", {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/React.createElement("img", {
        src: xIcon,
        alt: "X"
      })), /*#__PURE__*/React.createElement("a", {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/React.createElement("img", {
        src: instagramIcon,
        alt: "Instagram"
      })), /*#__PURE__*/React.createElement("a", {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/React.createElement("img", {
        src: youtubeIcon,
        alt: "YouTube"
      })), /*#__PURE__*/React.createElement("a", {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/React.createElement("img", {
        src: linkedinIcon,
        alt: "LinkedIn"
      })), /*#__PURE__*/React.createElement("a", {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/React.createElement("img", {
        src: tiktokIcon,
        alt: "TikTok"
      })), /*#__PURE__*/React.createElement("a", {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/React.createElement("img", {
        src: snapchatIcon,
        alt: "Snapchat"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "footer-copy"
      }, /*#__PURE__*/React.createElement("p", null, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062D\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631 \u062A\u0639\u0648\u062F \u0644\u0645\u0624\u0633\u0633\u0629 \u0633\u0627\u0644\u0645 \u0628\u0646 \u0645\u062D\u0641\u0648\u0638 \u0627\u0644\u0623\u0647\u0644\u064A\u0629 \xA9"))));
    }
  }]);
}(React.Component);
Footer.contextType = AppContext;
export default Footer;
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map