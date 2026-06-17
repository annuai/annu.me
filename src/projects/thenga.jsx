import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './thenga.css';

const thengaImages = [
  '/projects/thenga/thenga-thumbnail.png',
  '/projects/thenga/sketch-1.jpeg',
  '/projects/thenga/copra-large-machine.png',
  '/projects/thenga/fully-automated-machine.png',
  '/projects/thenga/industrial-arm-robot.png',
];

export const metadata = {
  id: '11',
  slug: 'thenga',
  title: 'THENGA',
  category: 'Product Design',
  tags: ['Industrial Design', 'Robotics', 'Concept', 'Agricultural Tech'],
  gridSize: 'standard',
  year: '2025',
  thumbnail: '/projects/thenga/thenga-thumbnail.png',
  images: thengaImages,
  description:
    "An autonomous coconut-to-copra processing robot system designed for Kerala's agricultural landscape — from a fully automated monolithic machine to a compact semi-automatic robotic arm.",
};

const STAGES = [
  { num: '01', title: 'Dehusking', body: "Coconuts are dehusked using high-torque adaptive rollers and precision cutters that adjust to each coconut's size." },
  { num: '02', title: 'Splitting', body: 'The dehusked coconut is split into two clean halves using hydraulic blades synchronised with a computer vision system.' },
  { num: '03', title: 'Drying — 1', body: 'Coconut halves are loaded onto vertical drying racks and moved into the first thermal drying chamber.' },
  { num: '04', title: 'Unloading', body: 'A robotic arm automatically unloads the dried coconut halves from the drying racks for the next stage.' },
  { num: '05', title: 'Copra Removal', body: 'Copra is precision-separated from the shell using intelligent pressure-controlled extraction tools.' },
  { num: '06', title: 'Drying — 2', body: 'Extracted copra is placed back on trays and returned to a secondary drying module with controlled airflow.' },
  { num: '07', title: 'Final Drying', body: 'Copra is dried to the exact moisture level required for storage and packing — monitored by AI humidity sensors.' },
  { num: '08', title: 'Packaging', body: 'Dried copra is automatically weighed and filled into sacks by an integrated autonomous packaging unit.' },
  { num: '09', title: 'Sealing & Output', body: 'Sacks are sealed, labelled, and placed on the output conveyor — ready for transport without human intervention.' },
];

const ARM_HEADS = [
  { num: '01', title: 'Dehusking', body: 'Removes outer husk' },
  { num: '02', title: 'Splitting', body: 'Splits coconut into two halves' },
  { num: '03', title: 'Copra Retrieval', body: 'Extracts copra from shell' },
  { num: '04', title: 'Tray Loading', body: 'Places coconut or copra on drying trays' },
  { num: '05', title: 'Tray Unloading', body: 'Removes dried coconut or copra from trays' },
  { num: '06', title: 'Packing Assist', body: 'Picks and places dried copra into sack or container' },
];

