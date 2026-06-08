import React from 'react';
import './pomo.css';

export const metadata = {
  slug: 'pomo',
  title: 'Pomo — A Pomodoro Timer for Mac',
  date: '2026',
  excerpt:
    'A minimal Pomodoro timer built with Flutter. Clean, distraction-free, and runs in the browser without any install.',
  thumbnail: '/projects/pomo-preview.png',
  tags: ['Flutter', 'Dart', 'UI Design', 'Productivity'],
  duration: '2 weeks',
};

export default function Pomo() {
  return (
    <div className="pomo-page">
      {/* ── Intro ── */}
      <section className="pomo-intro">
        <span className="pomo-eyebrow">Flutter · Dart · UI Design · 2026 · 2 weeks</span>
        <h1 className="pomo-title">Pomo — A Pomodoro Timer</h1>
        <p className="pomo-lead">
          I wanted a Pomodoro timer that didn't ask me to sign up, download anything, or sit in a
          sidebar I'd eventually close. So I built one with Flutter — compiles to the web, runs in
          a browser tab, and beeps when your session ends.
        </p>
        <div className="pomo-tags">
          {metadata.tags.map((t) => (
            <span key={t} className="pomo-tag">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Preview ── */}
      <section className="pomo-section">
        <div className="pomo-hero-img">
          <img src="/projects/pomo-preview.png" alt="Pomo — Pomodoro Timer interface" />
        </div>
      </section>

      {/* ── Story ── */}
      <section className="pomo-section pomo-story-section">
        <div className="pomo-story-grid">
          <div className="pomo-story-block">
            <span className="pomo-story-label">Why</span>
            <p>
              Most Pomodoro apps are either bloated productivity suites or web apps that need an
              account. I just needed a 25-minute timer with a beep. Flutter was an excuse to learn
              Dart properly — and compiling to web meant it could run anywhere without an install.
            </p>
          </div>
          <div className="pomo-story-block">
            <span className="pomo-story-label">The Design</span>
            <p>
              The UI is intentionally quiet. One large timer, one button. The session counter sits
              below so you know how deep into your day you are without it being the main event. Color
              shifts slightly between work and break modes — enough to register without demanding
              attention. Typography does most of the work.
            </p>
          </div>
          <div className="pomo-story-block">
            <span className="pomo-story-label">What I Learned</span>
            <p>
              Flutter's web target has its own quirks — audio playback, font rendering, and how the
              widget tree maps to the DOM all behave differently from native. Most of the debugging
              time went into audio: getting the end-of-session beep to fire reliably across browsers
              without autoplay blocking it. The Dart side was clean to write once I got past the
              initial learning curve.
            </p>
          </div>
        </div>
      </section>

      {/* ── Specs ── */}
      <section className="pomo-section">
        <div className="pomo-specs-row">
          <div className="pomo-spec-card">
            <span className="pomo-spec-label">Work Session</span>
            <span className="pomo-spec-value">25 min</span>
          </div>
          <div className="pomo-spec-card">
            <span className="pomo-spec-label">Short Break</span>
            <span className="pomo-spec-value">5 min</span>
          </div>
          <div className="pomo-spec-card">
            <span className="pomo-spec-label">Long Break</span>
            <span className="pomo-spec-value">15 min</span>
          </div>
          <div className="pomo-spec-card">
            <span className="pomo-spec-label">Framework</span>
            <span className="pomo-spec-value">Flutter</span>
          </div>
          <div className="pomo-spec-card">
            <span className="pomo-spec-label">Language</span>
            <span className="pomo-spec-value">Dart</span>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pomo-section pomo-cta-section">
        <p className="pomo-cta-label">Try it</p>
        <a href="/pomo" className="pomo-cta-link" target="_blank" rel="noopener noreferrer">
          annu.me/pomo →
        </a>
        <p className="pomo-cta-note">
          Runs in the browser. No install required — bookmark it and it's yours.
        </p>
      </section>
    </div>
  );
}
