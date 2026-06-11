import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './aega.css';

export const metadata = {
  id: '4',
  slug: 'aega',
  title: 'aega — Lifestyle Products',
  category: 'Product Design',
  tags: ['Industrial Design', 'Lifestyle', 'Visualisation', 'Prototype'],
  gridSize: 'wide',
  year: '2025–2026',
  thumbnail: '/projects/organizer/organizer-3.jpeg',
  description:
    'aega is a collection of five desktop objects — organizer, coin box, clock, hexa tray, and display bar — designed as a single visual system. Each piece shares the same geometric restraint, muted material palette, and insistence on surface quality that makes them feel like a family.',
};

// All lightbox-eligible images in order
const ALL_IMAGES = [
  '/projects/organizer/organizer.png',
  '/projects/organizer/organizer-1.jpeg',
  '/projects/organizer/organizer-2.jpeg',
  '/projects/coin-box/coin-box.png',
  '/projects/coin-box/coin-box-2.png',
  '/projects/coin-box/coin-box-1.jpeg',
  '/projects/clock/clock.png',
  '/projects/clock/clock-1.png',
  '/projects/hexa/hexa-organizer.png',
  '/projects/hexa/hexa-organizer-1.jpeg',
  '/projects/display-bar/display-bar.png',
  '/projects/display-bar/display-bar-1.png',
  '/projects/aega/cable-organizer.jpg',
  '/projects/aega/hexa-organizer.jpg',
  '/projects/aega/pen-vespoo.jpg',
  '/projects/aega/powercord.jpg',
];

const idx = (src) => ALL_IMAGES.indexOf(src);

