import React from 'react';
import './ProjectLayout.css';

const ProjectLayout = ({ metadata, children }) => {
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
        {metadata.images && metadata.images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`${metadata.title} - view ${idx + 1}`} 
            className="default-detail-img" 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectLayout;
