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
          <p>With an eye for detail and a passion for materials, my work spans from tabletop ceramics to robust consumer electronics. Every project is an opportunity to explore the relationship between the user and the object, creating moments of seamless interaction and enduring beauty.</p>
        </div>
        <div className="about-image">
          <img src="/images/me.jpg" alt="Annuai riding a yulu" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
