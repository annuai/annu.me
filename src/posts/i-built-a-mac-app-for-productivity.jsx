import React from 'react';

export const metadata = {
  title: 'Introducing Pomo — A Minimal Pomodoro App for macOS',
  date: '2026-05-18',
  excerpt:
    'A lightweight Pomodoro timer for macOS built using AI-assisted development workflows with Claude Code and Flutter.',
};

export default function IntroducingPomo() {
  return (
    <>
      <p>
        Over the last few days, I’ve been experimenting with building small desktop tools using
        AI-assisted development workflows.
      </p>

      <p>
        One of the results is{' '}
        <a href="/pomo">
          <strong>Pomo</strong>
        </a>{' '}
        — a lightweight Pomodoro timer designed specifically for macOS.
      </p>

      <img src="/projects/pomo-preview.png" alt="Pomo macOS app interface" />

      <p>
        The idea was simple: create a focus timer that feels calm, minimal, and frictionless to use
        throughout the day.
      </p>

      <p>
        Instead of building a productivity app overloaded with dashboards, analytics, and
        complicated systems, I wanted something quieter — a tool that simply helps you focus.
      </p>

      <h2>Features</h2>

      <ul>
        <li>25-minute Pomodoro focus timer</li>
        <li>5-minute and 15-minute break presets</li>
        <li>Simple task management</li>
        <li>Completed task tracking</li>
        <li>Motivational quote section</li>
        <li>Minimal native macOS interface</li>
      </ul>

      <img src="/posts/pomo-tasks.png" alt="Pomo task management section" />

      <h2>Built With AI-Assisted Development</h2>

      <p>What made this project especially interesting was how it was built.</p>

      <p>
        Most of the development process involved working alongside{' '}
        <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer">
          Claude Code
        </a>
        , using AI as a collaborative development partner rather than just an autocomplete tool.
      </p>

      <p>
        From debugging layouts to refining interactions and iterating on visual details, the
        workflow felt surprisingly fluid and fast.
      </p>

      <p>
        The app itself was built using{' '}
        <a
          href="https://flutter.dev/multi-platform/macos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flutter for macOS
        </a>
        , which made it possible to quickly ship a polished native desktop experience.
      </p>

      <h2>Why I Made It</h2>

      <p>I’ve always liked software that stays out of the way.</p>

      <p>
        A lot of productivity tools today feel visually noisy and overly engineered. Pomo is an
        attempt to go in the opposite direction — something lightweight, visually calm, and pleasant
        to keep open while working.
      </p>

      <p>
        This is still an early version, but building it taught me a lot about combining design
        thinking with AI-assisted software development.
      </p>

      <p>I’ll probably continue refining it over time.</p>
    </>
  );
}
