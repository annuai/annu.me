import React from 'react';
import './fwd.css';

export const metadata = {
  id: '7',
  slug: 'fwd',
  title: 'Omne by FWD',
  category: 'UI/UX Design',
  tags: ['UX Design', 'Visual Design', 'Super App', 'Localization'],
  year: '2024',
  thumbnail: '/projects/fwd/omnebyfwd.svg',
  description:
    'UX, visual design, and feature work on a super app for FWD Insurance — spanning homescreen design, mini-games, applets, localization, and Jira-driven daily product execution.',
  excerpt:
    'UX and product design work on a super app — homescreen overhaul, mini-games, applets, and localization across 7 languages.',
};

const CONTRIBUTIONS = [
  {
    num: '01',
    title: 'Jira-driven execution',
    summary: 'Day-to-day product design work driven by sprint tickets and product requirements.',
    points: [
      'Translated Jira tickets into UX and UI deliverables on short cycles',
      'Worked closely with PMs and developers to scope and break down requirements',
      'Maintained design velocity across concurrent feature tracks',
      'Iterated rapidly on feedback within tight sprint windows',
    ],
  },
  {
    num: '02',
    title: 'Mini-games & applets',
    summary: 'Designed and supported development of interactive mini-games and lightweight applets within the super app.',
    points: [
      'Designed UX flows and interaction states for mini-game experiences',
      'Created UI for standalone applets integrated into the main app shell',
      'Worked through edge cases: loading states, error handling, empty states',
      'Collaborated with developers on feasibility and interaction constraints',
    ],
  },
  {
    num: '03',
    title: 'Homescreen overhaul',
    summary: 'Contributed to a significant redesign of the app homescreen.',
    points: [
      'Helped redesign the primary homescreen layout and information hierarchy',
      'Worked on widget and module placement to improve discoverability',
      'Explored multiple layout directions before converging on a final approach',
      'Ensured homescreen design accommodated localization and content variability',
    ],
  },
  {
    num: '04',
    title: 'Localization — 7 languages',
    summary: 'Supported design localization across seven languages for the super app.',
    points: [
      'Adapted UI layouts to accommodate varying text lengths and RTL needs',
      'Worked through type scaling and spacing across language variants',
      'Flagged and resolved layout breakage caused by string expansion',
      'Collaborated with localization team to align on font and rendering choices',
    ],
  },
  {
    num: '05',
    title: 'UX wireframing',
    summary: 'Created wireframes for interactive features and flows across multiple product areas.',
    points: [
      'Produced low and mid-fidelity wireframes for feature exploration',
      'Mapped user flows for interactive experiences within the app',
      'Used wireframes to align stakeholders before moving to visual design',
      'Helped identify edge cases and exception states early in the design cycle',
    ],
  },
  {
    num: '06',
    title: 'Visual design contributions',
    summary: 'Light visual design work on UI components, states, and small design system elements.',
    points: [
      'Designed and refined UI components for use across the app',
      'Worked on interaction states: default, active, disabled, loading',
      'Contributed to visual consistency across feature areas',
      'Helped adapt visual direction to new product contexts as they arose',
    ],
  },
];

const FOCUS_AREAS = [
  {
    label: 'Designing for content variability',
    body: 'Localization across seven languages meant that no layout could be treated as fixed. A label that fits on one line in English can be three lines in another language. Designing with that constraint from the start — building layouts that flex, truncate gracefully, or reflow — was a constant discipline throughout the project.',
  },
  {
    label: 'Speed without losing craft',
    body: 'Jira-driven product work moves fast. The challenge is maintaining quality when the cadence is relentless. The approach that worked: front-load edge cases in wireframes so visual design cycles are cleaner, and establish component patterns early so individual screens take less time to produce.',
  },
  {
    label: 'Mini-games as product surfaces',
    body: 'Mini-games inside a super app occupy an unusual design space — they need to feel fun and self-contained, but they also need to integrate cleanly with the app shell, respect the broader visual language, and handle all the same error and loading states as any other feature. Treating them as product surfaces rather than side features shaped how the UX was approached.',
  },
];

