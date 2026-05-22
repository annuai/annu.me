import React from 'react';
import './ValuesSection.css';
import { BookOpen, FaceWink, Heart } from 'griddy-icons';
import FadeIn from './FadeIn';

const ValuesSection = () => {
  const values = [
    { icon: <BookOpen size={32} />, text: 'Keep learning.' },
    { icon: <FaceWink size={32} />, text: 'Have fun while learning.' },
    { icon: <Heart size={32} />, text: 'Empathize.' },
  ];

  return (
    <section className="values-section">
      <div className="values-container">
        <FadeIn>
          <h3 className="values-header">MY VALUES</h3>
        </FadeIn>
        <div className="values-grid">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="value-card">
                <div className="value-icon">
                  <span>{value.icon}</span>
                </div>
                <p className="value-text">{value.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
