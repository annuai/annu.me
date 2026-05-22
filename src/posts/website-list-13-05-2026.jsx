import React from 'react';

export const metadata = {
  title: 'Interesting Corners of the Internet',
  date: '2026-05-13',
  excerpt:
    'A collection of websites, essays, and tools around design, engineering, fabrication, and the modern web.',
};

export default function InterestingCorners() {
  return (
    <>
      <p>
        A small collection of websites, essays, and tools I keep returning to — mostly around
        design, fabrication, interfaces, and the growing overlap between designers and engineers.
      </p>

      <h2>Experimental Websites</h2>

      <ul>
        <li>
          <a href="https://sinceyouarrived.world/taken" target="_blank" rel="noopener noreferrer">
            Since You Arrived — Taken
          </a>{' '}
          — Shows what websites can infer about you the moment you visit them.
        </li>

        <li>
          <a href="https://sinceyouarrived.world/" target="_blank" rel="noopener noreferrer">
            Since You Arrived
          </a>{' '}
          — Live counters showing what humanity has collectively been doing since you opened the
          page.
        </li>

        <li>
          <a href="https://gcodetools.com/vase-maker" target="_blank" rel="noopener noreferrer">
            GCode Vase Maker
          </a>{' '}
          — Generates procedural vase forms directly as G-code.
        </li>
      </ul>

      <h2>Design & Industrial Design</h2>

      <ul>
        <li>
          <a
            href="https://www.pentagram.com/work/caligra-c100-developer-terminal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Caligra C100 Developer Terminal — Pentagram
          </a>{' '}
          — A beautifully restrained developer-focused hardware concept.
        </li>

        <li>
          <a
            href="https://www.pentagram.com/industrialproduct-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pentagram Industrial & Product Design
          </a>{' '}
          — A strong archive of industrial and product design work.
        </li>

        <li>
          <a href="https://sidebar.io/" target="_blank" rel="noopener noreferrer">
            Sidebar.io
          </a>{' '}
          — My go-to source for design and development updates.
        </li>
      </ul>

      <h2>Essays & Articles</h2>

      <ul>
        <li>
          <a
            href="https://aigoodies.beehiiv.com/p/future-of-design-jobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Future of Design Jobs
          </a>{' '}
          — On how AI is changing the role of designers.
        </li>

        <li>
          <a
            href="https://aigoodies.beehiiv.com/p/what-is-a-design-engineer-and-how-do-you-become-one"
            target="_blank"
            rel="noopener noreferrer"
          >
            What Is a Design Engineer?
          </a>{' '}
          — A good introduction to the design engineer role.
        </li>

        <li>
          <a
            href="https://www.darioamodei.com/essay/the-adolescence-of-technology"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Adolescence of Technology — Dario Amodei
          </a>{' '}
          — A thoughtful essay on the current phase of technological growth.
        </li>

        <li>
          <a
            href="https://nathanbeck.eu/essays/death-of-design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Death of Design
          </a>{' '}
          — On how design roles are evolving alongside AI and automation.
        </li>

        <li>
          <a
            href="https://aigoodies.beehiiv.com/p/can-ai-help-you-build-your-design-portfolio-yes-it-can-here-s-how"
            target="_blank"
            rel="noopener noreferrer"
          >
            Can AI Help You Build Your Design Portfolio?
          </a>{' '}
          — Practical ways AI can assist portfolio building.
        </li>
      </ul>

      <h2>Design Engineering & Learning</h2>

      <ul>
        <li>
          <a href="https://design-engineers.vercel.app/" target="_blank" rel="noopener noreferrer">
            Design Engineers
          </a>{' '}
          — “People who are really serious about user interface should be able to implement it
          themselves.”
        </li>

        <li>
          <a href="https://designengineer.io/" target="_blank" rel="noopener noreferrer">
            DesignEngineer.io
          </a>{' '}
          — Job board focused on design engineering roles.
        </li>

        <li>
          <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">
            The Odin Project
          </a>{' '}
          — One of the best free resources for learning web development.
        </li>

        <li>
          <a href="https://aigoodies.beehiiv.com/" target="_blank" rel="noopener noreferrer">
            AI Goodies
          </a>{' '}
          — Where I found many of these links.
        </li>
      </ul>
    </>
  );
}
