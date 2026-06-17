import React from 'react';
import './maruti.css';

export const metadata = {
  id: '6',
  slug: 'maruti',
  title: 'Maruti Suzuki App',
  category: 'UI/UX Design',
  tags: ['UX Design', 'Visual Design', 'Design Systems', 'Automotive'],
  year: '2024',
  thumbnail: '/projects/maruti/maruti.svg',
  description:
    'UX, visual design, and component work on a confidential automotive super app — done at frog in 2024.',
  excerpt:
    'UX, visual design, and component work on a confidential automotive super app — done at frog in 2024.',
};

const CONTRIBUTIONS = [
  {
    num: '01',
    title: 'Accessories UX',
    summary: 'Led UX design for the accessories experience within a small pod.',
    points: [
      'Wireframes for browsing, product detail, and purchase flows',
      'Interaction patterns for variant selection — especially color and configuration',
      'Focused on decision clarity in choice-heavy screens',
      'Reduced cognitive load across accessory selection flows',
    ],
  },
  {
    num: '02',
    title: 'Pod Coordination',
    summary: 'Coordinated UX output within the accessories team.',
    points: [
      'Helped break down flows into structured wireframe deliverables',
      'Reviewed and aligned design output across the pod',
      'Ensured screen-level consistency across the accessories journey',
      'Facilitated handoff-ready documentation for the broader team',
    ],
  },
  {
    num: '03',
    title: 'Visual Design System',
    summary: 'Contributed to the early visual design system for the super app.',
    points: [
      'Helped define reusable UI components: cards, selection controls, layout modules',
      'Translated visual direction into structured, scalable UI patterns',
      'Ensured visual consistency across multiple areas of the app',
      'Worked within and extended the emerging design language',
    ],
  },
  {
    num: '04',
    title: 'Component Design',
    summary: 'Designed individual UI components for high-variation scenarios.',
    points: [
      'Product cards, variant selectors, and selection states',
      'Designed for clarity when options are numerous (accessory colors, trims)',
      'Maintained visual consistency with the broader system',
      'Iterated on interaction states: default, selected, disabled',
    ],
  },
];

const FOCUS_AREAS = [
  {
    label: 'Decision clarity in variant-heavy flows',
    body: "Accessories are choice-dense. A single product might have a dozen color options, multiple fitment variants, and compatibility constraints — all of which need to surface clearly without overwhelming the user. Most of the design work here wasn't about adding more information. It was about deciding what to show first, what to hide behind a tap, and how to signal that a choice has been made.",
  },
  {
    label: 'Component thinking before screen thinking',
    body: 'At frog, the approach was to define components before layouts. A well-defined product card or variant selector travels across many screens — browse, search, cart, recommendations. Getting those atoms right meant the screens that used them could be assembled quickly and confidently. This thinking shaped how I approached every new UI element in the project.',
  },
  {
    label: 'Working within a research-led brief',
    body: 'The product strategy and user research were provided by an external partner. My role was translating that foundation into design — not starting from scratch, but from structure. That constraint pushed me toward execution quality: if the what was defined, the work was making the how as clear, usable, and systematic as possible.',
  },
];

