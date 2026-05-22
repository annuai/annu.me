import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './restoring-typewriter.css';

export const metadata = {
  slug: 'restoring-typewriter',
  title: 'Restoring a Malayalam Typewriter',
  date: '2023',
  excerpt:
    'Found a rare Remington Malayalam typewriter in a dump of old equipment. Cleaned it, threaded an old ribbon, got it typing again — then extracted every letterform it carries.',
  thumbnail: '/tinkering/restoring-typewriter/typewriter-1.jpg',
  tags: ['Restoration', 'Making', 'Typography', 'Malayalam'],
  duration: '2 days',
};

const PHOTOS = [
  '/tinkering/restoring-typewriter/typewriter-1.jpg',
  '/tinkering/restoring-typewriter/typewriter-2.jpg',
  '/tinkering/restoring-typewriter/typewriter-3.jpg',
  '/tinkering/restoring-typewriter/typewriter-4.jpg',
];

// All extracted letterforms — ordered: numerals, vowels, consonants, punctuation
const TYPEHEADS = [
  // Numerals
  { file: '0', label: '0' },
  { file: '1', label: '1' },
  { file: '2', label: '2' },
  { file: '3', label: '3' },
  { file: '4', label: '4' },
  { file: '5', label: '5' },
  { file: '6', label: '6' },
  { file: '7', label: '7' },
  { file: '8', label: '8' },
  { file: '9', label: '9' },
  // Vowels
  { file: 'a', label: 'അ' },
  { file: 'aa', label: 'ആ' },
  { file: 'ae', label: 'ഇ' },
  { file: 'eee', label: 'ഈ' },
  { file: 'e', label: 'ഉ' },
  { file: 'e1', label: 'ഊ' },
  { file: 'a1', label: 'എ' },
  { file: 'a2', label: 'ഏ' },
  { file: 'o', label: 'ഒ' },
  { file: 'ow', label: 'ഓ' },
  { file: 'u', label: 'ക' },
  { file: 'u1', label: 'ഔ' },
  { file: 'u2', label: 'അം' },
  { file: 'am', label: 'ം' },
  { file: 'add', label: 'ൻ' },
  // Consonants
  { file: 'ka', label: 'ക' },
  { file: 'kka', label: 'ഖ' },
  { file: 'ga', label: 'ഗ' },
  { file: 'gha', label: 'ഘ' },
  { file: 'ggha', label: 'ങ' },
  { file: 'nga', label: 'ങ' },
  { file: 'cha', label: 'ച' },
  { file: 'ccha', label: 'ഛ' },
  { file: 'jha', label: 'ജ' },
  { file: 'nja', label: 'ഞ' },
  { file: 'ta', label: 'ട' },
  { file: 'tta', label: 'ഠ' },
  { file: 'tta1', label: 'ഡ' },
  { file: 'dda', label: 'ഢ' },
  { file: 'ddda', label: 'ണ' },
  { file: 'nna', label: 'ത' },
  { file: 'tha', label: 'ഥ' },
  { file: 'da', label: 'ദ' },
  { file: 'dha', label: 'ധ' },
  { file: 'na', label: 'ന' },
  { file: 'nha', label: 'ന്' },
  { file: 'nn', label: 'ൻ' },
  { file: 'nnn', label: 'ണ' },
  { file: 'pa', label: 'പ' },
  { file: 'pha', label: 'ഫ' },
  { file: 'ba', label: 'ബ' },
  { file: 'bha', label: 'ഭ' },
  { file: 'ma', label: 'മ' },
  { file: 'ya', label: 'യ' },
  { file: 'ya1', label: 'യ്' },
  { file: 'ra', label: 'ര' },
  { file: 'ra1', label: 'ര്' },
  { file: 'rra', label: 'റ' },
  { file: 'rrr', label: 'ർ' },
  { file: 'rru', label: 'ൃ' },
  { file: 'rru1', label: 'ൄ' },
  { file: 'la', label: 'ല' },
  { file: 'la1', label: 'ള' },
  { file: 'lll', label: 'ൽ' },
  { file: 'ill', label: 'ൾ' },
  { file: 'va', label: 'വ' },
  { file: 'va1', label: 'വ്' },
  { file: 'sha', label: 'ശ' },
  { file: 'sha1', label: 'ഷ' },
  { file: 'sa', label: 'സ' },
  { file: 'ha', label: 'ഹ' },
  { file: 'zha', label: 'ഴ' },
  { file: 'tsa', label: 'ൿ' },
  { file: 'ddha', label: 'ഡ്ഢ' },
  // Punctuation & symbols
  { file: 'comma', label: ',' },
  { file: 'dot', label: '.' },
  { file: 'colon', label: ':' },
  { file: 'semicolon', label: ';' },
  { file: 'hyphen', label: '–' },
  { file: 'underscore', label: '_' },
  { file: 'question', label: '?' },
  { file: 'quote', label: '"' },
  { file: 'singlequote', label: "'" },
  { file: 'leftbracket', label: '(' },
  { file: 'rightbracket', label: ')' },
  { file: 'star', label: '*' },
  { file: 'percent', label: '%' },
  { file: 'divide', label: '÷' },
  { file: 'multiply', label: '×' },
  { file: 'subtract', label: '−' },
];

