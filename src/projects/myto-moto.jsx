import React from 'react';
import './myto-moto.css';

export const metadata = {
  id: '9',
  slug: 'myto-moto',
  title: 'myto-moto',
  category: 'Product Design',
  tags: ['Product Design', 'Industrial Design', 'Brand', 'Self-initiated'],
  gridSize: 'wide',
  year: '2025',
  thumbnail: '/projects/myto-moto/trail-beam-render.png',
  description:
    'A self-initiated motorcycle accessories brand built around one idea: self-reliance in difficult environments. Three products in development — myto navi, Trail Beam, and Trail Kit.',
  excerpt:
    'A self-initiated motorcycle accessories brand built around one idea: self-reliance in difficult environments.',
};

const PRODUCTS = [
  {
    num: '01',
    id: 'navigator',
    name: 'myto navi',
    tagline: 'The interface for the journey',
    placeholder: 'Navigator render coming soon',
    images: ['/projects/myto-moto/navi-render-1.png', '/projects/myto-moto/navi-render-2.png', '/projects/myto-moto/navigator.png'],
    imageLayout: 'side-by-side',
    body: [
      "The project didn't start as a navigation device. It started as a phone holder.",
      'Modern riders depend on smartphones for navigation, communication, weather updates, fuel planning, music, emergency contacts, and ride tracking. Yet smartphones are fundamentally designed for everyday environments, not remote mountain roads.',
      'Rain makes touchscreens unreliable. Snow makes interaction difficult. Gloves make precision impossible. Vibration damages camera systems. Bright sunlight affects visibility.',
      'Trying to solve all of those problems with a better case felt like the wrong approach. Eventually the brief changed — instead of asking how to protect a phone, the question became: how do we eliminate the need to interact with it entirely?',
    ],
    specs: [
      { label: 'Primary Control', value: 'Large rotary dial, left-side' },
      { label: 'Interaction', value: 'Glove-friendly physical controls' },
      { label: 'Display', value: 'Navigation, fuel, weather, calls' },
      { label: 'Phone', value: 'Stays in pocket or luggage' },
    ],
    detail:
      'The myto navi is a dedicated motorcycle command center. The phone remains protected inside a jacket or waterproof storage. The rider never needs to remove it. Instead, the navi becomes the interface — compact, rugged, weatherproof, designed specifically around gloved interaction. Every control is physical. The screen exists only to present information that matters while riding. Nothing more.',
  },
  {
    num: '02',
    id: 'trail-beam',
    name: 'Trail Beam',
    tagline: 'The lamp that goes where you go',
    placeholder: 'Trail Beam render coming soon',
    images: ['/projects/myto-moto/trail-beam-render.png', '/projects/myto-moto/trail-beam.png',],
    body: [
      'The second product emerged from memories of riding through darkness.',
      'One of the strongest memories from Ladakh isn\'t a destination. It\'s the experience of riding at night with only a small cone of light illuminating the road ahead. In those moments, a fog lamp stops being an accessory. It becomes a safety device.',
      'But the Trail Beam was designed around another observation: whenever motorcycles break down at night, riders often end up using their phone flashlight as a work light. The fog lamp already contains a battery, optics, a mounting system, and an illumination source. Why shouldn\'t it become a work light as well?',
    ],
    specs: [
      { label: 'Primary Use', value: 'Auxiliary fog lamp' },
      { label: 'Secondary Use', value: 'Portable work light' },
      { label: 'Removal', value: 'Detaches from mount in seconds' },
      { label: 'Housing', value: 'Sealed aluminium' },
    ],
    detail:
      'The Trail Beam is a dual-purpose lighting system. Mounted on the motorcycle, it functions as a traditional auxiliary lamp. When needed, it can be removed from its mount within seconds and used as a portable work light for roadside repairs, campsite setup, or emergency situations. A convex lens sheds water and snow. A protective visor prevents accumulation. Every design decision serves a purpose — because products intended for difficult environments cannot afford decorative complexity.',
  },
  {
    num: '03',
    id: 'trail-kit',
    name: 'Trail Kit',
    tagline: 'The tools that get you moving again',
    placeholder: 'Trail Kit render coming soon',
    images: ['/projects/myto-moto/trail-kit.png'],
    body: [
      'The third product is perhaps the simplest. And possibly the most important.',
      'Every experienced rider eventually learns the same lesson: things will go wrong. Bolts loosen. Tyres puncture. Cables fail. Mounts break. The question is not whether problems will occur. The question is whether you\'re prepared when they do.',
      'The Trail Kit was designed around this philosophy — not as a toolbox, but as a survival kit for motorcycle travel.',
    ],
    specs: [
      { label: 'Design Priority', value: 'Speed and accessibility' },
      { label: 'Glove Operation', value: 'Openable with gloves on' },
      { label: 'Materials', value: 'Weather-resistant throughout' },
      { label: 'Contents', value: 'Repairs riders actually perform' },
    ],
    detail:
      'Every component inside earns its place through utility. The organisation system prioritises speed and accessibility over capacity. The enclosure is designed to be opened while wearing gloves. Materials are selected for weather resistance. Storage is designed around the repairs riders actually perform during a journey — not the repairs they imagine themselves performing. The goal isn\'t carrying every tool. The goal is carrying the right tools. The tools that get you moving again.',
  },
];

