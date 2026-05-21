import React, { useState } from 'react';
import Lightbox from './Lightbox';
import './ProjectLayout.css';

const ProjectLayout = ({ metadata, children }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const images = metadata.images || [];

  const prev = () => setLightboxIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setLightboxIndex(i => (i + 1) % images.length);

  return (
    <div className="default-project-layout">
      <div className="default-project-info">
        <h1>{metadata.title}</h1>
        <span className="default-project-category">
          {metadata.category} &bull; {metadata.year}
        </span>
        <p className="default-project-desc">{metadata.description}</p>
        {children && <div className="default-project-custom">{children}</div>}
      </div>

      <div className="default-project-images">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${metadata.title} — view ${idx + 1}`}
            className="default-detail-img"
            onClick={() => setLightboxIndex(idx)}
            style={{ cursor: 'zoom-in' }}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
};

export default ProjectLayout;
