import React, { useState, useEffect } from 'react';
import './ContactSection.css';

const EMAIL = 'hi.annuai@gmail.com';
const PHONE = '+91 96457 38621';

function getKeralaTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const kerala = new Date(utc + 5.5 * 3600 * 1000);
  const h = kerala.getHours();
  const m = kerala.getMinutes().toString().padStart(2, '0');
  const isDay = h >= 6 && h < 19;
  const h12 = h % 12 || 12;
  const ampm = h < 12 ? 'AM' : 'PM';
  return { display: `${h12}:${m} ${ampm}`, isDay };
}

const SunIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ContactSection = () => {
  const [time, setTime] = useState(getKeralaTime());

  useEffect(() => {
    const tick = setInterval(() => setTime(getKeralaTime()), 30000);
    return () => clearInterval(tick);
  }, []);

  return (
    <footer id="contact" className="contact-section">
      <div className="footer-inner">
        {/* ── Top row ── */}
        <div className="footer-top">
          <div className="footer-location">
            <span className="footer-time-icon">{time.isDay ? <SunIcon /> : <MoonIcon />}</span>
            <span className="footer-time">{time.display}</span>
            <span className="footer-place">Kerala, India</span>
          </div>

          <div className="footer-contact-row">
            <span className="footer-get-in-touch">Let's build something together</span>
            <span className="footer-arrow-line">
              <span className="footer-line" />
              <ArrowIcon />
            </span>
            <a href={`mailto:${EMAIL}`} className="footer-email">
              {EMAIL}
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Bottom row ── */}
        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="https://instagram.com/annuai" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <span className="footer-dot">·</span>
            <a href="https://twitter.com/annu_ai" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <span className="footer-dot">·</span>
            <a href="https://www.linkedin.com/in/annuai/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="footer-dot">·</span>
            <a href="https://github.com/annuai" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          <div className="footer-meta">
            <span>Annuai</span>
            <span className="footer-dot">·</span>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="footer-phone">
              {PHONE}
            </a>
            <span className="footer-dot">·</span>
            <span>Built with curiosity in India ❤︎⁠</span>
            <span className="footer-dot">·</span>
            <a href="https://github.com/annuai/annu.me" target="_blank" rel="noopener noreferrer">
              <span>
                <span className="footer-copyleft">©</span> {new Date().getFullYear()}. Open-source
                at heart.
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
