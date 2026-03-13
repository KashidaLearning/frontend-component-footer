import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var SiteFooter = function SiteFooter(_ref) {
  var logo = _ref.logo;
  var intl = useIntl();
  var _useContext = useContext(AppContext),
    config = _useContext.config;
  var externalLinkClickHandler = function externalLinkClickHandler(event) {
    var label = event.currentTarget.getAttribute('href');
    sendTrackEvent(EVENT_NAMES.FOOTER_LINK, {
      category: 'outbound_link',
      label: label
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "custom-footer"
  }, /*#__PURE__*/React.createElement("footer", {
    className: "footer-inner",
    role: "contentinfo",
    "aria-label": intl.formatMessage({
      id: 'footer.ariaLabel',
      defaultMessage: 'Footer'
    })
  }, /*#__PURE__*/React.createElement("nav", {
    className: "footer-nav",
    "aria-label": intl.formatMessage({
      id: 'footer.links.ariaLabel',
      defaultMessage: 'Footer links'
    })
  }, /*#__PURE__*/React.createElement("a", {
    href: "".concat(config.LMS_BASE_URL, "/tos"),
    onClick: externalLinkClickHandler
  }, "Terms of Service"), /*#__PURE__*/React.createElement("a", {
    href: "".concat(config.LMS_BASE_URL, "/privacy"),
    onClick: externalLinkClickHandler
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "".concat(config.LMS_BASE_URL, "/contact"),
    onClick: externalLinkClickHandler
  }, "Contact Us"), /*#__PURE__*/React.createElement("a", {
    href: "".concat(config.LMS_BASE_URL, "/faq"),
    onClick: externalLinkClickHandler
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    className: "footer-logo"
  }, /*#__PURE__*/React.createElement("a", {
    href: "".concat(config.LMS_BASE_URL, "/dashboard"),
    "aria-label": intl.formatMessage({
      id: 'footer.logo.ariaLabel',
      defaultMessage: 'Karaneef'
    }),
    onClick: externalLinkClickHandler
  }, /*#__PURE__*/React.createElement("img", {
    src: logo || config.LOGO_TRADEMARK_URL,
    alt: intl.formatMessage({
      id: 'footer.logo.altText',
      defaultMessage: 'Karaneef'
    })
  })))));
};
SiteFooter.propTypes = {
  logo: PropTypes.string
};
SiteFooter.defaultProps = {
  logo: undefined
};
export default SiteFooter;
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map