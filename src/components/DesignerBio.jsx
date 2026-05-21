import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import './DesignerBio.css';

const DesignerBio = () => {
  return (
    <section className="designer-bio-section">
      <FadeIn>
        <div className="bio-container">
          <div className="bio-left">
            <span className="bio-label">About</span>
            <Link to="/about" className="bio-more-link">
              Full story&nbsp;→
            </Link>
          </div>
          <div className="bio-right">
            <p className="bio-statement">
              I'm Annuai, an Industrial Designer and maker from Kannur, Kerala, exploring the intersection of industrial design, digital interfaces, and tactile materiality — creating products that feel intuitive, functional, and emotionally resonant.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default DesignerBio;
