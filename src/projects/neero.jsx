import React from 'react';
import './neero.css';

export const metadata = {
  id: '10',
  slug: 'neero',
  title: 'Neero',
  category: 'Product Design',
  tags: ['Industrial Design', 'Product Architecture', 'Field Research', 'Systems Thinking'],
  gridSize: 'standard',
  year: '2023',
  thumbnail: '/projects/neero/neero-frog.png',
  description:
    'A frog India initiative to improve access to clean drinking water for lower-income urban households — through field research, water quality testing, and a modular purification system architecture.',
  excerpt:
    'A frog India initiative exploring affordable, modular water purification for urban households in India.',
};

const INSIGHTS = [
  {
    num: '01',
    heading: 'Sensory cues are the only available truth',
    body: 'People rely on sight, smell, touch, and taste to judge water safety — because no other accessible tool exists. Water that looked and smelled clean was often contaminated. This wasn\'t ignorance; it was rational behaviour in the absence of alternatives.',
  },
  {
    num: '02',
    heading: 'Autonomy is a non-negotiable constraint',
    body: 'Most households in the target group are renters who move every 3–5 years. Products requiring wall drilling, professional installation, or expert servicing were effectively non-starters. The solution had to work without expert help — and move with the family.',
  },
  {
    num: '03',
    heading: 'Optimisation governs every purchase',
    body: '"Spend a little every day rather than a lot at once" describes the financial reality of this user group. A solution priced at ₹1,500–2,500 with low, predictable maintenance costs fit the mental model. A high upfront cost — even for a better product — did not.',
  },
  {
    num: '04',
    heading: 'Preparedness for failure is not optional',
    body: 'When normal water supply fails, families seek alternatives — even if it means walking further or paying more — rather than compromise on quality for drinking and cooking. Any solution had to be reliable enough to act as a primary source, not a backup.',
  },
];

const FILTER_STAGES = [
  {
    stage: '01',
    name: 'Sediment Filter',
    role: 'Removes visible suspended particles, clay, sand, and large impurities from incoming water.',
  },
  {
    stage: '02',
    name: 'Ultra Filter (UF Membrane)',
    role: 'Removes bacteria, viruses, and microscopic biological contaminants. Works without electricity — gravity or manual pressure drives flow.',
  },
  {
    stage: '03',
    name: 'Activated Bamboo Charcoal',
    role: 'Removes residual chlorine, odour, and dissolved organic compounds. Also re-mineralises water, improving taste.',
  },
];

const SCENARIOS = [
  {
    num: '01',
    name: 'Countertop + Electricity',
    detail: 'Standard setup for households with consistent power and countertop space. Pump-assisted flow through the filter hub into a clean water tank.',
  },
  {
    num: '02',
    name: 'Wall Mount — Gravity Fed',
    detail: 'For households without reliable electricity. Mounts on a bracket, connects to an overhead tank. Gravity drives water through the filter sequence with no power required.',
  },
  {
    num: '03',
    name: 'Countertop + Manual Pump',
    detail: 'For households without overhead connections or electricity. A manual pump pressurises the input storage, driving water through the filters independently.',
  },
  {
    num: '04',
    name: 'Community Configuration',
    detail: 'Multiple filter hubs arranged in parallel to serve shared community spaces — such as apartment common areas or community water points.',
  },
];

