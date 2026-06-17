import React, { useState, useEffect } from 'react';
import './Hero.css';

const SENTENCES = [
  'Turning ideas into tangible experiences across domains',
  'I care about the tiny frictions most people learn to ignore.',
  'I like products that feel inevitable once they exist.',
  'Intelligent products, prototyping, and HMI.',
];

const WrenchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const CircuitIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const PenIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const HammerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
    <path d="m18 15 4-4" />
    <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
  </svg>
);

const RulerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z" />
    <path d="m7.5 10.5 2 2" />
    <path d="m10.5 7.5 2 2" />
    <path d="m13.5 4.5 2 2" />
    <path d="m4.5 13.5 2 2" />
  </svg>
);

const UIDesignIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="15" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="18" x2="12" y2="21" />
    <rect x="4" y="6" width="6" height="4" rx="1" />
    <line x1="12" y1="7" x2="18" y2="7" />
    <line x1="12" y1="10" x2="18" y2="10" />
    <line x1="4" y1="13" x2="18" y2="13" />
  </svg>
);

const UXResearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="10" cy="10" r="7" />
    <line x1="21" y1="21" x2="15" y2="15" />
    <circle cx="10" cy="8.5" r="2" />
    <path d="M6.5 16c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MotoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="5.5" cy="16.5" r="3.5" />
    <circle cx="18.5" cy="16.5" r="3.5" />
    <path d="M15 6h5v4h-5z" />
    <path d="M12 16.5h2" />
    <path d="M9.5 8L12 12h3" />
    <path d="M6 10l3-5h3" />
    <circle cx="15" cy="6" r="1" />
  </svg>
);

