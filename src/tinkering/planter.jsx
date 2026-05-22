import React from 'react';
import CodeBlock from '../components/CodeBlock';
import './planter.css';

export const metadata = {
  slug: 'planter',
  title: 'Automatic IoT Planter',
  date: '2023',
  excerpt:
    'A NodeMCU-powered planter that monitors soil moisture, waters automatically on a schedule, and sends reminders — built as a classroom IoT project.',
  thumbnail: '/tinkering/planter/planter-info.png',
  tags: ['Electronics', 'IoT', 'NodeMCU', 'Prototyping'],
  duration: '1 month',
};

const CODE = `// Automatic Watering System using NodeMCU, Moisture Sensor
// Date and time functions using a DS3231 RTC connected via I2C and Wire lib
#include <Wire.h>
#include "RTClib.h"

RTC_DS3231 rtc;

const int waterStateButton = 12;  // flush switch pin
const int ledPin = LED_BUILTIN;
const int motorPin = 11;

int waterState = 0;
int currentHour, initialHour;
int moistureSensorValue;

void setup() {
  DateTime now = rtc.now();
  initialHour = now.hour();
  pinMode(motorPin, OUTPUT);
  pinMode(A0, INPUT);
  Serial.begin(9600);

  if (!rtc.begin()) {
    Serial.println("Couldn't find RTC");
    while (1);
  }

  if (rtc.lostPower()) {
    Serial.println("RTC lost power, setting time...");
    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  }
}

void loop() {
  digitalWrite(motorPin, HIGH);
  DateTime now = rtc.now();
  Serial.println(now.hour());

  if (currentHour != now.hour() || currentHour == initialHour) {
    if (currentHour == initialHour) {
      initialHour--;
    }
    moistureSensorValue = analogRead(A0);
    Serial.println(moistureSensorValue);

    if (moistureSensorValue > 600) {
      digitalWrite(motorPin, LOW);
      delay(10000);
      digitalWrite(motorPin, HIGH);
    }

    if (waterState == HIGH) {
      Serial.println("No Water! Please fill");
    }
    currentHour = now.hour();
  }
  delay(1000);
}`;

export default function Planter() {
  return (
    <div className="pl-page">
      {/* ── Intro ── */}
      <section className="pl-intro">
        <span className="pl-eyebrow">IoT · Classroom Project · 2023 · 1 month</span>
        <h1 className="pl-title">Automatic IoT Planter</h1>
        <p className="pl-lead">
          A planter that monitors soil moisture, waters itself on a schedule, and sends reminders
          for all things plant-related — built as a classroom exploration of IoT systems using
          NodeMCU.
        </p>
        <div className="pl-tags">
          {metadata.tags.map((t) => (
            <span key={t} className="pl-tag">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Diagram ── */}
      <section className="pl-section">
        <div className="pl-hero-img">
          <img
            src="/tinkering/planter/planter-info.png"
            alt="IoT planter system diagram — components and wiring overview"
          />
        </div>
        <p className="pl-caption">
          System diagram showing the NodeMCU microcontroller wired to a DS3231 RTC module,
          capacitive moisture sensor, relay, and submersible water pump.
        </p>
      </section>

      {/* ── Story ── */}
      <section className="pl-section pl-story-section">
        <div className="pl-story-grid">
          <div className="pl-story-block">
            <span className="pl-story-label">The Idea</span>
            <p>
              The brief was to prototype a useful IoT device in a month. Plants are the obvious
              target — most people over- or under-water them, and a moisture sensor is cheap enough
              to build into almost anything. The goal: a planter that monitors its own soil and acts
              on what it finds, without needing intervention.
            </p>
          </div>
          <div className="pl-story-block">
            <span className="pl-story-label">The Hardware</span>
            <p>
              NodeMCU (ESP8266) handles control and Wi-Fi. A DS3231 RTC module tracks real time —
              the watering logic runs hourly, not on a simple delay loop, so the schedule survives
              power cycles. A capacitive moisture sensor on pin A0 reads the soil, and a relay
              switches a small submersible pump for watering bursts.
            </p>
          </div>
          <div className="pl-story-block">
            <span className="pl-story-label">The Logic</span>
            <p>
              The control loop wakes every hour. If the moisture sensor reads above 600 (dry
              threshold), the pump runs for 10 seconds. The RTC prevents duplicate triggers within
              the same hour, and a separate input monitors the water reservoir level — flagging an
              alert when empty. Simple bang-bang control, reliable enough for a planter.
            </p>
          </div>
        </div>
      </section>

      {/* ── Specs ── */}
      <section className="pl-section">
        <div className="pl-specs-row">
          <div className="pl-spec-card">
            <span className="pl-spec-label">Microcontroller</span>
            <span className="pl-spec-value">NodeMCU</span>
          </div>
          <div className="pl-spec-card">
            <span className="pl-spec-label">Clock Module</span>
            <span className="pl-spec-value">DS3231 RTC</span>
          </div>
          <div className="pl-spec-card">
            <span className="pl-spec-label">Moisture Threshold</span>
            <span className="pl-spec-value">&gt; 600</span>
          </div>
          <div className="pl-spec-card">
            <span className="pl-spec-label">Watering Burst</span>
            <span className="pl-spec-value">10 s</span>
          </div>
          <div className="pl-spec-card">
            <span className="pl-spec-label">Check Interval</span>
            <span className="pl-spec-value">1 hour</span>
          </div>
        </div>
      </section>

      {/* ── Code ── */}
      <section className="pl-section">
        <h2 className="pl-section-title">Sketch</h2>
        <p className="pl-section-sub">
          The full NodeMCU sketch — RTC-driven hourly checks, moisture reading, pump control, and
          low-water alert.
        </p>
        <CodeBlock code={CODE} language="cpp" label="Arduino / NodeMCU" />
      </section>

      {/* ── Closing note ── */}
      <section className="pl-section">
        <blockquote className="pl-quote">
          <p>
            "A moisture sensor, a pump, and an RTC — three components solving a problem most people
            forget about until the plant is already dead."
          </p>
        </blockquote>
      </section>
    </div>
  );
}