export default function Aega() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const open = (src) => setLightboxIndex(idx(src));

  return (
    <div className="ag-case-study">
      {/* ── 1. Intro ── */}
      <section className="ag-intro-section">
        <span className="ag-eyebrow">Product Design · 2025–2026</span>
        <h1 className="ag-title">aega — Five Objects, One Design Language</h1>

        <div className="ag-intro-grid">
          <div>
            <p className="ag-lead">
              A modern desk accumulates noise — mismatched objects from a dozen different brands,
              each with its own personality, none of them talking to each other. aega is the
              counterproposal.
            </p>
            <p className="ag-subtext">
              Five objects designed to live together: an organizer, a coin box, a clock, a hexagonal
              tray, and a display bar. Each solves a specific desktop problem. Together, they form a
              coherent visual system — sharing proportional logic, chamfer language, and a
              preference for geometry over decoration. The collection began as an experiment in
              whether constraint (one palette, one formal vocabulary) could produce objects that
              feel more considered than any single piece designed in isolation.
            </p>
          </div>

          <div className="ag-meta-box">
            <div className="ag-meta-row">
              <span className="ag-meta-label">Collection</span>
              <span className="ag-meta-val">aega Lifestyle Series</span>
            </div>
            <div className="ag-meta-row">
              <span className="ag-meta-label">Category</span>
              <span className="ag-meta-val">Product Design / Lifestyle</span>
            </div>
            <div className="ag-meta-row">
              <span className="ag-meta-label">Year</span>
              <span className="ag-meta-val">2025 – 2026</span>
            </div>
            <div className="ag-meta-row">
              <span className="ag-meta-label">Pieces</span>
              <span className="ag-meta-val">5 products</span>
            </div>
            <div className="ag-meta-row">
              <span className="ag-meta-label">Skills</span>
              <div className="ag-tags">
                {[
                  '3D Modelling',
                  'Visualisation',
                  'Prototyping',
                  'Form Development',
                  'Material Study',
                ].map((t) => (
                  <span key={t} className="ag-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <section className="ag-section">
        <div className="ag-image-wrapper" onClick={() => open('/projects/organizer/organizer.png')}>
          <img src="/projects/organizer/organizer.png" alt="aega Organizer — hero render" />
        </div>
        <p className="ag-caption">
          The aega Organizer — the anchor of the collection. Its three-compartment form and clean
          geometric edges set the visual language shared by every other piece. Click any image to
          enlarge.
        </p>
      </section>

      {/* ── 3. Blockquote ── */}
      <section className="ag-section">
        <blockquote className="ag-blockquote">
          <p>
            "The best object on a desk is the one you stop noticing — because it has completely
            become part of how you work."
          </p>
          <cite>— Design intent behind the aega collection</cite>
        </blockquote>
      </section>

      {/* ── 4. Collection overview ── */}
      <section className="ag-section">
        <h2 className="ag-section-title">The Collection</h2>
        <div className="ag-collection-grid">
          {[
            { src: '/projects/organizer/organizer.png', label: '01 — Organizer' },
            { src: '/projects/coin-box/coin-box.png', label: '02 — Coin Box' },
            { src: '/projects/clock/clock.png', label: '03 — Clock' },
            { src: '/projects/hexa/hexa-organizer.png', label: '04 — Hexa Organizer' },
            { src: '/projects/display-bar/display-bar.png', label: '05 — Display Bar' },
          ].map(({ src, label }) => (
            <div key={src} className="ag-collection-item" onClick={() => open(src)}>
              <div className="ag-collection-thumb">
                <img src={src} alt={label} />
              </div>
              <span className="ag-collection-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Product deep-dives ── */}
      <section className="ag-section">
        <h2 className="ag-section-title">Product by Product</h2>

        {/* 01 — Organizer */}
        <div className="ag-product-section">
          <div className="ag-product-images">
            <div
              className="ag-image-wrapper"
              onClick={() => open('/projects/organizer/organizer.png')}
            >
              <img src="/projects/organizer/organizer.png" alt="aega Organizer" />
            </div>
            <div className="ag-product-images-pair">
              <div
                className="ag-image-wrapper"
                onClick={() => open('/projects/organizer/organizer-1.jpeg')}
              >
                <img src="/projects/organizer/organizer-1.jpeg" alt="Organizer — detail view" />
              </div>
              <div
                className="ag-image-wrapper"
                onClick={() => open('/projects/organizer/organizer-2.jpeg')}
              >
                <img src="/projects/organizer/organizer-2.jpeg" alt="Organizer — side profile" />
              </div>
            </div>
          </div>
          <div>
            <p className="ag-product-num">01 / 05</p>
            <h3 className="ag-product-name">Organizer</h3>
            <p className="ag-product-desc">
              The Organizer is the anchor of the collection — the piece most likely to be the first
              thing you see on a desk. Three compartments at graduated depths: the tallest for pens,
              scissors, and rulers; the mid-depth for markers and styli; the shallowest for business
              cards and small tools.
            </p>
            <p className="ag-product-desc">
              The divider walls are chamfered at their top edges, making it easy to reach in and
              pull out a specific item without disturbing everything else. The exterior walls taper
              by 2° — just enough to read as intentional, not enough to compromise stacking.
            </p>
            <div className="ag-product-specs">
              <div className="ag-spec-row">
                <span className="ag-spec-key">Form</span>
                <span className="ag-spec-val">Three-compartment tray</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Material</span>
                <span className="ag-spec-val">CNC-machined ABS / Powder coat</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Detail</span>
                <span className="ag-spec-val">2° draft, chamfered dividers</span>
              </div>
            </div>
          </div>
        </div>

        {/* 02 — Coin Box */}
        <div className="ag-product-section reverse">
          <div className="ag-product-images">
            <div
              className="ag-image-wrapper"
              onClick={() => open('/projects/coin-box/coin-box.png')}
            >
              <img src="/projects/coin-box/coin-box.png" alt="aega Coin Box" />
            </div>
            <div className="ag-product-images-pair">
              <div
                className="ag-image-wrapper"
                onClick={() => open('/projects/coin-box/coin-box-2.png')}
              >
                <img src="/projects/coin-box/coin-box-2.png" alt="Coin Box — lid detail" />
              </div>
              <div
                className="ag-image-wrapper"
                onClick={() => open('/projects/coin-box/coin-box-1.jpeg')}
              >
                <img src="/projects/coin-box/coin-box-1.jpeg" alt="Coin Box — prototype" />
              </div>
            </div>
          </div>
          <div>
            <p className="ag-product-num">02 / 05</p>
            <h3 className="ag-product-name">Coin Box</h3>
            <p className="ag-product-desc">
              Every pocket generates residue: loose coins, spare SIM card tools, rings you take off
              at the desk, spare buttons, an errant earring. The Coin Box gives these objects a
              designated home — compact, lidded, and satisfying to use.
            </p>
            <p className="ag-product-desc">
              The lid friction-fits with deliberate resistance — firm enough to feel intentional,
              light enough to open one-handed. The same 45° chamfer used on the Organizer's dividers
              appears at the lid perimeter, tying the two pieces together visually. The base
              footprint is small enough to tuck into a corner; the height is tall enough to be easy
              to open.
            </p>
            <div className="ag-product-specs">
              <div className="ag-spec-row">
                <span className="ag-spec-key">Form</span>
                <span className="ag-spec-val">Lidded rectangular box</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Material</span>
                <span className="ag-spec-val">Cast resin / Turned aluminium option</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Detail</span>
                <span className="ag-spec-val">Friction-fit lid, 45° chamfer</span>
              </div>
            </div>
          </div>
        </div>

        {/* 03 — Clock */}
        <div className="ag-product-section">
          <div className="ag-product-images">
            <div className="ag-image-wrapper" onClick={() => open('/projects/clock/clock.png')}>
              <img src="/projects/clock/clock.png" alt="aega Clock" />
            </div>
            <div className="ag-image-wrapper" onClick={() => open('/projects/clock/clock-1.png')}>
              <img src="/projects/clock/clock-1.png" alt="Clock — alternate view" />
            </div>
          </div>
          <div>
            <p className="ag-product-num">03 / 05</p>
            <h3 className="ag-product-name">Clock</h3>
            <p className="ag-product-desc">
              A timepiece that reads the time without performing it. There are no numerals on the
              face — just clean quadrant geometry and two flat-cut hands oxidised dark against the
              pale dial. The information is there; the decoration is not.
            </p>
            <p className="ag-product-desc">
              The Clock works flat on a desk or mounted to a wall. When desk-mounted, a minimal
              angled stand props it at 15° — readable at a glance without requiring a tilt of the
              head. The case profile echoes the Organizer's wall geometry: the same radius, the same
              wall thickness, the same deliberate anonymity.
            </p>
            <div className="ag-product-specs">
              <div className="ag-spec-row">
                <span className="ag-spec-key">Form</span>
                <span className="ag-spec-val">Desk / wall timepiece</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Material</span>
                <span className="ag-spec-val">Injection-moulded case, metal hands</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Detail</span>
                <span className="ag-spec-val">No numerals, 15° desk stand included</span>
              </div>
            </div>
          </div>
        </div>

        {/* 04 — Hexa Organizer */}
        <div className="ag-product-section reverse">
          <div className="ag-product-images">
            <div
              className="ag-image-wrapper"
              onClick={() => open('/projects/hexa/hexa-organizer.png')}
            >
              <img src="/projects/hexa/hexa-organizer.png" alt="aega Hexa Organizer" />
            </div>
            <div
              className="ag-image-wrapper"
              onClick={() => open('/projects/hexa/hexa-organizer-1.jpeg')}
            >
              <img src="/projects/hexa/hexa-organizer-1.jpeg" alt="Hexa Organizer — prototype" />
            </div>
          </div>
          <div>
            <p className="ag-product-num">04 / 05</p>
            <h3 className="ag-product-name">Hexa Organizer</h3>
            <p className="ag-product-desc">
              The hexagon is the most efficient shape for tiling a plane — maximum area, minimum
              perimeter, zero wasted space when packed together. The Hexa Organizer uses that logic
              to create a tray for the objects that resist categorisation: earbuds, cable clips,
              push pins, rings, memory cards.
            </p>
            <p className="ag-product-desc">
              The geometry is a deliberate departure from the Organizer's rectangularity — a
              counterpoint that makes both forms more interesting in proximity. The depth is shallow
              by design: deep enough to contain, shallow enough that you can see everything inside
              at a glance.
            </p>
            <div className="ag-product-specs">
              <div className="ag-spec-row">
                <span className="ag-spec-key">Form</span>
                <span className="ag-spec-val">Hexagonal shallow tray</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Material</span>
                <span className="ag-spec-val">3D-printed PLA / Sand-blasted finish</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Detail</span>
                <span className="ag-spec-val">Compatible with Display Bar mount track</span>
              </div>
            </div>
          </div>
        </div>

        {/* 05 — Display Bar */}
        <div className="ag-product-section">
          <div className="ag-product-images">
            <div
              className="ag-image-wrapper"
              onClick={() => open('/projects/display-bar/display-bar.png')}
            >
              <img src="/projects/display-bar/display-bar.png" alt="aega Display Bar" />
            </div>
            <div
              className="ag-image-wrapper"
              onClick={() => open('/projects/display-bar/display-bar-1.png')}
            >
              <img src="/projects/display-bar/display-bar-1.png" alt="Display Bar — detail" />
            </div>
          </div>
          <div>
            <p className="ag-product-num">05 / 05</p>
            <h3 className="ag-product-name">Display Bar</h3>
            <p className="ag-product-desc">
              The Display Bar is the collection's only wall-mounted piece — a horizontal rail for
              hanging posters, prints, and notes. Its lower face has a standard poster-clamp
              mechanism; its upper face incorporates a Lego-compatible stud track.
            </p>
            <p className="ag-product-desc">
              That stud track allows the Hexa Organizer modules and other compatible clips to mount
              directly to the wall rail, keeping frequently-used items at eye level without taking
              up desk space. Display and lightweight storage on the same vertical plane — a vertical
              extension of the aega system into the space above the desk.
            </p>
            <div className="ag-product-specs">
              <div className="ag-spec-row">
                <span className="ag-spec-key">Form</span>
                <span className="ag-spec-val">Wall-mounted horizontal rail</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Material</span>
                <span className="ag-spec-val">Extruded aluminium profile</span>
              </div>
              <div className="ag-spec-row">
                <span className="ag-spec-key">Detail</span>
                <span className="ag-spec-val">Lego stud track, poster clamp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Design language ── */}
      <section className="ag-section ag-tinted-block">
        <h2 className="ag-section-title">Design Language</h2>
        <div className="ag-principles-grid">
          {[
            {
              num: 'Principle 01',
              title: 'Geometry as the Only Ornament',
              text: "Every surface decision in the aega collection is a geometric one. The 45° chamfer that appears on the Coin Box lid also appears on the Organizer dividers. The radius used on the Clock case echoes the Organizer's corners. The collection holds together because the geometry is consistent — not because the pieces were styled to match.",
            },
            {
              num: 'Principle 02',
              title: 'Function Determines Form',
              text: "Each product's shape is derived from what it needs to do, not from an aesthetic ambition imposed on top. The Organizer's graduated compartments exist because items have graduated heights. The Clock's numeral-free face exists because the hands provide sufficient information. The form is the minimum necessary to fulfil the function — nothing added, nothing withheld.",
            },
            {
              num: 'Principle 03',
              title: 'System Over Product',
              text: "Designing five objects simultaneously revealed decisions that would have been invisible when designing one. The Hexa Organizer's depth is informed by the Coin Box's height — they can sit side by side without one visually dominating. The Display Bar's mount track accepts the Hexa module because both were designed with that connection in mind from the start.",
            },
          ].map(({ num, title, text }) => (
            <div key={num} className="ag-principle-card">
              <span className="ag-principle-num">{num}</span>
              <h3 className="ag-principle-title">{title}</h3>
              <p className="ag-principle-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Process ── */}
      <section className="ag-section">
        <h2 className="ag-section-title">Design Process</h2>
        <div className="ag-process-steps">
          {[
            {
              title: 'Audit & Problem Mapping',
              body: 'Began by cataloguing every object currently living on a typical desk. Mapped each object against its function, its frequency of use, and the visual noise it contributed. The brief that emerged: replace the noisiest, most-used objects with equivalents that share a visual language.',
            },
            {
              title: 'Vocabulary Development',
              body: "Before designing any individual product, established the shared rules: a maximum wall thickness, a single chamfer angle, a radius to be applied consistently, and a constraint that no surface should introduce an element that another product doesn't share. The vocabulary came first; the products followed from it.",
            },
            {
              title: 'Simultaneous Form Development',
              body: "All five products were modelled in parallel rather than sequentially. This forced proportional decisions to be made relative to the other pieces — the Coin Box's footprint was sized so it could sit beside the Organizer without visual conflict. Sequential design would have produced five independently optimised products; parallel design produced a system.",
            },
            {
              title: 'Prototype & Fit Study',
              body: "Physical prototypes at 1:1 scale were assembled on an actual desk to test cohabitation. Proportions that read well in 3D renders sometimes felt wrong in the physical world — the Clock's case was narrowed after prototyping revealed it competed visually with the Organizer when placed side by side.",
            },
            {
              title: 'Material & Finish Specification',
              body: 'The collection settled on a matte finish across all pieces — a decision that reduces visual competition between items and makes the geometric form the only thing you read. Each product was specified in its primary material (extruded aluminium, CNC ABS, cast resin, 3D-printed PLA) with the constraint that all finished surfaces must read as the same family.',
            },
          ].map((step, i) => (
            <div className="ag-process-step" key={i}>
              <span className="ag-step-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="ag-step-content">
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. Full-width gallery row ── */}
      <section className="ag-section">
        <h2 className="ag-section-title">Prototype Photography</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          {[
            { src: '/projects/aega/cable-organizer.jpg', caption: 'Cable organizer — prototype' },
            { src: '/projects/aega/hexa-organizer.jpg', caption: 'Hexa organizer — prototype' },
            { src: '/projects/aega/pen-vespoo.jpg', caption: 'Pen holder — prototype' },
            { src: '/projects/aega/powercord.jpg', caption: 'Power cord organizer — prototype' },
          ].map(({ src, caption }) => (
            <div key={src} className="ag-image-wrapper" onClick={() => open(src)} title={caption}>
              <img src={src} alt={caption} style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <p className="ag-caption">
          Prototype photographs shot in natural window light. Render quality confirmed against
          physical prototypes before finalising surface specifications.
        </p>
      </section>

      {/* ── 9. Takeaways ── */}
      <section className="ag-section">
        <h2 className="ag-section-title">Reflections & Takeaways</h2>
        <div className="ag-takeaways-grid">
          {[
            {
              title: 'Constraint is a Design Tool',
              body: 'Imposing a shared vocabulary across five products before any individual form was developed turned out to be the single most useful decision in the project. Constraint eliminated entire categories of formal choices and directed energy toward the decisions that actually mattered: proportions, fit, finish.',
            },
            {
              title: 'Parallel Design Reveals System Logic',
              body: "Designing all five products simultaneously produced relationships between pieces that sequential design would never have found. The Hexa Organizer's compatibility with the Display Bar's mount track wasn't in the original brief — it emerged naturally from having both products in the same design space at the same time.",
            },
            {
              title: 'The Prototype Overrules the Render',
              body: "Two products were significantly revised after physical prototyping. Screen-accurate proportions and desk-accurate proportions are not the same thing. The Clock's case was narrowed; the Organizer's tallest compartment was deepened. Neither change was visible in the rendered images — both were immediately obvious in person.",
            },
            {
              title: 'Coherence Compounds Value',
              body: 'Any single product in the aega collection is a competent desk object. As a set, they produce something more than their sum: a sense that the desk has been deliberately considered rather than accumulated by chance. That perception of intent is the real product the collection delivers.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="ag-takeaway-card">
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={ALL_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + ALL_IMAGES.length) % ALL_IMAGES.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % ALL_IMAGES.length)}
        />
      )}
    </div>
  );
}