export default function Thenga() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (src) => {
    const idx = thengaImages.indexOf(src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <div className="th-case-study">
      {lightboxIndex !== null && (
        <Lightbox
          images={thengaImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + thengaImages.length) % thengaImages.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % thengaImages.length)}
        />
      )}

      {/* ── Hero image ── */}
      <div
        className="th-hero-image"
        onClick={() => openLightbox('/projects/thenga/thenga-thumbnail.png')}
      >
        <img src="/projects/thenga/thenga-thumbnail.png" alt="THENGA — coconut to copra processing system" />
      </div>

      {/* ── Intro ── */}
      <section className="th-intro-section">
        <div className="th-intro-grid">
          <div className="th-intro-left">
            <span className="th-category">Industrial Design · Robotics Concept · 2025</span>
            <h1 className="th-title">THENGA</h1>
            <p className="th-lead">
              Thenga is the Malayalam word for coconut — and the name of a concept for rethinking
              how copra is produced in Kerala. A fully autonomous monolithic machine called THENGA
              ONE, and a compact semi-automatic robotic arm called THENGA ARM built for smaller
              rural operations.
            </p>
            <p className="th-subtext">
              Copra production in Kerala is still largely manual — physically demanding,
              time-consuming, and increasingly difficult to sustain as agricultural labour shrinks.
              This explores what a purpose-built intelligent machine for this specific workflow might
              look like: not a generic industrial robot repurposed, but something designed
              ground-up for the coconut.
            </p>
          </div>

          <div className="th-meta-box">
            <div className="th-meta-row">
              <span className="th-meta-label">Category</span>
              <span className="th-meta-val">Industrial Design · Robotics Concept</span>
            </div>
            <div className="th-meta-row">
              <span className="th-meta-label">Year</span>
              <span className="th-meta-val">2025</span>
            </div>
            <div className="th-meta-row">
              <span className="th-meta-label">Skills</span>
              <div className="th-tags">
                {['Concept Design', 'Systems Thinking', '3D Visualisation', 'Robotics'].map((t) => (
                  <span key={t} className="th-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="th-meta-row">
              <span className="th-meta-label">Status</span>
              <span className="th-meta-val">Concept · AI-Assisted Render</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blockquote ── */}
      <section className="th-section">
        <blockquote className="th-blockquote">
          <p>
            "Kerala produces over 40% of India's coconuts. Yet copra processing — the most
            labour-intensive step — remains almost entirely manual. That felt like a design
            problem worth solving."
          </p>
          <cite>— Design Rationale, THENGA</cite>
        </blockquote>
      </section>

      {/* ── 01 Research ── */}
      <section className="th-section">
        <div className="th-section-header">
          <span className="th-section-num">01</span>
          <h2 className="th-section-title">The Problem with Manual Copra Extraction</h2>
        </div>

        <div className="th-split image-left">
          <div className="th-split-media">
            <div className="th-video-wrapper">
              <video
                src="/projects/thenga/copra-deshelling.mp4"
                autoPlay loop muted playsInline
                className="th-video"
              />
            </div>
            <p className="th-video-caption">
              Traditional copra deshelling using a para — a bamboo tool used to pry copra from the
              shell. The process is almost unchanged for generations.
            </p>
          </div>
          <div className="th-split-body">
            <p>
              Copra extraction — separating the dried coconut meat from the shell — is the most
              physically demanding step in the entire process. Workers use a tool called a para,
              made from bamboo, to pry the copra away from the shell.
            </p>
            <p>
              Each coconut half is worked individually, coaxing the meat loose by hand. It is done
              entirely at floor level, for hours at a stretch, with no mechanical assistance. The
              toll on the body is severe and cumulative.
            </p>
            <p>
              An experienced worker can process roughly 1,000–1,500 coconuts per day under good
              conditions. Fatigue, difficult batches, or heat significantly reduce this — and there
              is no way to scale the process without simply adding more workers.
            </p>
          </div>
        </div>

        <div className="th-pain-grid">
          {[
            { label: 'Inconsistent Adhesion', body: "Not all copra releases the same way. Older or under-dried coconuts have copra that bonds tightly to the shell, requiring significantly more force per strike. Workers have no way to predict or control this — each coconut is a small gamble." },
            { label: 'Prolonged Floor-Level Posture', body: 'The deshelling spike is fixed to the floor, which means workers sit or crouch at ground level for the entire shift — sometimes 6 to 8 hours. This causes chronic lower back pain, knee strain, and hip joint deterioration over time.' },
            { label: 'Repetitive Strain Injuries', body: 'The repeated striking and prying motion puts continuous stress on the wrists, elbows, and shoulders. RSI is extremely common among experienced copra workers, and there are no ergonomic alternatives currently in use at scale.' },
            { label: 'Flying Shell Fragments', body: 'Coconut shells shatter unpredictably on impact. Sharp fragments frequently fly toward the face and eyes. Eye injuries are a documented occupational hazard, and most workers operate without protective gear in informal settings.' },
            { label: 'Heat and Humidity Exposure', body: 'Copra processing happens outdoors or in poorly ventilated sheds, often during peak summer. Workers are exposed to high heat and humidity for the entire workday, accelerating fatigue and increasing the risk of heat-related illness.' },
            { label: 'Low and Variable Throughput', body: 'An experienced worker can process roughly 1,000–1,500 coconuts per day under good conditions. Fatigue, difficult batches, or heat significantly reduce this. The unpredictability makes it hard for producers to plan output.' },
            { label: 'Broken Copra and Quality Loss', body: 'Manual extraction frequently breaks the copra into uneven pieces. Broken or thin copra fetches a lower market price. There is no quality control built into the manual process — consistency depends entirely on individual skill.' },
            { label: 'Shrinking Labour Availability', body: "Younger generations in Kerala are increasingly unwilling to take on copra processing work. The combination of physical hardship, low pay, and social stigma means the skilled labour pool is shrinking — and there's no pipeline to replace it." },
          ].map(({ label, body }, i) => (
            <div className="th-pain-card" key={i}>
              <span className="th-pain-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4 className="th-pain-label">{label}</h4>
                <p className="th-pain-body">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 Ideation ── */}
      <section className="th-section">
        <div className="th-section-header">
          <span className="th-section-num">02</span>
          <h2 className="th-section-title">Ideation</h2>
        </div>

        <div className="th-split image-right">
          <div className="th-split-body">
            <p>
              The earliest sketches were less about form and more about sequence. What are all the
              steps a coconut goes through to become packaged copra? How do those steps map onto a
              physical machine? Where does the process break down when you try to automate it?
            </p>
            <p>
              Sketching helped expose the hardest mechanical problems early — particularly around
              handling irregular coconut geometry and the variability in copra adhesion. These
              became the central design constraints that shaped both THENGA ONE and THENGA ARM.
            </p>
            <p>
              Once the processing sequence was clear, the architecture of the machine started to
              follow naturally — a linear flow through stages, each one handing off to the next
              without human intervention.
            </p>
          </div>
          <div className="th-split-media">
            <div
              className="th-image-wrapper"
              onClick={() => openLightbox('/projects/thenga/sketch-1.jpeg')}
            >
              <img src="/projects/thenga/sketch-1.jpeg" alt="THENGA — early ideation sketches" />
            </div>
            <p className="th-video-caption">
              Early sketches exploring machine architecture, processing sequence, and form language
              before moving into 3D visualisation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 Design Intent ── */}
      <section className="th-section">
        <div className="th-section-header">
          <span className="th-section-num">03</span>
          <h2 className="th-section-title">Design Intent</h2>
        </div>
        <div className="th-brief-card">
          <div className="th-brief-block">
            <span className="th-brief-label">Core Brief</span>
            <p className="th-brief-highlight">
              One machine. No operators. Raw coconuts in, packaged copra out.
            </p>
          </div>
          <div className="th-brief-block">
            <span className="th-brief-label">Visual Language</span>
            <p className="th-brief-highlight">
              White powder-coated aluminium, glass inspection panels, green status lighting —
              precision that feels calm.
            </p>
          </div>
          <div className="th-brief-block">
            <span className="th-brief-label">Design Objectives</span>
            <ul className="th-brief-list">
              {[
                'Zero human touchpoints in the processing chain',
                'AI vision for consistent coconut handling',
                'Serviceable panels for maintenance access',
                'Compact enough for cooperative-scale deployment',
                'Designed to feel trustworthy, not threatening',
              ].map((item, i) => (
                <li key={i}>
                  <svg className="th-check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 04 THENGA ONE ── */}
      <section className="th-section">
        <div className="th-section-header">
          <span className="th-section-num">04</span>
          <h2 className="th-section-title">THENGA ONE — Fully Automated</h2>
        </div>

        <div
          className="th-image-wrapper"
          onClick={() => openLightbox('/projects/thenga/copra-large-machine.png')}
        >
          <img
            src="/projects/thenga/copra-large-machine.png"
            alt="THENGA ONE — fully annotated processing stages"
          />
        </div>
        <p className="th-caption">
          Nine autonomous processing stages in a single continuous machine, from raw coconut intake
          to sealed copra sacks. Renders generated using ChatGPT.
        </p>

        <div className="th-split image-left" style={{ marginTop: '3rem' }}>
          <div className="th-split-media">
            <div
              className="th-image-wrapper"
              onClick={() => openLightbox('/projects/thenga/fully-automated-machine.png')}
            >
              <img
                src="/projects/thenga/fully-automated-machine.png"
                alt="THENGA ONE — clean render, front view"
              />
            </div>
          </div>
          <div className="th-split-body">
            <h3 className="th-split-heading">A machine designed to disappear into the process</h3>
            <p>
              THENGA ONE is a monolithic machine that processes coconuts from intake to packaged
              copra without any human intervention. The transparent inspection panels make the
              internal workflow visible — a deliberate choice that signals intelligence and builds
              trust with operators.
            </p>
            <p>
              The visual language is intentionally restrained — white powder-coated aluminium,
              minimal panel detailing, green status LEDs. It is meant to feel like precision
              equipment, not industrial machinery. Farmers and cooperative managers should be able
              to read its state at a glance and trust what they see.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="th-stages-block">
          <h3 className="th-stages-heading">How It Works — 9 Stages</h3>
          <div className="th-process-steps">
            {STAGES.map((stage) => (
              <div className="th-process-step" key={stage.num}>
                <span className="th-step-number">{stage.num}</span>
                <div className="th-step-content">
                  <h4>{stage.title}</h4>
                  <p>{stage.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 THENGA ARM ── */}
      <section className="th-section">
        <div className="th-section-header">
          <span className="th-section-num">05</span>
          <h2 className="th-section-title">THENGA ARM — Built for Rural Affordability</h2>
        </div>

        <div className="th-split image-right th-green-block">
          <div className="th-split-body">
            <p>
              THENGA ONE is designed for cooperatives and large-scale producers. But for the
              majority of Kerala's coconut farmers — smallholders working independently, often in
              remote areas — the cost of a fully automated machine is simply out of reach. THENGA
              ARM was conceived as a response to that gap.
            </p>
            <p>
              It is a standalone semi-automatic robotic arm with interchangeable tool heads, built
              to handle one task at a time with an operator guiding the process. It doesn't replace
              the full workflow — it replaces the most physically harmful parts of it.
            </p>
            <p>
              A farmer can use THENGA ARM to take over the deshelling, splitting, or tray-loading
              steps without needing to invest in an entire automated line.
            </p>
            <div className="th-arm-specs">
              <div className="th-spec">
                <span className="th-spec-label">One Arm</span>
                <span className="th-spec-val">Multiple tools, many possibilities</span>
              </div>
              <div className="th-spec">
                <span className="th-spec-label">Operation</span>
                <span className="th-spec-val">Semi-automatic with operator guidance</span>
              </div>
              <div className="th-spec">
                <span className="th-spec-label">Footprint</span>
                <span className="th-spec-val">Compact — built for rural production</span>
              </div>
            </div>
          </div>
          <div className="th-split-media">
            <div
              className="th-image-wrapper"
              style={{ cursor: 'zoom-in' }}
              onClick={() => openLightbox('/projects/thenga/industrial-arm-robot.png')}
            >
              <img
                src="/projects/thenga/industrial-arm-robot.png"
                alt="THENGA ARM — semi-automatic robotic arm with interchangeable heads"
              />
            </div>
          </div>
        </div>

        <div className="th-heads-grid" style={{ marginTop: '3rem' }}>
          {ARM_HEADS.map((head) => (
            <div className="th-head-card" key={head.num}>
              <span className="th-head-num">{head.num}</span>
              <h4 className="th-head-title">{head.title}</h4>
              <p className="th-head-body">{head.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 06 Reflections ── */}
      <section className="th-section">
        <div className="th-section-header">
          <span className="th-section-num">06</span>
          <h2 className="th-section-title">Reflections</h2>
        </div>
        <div className="th-learnings-grid">
          {[
            { title: 'Designing for a Specific Context', body: "Generic industrial robots exist. What doesn't exist is a machine that understands coconuts — their irregular geometry, variable moisture, fragile copra. The specificity of the problem was the design opportunity." },
            { title: 'Two Products, One Language', body: 'THENGA ONE and THENGA ARM had to feel like siblings. Same visual language — white body, minimal detailing, green status cues — but scaled to completely different operational contexts.' },
            { title: 'Trust in Agricultural Machines', body: 'Farmers are pragmatic. A machine they can see into, service themselves, and understand at a glance is one they will trust. Transparent panels and clear stage labelling were as much UX decisions as aesthetic ones.' },
            { title: 'AI as a Design Tool', body: 'All renders in this case study were generated using ChatGPT. The thinking, the system logic, and the design language are real, even when the prototype is not. AI made it possible to visualise a complex industrial system at this level of detail without a full 3D modelling pipeline.' },
          ].map(({ title, body }, i) => (
            <div className="th-learning-card" key={i}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
