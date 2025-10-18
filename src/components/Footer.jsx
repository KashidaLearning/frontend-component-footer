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
import logo from './sbmf-logo.png';

import '../_footer.scss';

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

          {/* === Top Section === */}
          <div className="footer-top">
             <div className="footer-brand">
    <div className="footer-title">
      <h2>مهارات المستقبل</h2>
    </div>
    <img src={logo} alt="Logo" className="footer-logo" />
  </div>

  <div className="footer-links-top">
    <a
      href={`${config.LMS_BASE_URL}/privacy`}
      className="footer-link"
      onClick={this.externalLinkClickHandler}
    >
      سياسة الخصوصية
    </a>
    <a
      href={`${config.LMS_BASE_URL}/tos`}
      className="footer-link"
      onClick={this.externalLinkClickHandler}
    >
      شروط الخدمة
    </a>
  </div>
          </div>

          {/* Divider */}
          <div className="footer-divider" />

          {/* === Bottom Section === */}
      <div className="footer-bottom">

        <div className="footer-links-bottom">
              <a href="#" className="footer-link" onClick={this.externalLinkClickHandler}>الأسئلة الشائعة</a>
              <a href="#" className="footer-link" onClick={this.externalLinkClickHandler}>تواصل معنا</a>
              <a href="#" className="footer-link" onClick={this.externalLinkClickHandler}>البريد الإلكتروني</a>
            </div>

            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="X" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="YouTube" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={tiktokIcon} alt="TikTok" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={snapchatIcon} alt="Snapchat" /></a>
            </div>
 
</div>

          {/* Copyright */}
          <div className="footer-copy">
            <p>معلومات حقوق النشر تعود لمؤسسة سالم بن محفوظ الأهلية ©</p>
          </div>

        </div>
      </footer>
    );
  }
}

Footer.contextType = AppContext;
export default Footer;
export { EVENT_NAMES };