export default function FWD() {
  return (
    <div className="fw-case-study">

      {/* ── Header ── */}
      <section className="fw-header">
        <div className="fw-header-left">
          <span className="fw-eyebrow">UI/UX Design · Super App · 2024 · Confidential</span>
          <h1 className="fw-title">OMNE Super App</h1>
          <p className="fw-lead">
            Product design work on a super app for a large insurance company in Asia — spanning
            homescreen redesign, mini-games, lightweight applets, interactive feature UX, and
            localization across seven languages. Work was execution-focused, Jira-driven, and
            fast-paced across multiple concurrent feature tracks.
          </p>
        </div>
        <div className="fw-header-meta">
          <div className="fw-meta-item">
            <span className="fw-meta-label">Company</span>
            <span className="fw-meta-val">FWD Group</span>
          </div>
          <div className="fw-meta-item">
            <span className="fw-meta-label">Product</span>
            <span className="fw-meta-val">OMNE Super App</span>
          </div>
          <div className="fw-meta-item">
            <span className="fw-meta-label">Year</span>
            <span className="fw-meta-val">2024</span>
          </div>
          <div className="fw-meta-item">
            <span className="fw-meta-label">My Role</span>
            <span className="fw-meta-val">UX Designer · Visual Design · Feature Design</span>
          </div>
          <div className="fw-meta-item">
            <span className="fw-meta-label">Scope</span>
            <span className="fw-meta-val">Homescreen · Mini-games · Applets · Localization</span>
          </div>
          <div className="fw-meta-item">
            <span className="fw-meta-label">Status</span>
            <span className="fw-meta-val fw-meta-nda">Confidential · NDA applies</span>
          </div>
        </div>
      </section>

      {/* ── Context ── */}
      <section className="fw-section">
        <div className="fw-context-grid">
          <div className="fw-context-block">
            <span className="fw-context-label">The product</span>
            <p>
              OMNE is a super app built for FWD Group, a large insurance company operating across
              Asia. The app consolidates insurance, wellness, financial services, and lifestyle
              features into a single platform — with mini-games and applets adding engagement and
              utility alongside the core product.
            </p>
          </div>
          <div className="fw-context-block">
            <span className="fw-context-label">My position</span>
            <p>
              I joined an ongoing product team and worked across multiple feature tracks in parallel.
              The work was primarily execution — translating product requirements and Jira tickets
              into UX wireframes, UI designs, and interaction specs, within an established design
              system and sprint cadence.
            </p>
          </div>
          <div className="fw-context-block">
            <span className="fw-context-label">What I didn&apos;t own</span>
            <p>
              Product strategy, research direction, and overall design system architecture were
              defined before and around my involvement. My work contributed to existing feature
              tracks rather than setting new direction.
            </p>
          </div>
        </div>
      </section>

      {/* ── Scope at a glance ── */}
      <section className="fw-section">
        <h2 className="fw-section-title">Scope at a glance</h2>
        <div className="fw-scope-grid">
          {[
            { area: 'Homescreen', detail: 'Layout redesign · Information hierarchy · Widget placement' },
            { area: 'Mini-games', detail: 'UX flows · Interaction states · Edge cases' },
            { area: 'Applets', detail: 'Lightweight in-app features · Shell integration' },
            { area: 'Localization', detail: '7 languages · Layout adaptation · Text variability' },
            { area: 'Wireframing', detail: 'Low–mid fidelity · Flow mapping · Stakeholder alignment' },
            { area: 'Visual design', detail: 'UI components · Interaction states · Consistency' },
          ].map((s) => (
            <div className="fw-scope-item" key={s.area}>
              <span className="fw-scope-area">{s.area}</span>
              <span className="fw-scope-detail">{s.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contributions ── */}
      <section className="fw-section">
        <h2 className="fw-section-title">What I worked on</h2>
        <div className="fw-contributions">
          {CONTRIBUTIONS.map((c) => (
            <div className="fw-contribution" key={c.num}>
              <div className="fw-contribution-header">
                <span className="fw-contribution-num">{c.num}</span>
                <div>
                  <h3 className="fw-contribution-title">{c.title}</h3>
                  <p className="fw-contribution-summary">{c.summary}</p>
                </div>
              </div>
              <ul className="fw-contribution-list">
                {c.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Flow sample ── */}
      <section className="fw-section">
        <h2 className="fw-section-title">A sample flow</h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.97rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: '680px' }}>
          One of the flows worked on during the project — a memory game applet designed for
          engagement within the super app. Shared here as a representative example of the
          kind of UX wireframing and interaction design work done across the engagement.
        </p>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
          <img
            src="/projects/fwd/Flow-Memory-Game-03-06-2024.jpg"
            alt="Memory game flow — OMNE by FWD"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      {/* ── Localization callout ── */}
      <section className="fw-section">
        <div className="fw-localization-block">
          <div className="fw-localization-left">
            <span className="fw-context-label">Localization</span>
            <h3 className="fw-localization-heading">Seven languages. One layout system.</h3>
            <p>
              Adapting a super app across seven languages requires more than swapping strings. Text
              length varies significantly — what fits in two words in English may take eight in
              another language. The design had to account for that from the start: flexible
              containers, guarded minimum sizes, ellipsis rules, and layout modes that reflow
              gracefully under pressure.
            </p>
          </div>
          <div className="fw-lang-grid">
            {['English', 'Thai', 'Vietnamese', 'Indonesian', 'Mandarin', 'Japanese', 'Khmer'].map((lang) => (
              <div className="fw-lang-chip" key={lang}>{lang}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Focus areas ── */}
      <section className="fw-section">
        <h2 className="fw-section-title">Design focus areas</h2>
        <div className="fw-focus-areas">
          {FOCUS_AREAS.map((f, i) => (
            <div className="fw-focus-card" key={i}>
              <span className="fw-focus-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="fw-focus-body">
                <h3 className="fw-focus-label">{f.label}</h3>
                <p>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="fw-section">
        <div className="fw-outcome-block">
          <div className="fw-outcome-label-row">
            <span className="fw-nda-badge">NDA</span>
            <span className="fw-outcome-heading">Outcome & Disclosure</span>
          </div>
          <p>
            This work is subject to a confidentiality agreement. Screens, flows, and product
            details cannot be shared publicly. The product is a live app operating across multiple
            Asian markets. My contributions were part of ongoing product development rather than a
            standalone engagement.
          </p>
          <p>
            No metrics or business outcomes are shared here — both because of the NDA and because
            my role was execution within a larger team, not ownership of any single result.
          </p>
        </div>
      </section>

      {/* ── Request access ── */}
      <section className="fw-section">
        <div className="fw-request-block">
          <div>
            <h3 className="fw-request-heading">Want to see the actual screens?</h3>
            <p className="fw-request-body">
              The full case study — wireframes, UI screens, and flow documentation — is available
              on request. Send me an email and I'll share what I can under NDA.
            </p>
          </div>
          <a
            href="mailto:hi.annuai@gmail.com?subject=Request: OMNE super app case study screens&body=Hi Annuai, I'd like to see more details about your FWD OMNE super app project."
            className="fw-request-btn"
          >
            Request details →
          </a>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="fw-section">
        <blockquote className="fw-blockquote">
          <p>
            Working on a super app at this scale taught me what it actually means to design for
            diversity — not just across personas, but across languages, screen densities, and
            cultural expectations. The pace was relentless, which forced a kind of discipline:
            make component decisions well the first time, because you won&apos;t have time to fix
            them across seven languages later. It also reinforced something I keep coming back to —
            good execution is not the absence of creativity. It is creativity directed at the
            right problems.
          </p>
        </blockquote>
      </section>

    </div>
  );
}