// Uniform size, spread evenly across the full hero in three horizontal bands
const ICONS = [
  // ── top band — full width ──
  { id: 'wrench', Icon: WrenchIcon, top: '11%', left: '3%', size: 42, rotate: -18, delay: 0.44 },
  { id: 'ux', Icon: UXResearchIcon, top: '8%', left: '22%', size: 42, rotate: 4, delay: 0.48 },
  { id: 'circuit', Icon: CircuitIcon, top: '13%', left: '44%', size: 42, rotate: 8, delay: 0.52 },
  { id: 'pen', Icon: PenIcon, top: '30%', left: '65%', size: 42, rotate: -12, delay: 0.55 },
  { id: 'gear', Icon: GearIcon, top: '22%', left: '83%', size: 42, rotate: 14, delay: 0.58 },
  // ── bottom band — full width ──
  { id: 'hammer', Icon: HammerIcon, top: '72%', left: '5%', size: 42, rotate: 22, delay: 0.62 },
  { id: 'ruler', Icon: RulerIcon, top: '60%', left: '24%', size: 42, rotate: -8, delay: 0.65 },
  { id: 'phone', Icon: PhoneIcon, top: '70%', left: '47%', size: 42, rotate: -4, delay: 0.68 },
  { id: 'ui', Icon: UIDesignIcon, top: '74%', left: '67%', size: 42, rotate: 5, delay: 0.72 },
  { id: 'moto', Icon: MotoIcon, top: '53%', left: '85%', size: 42, rotate: -2, delay: 0.76 },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'exiting' | 'entering'
  const [bioOpen, setBioOpen] = useState(false);
  const [bioPinned, setBioPinned] = useState(false);
  const [dragPos, setDragPos] = useState(null); // null = CSS default
  const bioCloseTimer = React.useRef(null);
  const wrapperRef = React.useRef(null);
  const dragState = React.useRef({ dragging: false, startX: 0, startY: 0, origX: 0, origY: 0, moved: false });

  const handleBioEnter = () => {
    clearTimeout(bioCloseTimer.current);
    setBioOpen(true);
  };

  const handleBioLeave = () => {
    if (bioPinned) return;
    bioCloseTimer.current = setTimeout(() => setBioOpen(false), 120);
  };

  const mouseHandled = React.useRef(false);

  useEffect(() => {
    if (!bioPinned) return;
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setBioPinned(false);
        setBioOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [bioPinned]);

  const handleTriggerClick = () => {
    if (bioPinned) {
      setBioPinned(false);
      setBioOpen(false);
    } else {
      setBioPinned(true);
      setBioOpen(true);
    }
  };

  // onClick fires for both mouse and touch. On desktop it's already handled
  // by mouseup inside handleDragStart, so we skip it using the flag.
  const handleButtonClick = () => {
    if (mouseHandled.current) {
      mouseHandled.current = false;
      return;
    }
    handleTriggerClick();
  };

  const handleDragStart = (e) => {
    e.preventDefault(); // mouse only — touch uses onClick
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const parentRect = wrapperRef.current.parentElement.getBoundingClientRect();
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      origX: wrapperRect.left - parentRect.left,
      origY: wrapperRect.top - parentRect.top,
      moved: false,
    };
    const onMove = (ev) => {
      const dx = ev.clientX - dragState.current.startX;
      const dy = ev.clientY - dragState.current.startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragState.current.moved = true;
      setDragPos({ x: dragState.current.origX + dx, y: dragState.current.origY + dy });
    };
    const onUp = () => {
      dragState.current.dragging = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      if (!dragState.current.moved) {
        mouseHandled.current = true;
        handleTriggerClick();
      }
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  useEffect(() => {
    let interval;
    const startTimeout = setTimeout(() => {
      const cycle = () => {
        setPhase('exiting');
        setTimeout(() => {
          setIndex((i) => (i + 1) % SENTENCES.length);
          setPhase('entering');
        }, 380);
      };
      interval = setInterval(cycle, 3500);
    }, 3500);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, []);

  const statementClass = [
    'hero-statement',
    phase === 'exiting' ? 'hero-carousel--exit' : '',
    phase === 'entering' ? 'hero-carousel--enter' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const descriptorClass = [
    'hero-descriptors',
    index !== 0 ? 'hero-carousel--hidden' : '',
    index === 0 && phase === 'exiting' ? 'hero-carousel--exit' : '',
    index === 0 && phase === 'entering' ? 'hero-carousel--enter' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className="hero-section">
      {/* <div className="hero-icons" aria-hidden="true">
        {ICONS.map(({ id, Icon, top, left, size, rotate, delay }) => (
          <span
            key={id}
            className="hero-icon"
            style={{
              top,
              left,
              width: size,
              height: size,
              transform: `rotate(${rotate}deg)`,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon />
          </span>
        ))}
      </div> */}

      <div className="hero-content">
        <div className="hero-split">
          <p className={statementClass}>{SENTENCES[index]}</p>
          <p className={descriptorClass}>thoughtfully, playfully &amp; hands&#x2011;on</p>
        </div>
        <div className="hero-footer">
          <a href="mailto:hi.annuai@gmail.com" className="hero-status-link">
            <div className="hero-status-tag">
              <span className="hero-pulse-indicator"></span>
              Currently open to new opportunities.
            </div>
          </a>
        </div>
      </div>

      {/* ── About trigger + panel wrapper ── */}
      <div
        ref={wrapperRef}
        className="hero-about-wrapper"
        onMouseEnter={handleBioEnter}
        onMouseLeave={handleBioLeave}
        style={dragPos ? { left: dragPos.x, top: dragPos.y, right: 'auto' } : {}}
      >
        <button
          className={`hero-about-trigger ${bioOpen ? 'hero-about-trigger--open' : ''} ${bioPinned ? 'hero-about-trigger--pinned' : ''}`}
          onMouseDown={handleDragStart}
          onClick={handleButtonClick}
          aria-label="About me"
        >
          <img src="/images/me.jpg" alt="Annuai" className="hero-about-trigger-photo" draggable="false" onDragStart={(e) => e.preventDefault()} />
        </button>

        {bioOpen && (
          <div className="hero-bio-panel">
            <div className="hero-bio-panel-body">
              <p>
                I'm an Industrial Designer from Kerala, currently building products through{' '}
                <a href="https://nirmit.co" target="_blank" rel="noopener noreferrer">nirmit</a>
                , a small studio focused on design, prototyping, and manufacturing.
              </p>
              <p>
                My work sits at the intersection of design, engineering, and making. I enjoy
                tackling complex problems that require research, experimentation, and hands-on
                development — whether that's motorcycle accessories, connected devices, mechanical
                systems, or entirely new product concepts.
              </p>
              <p>
                Over the past few years, I've worked across industrial design, CAD, prototyping,
                fabrication, electronics, and user research. Rather than separating design from
                engineering, I prefer moving between both, building ideas into functional products
                and testing them in the real world.
              </p>
              <p>
                I'm particularly interested in intelligent physical products — tools, vehicles,
                robots, and systems that combine technology with thoughtful design to solve
                meaningful problems.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