export default function Maruti() {
  return (
    <div className="mr-case-study">

      {/* ── Header ── */}
      <section className="mr-header">
        <div className="mr-header-left">
          <span className="mr-eyebrow">UI/UX Design · frog · 2024 · Confidential</span>
          <h1 className="mr-title">Maruti Suzuki App</h1>
          <p className="mr-lead">
            UX design, visual design, and component work on a large-scale automotive super app.
            Delivered as part of a multi-disciplinary team at frog, working on a product that
            consolidated vehicle management, accessories, services, and connectivity into a single
            experience.
          </p>
        </div>
        <div className="mr-header-meta">
          <div className="mr-meta-item">
            <span className="mr-meta-label">Studio</span>
            <span className="mr-meta-val">frog</span>
          </div>
          <div className="mr-meta-item">
            <span className="mr-meta-label">Year</span>
            <span className="mr-meta-val">2024</span>
          </div>
          <div className="mr-meta-item">
            <span className="mr-meta-label">My Role</span>
            <span className="mr-meta-val">UX Designer · Visual Design · Component Design</span>
          </div>
          <div className="mr-meta-item">
            <span className="mr-meta-label">Team</span>
            <span className="mr-meta-val">Multi-pod · Cross-functional</span>
          </div>
          <div className="mr-meta-item">
            <span className="mr-meta-label">Status</span>
            <span className="mr-meta-val mr-meta-nda">Under NDA · Not publicly released</span>
          </div>
        </div>
      </section>

      {/* ── Context ── */}
      <section className="mr-section">
        <div className="mr-context-grid">
          <div className="mr-context-block">
            <span className="mr-context-label">What it was</span>
            <p>
              A super app for an Indian automotive brand — intended to be the primary digital
              touchpoint between the vehicle, its owner, and the broader ecosystem of services,
              accessories, and connectivity features around it. The scope covered vehicle management,
              connected car features, an accessories store, and service booking.
            </p>
          </div>
          <div className="mr-context-block">
            <span className="mr-context-label">How I came in</span>
            <p>
              I worked on this project at frog as a designer focused on the accessories experience.
              Product strategy and user research had been conducted by an external partner before I
              joined. My work was execution — UX design, visual design, and component-level
              thinking within a structured brief and an emerging design system.
            </p>
          </div>
          <div className="mr-context-block">
            <span className="mr-context-label">What I didn't do</span>
            <p>
              I did not conduct user research, define product strategy, or set the direction for the
              broader app. Those decisions were upstream. I worked with what existed, contributed
              where I was asked, and tried to add clarity and craft at the execution layer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contributions ── */}
      <section className="mr-section">
        <h2 className="mr-section-title">What I worked on</h2>
        <div className="mr-contributions">
          {CONTRIBUTIONS.map((c) => (
            <div className="mr-contribution" key={c.num}>
              <div className="mr-contribution-header">
                <span className="mr-contribution-num">{c.num}</span>
                <div>
                  <h3 className="mr-contribution-title">{c.title}</h3>
                  <p className="mr-contribution-summary">{c.summary}</p>
                </div>
              </div>
              <ul className="mr-contribution-list">
                {c.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Flow representation ── */}
      <section className="mr-section">
        <h2 className="mr-section-title">Accessories flow — structure</h2>
        <p className="mr-flow-intro">
          The accessories experience covered three primary surfaces. Each screen had to balance
          discoverability with specificity — a wide catalogue that narrows to a single, configured
          choice.
        </p>
        <div className="mr-flow">
          <div className="mr-flow-step">
            <span className="mr-flow-num">01</span>
            <div className="mr-flow-content">
              <h4>Browse</h4>
              <p>Category navigation, filters, surface-level product cards. Primary challenge: reducing the visual noise of a large catalogue into something scannable.</p>
            </div>
          </div>
          <div className="mr-flow-arrow">→</div>
          <div className="mr-flow-step">
            <span className="mr-flow-num">02</span>
            <div className="mr-flow-content">
              <h4>Product Detail</h4>
              <p>Variant selection, configuration, compatibility. Primary challenge: making complex option sets feel manageable without hiding important information.</p>
            </div>
          </div>
          <div className="mr-flow-arrow">→</div>
          <div className="mr-flow-step">
            <span className="mr-flow-num">03</span>
            <div className="mr-flow-content">
              <h4>Purchase</h4>
              <p>Cart, confirmation, and fitment details. Primary challenge: maintaining confidence at the point of commitment — especially for high-value accessories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus areas ── */}
      <section className="mr-section">
        <h2 className="mr-section-title">Design focus areas</h2>
        <div className="mr-focus-areas">
          {FOCUS_AREAS.map((f, i) => (
            <div className="mr-focus-card" key={i}>
              <span className="mr-focus-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mr-focus-label">{f.label}</h3>
              <p className="mr-focus-body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Component thinking ── */}
      <section className="mr-section mr-components-section">
        <h2 className="mr-section-title">Component-level design</h2>
        <div className="mr-components-grid">
          {[
            { name: 'Product Card', detail: 'Thumbnail · Name · Price · Quick-add', note: 'Designed for browse and search grids. Handles long names, sale states, and OEM badge variants.' },
            { name: 'Variant Selector', detail: 'Color swatches · Trim options · State management', note: 'Selected, unselected, disabled, and out-of-stock states. Swatch sizing calibrated for touch.' },
            { name: 'Selection Summary', detail: 'Chosen config · Edit trigger · Price update', note: "Persistent confirmation of the user's current configuration before add-to-cart." },
            { name: 'Fitment Indicator', detail: 'Compatibility · Vehicle match · Warning states', note: 'Inline component that surfaces compatibility status without interrupting the browse flow.' },
            { name: 'Layout Module', detail: 'Grid · List · Featured row', note: 'Flexible container for accessories browsing. Adapts between dense grid and editorial list views.' },
            { name: 'CTA Block', detail: 'Primary action · Secondary action · Disabled state', note: 'Reusable action area used at the base of product detail and cart screens.' },
          ].map((c) => (
            <div className="mr-component-card" key={c.name}>
              <h4 className="mr-component-name">{c.name}</h4>
              <span className="mr-component-detail">{c.detail}</span>
              <p className="mr-component-note">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Live app ── */}
      <section className="mr-section">
        <div className="mr-live-block">
          <div className="mr-live-dot" />
          <div>
            <p className="mr-live-label">The app is now live</p>
            <p className="mr-live-body">
              The product has since launched publicly on the Google Play Store.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.maruti.icp&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-live-link"
            >
              View on Google Play →
            </a>
          </div>
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="mr-section">
        <div className="mr-outcome-block">
          <div className="mr-outcome-label-row">
            <span className="mr-nda-badge">NDA</span>
            <span className="mr-outcome-heading">Outcome & Disclosure</span>
          </div>
          <p>
            This project was completed at frog in 2024 and is covered by a non-disclosure
            agreement. Screens, flows, and client details cannot be shared publicly. What I can say
            is that the work was delivered as part of a larger engagement, went through multiple
            rounds of design review, and contributed to a design system that was handed off to the
            client's internal team.
          </p>
          <p>
            The product had not been publicly released as of the time I left the project.
          </p>
        </div>
      </section>

      {/* ── Request access ── */}
      <section className="mr-section">
        <div className="mr-request-block">
          <div>
            <h3 className="mr-request-heading">Want to see the actual screens?</h3>
            <p className="mr-request-body">
              The full case study — wireframes, UI screens, and flow documentation — is available
              on request. Send me an email and I'll share what I can under NDA.
            </p>
          </div>
          <a
            href="mailto:hi.annuai@gmail.com?subject=Request: Maruti Suzuki App case study screens&body=Hi Annuai, I'd like to see more details about your Maruti Suzuki App project."
            className="mr-request-btn"
          >
            Request details →
          </a>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="mr-section">
        <blockquote className="mr-blockquote">
          <p>
            Working within a structured, research-led brief taught me something I hadn't fully
            appreciated before: execution is its own kind of creative problem. When the what is
            defined, the work shifts entirely to the how — and that's where most design decisions
            actually live. Every component, every selection state, every piece of microcopy is a
            small judgment call about what matters and what doesn't. Getting that consistently right,
            across a large product surface, with a team — that's the craft.
          </p>
        </blockquote>
      </section>

    </div>
  );
}
