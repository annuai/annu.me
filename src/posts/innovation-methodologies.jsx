import React from 'react';

export const metadata = {
  title: 'Innovation Methodologies',
  date: '2023-01-05',
  excerpt:
    'A collection of innovation frameworks, problem-solving methodologies, and case studies exploring TRIZ, Six Sigma, reverse innovation, and structured design thinking.',
};

export default function InnovationMethodologies() {
  return (
    <>
      <h2>TRIZ & Structured Problem Solving</h2>

      <p>
        TRIZ is the Russian acronym for the “Theory of Inventive Problem Solving,” an international
        system of creativity developed in the USSR between 1946 and 1985 by engineer and scientist
        Genrich S. Altshuller and his colleagues.
      </p>

      <img src="/posts/40_principles_of_TRIZ_method_960dpi.avif" />
      <img src="/posts/Understanding_the_10_Types_of_Innovation_V2.avif" />

      <p>
        What makes TRIZ fascinating is its attempt to systematize innovation — treating invention
        not as random inspiration, but as something that can be analyzed, categorized, and
        reproduced through patterns.
      </p>

      <ul>
        <li>
          <a
            href="https://www.mindtools.com/amtcc5f/triz"
            target="_blank"
            rel="noopener noreferrer"
          >
            TRIZ
          </a>{' '}
          — Introduction to the Theory of Inventive Problem Solving.
        </li>

        <li>
          <a
            href="http://creatingminds.org/tools/triz/triz_contradiction_analysis.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            TRIZ Contradiction Analysis
          </a>{' '}
          — Understanding contradictions and inventive principles.
        </li>
      </ul>

      <h2>Process Improvement & Systems Thinking</h2>

      <ul>
        <li>
          <a
            href="https://www.mindtools.com/aoafmra/six-sigma"
            target="_blank"
            rel="noopener noreferrer"
          >
            Six Sigma
          </a>{' '}
          — Methodologies for process optimization and reducing defects.
        </li>

        <li>
          <a
            href="https://hbr.org/1988/05/the-house-of-quality"
            target="_blank"
            rel="noopener noreferrer"
          >
            The House of Quality
          </a>{' '}
          — A framework connecting customer needs with engineering requirements.
        </li>

        <li>
          <a
            href="https://www.innovationchampions.com.au/toolkit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Innovation Toolkit
          </a>{' '}
          — A broad collection of innovation methods and strategic tools.
        </li>
      </ul>

      <h2>Case Studies & Applied Innovation</h2>

      <ul>
        <li>
          <a
            href="https://www.core77.com/posts/18507/case-study-leveraged-freedom-chair-by-amos-winter-jake-childs-and-jung-takenabling-freedom-for-the-disabled-in-developing-countries-18507"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enabling Freedom for the Disabled in Developing Countries
          </a>{' '}
          — A Core77 case study on the Leveraged Freedom Chair and frugal innovation.
        </li>

        <li>
          <a
            href="https://hbr.org/2015/07/engineering-reverse-innovations"
            target="_blank"
            rel="noopener noreferrer"
          >
            Engineering Reverse Innovations
          </a>{' '}
          — How innovation emerging from developing economies reshapes global products.
        </li>
      </ul>

      <h2>Why These Interested Me</h2>

      <p>
        I’ve always been fascinated by the idea that innovation can be studied like a system instead
        of treated as pure luck or inspiration.
      </p>

      <p>
        Frameworks like TRIZ, Six Sigma, and Quality Function Deployment show how engineering,
        design, constraints, and creativity intersect. A lot of these methodologies also reveal how
        some of the best innovations emerge not from abundance, but from limitations.
      </p>
    </>
  );
}
