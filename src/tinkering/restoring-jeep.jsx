import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './restoring-jeep.css';

export const metadata = {
  slug: "restoring-jeep",
  title: "Repainting the Family Jeep",
  date: "2022",
  excerpt: "Restored and repainted a family jeep that had been through too many coats of the wrong colours. Welding, bodywork, primer, two-part polyurethane, and a custom 3D-printed keychain.",
  thumbnail: "/tinkering/restoring-jeep/0.jpg",
  tags: ["Restoration", "Automotive", "Making", "3D Printing"],
  duration: "1 month",
};

// 0–6, 8–15 (no 7)
const PHOTOS = [
  { src: "/tinkering/restoring-jeep/0.jpg",  caption: "The jeep before restoration — the blue that started it all" },
  { src: "/tinkering/restoring-jeep/1.jpg",  caption: "Welding and prep work" },
  { src: "/tinkering/restoring-jeep/2.jpg",  caption: "Disassembly — panels off, ready for bodywork" },
  { src: "/tinkering/restoring-jeep/3.jpg",  caption: "Grey nitrocellulose putty applied to bare metal" },
  { src: "/tinkering/restoring-jeep/4.jpg",  caption: "1K grey primer coat" },
  { src: "/tinkering/restoring-jeep/5.jpg",  caption: "Choosing the original colour scheme" },
  { src: "/tinkering/restoring-jeep/6.jpg",  caption: "White enamel on the interior surfaces" },
  { src: "/tinkering/restoring-jeep/8.jpg",  caption: "Final two-part polyurethane and clear coat" },
  { src: "/tinkering/restoring-jeep/9.jpg",  caption: "Late-night reassembly" },
  { src: "/tinkering/restoring-jeep/10.jpg", caption: "Engine number plate — cleaned and repainted" },
  { src: "/tinkering/restoring-jeep/11.jpg", caption: "Plate detail after acrylic restoration" },
  { src: "/tinkering/restoring-jeep/12.jpg", caption: "Documentation photography — tools and finish" },
  { src: "/tinkering/restoring-jeep/13.jpg", caption: "Custom 3D-printed keychain — red and black" },
  { src: "/tinkering/restoring-jeep/14.jpg", caption: "Final completion photos" },
  { src: "/tinkering/restoring-jeep/15.jpg", caption: "The finished jeep" },
];

const ALL_IMAGES = PHOTOS.map(p => p.src);

const PROCESS = [
  { step: "01", label: "Welding & Prep",      desc: "Any rust or damaged metal was addressed first — welds cleaned up before any surface treatment." },
  { step: "02", label: "Disassembly",         desc: "All panels, trim pieces, and detachable parts removed to access bare metal properly." },
  { step: "03", label: "Putty & Filling",     desc: "Grey nitrocellulose putty applied and sanded to level surface imperfections." },
  { step: "04", label: "Primer",              desc: "1K grey primer coat across all exterior panels — the foundation everything else sits on." },
  { step: "05", label: "Colour Selection",    desc: "Researched the original factory colour scheme and sourced matching polyurethane paint." },
  { step: "06", label: "Interior Enamel",     desc: "White enamel brushed onto interior surfaces before the exterior got its final coat." },
  { step: "07", label: "Final Coat",          desc: "Two-part polyurethane topcoat with clear lacquer — durable, gloss, correct colour." },
  { step: "08", label: "Reassembly",          desc: "Late-night refit of all panels and trim. Everything back in its place." },
  { step: "09", label: "Detail Work",         desc: "Engine number plate cleaned, repainted with acrylic, documented." },
  { step: "10", label: "3D-Printed Keychain", desc: "Designed and printed a two-colour (red and black) keychain as a finishing touch." },
];

