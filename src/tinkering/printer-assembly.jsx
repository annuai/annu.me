import React from 'react';
import './printer-assembly.css';

export const metadata = {
  slug: 'printer-assembly',
  title: '3D Printer Assembly',
  date: '2019',
  excerpt:
    'Assembling a Tevo Tarantula Pro from scratch — two hours of hardware puzzles, wiring, and calibration.',
  thumbnail: '/tinkering/printer-assembly/thumbnail.jpg',
  tags: ['3D Printing', 'Assembly', 'Hardware'],
  duration: '2 hours',
};

export default function PrinterAssembly() {
  return (
    <div className="pa-page">
      {/* ── Intro ── */}
      <section className="pa-intro">
        <span className="pa-eyebrow">Assembly · Hardware · 2019 · 2 hours</span>
        <h1 className="pa-title">3D Printer Assembly</h1>
        <p className="pa-lead">
          I bought my first 3D printer — a Tevo Tarantula Pro — in 2019. It took around a month to
          arrive from AliExpress. A day after I received the package, I decided to assemble it,
          which by no means was an easy task. It took a lot of going through tutorials and manuals
          to actually get it working.
        </p>
        <div className="pa-tags">
          {metadata.tags.map((t) => (
            <span key={t} className="pa-tag">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Video ── */}
      <section className="pa-section">
        <div className="pa-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/bew837HBYBE"
            title="3D Printer Assembly — Tevo Tarantula Pro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* ── Notes ── */}
      <section className="pa-section pa-notes-section">
        <div className="pa-notes-grid">
          <div className="pa-note-block">
            <span className="pa-note-label">The Kit</span>
            <p>
              The Tevo Tarantula Pro ships as a partial kit — frame, motors, extruder, heated bed,
              and a bag of hardware. No pre-assembled axes, no plug-and-play wiring. The manual is
              sparse at best, so community tutorials filled most of the gaps.
            </p>
          </div>
          <div className="pa-note-block">
            <span className="pa-note-label">The Process</span>
            <p>
              Frame assembly went smoothly; wiring was the real challenge — routing cables, getting
              the endstops in the right orientation, and flashing the firmware before the first test
              print. Two hours start to first successful home.
            </p>
          </div>
          <div className="pa-note-block">
            <span className="pa-note-label">What I Learned</span>
            <p>
              Building from a kit forces you to understand every axis and every stepper before the
              machine moves. That baseline knowledge made every calibration issue and future upgrade
              much easier to diagnose.
            </p>
          </div>
        </div>
      </section>

      {/* ── Specs ── */}
      <section className="pa-section">
        <div className="pa-specs-row">
          <div className="pa-spec-card">
            <span className="pa-spec-label">Printer</span>
            <span className="pa-spec-value">Tevo Tarantula Pro</span>
          </div>
          <div className="pa-spec-card">
            <span className="pa-spec-label">Source</span>
            <span className="pa-spec-value">AliExpress</span>
          </div>
          <div className="pa-spec-card">
            <span className="pa-spec-label">Execution</span>
            <span className="pa-spec-value">Assembly</span>
          </div>
          <div className="pa-spec-card">
            <span className="pa-spec-label">Duration</span>
            <span className="pa-spec-value">2 hours</span>
          </div>
        </div>
      </section>
    </div>
  );
}
