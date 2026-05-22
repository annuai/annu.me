import React from 'react';

export const metadata = {
  title: 'Understanding NURBS, T-Splines and SubD',
  date: '2022-12-01',
  excerpt:
    'A collection of articles and notes exploring NURBS, T-Splines, SubD modeling, and surface continuity in 3D CAD workflows.',
};

export default function UnderstandingNurbsTSplinesSubD() {
  return (
    <>
      <h2>The Curiosity Behind Surface Modeling</h2>

      <p>
        3D modeling is an incredible feat in computing. What made advanced CAD and surface modeling
        possible are mathematical representations like NURBS and T-Splines — systems capable of
        describing smooth, controllable three-dimensional surfaces with precision.
      </p>

      <p>
        I started exploring the differences between various modeling methods, spline types, and how
        newer workflows like SubD compare with traditional NURBS-based modeling used in industrial
        design and CAD.
      </p>

      <h2>Articles & References</h2>

      <ul>
        <li>
          <a
            href="https://www.iasj.net/iasj/download/75e98f97d052fa33"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comparison Between T-Spline Surface and NURBS Surface
          </a>{' '}
          — A technical comparison between the two surface representations.
        </li>

        <li>
          <a
            href="http://academics.wellesley.edu/MAS/313/sp09/mayaguide/Complete/NURBS.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            NURBS
          </a>{' '}
          — Foundational reference explaining NURBS mathematics and structure.
        </li>

        <li>
          <a
            href="https://www.aliasworkbench.com/theoryBuilders/TB1_nurbs1.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Understanding NURBS
          </a>{' '}
          — A practical introduction to NURBS surfaces and workflows.
        </li>

        <li>
          <a
            href="http://www.pilot3d.com/NurbSecrets.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Dirty Little Secrets of NURBS
          </a>{' '}
          — An interesting deep dive into the limitations and realities of NURBS.
        </li>

        <li>
          <a
            href="https://cadsetterout.com/inventor-tutorials/what-are-tsplines/"
            target="_blank"
            rel="noopener noreferrer"
          >
            What Are T-Splines? And How Can I Use Them?
          </a>{' '}
          — Beginner-friendly explanation of T-Spline workflows.
        </li>

        <li>
          <a
            href="http://isicad.net/articles.php?article_num=14940"
            target="_blank"
            rel="noopener noreferrer"
          >
            NURBS and CAD: 30 Years Together
          </a>{' '}
          — A historical look at NURBS in CAD systems.
        </li>

        <li>
          <a
            href="https://www.aliasworkbench.com/theoryBuilders/TB3_continuity1.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Continuity Terminology
          </a>{' '}
          — Understanding G0, G1, G2 and surface continuity.
        </li>

        <li>
          <a
            href="https://plmtechtalk.com/2017/01/04/have-you-ever-wondered-about-surface-continuity-g0-g1-and-g2-explained/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Surface Continuity Explained — G0, G1 and G2
          </a>{' '}
          — A simpler explanation of continuity in surface modeling.
        </li>

        <li>
          <a
            href="https://dezignstuff.com/what-is-subd-anyway/"
            target="_blank"
            rel="noopener noreferrer"
          >
            What Is SubD Anyway?
          </a>{' '}
          — Introduction to subdivision surface modeling.
        </li>
      </ul>

      <h2>Why This Was Interesting to Me</h2>

      <p>
        What fascinated me most was how different modeling systems influence the way designers think
        and work. NURBS feels engineered and precise, whereas SubD workflows feel more sculptural
        and fluid.
      </p>

      <p>
        Understanding these systems also changed how I looked at industrial design surfaces,
        automotive modeling, consumer products, and even how CAD software itself is built under the
        hood.
      </p>
    </>
  );
}
