import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './arduino-incubator.css';

export const metadata = {
  slug: "arduino-incubator",
  title: "Incubating Eggs with Arduino",
  date: "2023",
  excerpt: "Built a closed-loop egg incubator using Arduino, a temperature sensor, humidity sensor and relay. 18 days of waiting. Two out of eight eggs hatched.",
  thumbnail: "/tinkering/arduino-incubator/1.jpg",
  tags: ["Electronics", "Arduino", "Prototyping", "Making"],
  duration: "21 days",
};

const PHOTOS = [
  { src: "/tinkering/arduino-incubator/1.jpg",   caption: "Overview of the incubator setup" },
  { src: "/tinkering/arduino-incubator/2.jpg",   caption: "Eggs marked and placed on paper cutouts" },
  { src: "/tinkering/arduino-incubator/3.jpg",   caption: "Interior of the incubator bucket" },
  { src: "/tinkering/arduino-incubator/4.jpg",   caption: "Arduino control assembly" },
  { src: "/tinkering/arduino-incubator/4-2.jpg", caption: "Electronics inside the ice cream container" },
  { src: "/tinkering/arduino-incubator/4-3.jpg", caption: "Wiring detail — relay, temp & humidity sensors" },
  { src: "/tinkering/arduino-incubator/5.jpg",   caption: "Fan regulator for heat intensity control" },
  { src: "/tinkering/arduino-incubator/6.jpg",   caption: "Full assembly in the paint bucket enclosure" },
  { src: "/tinkering/arduino-incubator/7.jpg",   caption: "First prototype — bucket and light bulb, no microcontroller" },
  { src: "/tinkering/arduino-incubator/9.jpg",   caption: "Temperature & humidity readings during incubation" },
  { src: "/tinkering/arduino-incubator/9-1.jpg", caption: "Monitoring the environment over 18 days" },
  { src: "/tinkering/arduino-incubator/9-2.jpg", caption: "Control loop in action" },
  { src: "/tinkering/arduino-incubator/11.jpg",  caption: "Day 11 — checking progress" },
  { src: "/tinkering/arduino-incubator/14.jpg",  caption: "Day 14 — the wait continues" },
];

const ALL_IMAGES = PHOTOS.map(p => p.src);

