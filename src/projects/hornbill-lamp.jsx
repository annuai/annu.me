import React, { useState } from 'react';
import './hornbill-lamp.css';

export const metadata = {
  id: "2",
  slug: "hornbill-lamp",
  title: "Hornbill Lamp",
  category: "Product Design",
  tags: ["Lighting Design", "Visualisation", "Prototype"],
  gridSize: "large",
  year: "2025",
  thumbnail: "/projects/hornbill-lamp/hornbill-lamp-wide.png",
  images: [
    "/projects/hornbill-lamp/hornbill-lamp-1.jpeg",
    "/projects/hornbill-lamp/hornbill-lamp-2.jpeg",
    "/projects/hornbill-lamp/hornbill-lamp-3.jpeg",
  ],
  description: "A lamp designed to provide both functional lighting and aesthetic appeal. With its unique and artistic design, it adds a touch of elegance and sophistication to any space while providing warm and inviting illumination."
};

const CheckIcon = () => (
  <svg className="hl-check-icon" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function HornbillLamp() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeTab, setActiveTab] = useState('final');

  const openLightbox = (src) => setLightboxImg(src);
  const closeLightbox = () => setLightboxImg(null);

  return (
    <div className="hl-case-study">

      {/* Lightbox overlay */}
      {lightboxImg && (
        <div className="hl-lightbox" onClick={closeLightbox}>
          <button className="hl-lightbox-close" onClick={closeLightbox}>×</button>
          <img src={lightboxImg} alt="Enlarged view" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* ── Section 1: Intro ── */}
      <section className="hl-intro-section">
        <span className="hl-category">Lighting Design · 2025</span>
        <h1 className="hl-title">
          Hornbill Lamp — Where Nature's Geometry Meets Warm Light
        </h1>

        <div className="hl-intro-grid">
          <div>
            <p className="hl-lead">
              The Hornbill Lamp draws from the striking silhouette of one of India's most dramatic birds —
              a creature whose casque, beak, and plumage have inspired artists for centuries.
              Here, that same organic geometry becomes a functional object that lives in your home.
            </p>
            <p className="hl-subtext">
              This project started as a personal exploration into biomorphic form-giving — how the contours
              of the natural world can be translated into objects that serve everyday human needs without
              losing any of their original poetry. The lamp is both a functional light source and a quiet
              sculptural statement, designed to cast warm, directional light while standing on its own as
              an object worth looking at in the dark.
            </p>
          </div>

          <div className="hl-meta-box">
            <div className="hl-meta-row">
              <span className="hl-meta-label">Category</span>
              <span className="hl-meta-val">Lighting Design & Prototype</span>
            </div>
            <div className="hl-meta-row">
              <span className="hl-meta-label">Year</span>
              <span className="hl-meta-val">2025</span>
            </div>
            <div className="hl-meta-row">
              <span className="hl-meta-label">Skills</span>
              <div className="hl-tags">
                {["Form Exploration", "3D Modelling", "Visualisation", "Prototyping"].map(t => (
                  <span key={t} className="hl-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="hl-meta-row">
              <span className="hl-meta-label">Status</span>
              <span className="hl-meta-val">Prototype Complete</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Hero Image ── */}
      <section className="hl-section">
        <div className="hl-image-wrapper" onClick={() => openLightbox('/projects/hornbill-lamp/hornbill-lamp-wide.png')}>
          <img src="/projects/hornbill-lamp/hornbill-lamp-wide.png" alt="Hornbill Lamp — wide render" />
        </div>
        <p className="hl-caption">
          The final render of the Hornbill Lamp. The curved arm references the bird's long, arching neck,
          while the shade echoes the characteristic downward curve of its bill.
          Click any image to enlarge.
        </p>
      </section>

      {/* ── Section 3: Blockquote ── */}
      <section className="hl-section">
        <blockquote className="hl-blockquote">
          <p>
            "Good design is not about imposing a human idea onto material — it is about listening to what
            the form already wants to become."
          </p>
          <cite>— Design Principle behind the Hornbill Lamp</cite>
        </blockquote>
      </section>

      {/* ── Section 4: Inspiration ── */}
      <section className="hl-section hl-amber-block">
        <div className="hl-split-grid">
          <div className="hl-split-text">
            <h3>Inspired by the Hornbill Bird</h3>
            <p>
              The Great Hornbill (<em>Buceros bicornis</em>) is one of the most architecturally striking
              birds in the world. Its casque — the hollow, bony protrusion above the bill — functions
              both as a resonating chamber and a visual display organ. This balance of utility and
              spectacle was the seed of the lamp's design language.
            </p>
            <p>
              The lamp translates three key anatomical features: the bold downward curve of the bill
              becomes the shade profile; the long arching neck becomes the arm; and the casque's
              commanding presence becomes the visual weight at the top of the form. The result is a
              lamp that reads as unmistakably bird-like without resorting to literal imitation.
            </p>
          </div>
          <div
            className="hl-image-wrapper"
            style={{ cursor: 'zoom-in' }}
            onClick={() => openLightbox('/projects/hornbill-lamp/hornbill-lamp-old.png')}
          >
            <img src="/projects/hornbill-lamp/hornbill-lamp-old.png" alt="Early Hornbill Lamp concept" />
          </div>
        </div>
        <p className="hl-caption" style={{ paddingTop: '1rem' }}>
          Early concept exploration — the first iteration, exploring the gesture of the bird's silhouette
          before refining proportions and material language.
        </p>
      </section>

      {/* ── Section 5: Design Goals ── */}
      <section className="hl-section">
        <div className="hl-brief-card">
          <div className="hl-brief-block">
            <span className="hl-brief-label">Design Intent</span>
            <p className="hl-brief-highlight">
              A lamp that is as compelling switched off as it is switched on.
            </p>
          </div>

          <div className="hl-brief-block">
            <span className="hl-brief-label">Light Quality</span>
            <p className="hl-brief-highlight">
              Warm, directional, and soft — suited for reading, ambiance, and accent use.
            </p>
          </div>

          <div className="hl-brief-block">
            <span className="hl-brief-label">Design Objectives</span>
            <ul className="hl-brief-list">
              {[
                "Form derived from natural geometry, not applied ornament",
                "Stable base with minimum visual weight",
                "Shade that creates a glow, not a glare",
                "Manufacturable with standard fabrication methods",
                "Suitable for desktop and side-table placement",
              ].map((item, i) => (
                <li key={i}><CheckIcon /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 6: Process ── */}
      <section className="hl-section">
        <h2 className="hl-section-title">Design Process</h2>
        <div className="hl-process-steps">
          {[
            {
              title: "Observation & Reference Gathering",
              body: "Studied the morphology of the Great Hornbill — skeleton, plumage, posture, and movement. Sketched silhouettes and extracted the core gestural qualities that make the bird recognisable at a glance.",
            },
            {
              title: "Form Abstraction & Sketching",
              body: "Translated biological curves into lamp geometries. Multiple iterations explored how directly or loosely to reference the bird — the final form sits in a deliberate middle zone: suggestive but not illustrative.",
            },
            {
              title: "3D Modelling & Proportion Studies",
              body: "Modelled in Fusion 360. Proportions were dialled in by printing scaled maquettes and testing them in a real-world desk environment. The arm's sweep angle and shade depth were iterated several times.",
            },
            {
              title: "Material & Finish Exploration",
              body: "Explored matte ceramics, powder-coated metal, and resin composites for the shade. The prototype uses hand-finished gypsum for the shade body, with a steel rod arm and a weighted cast base.",
            },
            {
              title: "Prototype Build & Light Testing",
              body: "A functional prototype was assembled and tested with a 3W warm-white LED module. Light spill, beam angle, and ambient bounce off the shade interior were all measured against the original intent.",
            },
          ].map((step, i) => (
            <div className="hl-process-step" key={i}>
              <span className="hl-step-number">{String(i + 1).padStart(2, '0')}</span>
              <div className="hl-step-content">
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 7: Before / After Toggle ── */}
      <section className="hl-section">
        <h2 className="hl-section-title">Concept Evolution</h2>
        <div className="hl-before-after">
          <div className="hl-before-after-tabs">
            <button
              className={`hl-tab-btn ${activeTab === 'concept' ? 'active' : ''}`}
              onClick={() => setActiveTab('concept')}
            >
              Early Concept
            </button>
            <button
              className={`hl-tab-btn ${activeTab === 'final' ? 'active' : ''}`}
              onClick={() => setActiveTab('final')}
            >
              Final Design
            </button>
          </div>

          <div className={`hl-tab-panel ${activeTab === 'concept' ? 'active' : ''}`}>
            <img
              src="/projects/hornbill-lamp/hornbill-lamp-old.png"
              alt="Early concept of the Hornbill Lamp"
              style={{ cursor: 'zoom-in' }}
              onClick={() => openLightbox('/projects/hornbill-lamp/hornbill-lamp-old.png')}
            />
            <p className="hl-tab-panel-caption">
              The first concept was bolder and more literal in its bird reference — almost totem-like.
              While interesting as sculpture, it sacrificed too much of the lamp's legibility as a functional object.
              The base was too wide and the shade too deep to cast useful light.
            </p>
          </div>

          <div className={`hl-tab-panel ${activeTab === 'final' ? 'active' : ''}`}>
            <img
              src="/projects/hornbill-lamp/hornbill-lamp.png"
              alt="Final design of the Hornbill Lamp"
              style={{ cursor: 'zoom-in' }}
              onClick={() => openLightbox('/projects/hornbill-lamp/hornbill-lamp.png')}
            />
            <p className="hl-tab-panel-caption">
              The final design is more refined and restrained. The arm is slimmer, the shade more open,
              and the base footprint is smaller — all changes driven by real-world usability tests.
              The bird reference survives in gesture rather than literal shape.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 8: Photo Gallery ── */}
      <section className="hl-section hl-stone-block">
        <h2 className="hl-section-title">Prototype Photography</h2>
        <div className="hl-gallery-grid">
          {[
            { src: "/projects/hornbill-lamp/hornbill-lamp-1.jpeg", caption: "Lamp off — the form reads as sculpture" },
            { src: "/projects/hornbill-lamp/hornbill-lamp-2.jpeg", caption: "Switched on — warm light fills the shade" },
            { src: "/projects/hornbill-lamp/hornbill-lamp-3.jpeg", caption: "Close-up of the shade's interior glow" },
            { src: "/projects/hornbill-lamp/hornbill-lamp.png", caption: "Render vs prototype — colour study" },
          ].map(({ src, caption }, i) => (
            <div
              key={i}
              className="hl-gallery-item"
              onClick={() => openLightbox(src)}
            >
              <img src={src} alt={caption} />
              <div className="hl-gallery-item-caption">{caption}</div>
            </div>
          ))}
        </div>
        <p className="hl-caption" style={{ paddingTop: '1.5rem' }}>
          All prototype photographs shot in natural window light to best capture the lamp's true material quality
          and the warmth of its illumination. Hover over each image for notes, click to enlarge.
        </p>
      </section>

      {/* ── Section 9: Full-width final render ── */}
      <section className="hl-section">
        <div className="hl-image-wrapper" onClick={() => openLightbox('/projects/hornbill-lamp/hornbill-lamp-wide.png')}>
          <img src="/projects/hornbill-lamp/hornbill-lamp-wide.png" alt="Hornbill Lamp — final hero render" />
        </div>
      </section>

      {/* ── Section 10: Learnings ── */}
      <section className="hl-section">
        <h2 className="hl-section-title">Reflections & Takeaways</h2>
        <div className="hl-learnings-grid">
          {[
            {
              title: "Restraint in Biomorphic Design",
              body: "Translating nature into product form requires deliberate editing. The first version was too literal — too bird-like. The lesson: extract the gesture, not the anatomy. Let users discover the reference, don't announce it.",
            },
            {
              title: "Light as a Design Material",
              body: "The shade's interior surface finish completely changes the character of the light. A matte interior creates soft, diffuse ambiance; a glossy one creates a sharper, more dramatic glow. Prototyping with real bulbs, not just 3D renders, is non-negotiable.",
            },
            {
              title: "Proportion is Everything",
              body: "The arm's length relative to the base width defines whether the lamp feels elegant or awkward. This was tested extensively by 3D printing at 1:1 scale and placing the maquettes in real contexts — something no render can fully replicate.",
            },
            {
              title: "Stability Without Visual Weight",
              body: "Getting the base heavy enough to counterbalance the arm without making it look like a doorstop was one of the harder problems. The solution was a low-profile, wide-footprint cast base with most of its weight concentrated at the outer rim.",
            },
          ].map(({ title, body }, i) => (
            <div className="hl-learning-card" key={i}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
