import React from 'react';
import './DesignerBio.css';

const DesignerBio = () => {
  return (
    <section className="designer-bio-section fade-in">
      <div className="bio-container">
        <div className="bio-text">
          <p>
            {/* Annuai is an Industrial Designer & Maker currently exploring the intersection of industrial design, digital interfaces, and tactile materiality. Based in Kannur, Kerala, he focuses on creating products that are both functional and emotionally resonant. */}
            I’m Annuai, an Industrial Designer and maker from Kannur, Kerala, exploring the intersection of industrial design, digital interfaces, and tactile materiality. My work focuses on creating products that feel intuitive, functional, and emotionally resonant — from consumer electronics to lifestyle products and experimental prototypes.
          </p>
          <p>
            I enjoy building things hands-on and spend a lot of time prototyping, testing, refining details, and understanding how products should behave and feel in the real world. My process combines sketching, 3D modeling, systems thinking, fabrication, and rapid prototyping to take ideas from concept to working objects.
            {/* With a background in product development and a passion for finding the right details, his work spans from consumer electronics to lifestyle goods, always prioritizing the user experience and the physical presence of the object. */}
          </p>
        </div>
        <div className="bio-links">
          <a href="mailto:hi.annuai@gmail.com" className="bio-link">Say Hi 👋</a>
          {/* <a href="https://www.linkedin.com/in/annuai/" target="_blank" rel="noopener noreferrer" className="bio-link">LinkedIn</a> */}
          {/* <a href="https://instagram.com/annuai" target="_blank" rel="noopener noreferrer" className="bio-link">Instagram</a> */}
        </div>
      </div>
    </section>
  );
};

export default DesignerBio;
