import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

const SiteFooter = ({ logo }) => {
  const intl = useIntl();
  const { config } = useContext(AppContext);

  const externalLinkClickHandler = (event) => {
    const label = event.currentTarget.getAttribute('href');
    sendTrackEvent(EVENT_NAMES.FOOTER_LINK, {
      category: 'outbound_link',
      label,
    });
  };

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

        <div className="footer-logo">
          <a
            href={`${config.LMS_BASE_URL}/dashboard`}
            aria-label={intl.formatMessage({
              id: 'footer.logo.ariaLabel',
              defaultMessage: 'Karaneef',
            })}
            onClick={externalLinkClickHandler}
          >
            <img
              src={logo || config.LOGO_TRADEMARK_URL}
              alt={intl.formatMessage({
                id: 'footer.logo.altText',
                defaultMessage: 'Karaneef',
              })}
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

SiteFooter.propTypes = {
  logo: PropTypes.string,
};

SiteFooter.defaultProps = {
  logo: undefined,
};

export default SiteFooter;
export { EVENT_NAMES };