export default function RestoringTypewriter() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="tw-page">
      {/* ── Intro ── */}
      <section className="tw-intro">
        <span className="tw-eyebrow">Making · 2023 · 2 days</span>
        <h1 className="tw-title">Restoring a Malayalam Typewriter</h1>
        <p className="tw-lead">
          Found a rather rare Remington Malayalam typewriter in a dump of old typewriting and
          primitive photocopying equipment. The fact that this machine could type in Malayalam was
          so fascinating — I had to see it working again.
        </p>
        <div className="tw-tags">
          {metadata.tags.map((t) => (
            <span key={t} className="tw-tag">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section className="tw-section">
        <div className="tw-photo-grid">
          {PHOTOS.map((src, i) => (
            <div
              key={src}
              className={`tw-photo-item ${i === 0 ? 'tw-photo-wide' : ''}`}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={src} alt={`Remington Malayalam typewriter — photo ${i + 1}`} />
            </div>
          ))}
        </div>
        <p className="tw-caption">
          Brought it home, gave it a deep clean, threaded an old typewriter ribbon I had collected
          some time ago — and it started typing. Later I applied a protective white coating to
          preserve the body.
        </p>
      </section>

      {/* ── Story ── */}
      <section className="tw-section tw-story-section">
        <div className="tw-story-grid">
          <div className="tw-story-block">
            <span className="tw-story-label">The Find</span>
            <p>
              The machine was buried in a pile of equipment headed for the scrap dealer. A Remington
              with Malayalam type — not something you come across. Malayalam has a complex script:
              more than 50 base characters, numerous conjuncts, and vowel diacritics that wrap
              around consonants in three directions. Engineering a typewriter for it is a genuinely
              hard problem. Someone solved it.
            </p>
          </div>
          <div className="tw-story-block">
            <span className="tw-story-label">The Restoration</span>
            <p>
              Two days of careful work: disassembling the carriage, cleaning decades of dust and
              dried ink from every typehead, re-lubricating the escapement mechanism, and threading
              a fresh ribbon. The key action was stiff but functional. Once threaded, the first test
              impression confirmed the type was intact and the alignment was still true.
            </p>
          </div>
          <div className="tw-story-block">
            <span className="tw-story-label">The Extraction</span>
            <p>
              After getting it working, I typed every character the machine carries onto clean
              paper, scanned the impressions at high resolution, and isolated each letterform as an
              individual PNG — preserving the exact texture and weight of the Remington's strike. A
              complete character set, rescued from something that was an hour away from the scrap
              heap.
            </p>
          </div>
        </div>
      </section>

      {/* ── Letterforms ── */}
      <section className="tw-section">
        <header className="tw-letterforms-header">
          <h2 className="tw-section-title">Extracted Letterforms</h2>
          <p className="tw-section-sub">
            Every character typed on paper, scanned, and extracted into individual letterforms —{' '}
            {TYPEHEADS.length} glyphs total. The ink texture, the slight irregularity of each
            impression, the pressure marks at stroke terminals: all preserved.
          </p>
        </header>

        <div className="tw-glyph-grid">
          {TYPEHEADS.map(({ file, label }) => (
            <div key={file} className="tw-glyph-cell" title={label}>
              <img
                src={`/tinkering/restoring-typewriter/typeheads/${file}.png`}
                alt={`Malayalam character: ${label}`}
                loading="lazy"
              />
              <span className="tw-glyph-name">{file}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing note ── */}
      <section className="tw-section">
        <blockquote className="tw-quote">
          <p>
            "The typewriter had a mechanical solution for every curve and conjunct in the Malayalam
            script. Someone designed that. It deserved to be preserved."
          </p>
        </blockquote>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={PHOTOS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % PHOTOS.length)}
        />
      )}
    </div>
  );
}
