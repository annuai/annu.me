import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          {/* <h2>About Annuai</h2> */}
          <a href="mailto:hi.annuai@gmail.com"><div className="status-tag">
            <span className="pulse-dot"></span>
            Currently looking for work
          </div>
          </a>
          <p className="lead">Industrial Designer & Maker based in Kannur, Kerala, specializing in bringing tactile experiences to consumer goods, environments, and functional objects.</p>

          <p>
            My work is driven less by aesthetics alone and more by curiosity:
            how things feel in the hand, how materials behave, how objects
            communicate intent, and how small details shape the experience
            of using something every day.
          </p>

          <p>
            I’m still learning. A lot of my process comes from experimentation,
            prototyping, observing, rebuilding, and slowly refining my sense
            of taste and judgment. I’m particularly interested in products
            that sit at the intersection of design, engineering, and technology
            — especially tools, interfaces, and objects that feel quietly useful
            and emotionally considered.
          </p>

          <p>
            Outside of client work, I spend time building personal projects,
            improving my rendering and prototyping skills, and documenting
            the process of becoming better at what I do.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/me.jpg" alt="Annuai riding a yulu" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
