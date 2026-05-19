import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './vespoo.css';

export const metadata = {
  id: "3",
  slug: "vespoo",
  title: "Vespoo!",
  category: "Product Design",
  tags: ["3D Printing", "Toy Design", "Visualisation", "CNC Routing"],
  gridSize: "tall",
  year: "2026",
  thumbnail: "/projects/vespoo/vespoo.png",
  images: ["/projects/vespoo/vespoo.png", "/projects/vespoo/vespoo-1.png"],
  description:
    "Vespoo is a fun little 3D Printed + CNC routed toy made for kids and adults both. A desk-friendly scooter that you snap together yourself.",
};

const CheckIcon = () => (
  <svg className="vp-check-icon" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ImageModal = ({ src, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div className="vp-modal-backdrop" onClick={onClose}>
      <div className="vp-modal" onClick={e => e.stopPropagation()}>
        <button className="vp-modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <img src={src} alt="Enlarged view" />
      </div>
    </div>,
    document.body
  );
};

const parts = [
  {
    name: "Body Frame",
    method: "printed",
    label: "3D Printed",
    desc: "The main chassis and front fairing — the most complex geometry on the toy. Printed in PLA, available in any colour. The curved surfaces and integrated snap-fit pegs would be prohibitively expensive to CNC.",
  },
  {
    name: "Wheels × 2",
    method: "cnc",
    label: "CNC Routed",
    desc: "Perfect circles cut from a birch plywood sheet. Routing discs is one of the most efficient CNC operations — near-zero setup waste, maximum yield per sheet, and the natural edge grain adds warmth to the toy.",
  },
  {
    name: "Seat",
    method: "cnc",
    label: "CNC Routed",
    desc: "A simple convex plank profile routed from the same birch sheet as the wheels. The wood contrast against the coloured body is intentional — warm, tactile, and immediately legible as a seat.",
  },
  {
    name: "Handlebar",
    method: "cnc",
    label: "CNC Routed",
    desc: "A T-shaped piece cut from 6mm birch. The horizontal bar slots into a groove on the 3D printed neck — no glue, no hardware, just a tight friction fit that can be disassembled and reassembled by hand.",
  },
  {
    name: "Headlight",
    method: "cnc",
    label: "CNC Routed",
    desc: "A small round disc pressed into a printed recess at the front of the fairing. Adds a period-correct detail that references the round headlamps of classic Italian scooters.",
  },
  {
    name: "Axle Pegs × 2",
    method: "printed",
    label: "3D Printed",
    desc: "Short barrel pegs that pass through the wheel centres and snap into the body frame. Printed with a slight interference tolerance — firm enough to hold the wheels upright, loose enough to let them spin freely.",
  },
];

const steps = [
  {
    title: "Reference & Market Study",
    body: "Studied existing wooden toy scooters — particularly push-toy ranges by Scandinavian and Japanese makers — to understand what makes them compelling: the warmth of wood, the satisfying heft, the simple silhouette. Then mapped the production constraints: hand-crafted wooden toys are slow and expensive to make at any real volume.",
  },
  {
    title: "Concept & Part Rationalisation",
    body: "Broke the toy down into its constituent forms and asked: which parts genuinely need the freedom of 3D printing, and which can be cut far faster from sheet material? The rule that emerged — print the complex curves, cut the simple rounds. This split also produces the two-tone material palette as a natural outcome, not a stylistic add-on.",
  },
  {
    title: "CAD & Tolerancing",
    body: "Modelled the full assembly in Fusion 360. The snap-fit system was the hardest part to get right — tolerances that work across different printers and humidity conditions. Settled on a 0.3 mm radial clearance for the axle pegs and a 0.15 mm press-fit on the handlebar groove after three rounds of test prints.",
  },
  {
    title: "Visualisation in KeyShot",
    body: "Imported the CAD geometry into KeyShot for photoreal rendering. The birch wood texture and the matte PLA finish were the two material goals — warm, slightly rough, tactile. Multiple colour studies were run (red, olive green, slate blue, mustard) to evaluate how the body colour reads against the natural wood. Red and olive were selected for the final presentation.",
  },
  {
    title: "Prototype & Assembly Test",
    body: "Printed the body parts on a standard FDM printer and cut the wood components from a 3mm birch sheet. First assembly took under four minutes with no tools. The scooter sits stably on any flat surface, wheels spin, and the toy survives the drop test that every children's product dreads.",
  },
];

export default function Vespoo() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="vp-case-study">

      {lightboxImg && <ImageModal src={lightboxImg} onClose={() => setLightboxImg(null)} />}

      {/* ── Intro ── */}
      <section className="vp-intro-section">
        <span className="vp-category">Toy Design · Lifestyle Product · 2026</span>
        <h1 className="vp-title">
          Vespoo — A Smarter Way to Make the Wooden Toy
        </h1>

        <div className="vp-intro-grid">
          <div>
            <p className="vp-lead">
              Wooden toys are one of the most beloved categories in product design — tactile, durable,
              and timeless. Vespoo started by asking one question: what if you kept everything that makes
              them great, and redesigned the parts that make them hard to produce?
            </p>
            <p className="vp-subtext">
              The result is a miniature scooter — a Vespa in spirit — built from two processes rather
              than one: 3D printed PLA for the complex curved body, and CNC routed birch for every round,
              flat, or simply-profiled component. The two materials find each other naturally in the final
              object: warm wood against bold colour, rough-matte surface next to smooth-matte surface.
              It is a desk ornament, a child's toy, and a small argument for smarter material
              allocation in product manufacturing.
            </p>
          </div>

          <div className="vp-meta-box">
            <div className="vp-meta-row">
              <span className="vp-meta-label">Category</span>
              <span className="vp-meta-val">Toy Design & Lifestyle Object</span>
            </div>
            <div className="vp-meta-row">
              <span className="vp-meta-label">Year</span>
              <span className="vp-meta-val">2026</span>
            </div>
            <div className="vp-meta-row">
              <span className="vp-meta-label">Output</span>
              <span className="vp-meta-val">Functional prototype + KeyShot visualisation</span>
            </div>
            <div className="vp-meta-row">
              <span className="vp-meta-label">Skills</span>
              <div className="vp-tags">
                {["Toy Design", "3D Printing", "CNC Routing", "KeyShot", "Fusion 360", "Visualisation"].map(t => (
                  <span key={t} className="vp-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <section className="vp-section">
        <div className="vp-image-wrapper" onClick={() => setLightboxImg('/projects/vespoo/vespoo.png')}>
          <img src="/projects/vespoo/vespoo.png" alt="Vespoo — two colour variants" />
        </div>
        <p className="vp-caption">
          KeyShot render of both production colour variants — Rally Red and Olive Drab. The natural birch
          components (wheels, seat, handlebar, headlight) are shared across colours; only the
          3D printed body changes. Click any image to enlarge.
        </p>
      </section>

      {/* ── Blockquote ── */}
      <section className="vp-section">
        <blockquote className="vp-blockquote">
          <p>
            "The best toy is the one that a child picks up without being told to — and that an adult
            quietly keeps on their desk for years without explaining why."
          </p>
          <cite>— Vespoo design brief</cite>
        </blockquote>
      </section>

      {/* ── Inspiration ── */}
      <section className="vp-section vp-warm-block">
        <div className="vp-split-grid">
          <div className="vp-split-text">
            <h3>Inspired by the All-Wood Toy Scooter</h3>
            <p>
              The market for premium wooden toys is rich — Scandinavian brands, Japanese makers, small
              European workshops — and the wooden push scooter is a recurring form in all of them.
              These toys are beautiful. They are also slow to produce: each part individually turned
              or CNC'd from solid wood stock, assembled by hand, and priced accordingly.
            </p>
            <p>
              The ambition for Vespoo was not to replace these objects but to learn from them.
              Keep the warmth, the weight, the satisfying material contrast — and redesign the
              production logic so the toy can be made more efficiently, with less offcut waste,
              and opened up to more colour options than wood stain and paint allow.
            </p>
            <p>
              The scooter form was chosen deliberately. The Vespa silhouette is one of the most
              recognisable outlines in the world — a gestural shorthand that a child identifies
              in two seconds and an adult appreciates for the rest of their life.
            </p>
          </div>
          <div className="vp-image-wrapper" onClick={() => setLightboxImg('/projects/vespoo/vespoo-1.png')}>
            <img src="/projects/vespoo/vespoo-1.png" alt="Vespoo close-up — red variant" />
          </div>
        </div>
      </section>

      {/* ── Design intent brief ── */}
      <section className="vp-section">
        <div className="vp-brief-card">
          <div className="vp-brief-block">
            <span className="vp-brief-label">The Core Idea</span>
            <p className="vp-brief-highlight">
              Print what needs to be complex. Cut what can afford to be simple. Waste nothing.
            </p>
          </div>
          <div className="vp-brief-block">
            <span className="vp-brief-label">Target</span>
            <p className="vp-brief-highlight">
              Kids 3 and up, and every adult who deserves something nice on their desk.
            </p>
          </div>
          <div className="vp-brief-block">
            <span className="vp-brief-label">Design Constraints</span>
            <ul className="vp-brief-list">
              {[
                "Tool-free assembly in under 5 minutes",
                "No adhesive — friction fits and snap pegs only",
                "Survives a 1-metre drop onto hardwood flooring",
                "All parts nest efficiently for flat-pack shipping",
                "Birch and PLA only — no exotic materials",
                "Colour applied only to 3D printed parts",
              ].map((item, i) => (
                <li key={i}><CheckIcon /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Part breakdown ── */}
      <section className="vp-section">
        <h2 className="vp-section-title">Parts Breakdown — What Gets Printed, What Gets Cut</h2>
        <div className="vp-parts-grid">
          {parts.map(({ name, method, label, desc }) => (
            <div className="vp-part-card" key={name}>
              <span className={`vp-part-badge ${method}`}>{label}</span>
              <h4>{name}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── vs traditional comparison ── */}
      <section className="vp-section vp-green-block">
        <h2 className="vp-section-title">Vespoo vs Traditional All-Wood Toy</h2>
        <table className="vp-compare-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>All-Wood Toy</th>
              <th className="vp-col-new">Vespoo (Hybrid)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Complex curves", "Hand-carved or multi-axis CNC — slow, expensive", "FDM printed — fast, cheap, any geometry"],
              ["Round parts (wheels, discs)", "Lathe-turned or multi-pass CNC", "Single-pass CNC rout — maximum sheet yield"],
              ["Material waste", "Significant offcut from solid wood blanks", "Near-zero: additive for 3D print, efficient nesting for CNC"],
              ["Colour options", "Limited to paints and stains over wood", "Any PLA colour on printed parts, natural wood fixed"],
              ["Assembly", "Often glued or pinned — permanent", "Snap-fit and friction — fully reversible"],
              ["Price point", "High — labour and material-intensive", "Lower — streamlined dual-process production"],
            ].map(([attr, old, neo], i) => (
              <tr key={i}>
                <td className="vp-col-attr">{attr}</td>
                <td>{old}</td>
                <td className="vp-col-new">{neo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── Process ── */}
      <section className="vp-section">
        <h2 className="vp-section-title">Design & Visualisation Process</h2>
        <div className="vp-process-steps">
          {steps.map((step, i) => (
            <div className="vp-process-step" key={i}>
              <span className="vp-step-number">{String(i + 1).padStart(2, '0')}</span>
              <div className="vp-step-content">
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="vp-section">
        <h2 className="vp-section-title">Renders</h2>
        <div className="vp-gallery-grid">
          {[
            {
              src: "/projects/vespoo/vespoo.png",
              caption: "Both colour variants — the shared wood parts unify the two colourways",
            },
            {
              src: "/projects/vespoo/vespoo-1.png",
              caption: "Rally Red — close-up showing material contrast between PLA body and birch wheels",
            },
          ].map(({ src, caption }) => (
            <div
              key={src}
              className="vp-gallery-item"
              onClick={() => setLightboxImg(src)}
            >
              <img src={src} alt={caption} />
              <div className="vp-gallery-caption">{caption}</div>
            </div>
          ))}
        </div>
        <p className="vp-caption">
          Rendered in KeyShot. The birch material was built from a procedural wood shader with custom
          grain direction matched to how the CNC cuts would run on a real sheet.
          Hover over each image for notes — click to enlarge.
        </p>
      </section>

      {/* ── Reflections ── */}
      <section className="vp-section">
        <h2 className="vp-section-title">Reflections & Takeaways</h2>
        <div className="vp-learnings-grid">
          {[
            {
              title: "Process Defines Aesthetic",
              body: "The two-tone look of Vespoo was never a stylistic decision — it is a direct readout of the manufacturing logic. Letting the process drive the palette produced something more coherent than any mood-board could. It is the most honest design outcome of the project.",
            },
            {
              title: "Tolerancing is the Product",
              body: "A toy that does not assemble cleanly is not a toy — it is a frustration. More time was spent on the fit of axle pegs and handlebar slots than on anything else. The rule: print a test peg before you commit to the full body. Save two days of re-printing.",
            },
            {
              title: "KeyShot Reveals What CAD Hides",
              body: "The material contrast between PLA and birch was obvious in person but difficult to judge in Fusion 360's viewport. Running colour studies in KeyShot early in the process — before committing to a print colour — would have saved one full round of prototyping. Visualisation is not just for presentation; it is a design tool.",
            },
            {
              title: "Simple Toys Earn Their Complexity",
              body: "Vespoo looks simple. Getting it to that point was not. Every dimension was driven by a constraint — shipping flat, surviving a drop, fitting a child's hand, being satisfying to spin the wheels on. Simplicity in toys is always earned, never assumed.",
            },
          ].map(({ title, body }) => (
            <div className="vp-learning-card" key={title}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
