import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* Photo */}
        <div className="about-photo-wrapper">
          <img src="/images/me.jpg" alt="Annuai" className="about-photo" />
        </div>

        {/* Heading */}
        <div className="about-heading">
          <span className="about-heading-small">who is</span>
          <h1 className="about-heading-large">Annuai?</h1>
        </div>

        {/* Status */}
        <a href="mailto:hi.annuai@gmail.com" className="status-tag">
          <span className="pulse-dot"></span>
          Currently looking for work
        </a>

        {/* Bio */}
        <div className="about-body">
          <p>
            I was born and brought up in Thalassery, India — a small coastal town in the North
            Malabar region of Kerala. My family got their first computer in 2004, and I was always
            curious about how a big TV box could let me play games like Age of Empires. That
            curiosity slowly pulled me into learning how computers worked. Eventually, I learned a
            bit of JavaScript, and somewhere along the way, I discovered Apple and its Human
            Interface Guidelines. I was fascinated by the idea that there was a document defining
            how things should come together on a screen.
          </p>
          <p>
            That eventually led me to start making UI screens and getting into design college. My
            first college was a disaster, although I made a lot of friends there. I lacked many of
            the skills needed for design school. A year later, I left and joined internships to
            learn more about computers and UI design. I interned for about a year before getting
            into the National Institute of Design, where I learned more about computers, but also
            discovered physical products through the workshop spaces there.
          </p>
          <p>
            Over time, I found my real calling in bringing technology and physical products
            together. My work today is driven less by aesthetics alone and more by curiosity —
            how things feel in the hand, how materials behave, and how small details shape the
            experience of using something every day. A lot of my process comes from
            experimentation, prototyping, rebuilding, and slowly refining my sense of taste and
            judgment.
          </p>
          <p>
            Outside of client work, I spend a lot of time building personal projects, improving
            my rendering and prototyping skills, and documenting the process of becoming better
            at what I do. I haven't really looked back since.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
