import React, { useContext } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import facebookIcon from './facebook.png';
import xIcon from './x.png';
import instagramIcon from './instagram.png';
import youtubeIcon from './youtube.png';
import linkedinIcon from './linkedin.png';
import tiktokIcon from './tiktok.png';
import snapchatIcon from './snapchat.png';
ensureConfig(['LMS_BASE_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var SiteFooter = function SiteFooter() {
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
  var socialLinks = [{
    href: 'https://facebook.com',
    icon: facebookIcon,
    alt: 'Facebook'
  }, {
    href: 'https://x.com',
    icon: xIcon,
    alt: 'X'
  }, {
    href: 'https://instagram.com',
    icon: instagramIcon,
    alt: 'Instagram'
  }, {
    href: 'https://youtube.com',
    icon: youtubeIcon,
    alt: 'YouTube'
  }, {
    href: 'https://linkedin.com',
    icon: linkedinIcon,
    alt: 'LinkedIn'
  }, {
    href: 'https://tiktok.com',
    icon: tiktokIcon,
    alt: 'TikTok'
  }, {
    href: 'https://snapchat.com',
    icon: snapchatIcon,
    alt: 'Snapchat'
  }];
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
    className: "footer-social"
  }, socialLinks.map(function (item) {
    return /*#__PURE__*/React.createElement("a", {
      key: item.alt,
      href: item.href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": item.alt,
      onClick: externalLinkClickHandler
    }, /*#__PURE__*/React.createElement("img", {
      src: item.icon,
      alt: item.alt
    }));
  }))));
};
export default SiteFooter;
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map