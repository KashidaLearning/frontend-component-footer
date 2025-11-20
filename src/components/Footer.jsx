import React from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import { ensureConfig } from '@edx/frontend-platform';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';

import facebookIcon from './facebook.png';
import xIcon from './x.png';
import instagramIcon from './instagram.png';
import linkedinIcon from './linkedin.png';
import youtubeIcon from './youtube.png';

import '../_footer.scss'; // Correct relative path

ensureConfig(['LMS_BASE_URL'], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }

  render() {
    const { config } = this.context;

    return (
      <footer className="footer-arabic" dir="rtl">
        <div className="footer-container">
        
            <div className="footer-links">
              <a href={`${config.LMS_BASE_URL}/tos`} className="footer-link" onClick={this.externalLinkClickHandler}>شروط الخدمة</a>
              <a href={`${config.LMS_BASE_URL}/privacy`} className="footer-link" onClick={this.externalLinkClickHandler}>سياسة الخصوصية</a>
              <a href={`${config.LMS_BASE_URL}/about`} className="footer-link" onClick={this.externalLinkClickHandler}>حول</a>
            </div>

            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="X" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="YouTube" /></a>
            </div>
        </div>
      </footer>
    );
  }
}

Footer.contextType = AppContext;
export default Footer;
export { EVENT_NAMES };
