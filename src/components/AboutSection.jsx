import React from 'react';
import './AboutSection.css';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* ── Left: Photo ── */}
        <div className="about-photo-wrapper">
          <img src="/images/me.jpg" alt="Annuai" className="about-photo" />
        </div>

        {/* ── Right: Content ── */}
        <div className="about-content">

          <div className="about-heading">
            <span className="about-heading-small">who is</span>
            <h1 className="about-heading-large">Annuai?</h1>
            <a
              className="about-pronunciation"
              href="https://ipa-reader.com/?text=%20%2F%CA%8Cn.nu%CB%90.ve%C9%AA%2F&voice=Aditi"
              target="_blank"
              rel="noopener noreferrer"
            >
              /ʌn.nuː.veɪ/
            </a>
          </div>

          <a href="mailto:hi.annuai@gmail.com" className="status-tag">
            <span className="pulse-dot"></span>
            Currently looking for work
          </a>

          <div className="about-body">
            <p>
              I was born and raised in Thalassery, a small coastal town in North Malabar. My family
              got our first computer in 2004, and I still remember being fascinated by how this huge
              box connected to a monitor could somehow let me play games like Age of Empires. I didn't
              fully understand how it worked, but I wanted to. That curiosity slowly turned into late
              nights exploring computers, learning bits of JavaScript, and spending way too much time
              pulling things apart just to understand them better.
            </p>

            <p>
              At some point, I came across Apple's Human Interface Guidelines, and it completely
              changed how I looked at technology. I was fascinated that there were people thinking
              deeply about how something should feel to use — not just how it looked, but how it
              behaved. That's what pulled me toward design.
            </p>

            <p>
              My path into design wasn't very smooth. My first college experience honestly felt like a
              mess. I made great friends there, but I struggled a lot and realized I lacked many of
              the skills I needed. After a year, I left and started interning instead, trying to learn
              everything I could about computers, interfaces, and digital products. Eventually, I got
              into National Institute of Design, where I discovered workshops, prototyping, materials,
              and physical making. That was the first time design started feeling real to me.
            </p>

            <p>
              After a few internships, I joined frog as a Design Technologist / Industrial Designer.
              For two years, I got to work across interfaces, technology, and physical products, and
              it shaped the way I think about design today. I've never really seen hardware and
              software as separate things — to me, they're both part of the same experience.
            </p>

            <p>
              Later, I started my own lifestyle products brand. It didn't turn out exactly the way I
              imagined, but it taught me more than any job probably could. I learned what it means to
              take an idea from a sketch to something real that people can hold, use, criticize, and
              connect with.
            </p>

            <p>
              These days, I'm mostly interested in the space where technology and physical products
              meet. I care a lot about the small details — how a product feels in the hand, how
              materials age, how interfaces respond, how vibration, sound, weight, and movement affect
              the experience of using something. A big part of my process is still experimentation:
              sketching, prototyping, rebuilding things, making mistakes, and slowly developing better
              judgment over time.
            </p>

            <p>
              Outside of work, I spend a lot of time building personal projects, improving my
              rendering and prototyping skills, and documenting the process of becoming better at what
              I do. I'm also deeply into motorcycles, and whenever I can, I'm out riding trails or
              exploring random back roads around Kerala. A lot of my interest in products probably
              comes from there too — from paying attention to machines, terrain, ergonomics, and the
              feeling of being connected to something mechanical.
            </p>

            <p>
              Right now, I'm looking for opportunities to keep learning, work with thoughtful people,
              and contribute to products that bring together technology, engineering, and design in
              meaningful ways.
            </p>
          </div>

          {/* Superpowers */}
          <div className="about-superpowers">
            <h2 className="about-superpowers-title">My superpowers</h2>
            <div className="about-superpowers-grid">
              <div className="about-superpower">
                <h4>Hardware meets software</h4>
                <p>I've never seen physical and digital as separate disciplines. Working across interfaces, electronics, and objects means I can spot where they break each other — and fix it.</p>
              </div>
              <div className="about-superpower">
                <h4>Hands-on making</h4>
                <p>My process starts with sketches and ends with something you can hold. I prototype early and often — mistakes made in foam or code are cheaper than ones made in tooling.</p>
              </div>
              <div className="about-superpower">
                <h4>Obsessive detail</h4>
                <p>I notice how materials age, how a click sounds, how weight shifts in the hand. I believe the tiny things people stop consciously noticing are the ones that make or break a product.</p>
              </div>
              <div className="about-superpower">
                <h4>Learning by taking apart</h4>
                <p>Whether it's a motorcycle engine or a design system, I understand things best by dismantling them. Curiosity is the oldest skill I have — everything else follows from it.</p>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="about-socials">
            <a href="https://www.linkedin.com/in/annuai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://instagram.com/annuai" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/annu_ai" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <TwitterIcon />
            </a>
            <a href="https://github.com/annuai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="mailto:hi.annuai@gmail.com" className="about-email-link">
              hi.annuai@gmail.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
