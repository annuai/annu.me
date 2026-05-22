import React, { useEffect } from 'react';
import './aega-saves.css';

export const metadata = {
  slug: 'aega-saves',
  title: 'AEGA — Design Saves',
  date: '2024',
  excerpt:
    'A running collection of industrial design references, CMF directions, and objects worth studying — saved to Pinterest.',
  tags: ['Industrial Design', 'CMF', 'References', 'Inspiration'],
};

export default function AegaSaves() {
  useEffect(() => {
    // Load Pinterest embed script after mount
    const existing = document.getElementById('pinterest-pinit');
    if (existing) {
      // Script already loaded — re-trigger widget build
      if (window.PinUtils) window.PinUtils.build();
      return;
    }
    const script = document.createElement('script');
    script.id = 'pinterest-pinit';
    script.src = '//assets.pinterest.com/js/pinit.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Leave script in DOM — removing causes flicker on nav back
    };
  }, []);

  return (
    <div className="as-page">
      {/* ── Intro ── */}
      <section className="as-intro">
        <span className="as-eyebrow">Industrial Design · References · Ongoing</span>
        <h1 className="as-title">AEGA — Design Saves</h1>
        <p className="as-lead">
          A running collection of references I keep coming back to — CMF directions, forms worth
          studying, and objects that solve problems well. Saved as I find them, no particular order.
        </p>
        <div className="as-tags">
          {metadata.tags.map((t) => (
            <span key={t} className="as-tag">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Pinterest Board Embed ── */}
      <section className="as-section">
        <div className="as-board-wrapper">
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="100%"
            data-pin-scale-height="600"
            data-pin-scale-width="115"
            href="https://www.pinterest.com/annuai/aega/"
          />
        </div>
        <p className="as-caption">
          Board updates automatically as new pins are saved —{' '}
          <a
            href="https://www.pinterest.com/annuai/aega/"
            target="_blank"
            rel="noopener noreferrer"
            className="as-link"
          >
            view full board on Pinterest ↗
          </a>
        </p>
      </section>
    </div>
  );
}