export default function RestoringJeep() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const open = (i) => setLightboxIndex(i);

  return (
    <div className="rj-page">

      {/* ── Intro ── */}
      <section className="rj-intro">
        <span className="rj-eyebrow">Restoration · 2022 · 1 month</span>
        <h1 className="rj-title">Repainting the Family Jeep</h1>
        <p className="rj-lead">
          This jeep has been in the family since I was three years old. It had cycled
          through several paint colours over the years and ended up an ugly blue. When
          the cost of a professional respray came up, I decided to learn automotive
          painting and do it myself instead.
        </p>
        <div className="rj-tags">
          {metadata.tags.map(t => <span key={t} className="rj-tag">{t}</span>)}
        </div>
      </section>

      {/* ── Hero ── */}
      <section className="rj-section">
        <div className="rj-hero" onClick={() => open(0)}>
          <img src={PHOTOS[0].src} alt={PHOTOS[0].caption} />
        </div>
        <p className="rj-caption">{PHOTOS[0].caption}</p>
      </section>

      {/* ── Story ── */}
      <section className="rj-section rj-story-section">
        <div className="rj-story-grid">
          <div className="rj-story-block">
            <span className="rj-story-label">The Motivation</span>
            <p>
              I had always hated the blue. The jeep deserved better. When the idea of
              a professional paintjob came up, the cost made it a non-starter. That
              left one option: figure out how to do it. I spent time researching
              automotive spray technique, the layering sequence, and what materials
              a proper job actually requires.
            </p>
          </div>
          <div className="rj-story-block">
            <span className="rj-story-label">The Approach</span>
            <p>
              Automotive painting is a layered process — each coat has to be right
              before the next one goes on. Welding and metal repair first, then
              putty to level imperfections, then primer, then colour, then clear.
              Rushing any stage shows in the finish. The interior surfaces got white
              enamel before the exterior received the final two-part polyurethane coat.
            </p>
          </div>
          <div className="rj-story-block">
            <span className="rj-story-label">The Finish</span>
            <p>
              The final coat is a two-part polyurethane with a clear lacquer on top —
              the same process a professional body shop would use, just with more
              patience and fewer spray guns. Reassembly happened late into the night.
              The number plate got its own restoration treatment, and the project
              ended with a 3D-printed red-and-black keychain.
            </p>
          </div>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="rj-section">
        <h2 className="rj-section-title">Process</h2>
        <div className="rj-process-grid">
          {PROCESS.map(({ step, label, desc }) => (
            <div key={step} className="rj-process-card">
              <span className="rj-step-num">{step}</span>
              <span className="rj-step-label">{label}</span>
              <p className="rj-step-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery: before & prep ── */}
      <section className="rj-section">
        <h2 className="rj-section-title">Bodywork & Prep</h2>
        <div className="rj-grid-3">
          {PHOTOS.slice(1, 4).map((p, i) => (
            <div key={p.src} className="rj-img-wrap" onClick={() => open(i + 1)}>
              <img src={p.src} alt={p.caption} />
              <span className="rj-img-caption">{p.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Painting ── */}
      <section className="rj-section">
        <h2 className="rj-section-title">Painting</h2>
        <div className="rj-grid-2">
          {PHOTOS.slice(4, 8).map((p, i) => (
            <div key={p.src} className="rj-img-wrap" onClick={() => open(i + 4)}>
              <img src={p.src} alt={p.caption} />
              <span className="rj-img-caption">{p.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reassembly & details ── */}
      <section className="rj-section">
        <h2 className="rj-section-title">Reassembly & Details</h2>
        <div className="rj-grid-3">
          {PHOTOS.slice(8, 13).map((p, i) => (
            <div key={p.src} className="rj-img-wrap" onClick={() => open(i + 8)}>
              <img src={p.src} alt={p.caption} />
              <span className="rj-img-caption">{p.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final ── */}
      <section className="rj-section">
        <h2 className="rj-section-title">Finished</h2>
        <div className="rj-grid-2">
          {PHOTOS.slice(13).map((p, i) => (
            <div key={p.src} className="rj-img-wrap" onClick={() => open(i + 13)}>
              <img src={p.src} alt={p.caption} />
              <span className="rj-img-caption">{p.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing quote ── */}
      <section className="rj-section">
        <blockquote className="rj-quote">
          <p>
            "A jeep that's been in the family since I was three deserved a proper
            finish — not whatever the previous owner used."
          </p>
        </blockquote>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={ALL_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => (i - 1 + ALL_IMAGES.length) % ALL_IMAGES.length)}
          onNext={() => setLightboxIndex(i => (i + 1) % ALL_IMAGES.length)}
        />
      )}
    </div>
  );
}