export default function Neero() {
  return (
    <div className="nr-case-study">

      {/* ── Header ── */}
      <section className="nr-header">
        <div className="nr-header-left">
          <span className="nr-eyebrow">Industrial Design · frog India · 2023</span>
          <h1 className="nr-title">Neero</h1>
          <p className="nr-lead">
            A frog India initiative exploring affordable household water purification for
            lower-middle and upper-lower income urban families. The project moved from secondary
            data to field research, water quality laboratory testing, technology mapping, and
            a modular product architecture designed around the real constraints of the people
            it was built for.
          </p>
        </div>
        <div className="nr-header-meta">
          <div className="nr-meta-item">
            <span className="nr-meta-label">Studio</span>
            <span className="nr-meta-val">frog India, Part of Capgemini Invent</span>
          </div>
          <div className="nr-meta-item">
            <span className="nr-meta-label">Year</span>
            <span className="nr-meta-val">2023</span>
          </div>
          <div className="nr-meta-item">
            <span className="nr-meta-label">My Role</span>
            <span className="nr-meta-val">Industrial Designer — Field Research · Water Testing · Product Architecture · Concept Development</span>
          </div>
          <div className="nr-meta-item">
            <span className="nr-meta-label">Team</span>
            <span className="nr-meta-val">Industrial Designers · Design Researchers · Visual Designers · Project Manager · Engineering collaborators</span>
          </div>
          <div className="nr-meta-item">
            <span className="nr-meta-label">Phase coverage</span>
            <span className="nr-meta-val">Immersion → Conceptualisation → Architecture</span>
          </div>
        </div>
      </section>

      {/* ── Project vision ── */}
      <section className="nr-section">
        <blockquote className="nr-blockquote">
          <p>
            "Provide better accessibility to uncontaminated water to the lower-middle and upper-lower
            class population residing in urban areas."
          </p>
          <cite>— Project Vision, Neero · frog India</cite>
        </blockquote>
      </section>

      {/* ── The challenge ── */}
      <section className="nr-section">
        <div className="nr-section-header">
          <span className="nr-section-num">01</span>
          <h2 className="nr-section-title">The Challenge</h2>
        </div>

        <div className="nr-two-col">
          <div>
            <p>
              India holds 18% of the world's population but only 4% of its water resources. According
              to NITI Aayog assessments, nearly 70% of the country's fresh water — surface and
              groundwater — is contaminated. Over 85% of drinking water supplies depend on
              groundwater, and more than 100 million people live in areas with critically poor water
              quality.
            </p>
            <p>
              The problem is unevenly distributed. Upper-income households can access RO purifiers
              and packaged water. Lower-income families often benefit from government subsidies or
              free distribution. The lower-middle and upper-lower classes — roughly 80 million urban
              residents — sit in the gap between. They have enough income to pay for a solution, but
              not enough to absorb the cost of the systems currently designed for wealthier segments.
            </p>
          </div>
          <div>
            <p>
              Municipal piped water — the primary source for 70% of urban households — is not safe
              to drink directly. Bureau of Indian Standards testing across 20 Indian cities found
              significant contamination in municipal supplies. Borewell and groundwater sources, while
              appearing clean, carry arsenic, fluoride, nitrates, and biological contaminants that
              are invisible without laboratory testing.
            </p>
            <p>
              The market response — RO systems — requires permanent installation, produces
              significant water wastage, demands professional servicing, and costs well above what
              this user group can realistically afford. There was a clear gap: no purpose-built,
              affordable, installation-free purification option for this segment.
            </p>
          </div>
        </div>

        <div className="nr-img-pair nr-img-pair--equal-height" style={{ marginBottom: '3rem' }}>
          <img src="/projects/neero/drinking-water.png" alt="Water access context" className="nr-img" style={{ background: '#f4f4f4' }} />
          <img src="/projects/neero/major-water-source.png" alt="Major water sources in India" className="nr-img" style={{ background: '#ffffff' }} />
        </div>

        <div className="nr-stat-row">
          {[
            { value: '70%', label: 'of Indian fresh water is contaminated' },
            { value: '85%', label: 'of drinking water depends on groundwater' },
            { value: '80M', label: 'urban residents in the target income segment' },
            { value: '₹1,500', label: 'target price ceiling for the solution' },
          ].map((s) => (
            <div className="nr-stat" key={s.label}>
              <span className="nr-stat-value">{s.value}</span>
              <span className="nr-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Field research ── */}
      <section className="nr-section">
        <div className="nr-section-header">
          <span className="nr-section-num">02</span>
          <h2 className="nr-section-title">Field Research and Water Testing</h2>
        </div>

        <div className="nr-research-grid">
          <div className="nr-research-block">
            <span className="nr-research-label">In-field interviews</span>
            <p>
              The team conducted in-field user research across five cities — Mumbai, Bangalore,
              Delhi, Chennai, and Kolkata — targeting households in the lower-middle and
              upper-lower income segments. I participated in field visits, conducting interviews
              in homes and communities alongside the research team.
            </p>
            <p>
              The interviews were structured around a detailed discussion guide developed with
              the design research leads. They focused on water sourcing behaviour, storage
              practices, purification habits, perceptions of water safety, and the workarounds
              people had developed when their usual supply was disrupted.
            </p>
          </div>

          <div className="nr-research-block">
            <span className="nr-research-label">Water sample collection and testing</span>
            <p>
              Alongside the interviews, I was involved in collecting water samples from
              visited households for laboratory testing. This was a deliberate attempt to
              close the gap between what people believed about their water and what
              independent testing would reveal.
            </p>
            <p>
              The results — reviewed with the team — were stark. Water that appeared clear,
              tasted acceptable, and smelled clean showed significant E. coli presence, indicating
              risk of typhoid and diarrhoea. TDS and hardness levels exceeded desirable limits.
              Evidence of aluminium treatment was present in samples that had passed through
              municipal systems. The lab results became a foundational input for the product brief:
              any solution needed to address biological contamination as a primary concern, not
              just turbidity or taste.
            </p>
          </div>
        </div>

        <div className="nr-img-pair nr-img-pair--equal-height" style={{ marginBottom: '3rem' }}>
          <img src="/projects/neero/field-visit-observation.png" alt="Field visit observation" className="nr-img" />
          <img src="/projects/neero/research-field-visit.png" alt="Research field visit" className="nr-img" />
        </div>

        <div className="nr-testing-callout">
          <div className="nr-testing-findings">
            <img src="/projects/neero/water-testing.png" alt="Water testing results" className="nr-img nr-img-contained" style={{ marginBottom: '2rem' }} />
            <span className="nr-findings-label">Water testing — key findings</span>
            <div className="nr-findings-grid">
              <div className="nr-finding">
                <h4>E. coli in visually clear water</h4>
                <p>Water that appeared clean and odourless tested positive for E. coli — pathogens responsible for typhoid and diarrhoea. Sensory assessment alone was not a reliable safety indicator.</p>
              </div>
              <div className="nr-finding">
                <h4>TDS and hardness above safe limits</h4>
                <p>Total dissolved solids and hardness readings exceeded BIS desirable limits in multiple samples — consistent with findings from the national BIS survey across 20 Indian cities.</p>
              </div>
              <div className="nr-finding">
                <h4>Aluminium residue from municipal treatment</h4>
                <p>Aluminium concentrations detectable in samples indicated chemical treatment in the municipal supply — effective for turbidity but not sufficient for complete purification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Synthesis ── */}
      <section className="nr-section">
        <div className="nr-section-header">
          <span className="nr-section-num">03</span>
          <h2 className="nr-section-title">Synthesis — Archetypes and Key Insights</h2>
        </div>

        <p className="nr-section-intro">
          The research team led synthesis across all primary and secondary data. Observations were
          clustered into themes, and four behavioural archetypes were developed to represent the
          range of attitudes, motivations, and coping strategies within the target group: Hustlers,
          Day Dreamers, Settlers, and Despairers. Six key insights were drawn from this synthesis.
          The four most relevant to the product design direction are below.
        </p>

        <img src="/projects/neero/behavioral-archetypes.png" alt="Behavioural archetypes" className="nr-img nr-img-contained" style={{ marginBottom: '2.5rem' }} />

        <div className="nr-insights-grid">
          {INSIGHTS.map((insight) => (
            <div className="nr-insight-card" key={insight.num}>
              <span className="nr-insight-num">{insight.num}</span>
              <div>
                <h3 className="nr-insight-heading">{insight.heading}</h3>
                <p className="nr-insight-body">{insight.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Product brief ── */}
      <section className="nr-section">
        <div className="nr-section-header">
          <span className="nr-section-num">04</span>
          <h2 className="nr-section-title">The Design Brief</h2>
        </div>

        <p className="nr-section-intro">
          The research output translated into a clear set of requirements. These were developed
          collaboratively by the full team and guided all subsequent architecture and concept work.
        </p>

        <div className="nr-brief-grid">
          {[
            { type: 'Must have', items: [
              'Purify 20 litres per day — sufficient for a family of 4–6',
              'Footprint no larger than a standard 12-litre bucket',
              'Market price of ₹1,500–2,500',
              'Maintenance required no more than once per month',
              'Fully standalone — no expert required for installation or repair',
              'Operable with or without electricity',
              'Zero or minimal water wastage',
            ]},
            { type: 'Should have', items: [
              'Portable and easy to move between homes',
              'Operable by all household members regardless of age or gender',
              'Child safety considerations',
              'Clear indication of purification status',
            ]},
            { type: 'Could have', items: [
              'Familiar product silhouette for easier adoption',
              'Alerts for filter maintenance',
              'Transparent design to show filtration in progress',
              'Compatible with existing containers and vessels',
            ]},
          ].map(({ type, items }) => (
            <div className="nr-brief-card" key={type}>
              <span className="nr-brief-type">{type}</span>
              <ul className="nr-brief-list">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <img src="/projects/neero/must-have-can-have-good-to-have.png" alt="Design brief — must have, can have, good to have" className="nr-img nr-img-contained" style={{ marginTop: '2.5rem' }} />
      </section>

      {/* ── Technology ── */}
      <section className="nr-section">
        <div className="nr-section-header">
          <span className="nr-section-num">05</span>
          <h2 className="nr-section-title">Technology Mapping and Filter Selection</h2>
        </div>

        <div className="nr-two-col">
          <div>
            <p>
              The team conducted an extensive review of available water purification technologies
              — including boiling, chlorination, UV, RO, UF membranes, ceramic filters, activated
              carbon, and plant-based methods — mapping each against the impurities identified in
              the water testing phase, manufacturing complexity, cost, and maintenance requirements.
            </p>
            <p>
              Two viable filter combinations emerged from this analysis. Both avoided the energy
              intensity and water wastage of RO systems, while addressing the biological contamination
              that the lab results had confirmed as the primary risk.
            </p>
          </div>
          <div className="nr-filter-options">
            <div className="nr-filter-option">
              <span className="nr-filter-option-label">Option A</span>
              <p>Sediment → Ceramic → UF Membrane → Activated Carbon</p>
              <span className="nr-filter-note">Higher biological removal; ceramic adds manufacturing complexity</span>
            </div>
            <div className="nr-filter-option">
              <span className="nr-filter-option-label">Option B — Selected</span>
              <p>Sediment → UF Membrane → Activated Bamboo Charcoal</p>
              <span className="nr-filter-note">Simpler, lower cost to manufacture, addresses all primary contaminants; UV optional for final disinfection</span>
            </div>
          </div>
        </div>
      </section>

        <div className="nr-img-pair" style={{ marginTop: '3rem' }}>
          <img src="/projects/neero/market-research.png" alt="Market research — existing solutions" className="nr-img" />
          <img src="/projects/neero/innovative-methods.png" alt="Innovative purification methods" className="nr-img" />
        </div>

      {/* ── Architecture ── */}
      <section className="nr-section" style={{ paddingTop: '4rem' }}>
        <div className="nr-section-header">
          <span className="nr-section-num">06</span>
          <h2 className="nr-section-title">Designing the System Architecture</h2>
        </div>

        <p className="nr-section-intro">
          Translating the filter selection into a physical product architecture was a significant part
          of my contribution to this project. The architecture needed to accommodate three
          filtration stages, allow easy user-led filter replacement, work across multiple
          deployment scenarios (with and without electricity), and remain compact enough to meet
          the footprint requirement.
        </p>

        <div className="nr-architecture-block">
          <div className="nr-architecture-left">
            <h3 className="nr-architecture-heading">The Smart Hub</h3>
            <p>
              The core of the architecture is a filter hub — a self-contained module that houses the
              three-stage filter stack vertically. Water enters from the inlet at the top, passes
              through each filtration stage in sequence, and exits through a clean water outlet
              separated from the input chamber by a physical partition.
            </p>
            <p>
              The filter stack is accessible by removing the hub lid — opening the top allows filter
              cartridges to be extracted and replaced without tools, without disconnecting the water
              supply lines, and without professional assistance. This was a non-negotiable requirement
              given the autonomy constraint.
            </p>
            <p>
              Two filter units are arranged in parallel rather than in series within the hub. This
              configuration increases flow rate without requiring electrical pressure — allowing
              gravity-fed setups to achieve the 20L/day target at reasonable throughput.
            </p>
          </div>

          <div className="nr-filter-stages">
            {FILTER_STAGES.map((s) => (
              <div className="nr-filter-stage" key={s.stage}>
                <span className="nr-stage-num">{s.stage}</span>
                <div>
                  <h4 className="nr-stage-name">{s.name}</h4>
                  <p className="nr-stage-role">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modular 3-in-1 ── */}
      <section className="nr-section">
        <div className="nr-section-header">
          <span className="nr-section-num">07</span>
          <h2 className="nr-section-title">The Modular 3-in-1 Approach</h2>
        </div>

        <p className="nr-section-intro">
          A key insight from the research was the diversity of housing conditions within the same
          income segment: some households have overhead water connections, some have consistent
          electricity, some have neither. A single fixed product configuration would exclude a
          significant portion of the target group.
        </p>

        <p className="nr-section-body">
          During concept development, I contributed to an approach that reframed the solution as
          a modular assembly rather than a fixed form. The same filter hub — the core purification
          component — could be combined with different peripheral modules to suit different
          households. The hub stays constant; what changes is how water reaches it and where
          purified water is stored.
        </p>

        <img src="/projects/neero/sketches.png" alt="Concept sketches — modular architecture exploration" className="nr-img nr-img-contained" style={{ marginBottom: '2.5rem' }} />

        <div className="nr-scenarios-grid">
          {SCENARIOS.map((s) => (
            <div className="nr-scenario" key={s.num}>
              <span className="nr-scenario-num">{s.num}</span>
              <h4 className="nr-scenario-name">{s.name}</h4>
              <p className="nr-scenario-detail">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="nr-modular-callout">
          <p>
            This modular logic meant the product could serve radically different living conditions
            without requiring separate SKUs for each scenario. A renter in Mumbai without overhead
            plumbing and a household in Bangalore with a rooftop tank could both use the same
            core filter unit — just configured differently. It also meant that as a household's
            situation changed (new home, new connection, power availability), the product could
            adapt without replacement.
          </p>
        </div>
      </section>

      {/* ── My contributions ── */}
      <section className="nr-section">
        <div className="nr-section-header">
          <span className="nr-section-num">08</span>
          <h2 className="nr-section-title">My Contributions</h2>
        </div>

        <div className="nr-contributions">
          {[
            {
              title: 'Field research participation',
              body: 'Conducted in-field interviews with households across the target user group. Focused on understanding water sourcing behaviour, storage practices, trust around different water sources, and the improvised systems people had built around their constraints.',
            },
            {
              title: 'Water testing coordination',
              body: 'Collected water samples from visited households. Coordinated testing with external laboratories. Reviewed results with the team and helped interpret findings in the context of the design brief — particularly around the gap between perceived water safety and measured contamination.',
            },
            {
              title: 'Product architecture development',
              body: 'Worked on the internal working architecture of the filter hub — how the three filtration stages would be physically arranged, how water would flow through them, and how the system would accommodate both pressure-fed and gravity-fed operation. Focused on making filter replacement achievable without tools or expert help.',
            },
            {
              title: 'Concept development — modular architecture',
              body: 'Contributed the direction of a modular 3-in-1 assembly approach, where the same core filter hub could combine with different peripheral modules depending on household context. Helped evaluate this and other concepts against usability, manufacturability, and technical feasibility alongside the broader team.',
            },
          ].map((c, i) => (
            <div className="nr-contribution" key={i}>
              <span className="nr-contribution-marker">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="nr-contribution-title">{c.title}</h3>
                <p className="nr-contribution-body">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="nr-section">
        <div className="nr-section-header">
          <span className="nr-section-num">09</span>
          <h2 className="nr-section-title">Team Collaboration</h2>
        </div>

        <p className="nr-section-intro">
          Neero was a large, multidisciplinary team effort. The work described in this case study
          was not done independently — it was built on the contributions of researchers, designers,
          project management, and engineering collaborators across the full project span.
        </p>

        <div className="nr-team-grid">
          {[
            { role: 'Industrial Design Lead', note: 'Led overall ID direction and concept selection' },
            { role: 'Design Research Lead', note: 'Led the research methodology, synthesis, and archetypes' },
            { role: 'Project Manager', note: 'Owned timeline, stakeholder coordination, and delivery' },
            { role: 'Industrial Design Team', note: 'Concept generation, form development, 3D modelling, prototyping — I was part of this team' },
            { role: 'Design Research Team', note: 'Field research, synthesis, insight development' },
            { role: 'Visual Design Team', note: 'CMF, visualisation, documentation' },
            { role: 'External Research (DOT School)', note: 'Collaboration for Chennai-based field research' },
            { role: 'Industrial Design Interns', note: 'Supported across ideation, modelling, and documentation' },
          ].map((t) => (
            <div className="nr-team-card" key={t.role}>
              <h4 className="nr-team-role">{t.role}</h4>
              <p className="nr-team-note">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="nr-section">
        <div className="nr-outcome-block">
          <div className="nr-outcome-label-row">
            <span className="nr-outcome-heading">Outcome</span>
          </div>
          <p>
            The project concluded at Phase 1 — covering immersion, conceptualisation, and the
            development of a final concept direction. The output was a fully developed filter hub
            architecture, four validated deployment scenarios, a modular product system, and
            detailed documentation including photorealistic renders, user scenarios, and a
            technical brief for engineering handoff.
          </p>
          <p>
            The work validated a viable path toward a purification product in the ₹1,500–2,500
            price range, operating without electricity, requiring no professional installation,
            and covering the primary contamination concerns identified in field-collected water
            samples. Phase 2 (3D modelling, prototyping, CMF) and Phase 3 (engineering design
            and validation) were scoped and planned, though my involvement ended at Phase 1.
          </p>
          <p className="nr-outcome-note">
            This project was a frog internal initiative. All work is confidential. Screens,
            documentation, and detailed renders are not shared publicly.
          </p>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="nr-section">
        <blockquote className="nr-blockquote nr-blockquote-reflection">
          <p>
            What this project made concrete for me was how much design is constrained by things
            that are invisible in the brief. The target user for Neero doesn't just face a water
            quality problem — they face a renting reality that rules out wall installations, an
            income structure that rules out high upfront costs, and a maintenance capacity that
            rules out anything requiring expert servicing. Each of those constraints arrived
            through field visits and real conversations, not from secondary sources. The water
            testing added a different kind of clarity: what people believe about their water and
            what the lab finds are often disconnected. Designing something that bridges that gap —
            that works reliably in conditions users don't fully understand — is where the real
            complexity of this kind of problem lives.
          </p>
        </blockquote>
      </section>

    </div>
  );
}
