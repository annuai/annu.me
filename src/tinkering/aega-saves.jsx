import React, { useEffect, useRef } from 'react';
import './aega-saves.css';

export const metadata = {
  slug: 'aega-saves',
  title: 'AEGA — Design Saves',
  date: '2024',
  thumbnail: '/tinkering/aega-saves/screenshot.png',
  excerpt:
    'A running collection of industrial design references, CMF directions, and objects worth studying — saved to Pinterest.',
  tags: ['Industrial Design', 'CMF', 'References', 'Inspiration'],
};

function loadPinterestScript() {
  if (document.getElementById('pinterest-pinit')) return;
  const script = document.createElement('script');
  script.id = 'pinterest-pinit';
  script.src = '//assets.pinterest.com/js/pinit.js';
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

// ── Reusable board embed ──────────────────────────────────────────────────────
function PinterestBoard({ href, label, caption }) {
  const wrapperRef = useRef(null);
  const anchorRef = useRef(null);

  useEffect(() => {
    const anchor = anchorRef.current;
    const wrapper = wrapperRef.current;
    if (!anchor || !wrapper) return;

    // Pinterest only accepts pixel widths — measure actual container
    anchor.setAttribute('data-pin-board-width', wrapper.offsetWidth || 800);
    loadPinterestScript();
    if (window.PinUtils) window.PinUtils.build();

    const observer = new ResizeObserver(() => {
      if (anchor && wrapper && window.PinUtils) {
        anchor.setAttribute('data-pin-board-width', wrapper.offsetWidth);
        window.PinUtils.build();
      }
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="as-board-block">
      {label && <span className="as-board-label">{label}</span>}
      <div className="as-board-wrapper" ref={wrapperRef}>
        <a
          ref={anchorRef}
          data-pin-do="embedBoard"
          data-pin-board-width="800"
          data-pin-scale-height="600"
          data-pin-scale-width="115"
          href={href}
        />
      </div>
      {caption && (
        <p className="as-caption">
          {caption.text}{' '}
          <a href={href} target="_blank" rel="noopener noreferrer" className="as-link">
            {caption.linkText} ↗
          </a>
        </p>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AegaSaves() {
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

      {/* ── Boards ── */}
      <section className="as-section">
        <PinterestBoard
          href="https://www.pinterest.com/annuai/aega/"
          label="AEGA"
          caption={{
            text: 'Board updates automatically as new pins are saved —',
            linkText: 'view on Pinterest',
          }}
        />
        <PinterestBoard
          href="https://www.pinterest.com/annuai/product-design/"
          label="Product Design"
          caption={{
            text: 'Board updates automatically as new pins are saved —',
            linkText: 'view on Pinterest',
          }}
        />
      </section>
    </div>
  );
}
