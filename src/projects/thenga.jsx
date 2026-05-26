import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './thenga.css';

const thengaImages = [
  '/projects/thenga/thenga-thumbnail.png',
  '/projects/thenga/copra-large-machine.png',
  '/projects/thenga/fully-automated-machine.png',
  '/projects/thenga/industrial-arm-robot.png',
];

export const metadata = {
  id: '10',
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

const CheckIcon = () => (
  <svg className="th-check-icon" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const STAGES = [
  {
    num: '01',
    title: 'Dehusking',
    body: "Coconuts are dehusked using high-torque adaptive rollers and precision cutters that adjust to each coconut's size.",
  },
  {
    num: '02',
    title: 'Splitting',
    body: 'The dehusked coconut is split into two clean halves using hydraulic blades synchronised with a computer vision system.',
  },
  {
    num: '03',
    title: 'Drying — 1',
    body: 'Coconut halves are loaded onto vertical drying racks and moved into the first thermal drying chamber.',
  },
  {
    num: '04',
    title: 'Unloading',
    body: 'A robotic arm automatically unloads the dried coconut halves from the drying racks for the next stage.',
  },
  {
    num: '05',
    title: 'Copra Removal',
    body: 'Copra is precision-separated from the shell using intelligent pressure-controlled extraction tools.',
  },
  {
    num: '06',
    title: 'Drying — 2',
    body: 'Extracted copra is placed back on trays and returned to a secondary drying module with controlled airflow.',
  },
  {
    num: '07',
    title: 'Final Drying',
    body: 'Copra is dried to the exact moisture level required for storage and packing — monitored by AI humidity sensors.',
  },
  {
    num: '08',
    title: 'Packaging',
    body: 'Dried copra is automatically weighed and filled into sacks by an integrated autonomous packaging unit.',
  },
  {
    num: '09',
    title: 'Sealing & Output',
    body: 'Sacks are sealed, labelled, and placed on the output conveyor — ready for transport without human intervention.',
  },
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
          onPrev={() =>
            setLightboxIndex((i) => (i - 1 + thengaImages.length) % thengaImages.length)
          }
          onNext={() => setLightboxIndex((i) => (i + 1) % thengaImages.length)}
        />
      )}

      {/* ── Section 1: Intro ── */}
      <section className="th-intro-section">
        <span className="th-category">Industrial Design · Robotics Concept · 2025</span>
        <h1 className="th-title">THENGA — Autonomous Coconut-to-Copra Processing System</h1>

        <div className="th-intro-grid">
          <div>
            <p className="th-lead">
              Thenga is the Malayalam word for coconut — and it's also the name of a concept for
              rethinking how copra is produced in Kerala. The project explores two approaches: a
              fully autonomous monolithic machine called THENGA ONE, and a compact semi-automatic
              robotic arm called THENGA ARM built for smaller rural operations.
            </p>
            <p className="th-subtext">
              Copra production in Kerala is still largely manual — physically demanding, time-consuming,
              and increasingly difficult to sustain as agricultural labour shrinks. This concept
              explores what a purpose-built intelligent machine for this specific workflow might look
              like: not a generic industrial robot repurposed, but something designed ground-up for
              the coconut.
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

      {/* ── Section 2: Hero — thumbnail ── */}
      <section className="th-section">
        <div
          className="th-image-wrapper"
          onClick={() => openLightbox('/projects/thenga/thenga-thumbnail.png')}
        >
          <img
            src="/projects/thenga/thenga-thumbnail.png"
            alt="THENGA — coconut to copra processing system"
          />
        </div>
      </section>

      {/* ── Blockquote ── */}
      <section className="th-section">
        <blockquote className="th-blockquote">
          <p>
            "Kerala produces over 40% of India's coconuts. Yet copra processing — the most
            labour-intensive step — remains almost entirely manual. That felt like a design problem
            worth solving."
          </p>
          <cite>— Design Rationale, THENGA</cite>
        </blockquote>
      </section>

      {/* ── Research & Pain Points ── */}
      <section className="th-section">
        <h2 className="th-section-title">The Problem with Manual Copra Extraction</h2>
        <div className="th-research-split">
          <div className="th-video-wrapper">
            <video
              src="/projects/thenga/copra-deshelling.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="th-video"
            />
            <p className="th-video-caption">
              Traditional copra deshelling using a para — a bamboo tool used to pry copra from the
              shell. The process is almost unchanged for generations.
            </p>
          </div>
          <p className="th-research-intro">
            Copra extraction — separating the dried coconut meat from the shell — is the most
            physically demanding step in the entire process. Workers use a tool called a para, made
            from bamboo, to pry the copra away from the shell. Each coconut half is worked
            individually, coaxing the meat loose by hand. It is done entirely at floor level, for
            hours at a stretch, with no mechanical assistance.
          </p>
        </div>

        <div className="th-pain-grid">
          {[
            {
              label: 'Inconsistent Adhesion',
              body: "Not all copra releases the same way. Older or under-dried coconuts have copra that bonds tightly to the shell, requiring significantly more force per strike. Workers have no way to predict or control this — each coconut is a small gamble.",
            },
            {
              label: 'Prolonged Floor-Level Posture',
              body: 'The deshelling spike is fixed to the floor, which means workers sit or crouch at ground level for the entire shift — sometimes 6 to 8 hours. This causes chronic lower back pain, knee strain, and hip joint deterioration over time.',
            },
            {
              label: 'Repetitive Strain Injuries',
              body: 'The repeated striking and prying motion puts continuous stress on the wrists, elbows, and shoulders. RSI is extremely common among experienced copra workers, and there are no ergonomic alternatives currently in use at scale.',
            },
            {
              label: 'Flying Shell Fragments',
              body: 'Coconut shells shatter unpredictably on impact. Sharp fragments frequently fly toward the face and eyes. Eye injuries are a documented occupational hazard, and most workers operate without protective gear in informal settings.',
            },
            {
              label: 'Heat and Humidity Exposure',
              body: 'Copra processing happens outdoors or in poorly ventilated sheds, often during peak summer. Workers are exposed to high heat and humidity for the entire workday, accelerating fatigue and increasing the risk of heat-related illness.',
            },
            {
              label: 'Low and Variable Throughput',
              body: 'An experienced worker can process roughly 1,000–1,500 coconuts per day under good conditions. Fatigue, difficult batches, or heat significantly reduce this. The unpredictability makes it hard for producers to plan output or meet supply commitments.',
            },
            {
              label: 'Broken Copra and Quality Loss',
              body: 'Manual extraction frequently breaks the copra into uneven pieces. Broken or thin copra fetches a lower market price. There is no quality control built into the manual process — consistency depends entirely on individual skill.',
            },
            {
              label: 'Shrinking Labour Availability',
              body: "Younger generations in Kerala are increasingly unwilling to take on copra processing work. The combination of physical hardship, low pay, and social stigma means the skilled labour pool is shrinking — and there's no pipeline to replace it.",
            },
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

      {/* ── Design Intent ── */}
      <section className="th-section">
        <div className="th-brief-card">
          <div className="th-brief-block">
            <span className="th-brief-label">Design Intent</span>
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
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── THENGA ONE diagram ── */}
      <section className="th-section">
        <h2 className="th-section-title">THENGA ONE — Fully Automated</h2>
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
          to sealed copra sacks. Click to enlarge. Renders generated using ChatGPT.
        </p>
      </section>

      {/* ── THENGA ONE clean render ── */}
      <section className="th-section">
        <div
          className="th-image-wrapper"
          onClick={() => openLightbox('/projects/thenga/fully-automated-machine.png')}
        >
          <img
            src="/projects/thenga/fully-automated-machine.png"
            alt="THENGA ONE — clean render, front view"
          />
        </div>
        <p className="th-caption">
          A monolithic machine that processes coconuts from intake to packaged copra without any
          human intervention. The transparent inspection panels make the internal workflow visible —
          a deliberate choice that signals intelligence and builds trust with operators.
        </p>
      </section>

      {/* ── THENGA ARM ── */}
      <section className="th-section th-green-block">
        <h2 className="th-section-title">THENGA ARM — A Separate Tool for Rural Affordability</h2>
        <div className="th-split-grid">
          <div className="th-split-text">
            <p>
              THENGA ONE is designed for cooperatives and large-scale producers. But for the
              majority of Kerala's coconut farmers — smallholders working independently, often in
              remote areas — the cost of a fully automated machine is simply out of reach. THENGA
              ARM was conceived as a response to that gap.
            </p>
            <p>
              It is a standalone semi-automatic robotic arm with interchangeable tool heads, built
              to handle one task at a time with an operator guiding the process. It doesn't replace
              the full workflow — it replaces the most physically harmful parts of it. A farmer can
              use THENGA ARM to take over the deshelling, splitting, or tray-loading steps without
              needing to invest in an entire automated line.
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
      </section>

      {/* ── Processing Stages ── */}
      <section className="th-section">
        <h2 className="th-section-title">How It Works — 9 Stages</h2>
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
      </section>

      {/* ── Section 8: Tool Heads ── */}
      <section className="th-section">
        <h2 className="th-section-title">Interchangeable Tool Heads</h2>
        <div className="th-heads-grid">
          {ARM_HEADS.map((head) => (
            <div className="th-head-card" key={head.num}>
              <span className="th-head-num">{head.num}</span>
              <h4 className="th-head-title">{head.title}</h4>
              <p className="th-head-body">{head.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reflections ── */}
      <section className="th-section">
        <h2 className="th-section-title">Reflections</h2>
        <div className="th-learnings-grid">
          {[
            {
              title: 'Designing for a Specific Context',
              body: "Generic industrial robots exist. What doesn't exist is a machine that understands coconuts — their irregular geometry, variable moisture, fragile copra. The specificity of the problem was the design opportunity.",
            },
            {
              title: 'Two Products, One Language',
              body: 'THENGA ONE and THENGA ARM had to feel like siblings. Same visual language — white body, minimal detailing, green status cues — but scaled to completely different operational contexts.',
            },
            {
              title: 'Trust in Agricultural Machines',
              body: 'Farmers are pragmatic. A machine they can see into, service themselves, and understand at a glance is one they will trust. Transparent panels and clear stage labelling were as much UX decisions as aesthetic ones.',
            },
            {
              title: 'AI as a Design Tool',
              body: 'All renders in this case study were generated using ChatGPT. It raises an interesting question about the role of concept design — the thinking, the system logic, and the design language are real, even when the prototype is not. AI made it possible to visualise a complex industrial system at this level of detail without a full 3D modelling pipeline.',
            },
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