const REALISATION_ITEMS = [
  {
    title: 'The products we carried weren\'t accessories',
    body: 'They were tools. The fog lamps that allowed us to continue riding after dark. The navigation system that prevented us from getting lost. The tools that solved problems when things went wrong. That equipment wasn\'t exciting. It was dependable.',
  },
  {
    title: 'Dependability has a different value in difficult places',
    body: 'When you\'re at home, most problems are minutes away from a solution. The further you travel from familiar environments, the more responsibility shifts back onto you. A loose bolt becomes your problem. A puncture becomes your problem. Navigation becomes your problem.',
  },
  {
    title: 'Most motorcycle products are designed for the driveway',
    body: 'Performance. Styling. Technology for its own sake. Very few products are designed around what actually happens when you\'re 400km from the nearest city on a broken road at dusk. That gap is where myto-moto lives.',
  },
  {
    title: 'The most important equipment is the one you forget about',
    body: 'Until the moment you need it. Good equipment becomes invisible. It doesn\'t demand attention. It simply works — in rain, snow, vibration, dust, darkness, and uncertainty.',
  },
];

export default function MytoMoto() {
  return (
    <div className="mm-case-study">

      {/* ── Hero ── */}
      {/* <div className="mm-hero">
        <img src="/projects/myto-moto/all.png" alt="myto-moto — Navigator, Trail Beam, Trail Kit" />
      </div> */}

      {/* ── Intro ── */}
      <section className="mm-intro-section">
        <div className="mm-intro-grid">
          <div className="mm-intro-left">
            <span className="mm-category">Product Design · Self-initiated Brand · 2025 — ongoing</span>
            <h1 className="mm-title">myto-moto</h1>
            <p className="mm-lead">
              A motorcycle accessories brand built around a single idea — self-reliance in difficult
              environments. Three products in development. All of them tools, not accessories.
            </p>
            <p className="mm-subtext">
              This project began after a fourteen-day ride through Ladakh with three friends. It
              became less about designing products and more about understanding what it actually
              means to be prepared when things go wrong far from help.
            </p>
          </div>

          <div className="mm-meta-box">
            <div className="mm-meta-row">
              <span className="mm-meta-label">Category</span>
              <span className="mm-meta-val">Product Design · Brand</span>
            </div>
            <div className="mm-meta-row">
              <span className="mm-meta-label">Year</span>
              <span className="mm-meta-val">2025 — ongoing</span>
            </div>
            <div className="mm-meta-row">
              <span className="mm-meta-label">Type</span>
              <span className="mm-meta-val">Self-initiated</span>
            </div>
            <div className="mm-meta-row">
              <span className="mm-meta-label">Skills</span>
              <div className="mm-tags">
                {['Product Design', 'Industrial Design', 'Systems Thinking', 'Brand Identity'].map((t) => (
                  <span key={t} className="mm-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="mm-meta-row mm-meta-status">
              <span className="mm-meta-label">Status</span>
              <div className="mm-status-badge">
                <span className="mm-status-dot" />
                Products in development
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="mm-section">
        <div className="mm-section-header">
          <span className="mm-section-num">00</span>
          <h2 className="mm-section-title">Self-reliance in difficult environments</h2>
        </div>

        <blockquote className="mm-blockquote">
          <p>
            "The further you travel from familiar environments, the more responsibility shifts back
            onto you. Adventure riding removes the assumption that help is always available."
          </p>
        </blockquote>

        <div className="mm-philosophy-body">
          <p>
            Two years ago, I rode to Ladakh with three friends. At the time, it felt like a
            motorcycle trip. Looking back, it was an education in self-reliance.
          </p>
          <p>
            When you're at home, most problems are a few minutes away from a solution. A workshop
            is nearby. A fuel station is nearby. A charger is nearby. The further you travel from
            familiar environments, the more that changes.
          </p>
          <p>
            That realization stayed with me long after the trip ended. It eventually became the
            foundation for myto-moto — not performance, not styling, not technology for its own sake.
            Self-reliance. Products that help riders remain capable when environments become
            challenging. Products that reduce dependence on perfect conditions. Products that
            continue working in rain, snow, vibration, dust, darkness, and uncertainty.
          </p>
        </div>

        <div className="mm-realisation-grid">
          {REALISATION_ITEMS.map((item, i) => (
            <div className="mm-realisation-card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Origin ── */}
      <section className="mm-section">
        <div className="mm-section-header">
          <span className="mm-section-num">01</span>
          <h2 className="mm-section-title">The Origin — Ladakh, 14 days</h2>
        </div>

        <div className="mm-origin-grid">
          <div className="mm-origin-text">
            <p>
              Broken motorcycles. Empty fuel tanks. Freezing temperatures. Dark roads. Uncertainty.
              And the realization that good equipment becomes invisible until the moment you need it.
            </p>
            <p>
              The journey wasn't particularly planned. None of us had ridden at altitude before. The
              roads were worse than anything we'd trained for, the weather unpredictable, and the
              distances between any kind of help were real. We made it through, but not without cost.
            </p>
            <p>
              When I came home and thought about what to design next, I kept returning to the same
              question: why does almost every motorcycle product optimize for performance and
              appearance, when what riders actually need in difficult places is something much
              simpler?
            </p>
            <p className="mm-origin-bold">
              Tools that work. Tools that are reliable. Tools that make you less dependent on
              everything going right.
            </p>
          </div>
          <div className="mm-origin-stats">
            <div className="mm-stat">
              <span className="mm-stat-value">14</span>
              <span className="mm-stat-label">days on the road</span>
            </div>
            <div className="mm-stat">
              <span className="mm-stat-value">4</span>
              <span className="mm-stat-label">riders</span>
            </div>
            <div className="mm-stat">
              <span className="mm-stat-value">3</span>
              <span className="mm-stat-label">products in development</span>
            </div>
            <div className="mm-stat">
              <span className="mm-stat-value">1</span>
              <span className="mm-stat-label">philosophy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      {PRODUCTS.map((product) => (
        <section className="mm-section" key={product.id}>
          <div className="mm-section-header">
            <span className="mm-section-num">{product.num}</span>
            <h2 className="mm-section-title">{product.name}</h2>
          </div>

          <p className="mm-product-tagline">{product.tagline}</p>

          {/* Product image(s) or placeholder */}
          {product.images?.length > 0 ? (
            <div className="mm-render-stack">
              {product.imageLayout === 'side-by-side' ? (
                <>
                  <div className="mm-render-side-by-side">
                    {product.images.slice(0, 2).map((src) => (
                      <img key={src} src={src} alt={product.name} />
                    ))}
                  </div>
                  {product.images.slice(2).map((src) => (
                    <img key={src} src={src} alt={product.name} className="mm-render-full" />
                  ))}
                </>
              ) : (
                product.images.map((src) => (
                  <img key={src} src={src} alt={product.name} className="mm-render-full" />
                ))
              )}
            </div>
          ) : (
            <div className="mm-render-placeholder">
              <span className="mm-placeholder-label">{product.placeholder}</span>
            </div>
          )}

          <div className="mm-product-body">
            <div className="mm-product-text">
              {product.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mm-product-aside">
              <div className="mm-product-specs">
                {product.specs.map((s) => (
                  <div className="mm-spec-row" key={s.label}>
                    <span className="mm-spec-label">{s.label}</span>
                    <span className="mm-spec-val">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mm-product-detail">
            <p>{product.detail}</p>
          </div>
        </section>
      ))}

      {/* ── System ── */}
      <section className="mm-section">
        <div className="mm-section-header">
          <span className="mm-section-num">04</span>
          <h2 className="mm-section-title">A common philosophy</h2>
        </div>

        <div className="mm-system-card">
          <div className="mm-system-item">
            <span className="mm-system-num">01</span>
            <h4>myto navi</h4>
            <p>Helps riders stay informed</p>
          </div>
          <div className="mm-system-divider" />
          <div className="mm-system-item">
            <span className="mm-system-num">02</span>
            <h4>Trail Beam</h4>
            <p>Helps riders see and be seen</p>
          </div>
          <div className="mm-system-divider" />
          <div className="mm-system-item">
            <span className="mm-system-num">03</span>
            <h4>Trail Kit</h4>
            <p>Helps riders recover when things go wrong</p>
          </div>
        </div>

        <div className="mm-closing">
          <p>
            Viewed individually, these products solve different problems. But they all emerged from
            the same experience — and they all carry the same belief: adventure isn't about avoiding
            uncertainty. It's about being prepared for it.
          </p>
          <p>
            myto-moto is not trying to build accessories, gadgets, or lifestyle products. It is
            trying to build tools for the journeys that people remember years later.
          </p>
        </div>
      </section>

      {/* ── Website link ── */}
      <section className="mm-section">
        <div className="mm-website-block">
          <p className="mm-website-label">Website</p>
          <a href="https://myto-moto.com" className="mm-website-link" target="_blank" rel="noopener noreferrer">
            myto-moto.com →
          </a>
        </div>
      </section>

      {/* ── Ongoing banner ── */}
      <div className="mm-ongoing-banner">
        <div className="mm-ongoing-dot" />
        <div>
          <p className="mm-ongoing-title">This project is ongoing</p>
          <p className="mm-ongoing-sub">
            All three products are currently in active development. Renders, prototypes, and
            detailed documentation will be added as they progress.
          </p>
        </div>
      </div>

    </div>
  );
}
