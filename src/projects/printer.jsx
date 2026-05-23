import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './printer.css';

const printerImages = [
  '/projects/invnt-3d-printer/printer-hero.png',
  '/projects/invnt-3d-printer/invnt-annume2.png',
  '/projects/invnt-3d-printer/invnt-annume2-1.png',
  '/projects/invnt-3d-printer/invnt-annume5.png',
  '/projects/invnt-3d-printer/invnt-annume13.png',
  '/projects/invnt-3d-printer/invnt-frame.png',
  '/projects/invnt-3d-printer/invnt-printhead.png',
  '/projects/invnt-3d-printer/invnt-print.png',
  '/projects/invnt-3d-printer/invnt-box.png',
];

export const metadata = {
  id: '1',
  slug: 'invnt-printer',
  title: '3D Printer Design',
  category: 'Consumer Electronics',
  tags: ['Industrial Design', 'Mechanical Engineering', 'Visualisation'],
  gridSize: 'large',
  year: '2022',
  thumbnail: '/projects/invnt-3d-printer/printer-hero-with-bg.png',
  images: ['/projects/invnt-3d-printer/printer-hero.png'],
  description:
    'Developing an inexpensive FDM 3D printing platform from readily available components, prioritizing usability, low-maintenance, and cost-efficiency.',
};

