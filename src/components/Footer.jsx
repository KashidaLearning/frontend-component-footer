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

ensureConfig([
  'LMS_BASE_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

const SiteFooter = () => {
  const intl = useIntl();
  const { config } = useContext(AppContext);

  const externalLinkClickHandler = (event) => {
    const label = event.currentTarget.getAttribute('href');
    sendTrackEvent(EVENT_NAMES.FOOTER_LINK, {
      category: 'outbound_link',
      label,
    });
  };

  const socialLinks = [
    { href: 'https://facebook.com', icon: facebookIcon, alt: 'Facebook' },
    { href: 'https://x.com', icon: xIcon, alt: 'X' },
    { href: 'https://instagram.com', icon: instagramIcon, alt: 'Instagram' },
    { href: 'https://youtube.com', icon: youtubeIcon, alt: 'YouTube' },
    { href: 'https://linkedin.com', icon: linkedinIcon, alt: 'LinkedIn' },
    { href: 'https://tiktok.com', icon: tiktokIcon, alt: 'TikTok' },
    { href: 'https://snapchat.com', icon: snapchatIcon, alt: 'Snapchat' },
  ];

  return (
    <div className="custom-footer">
      <footer
        className="footer-inner"
        role="contentinfo"
        aria-label={intl.formatMessage({
          id: 'footer.ariaLabel',
          defaultMessage: 'Footer',
        })}
      >
        <nav
          className="footer-nav"
          aria-label={intl.formatMessage({
            id: 'footer.links.ariaLabel',
            defaultMessage: 'Footer links',
          })}
        >
          <a href={`${config.LMS_BASE_URL}/tos`} onClick={externalLinkClickHandler}>
            Terms of Service
          </a>
          <a href={`${config.LMS_BASE_URL}/privacy`} onClick={externalLinkClickHandler}>
            Privacy Policy
          </a>
          <a href={`${config.LMS_BASE_URL}/contact`} onClick={externalLinkClickHandler}>
            Contact Us
          </a>
          <a href={`${config.LMS_BASE_URL}/faq`} onClick={externalLinkClickHandler}>
            FAQ
          </a>
        </nav>

        <div className="footer-social">
          {socialLinks.map((item) => (
            <a
              key={item.alt}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.alt}
              onClick={externalLinkClickHandler}
            >
              <img src={item.icon} alt={item.alt} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default SiteFooter;
export { EVENT_NAMES };