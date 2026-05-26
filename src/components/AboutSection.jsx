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
            I was born and raised in Thalassery, a small coastal town in North Malabar. My family
            got our first computer in 2004, and I still remember being fascinated by how this huge
            box connected to a monitor could somehow let me play games like Age of Empires. I didn’t
            fully understand how it worked, but I wanted to. That curiosity slowly turned into late
            nights exploring computers, learning bits of JavaScript, and spending way too much time
            pulling things apart just to understand them better.
          </p>

          <p>
            At some point, I came across Apple’s Human Interface Guidelines, and it completely
            changed how I looked at technology. I was fascinated that there were people thinking
            deeply about how something should feel to use — not just how it looked, but how it
            behaved. That’s what pulled me toward design.
          </p>

          <p>
            My path into design wasn’t very smooth. My first college experience honestly felt like a
            mess. I made great friends there, but I struggled a lot and realized I lacked many of
            the skills I needed. After a year, I left and started interning instead, trying to learn
            everything I could about computers, interfaces, and digital products. Eventually, I got
            into National Institute of Design, where I discovered workshops, prototyping, materials,
            and physical making. That was the first time design started feeling real to me.
          </p>

          <p>
            After a few internships, I joined frog as a Design Technologist / Industrial Designer.
            For two years, I got to work across interfaces, technology, and physical products, and
            it shaped the way I think about design today. I’ve never really seen hardware and
            software as separate things — to me, they’re both part of the same experience.
          </p>

          <p>
            Later, I started my own lifestyle products brand. It didn’t turn out exactly the way I
            imagined, but it taught me more than any job probably could. I learned what it means to
            take an idea from a sketch to something real that people can hold, use, criticize, and
            connect with.
          </p>

          <p>
            These days, I’m mostly interested in the space where technology and physical products
            meet. I care a lot about the small details — how a product feels in the hand, how
            materials age, how interfaces respond, how vibration, sound, weight, and movement affect
            the experience of using something. A big part of my process is still experimentation:
            sketching, prototyping, rebuilding things, making mistakes, and slowly developing better
            judgment over time.
          </p>

          <p>
            Outside of work, I spend a lot of time building personal projects, improving my
            rendering and prototyping skills, and documenting the process of becoming better at what
            I do. I’m also deeply into motorcycles, and whenever I can, I’m out riding trails or
            exploring random back roads around Kerala. A lot of my interest in products probably
            comes from there too — from paying attention to machines, terrain, ergonomics, and the
            feeling of being connected to something mechanical.
          </p>

          <p>
            Right now, I’m looking for opportunities to keep learning, work with thoughtful people,
            and contribute to products that bring together technology, engineering, and design in
            meaningful ways.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