const CheckIcon = () => (
  <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ThreeDPrinterDesign() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (src) => {
    const idx = printerImages.indexOf(src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <div className="printer-case-study">
      {lightboxIndex !== null && (
        <Lightbox
          images={printerImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) => (i - 1 + printerImages.length) % printerImages.length)
          }
          onNext={() => setLightboxIndex((i) => (i + 1) % printerImages.length)}
        />
      )}

      {/* ── Section 1: Intro ── */}
      <section className="cs-intro-section">
        <span className="cs-category">Consumer Electronics · 2022</span>
        <h1 className="cs-title">
          Invnt 3D — Designing an inexpensive FDM 3D printing platform built for the curious
          beginner
        </h1>

        <div className="cs-intro-grid">
          <div>
            <p className="cs-lead">
              Low-cost 3D printers are often badly designed for non-technical users. This project
              looks into developing a product for new enthusiasts interested in 3D printing without
              much technical knowledge — providing them a kickstart with a simple, thoughtfully
              designed machine.
            </p>
            <div className="cs-problem-statement">
              <h3>Problem Statement</h3>
              <p>
                How do we design a versatile 3D printer platform with the less technically
                acquainted user in mind? How can the Indian context shape the machine? What is the
                scope of the audience for such machines in India, and how can design better cater to
                their requirements?
              </p>
            </div>
          </div>

          <div className="cs-meta-box">
            <div className="cs-meta-row">
              <span className="cs-meta-label">Category</span>
              <span className="cs-meta-val">Product Design & Prototyping</span>
            </div>
            <div className="cs-meta-row">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-val">6 months (June – December 2021)</span>
            </div>
            <div className="cs-meta-row">
              <span className="cs-meta-label">Skills</span>
              <div className="cs-tags">
                {[
                  'Industrial Design',
                  'Mechanical Engineering',
                  'CAD Modelling',
                  'Prototyping',
                ].map((t) => (
                  <span key={t} className="cs-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="cs-meta-row">
              <span className="cs-meta-label">Status</span>
              <span className="cs-meta-val">Prototype Complete</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Hero Image ── */}
      <section className="cs-section printer-hero-section">
        <div
          className="cs-image-wrapper bg-red-light"
          style={{ cursor: 'zoom-in' }}
          onClick={() => openLightbox('/projects/invnt-3d-printer/printer-hero.png')}
        >
          <img src="/projects/invnt-3d-printer/printer-hero.png" alt="3D printer render" />
        </div>
        <p className="cs-caption">
          The final Invnt 3D render. A 3D printer will soon become a household appliance — this
          project explores what that future object should look and feel like. Click any image to
          enlarge.
        </p>
      </section>

      {/* ── Section 3: Blockquote ── */}
      <section className="cs-section">
        <blockquote className="cs-blockquote">
          <p>
            "A 3D printer designed for curiosity — simple enough to use out of the box, open enough
            to grow with you."
          </p>
          <cite>— Design Principle behind Invnt 3D</cite>
        </blockquote>
      </section>

      {/* ── Section 4: Market Research ── */}
      <section className="cs-section bg-teal-block">
        <div className="cs-split-grid align-center">
          <div className="cs-image-column span-2">
            <img
              src="/projects/invnt-3d-printer/invnt-annume2.png"
              alt="3D printer view 1"
              style={{ cursor: 'zoom-in' }}
              onClick={() => openLightbox('/projects/invnt-3d-printer/invnt-annume2.png')}
            />
          </div>
          <div className="cs-image-column span-1 hide-mobile">
            <img
              src="/projects/invnt-3d-printer/invnt-annume2-1.png"
              alt="3D printer view 2"
              style={{ cursor: 'zoom-in' }}
              onClick={() => openLightbox('/projects/invnt-3d-printer/invnt-annume2-1.png')}
            />
          </div>
        </div>
        <p className="cs-caption" style={{ color: '#333333' }}>
          Studying the market revealed huge growth potential. The Ender 3 — a low-cost printer from
          Creality — dominated globally in just two years. The market is projected to grow 5× in 10
          years.
        </p>
      </section>

      <section className="cs-section">
        <div className="cs-grid-2col">
          <img
            src="/projects/invnt-3d-printer/invnt-annume3-1.png"
            alt="3D printer market"
            className="rounded-img"
          />
          <img
            src="/projects/invnt-3d-printer/invnt-annume3.png"
            alt="3D printer market chart"
            className="rounded-img"
          />
        </div>
        <p className="cs-caption">
          Market research mapped what sells today and what will sell in five years. The real
          challenge: building the better product now, before the market matures.
        </p>
      </section>

      <section className="cs-section bg-purple-block">
        <div className="cs-split-grid align-center">
          <div className="cs-image-column span-1">
            <img
              src="/projects/invnt-3d-printer/invnt-annume4.png"
              alt="Fused Filament Deposition research"
            />
          </div>
          <div className="cs-image-column span-2">
            <img src="/projects/invnt-3d-printer/invnt-annume4-1.png" alt="FFD motion platform" />
          </div>
        </div>
        <p className="cs-caption" style={{ color: '#333333' }}>
          Fused Filament Deposition was studied in depth to understand the why's and why-not's —
          directly informing extruder system and motion platform decisions later in the project.
        </p>
      </section>

      {/* ── Section 5: Architecture ── */}
      <section className="cs-section bg-orange-block">
        <div
          className="cs-image-wrapper"
          style={{ cursor: 'zoom-in' }}
          onClick={() => openLightbox('/projects/invnt-3d-printer/invnt-annume5.png')}
        >
          <img src="/projects/invnt-3d-printer/invnt-annume5.png" alt="Product exploded view" />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split-grid">
          <div className="cs-image-column span-1">
            <img
              src="/projects/invnt-3d-printer/invnt-annume6-1.png"
              alt="Motion platform prototype"
            />
          </div>
          <div className="cs-image-column span-2">
            <img src="/projects/invnt-3d-printer/invnt-annume6.png" alt="Electronics assembly" />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split-grid py-5">
          <div className="cs-image-column span-1">
            <img
              src="/projects/invnt-3d-printer/invnt-annume7-1.png"
              alt="Frame structure tap connection"
            />
          </div>
          <div className="cs-image-column span-2">
            <img src="/projects/invnt-3d-printer/invnt-annume7.png" alt="Complete frame setup" />
          </div>
        </div>
      </section>

      {/* ── Section 6: Brief Card ── */}
      <section className="cs-section brief-objectives-section">
        <div className="brief-card">
          <div className="brief-block">
            <span className="brief-label">Redefined Brief</span>
            <p className="brief-highlight">
              Develop a cost-effective CoreXY based highly extensible 3D printing platform with
              accessibility, maintenance and simplicity at the core.
            </p>
          </div>

          <div className="brief-block">
            <span className="brief-label">Target Audience</span>
            <p className="brief-highlight">Beginners, Hobbyists & Students</p>
          </div>

          <div className="brief-block">
            <span className="brief-label">Objectives</span>
            <ul className="objectives-list">
              {[
                'Fit into a budget segment of ₹30,000',
                'Low-maintenance design',
                'Smart connectivity features',
                'Safety enclosure for toxic fumes',
                'No-noise operations design',
              ].map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 7: Design Process ── */}
      <section className="cs-section">
        <h2 className="section-title">Design Process</h2>
        <div className="cs-process-steps">
          {[
            {
              title: 'Market Research & Technology Study',
              body: 'Studied FDM technology, competing products, and the Indian market trajectory. Identified that the 3D printing market would grow 5× in 10 years — and that the dominant products still failed non-technical users.',
            },
            {
              title: 'Problem Redefinition',
              body: 'Reframed the brief from cost-first to usability-first. Shifted focus to beginners and hobbyists who want to start making — not maintain a machine. The ₹30,000 Indian-market budget became a hard constraint rather than a compromise.',
            },
            {
              title: 'Architecture & Motion Platform',
              body: 'Selected CoreXY motion architecture for its speed-to-precision advantage within budget. Researched extruder systems and electronics to build a platform that could be upgraded without a complete rebuild.',
            },
            {
              title: 'Form & Enclosure Exploration',
              body: 'Explored enclosure forms balancing print visibility, fume containment, and DIY assembly. The aluminium extrusion frame with clear acrylic panels hit the right balance of open-access aesthetics and structural rigidity.',
            },
            {
              title: 'Fabrication & Assembly',
              body: 'Sourced all components from Indian retail suppliers, tapped and powder-coated aluminium profiles, and assembled the full prototype. Corner connectors and a custom shipping box were 3D-printed in-house.',
            },
            {
              title: 'Testing & Documentation',
              body: 'Ran print tests across materials and compiled a full indented Bill of Materials with tolerance callouts and assembly instructions — validating the ₹32,000 target and making the design reproducible.',
            },
          ].map((step, i) => (
            <div className="cs-process-step" key={i}>
              <span className="cs-step-number">{String(i + 1).padStart(2, '0')}</span>
              <div className="cs-step-content">
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 8: Ideation & Prototyping ── */}
      <section className="cs-section">
        <h2 className="section-title">Ideation & Prototyping</h2>
        <div className="cs-image-wrapper white-bg-wrapper">
          <img src="/projects/invnt-3d-printer/invnt-annume9.png" alt="Concept sketches" />
        </div>
        <p className="cs-caption">
          The simplest functional form that increases visibility, maintains DIY capabilities, and
          stays functional while being aesthetically pleasing. The final direction: 2020R aluminium
          extrusion profiles for the frame, clear acrylic for the enclosure.
        </p>
      </section>

      <section className="cs-section">
        <div className="cs-image-wrapper white-bg-wrapper">
          <img
            src="/projects/invnt-3d-printer/invnt-annume10.png"
            alt="Movable display structure"
          />
        </div>
        <div className="cs-caption-box">
          <p className="font-bold">
            Display should be able to comfortably change orientation as the user prefers.
          </p>
          <p>
            Location of the display is a personal preference — a movable display is more inclusive,
            modular, and keeps upgradeability at the core.
          </p>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-grid-2col">
          <img
            src="/projects/invnt-3d-printer/invnt-annume11.png"
            alt="Enclosure detail"
            className="rounded-img white-bg"
          />
          <img
            src="/projects/invnt-3d-printer/invnt-annume12.png"
            alt="Hinges and modular joints"
            className="rounded-img white-bg"
          />
        </div>
      </section>

      {/* ── Section 9: Final Product ── */}
      <section className="cs-section">
        <h2 className="section-title">Final Product</h2>
        <div
          className="cs-image-wrapper white-bg-wrapper"
          style={{ cursor: 'zoom-in' }}
          onClick={() => openLightbox('/projects/invnt-3d-printer/invnt-annume13.png')}
        >
          <img src="/projects/invnt-3d-printer/invnt-annume13.png" alt="Final 3D printer render" />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-grid-2col">
          <img
            src="/projects/invnt-3d-printer/invnt-annume14.png"
            alt="Detailed assembly profile"
            className="rounded-img white-bg"
          />
          <img
            src="/projects/invnt-3d-printer/invnt-annume15.png"
            alt="Printbed calibration detail"
            className="rounded-img white-bg"
          />
        </div>
      </section>

      {/* ── Section 10: Bill of Materials ── */}
      <section className="cs-section">
        <h2 className="section-title">Indented Bill of Materials</h2>
        <div className="cs-image-wrapper">
          <img src="/projects/invnt-3d-printer/invnt-annume16.png" alt="BOM Spreadsheet" />
        </div>
        <div className="cs-caption-box">
          <p>
            Overall product cost with all parts sourced from Indian retail stores, excluding labour
            and transportation, comes to around <strong>₹32,000</strong>.
          </p>
          <p className="text-secondary text-sm">
            Prices sourced from major DIY part resellers — including Robu, Novo3D, Electronic
            Spices, Electronics Comp, and RhydoLabz.
          </p>
        </div>
      </section>

      {/* ── Section 11: Component Deep Dive ── */}
      <section className="cs-section cs-grid-2col gap-3">
        {[
          {
            img: '/projects/invnt-3d-printer/invnt-frame.png',
            alt: 'Frame',
            title: 'The Frame',
            body: 'Purchased as 340mm pieces of 2020R extruded aluminium profiles. Tapped, powder coated, and connected with 3D-printed corner connectors.',
            src: '/projects/invnt-3d-printer/invnt-frame.png',
          },
          {
            img: '/projects/invnt-3d-printer/invnt-printhead.png',
            alt: 'Printhead',
            title: 'The Printhead',
            body: 'Opens easily to deal with failure — clogging is common, and an easy-access door to the printhead is a key usability win.',
            src: '/projects/invnt-3d-printer/invnt-printhead.png',
          },
          {
            img: '/projects/invnt-3d-printer/invnt-print.png',
            alt: 'Final Machine',
            title: 'Final Machine',
            body: 'A fully assembled, fully functional prototype operating in the test workspace.',
            src: '/projects/invnt-3d-printer/invnt-print.png',
          },
          {
            img: '/projects/invnt-3d-printer/invnt-box.png',
            alt: 'Packaging Box',
            title: 'Custom Shipping Box',
            body: 'Made to transport the printer intact without disassembly. Stickers used as stencils for branding and handle-with-care signage.',
            src: '/projects/invnt-3d-printer/invnt-box.png',
          },
        ].map(({ img, alt, title, body, src }) => (
          <div
            key={title}
            className="deep-dive-card"
            style={{ cursor: 'zoom-in' }}
            onClick={() => openLightbox(src)}
          >
            <img src={img} alt={alt} />
            <div className="card-padding">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Section 12: Videos ── */}
      <section className="cs-section videos-section">
        <h2 className="section-title">Case Videos</h2>
        <div className="cs-videos-grid">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/B7JiMcPLz-U"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              title="3D printer showcase video 1"
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/ienUoz6PBDU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              title="3D printer showcase video 2"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── Section 13: CAD Embed ── */}
      <section className="cs-section cad-embed-section">
        <h2 className="section-title">Interactive CAD Assembly Model</h2>
        <div className="cad-wrapper">
          <iframe
            src="https://gmail5422695.autodesk360.com/shares/public/SH90d2dQT28d5b6028116c7046e2df1076f1?mode=embed"
            allowFullScreen={true}
            title="Invnt 3D Autodesk CAD Embed"
          ></iframe>
        </div>
      </section>

      {/* ── Section 14: Learnings ── */}
      <section className="cs-section learnings-section">
        <h2 className="section-title">Reflections & Takeaways</h2>
        <div className="learnings-grid">
          {[
            {
              title: 'Technical Drawings & Engineering Documentation',
              body: 'Learnt how to create manufacturing-ready technical drawings with tight tolerances and accurate callouts for CNC, laser routing, and tapped profiles.',
            },
            {
              title: 'Learning New Fabrication Processes',
              body: 'Explored fabrication techniques beyond basic FDM — including aluminium powder coating, profile tapping, and threading. Mastered optimising print density for structural integrity with minimal filament.',
            },
            {
              title: 'Time & Project Management',
              body: 'The project targeted a strict 4-month deadline, which extended to 6 months of prototype iteration and 1 month of documentation. Learned to factor logistical lead times, sourcing delays, and fabrication cycles into the schedule.',
            },
            {
              title: 'Logistics & Purchase Management',
              body: 'As a self-sponsored project, budgeting was paramount. Initial inventory overlap from calculation errors highlighted the crucial role of a thoroughly checked Bill of Materials before active purchasing begins.',
            },
          ].map(({ title, body }) => (
            <div className="learning-card" key={title}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 15: Documentation ── */}
      <section className="cs-section documentation-section">
        <div className="doc-box">
          <p>
            For a highly detailed exploration, design specifications, calculations, and analysis:
          </p>
          <a
            href="/projects/invnt-3d-printer/invnt-3d-printer-gp.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="doc-btn"
          >
            Read Full Project Documentation PDF →
          </a>
        </div>
      </section>
    </div>
  );
}