export default function ArduinoIncubator() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const open = (i) => setLightboxIndex(i);

  return (
    <div className="ai-page">

      {/* ── Intro ── */}
      <section className="ai-intro">
        <span className="ai-eyebrow">Electronics Prototyping · 2023 · 21 days</span>
        <h1 className="ai-title">Incubating Eggs with Arduino</h1>
        <p className="ai-lead">
          The idea was to use Arduino to prototype a simple incubator, see if it works,
          and then hatch eggs. The first try was successful with one egg and later on
          with two eggs. Although the yield is pathetic, I had fun building it and waiting
          the whole 18 days to see if it hatches.
        </p>
        <div className="ai-tags">
          {metadata.tags.map(t => <span key={t} className="ai-tag">{t}</span>)}
        </div>
      </section>

      {/* ── Hero image ── */}
      <section className="ai-section">
        <div className="ai-image-wrapper ai-image-hero" onClick={() => open(0)}>
          <img src={PHOTOS[0].src} alt={PHOTOS[0].caption} />
        </div>
      </section>

      {/* ── Ideal conditions ── */}
      <section className="ai-section">
        <div className="ai-specs-row">
          <div className="ai-spec-card">
            <span className="ai-spec-label">Target Temperature</span>
            <span className="ai-spec-value">37.7 °C</span>
          </div>
          <div className="ai-spec-card">
            <span className="ai-spec-label">Target Humidity</span>
            <span className="ai-spec-value">57 %</span>
          </div>
          <div className="ai-spec-card">
            <span className="ai-spec-label">Incubation Period</span>
            <span className="ai-spec-value">18 days</span>
          </div>
          <div className="ai-spec-card">
            <span className="ai-spec-label">Control Method</span>
            <span className="ai-spec-value">Bang-bang</span>
          </div>
          <div className="ai-spec-card">
            <span className="ai-spec-label">Result</span>
            <span className="ai-spec-value">2 / 8 hatched</span>
          </div>
        </div>
      </section>

      {/* ── Setup ── */}
      <section className="ai-section ai-story-section">
        <div className="ai-story-grid">
          <div>
            <span className="ai-story-label">The Setup</span>
            <p>
              The eggs are marked, kept with paper cutouts to absorb any extra moisture,
              and water is kept inside to maintain humidity throughout the 18 days of
              development. The eggs need to be turned twice every day — this helps the
              embryo develop evenly without complications. In a later stage, this process
              would need to be completely automated.
            </p>
          </div>
          <div>
            <span className="ai-story-label">First Prototype</span>
            <p>
              The very first prototype was a simple bucket and a light bulb — no
              microcontroller at all. The objective was to understand whether temperature
              could be controlled passively. Result: the bucket heats up fast but the ideal
              37.7 °C and 57% humidity cannot be reliably achieved without a controller.
              A closed-loop system was necessary.
            </p>
          </div>
          <div>
            <span className="ai-story-label">Choosing the Controller</span>
            <p>
              Both NodeMCU and Arduino were considered. Arduino was the obvious starting
              point — simpler, faster to prototype, and the WiFi and IoT capabilities of
              the ESP weren't needed yet. The control logic is bang-bang: a relay switches
              the heater on when temperature drops below setpoint and off when it exceeds
              it. Same logic for humidity via the moisture sensor.
            </p>
          </div>
        </div>
      </section>

      {/* ── Early prototype photos ── */}
      <section className="ai-section">
        <h2 className="ai-section-title">Early Prototype</h2>
        <div className="ai-grid-3">
          {PHOTOS.slice(1, 4).map((p, i) => (
            <div key={p.src} className="ai-image-wrapper" onClick={() => open(i + 1)}>
              <img src={p.src} alt={p.caption} />
              <span className="ai-img-caption">{p.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Electronics assembly ── */}
      <section className="ai-section">
        <h2 className="ai-section-title">Electronics Assembly</h2>
        <div className="ai-split">
          <div className="ai-split-text">
            <p>
              All the electronics are housed in a small ice cream container fitted
              inside the paint bucket — relay, temperature sensor (DS18B20), humidity
              sensor (DHT11), and the Arduino board itself. A fan regulator controls
              the intensity of the light bulb: higher intensity means faster heat transfer.
              The temperature will hit setpoint either way, but the rate of heat radiation
              may affect the eggs — slower and more even is better.
            </p>
            <p>
              The controller assembly is removable, which made debugging easier during
              the 18-day run without disturbing the incubation environment.
            </p>
            <a
              className="ai-download-link"
              href="/tinkering/arduino-incubator/files/incubator-sketch.zip"
              download
            >
              ↓ Download Arduino &amp; NodeMCU sketch files (.zip)
            </a>
          </div>
          <div className="ai-split-images">
            {PHOTOS.slice(3, 6).map((p, i) => (
              <div key={p.src} className="ai-image-wrapper" onClick={() => open(i + 3)}>
                <img src={p.src} alt={p.caption} />
                <span className="ai-img-caption">{p.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full assembly photos ── */}
      <section className="ai-section">
        <h2 className="ai-section-title">Full Assembly</h2>
        <div className="ai-grid-2">
          {PHOTOS.slice(6, 10).map((p, i) => (
            <div key={p.src} className="ai-image-wrapper" onClick={() => open(i + 6)}>
              <img src={p.src} alt={p.caption} />
              <span className="ai-img-caption">{p.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Monitoring ── */}
      <section className="ai-section">
        <h2 className="ai-section-title">18 Days of Monitoring</h2>
        <div className="ai-grid-3">
          {PHOTOS.slice(9, 14).map((p, i) => (
            <div key={p.src} className="ai-image-wrapper" onClick={() => open(i + 9)}>
              <img src={p.src} alt={p.caption} />
              <span className="ai-img-caption">{p.caption}</span>
            </div>
          ))}
        </div>
        <p className="ai-section-caption">
          Temperature and humidity were logged throughout the 18-day incubation period.
          Maintaining 37.7 °C and 57% humidity in a closed loop — checking in twice daily
          to manually turn the eggs.
        </p>
      </section>

      {/* ── Results ── */}
      <section className="ai-section">
        <h2 className="ai-section-title">Results & What Went Wrong</h2>
        <div className="ai-results-grid">
          <div className="ai-result-card ai-result-partial">
            <span className="ai-result-label">Outcome</span>
            <p>
              The final prototype was assembled, run for 18 days, and 2 out of 8 eggs
              hatched — a 25% yield. Technically successful; practically inefficient. A
              commercial incubator runs at 80–90% hatch rates.
            </p>
          </div>
          <div className="ai-result-card">
            <span className="ai-result-label">Power Cuts</span>
            <p>
              Frequent power cuts in the area weren't factored into the original design.
              Most commercial incubators retain heat for 6–8 hours without active power.
              This prototype had no thermal mass or battery backup — every cut meant a
              temperature dip that stressed the developing embryos.
            </p>
          </div>
          <div className="ai-result-card">
            <span className="ai-result-label">Egg Turning</span>
            <p>
              Manual turning twice a day worked, but consistency was hard to maintain.
              Missed turns or irregular intervals directly affect embryo development. An
              automated egg-turner mechanism would be the most impactful single upgrade
              for a second version.
            </p>
          </div>
          <div className="ai-result-card">
            <span className="ai-result-label">Next Steps</span>
            <p>
              Migrate from Arduino to NodeMCU / ESP32 for WiFi monitoring and logging.
              Add a thermal mass (water reservoir) inside the enclosure for heat retention
              during power cuts. Design an automatic egg-turning tray on a timer. Improve
              sensor calibration — the DHT11 has ±5% humidity accuracy which isn't ideal.
            </p>
          </div>
        </div>
      </section>

      {/* ── Closing quote ── */}
      <section className="ai-section">
        <blockquote className="ai-quote">
          <p>
            "The yield is pathetic, but watching something hatch from a box you built
            yourself is a completely different kind of satisfaction."
          </p>
        </blockquote>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={ALL_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => (i - 1 + ALL_IMAGES.length) % ALL_IMAGES.length)}
          onNext={() => setLightboxIndex(i => (i + 1) % ALL_IMAGES.length)}
        />
      )}
    </div>
  );
}
