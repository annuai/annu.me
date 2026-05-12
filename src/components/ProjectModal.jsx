import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay fade-in" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-actions">
          <Link to={`/work/${project.slug}`} className="expand-btn" aria-label="Expand to full page" onClick={onClose}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </Link>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        
        <div className="modal-body">
          <div className="modal-images">
            {project.images.map((img, idx) => (
              <img key={idx} src={img} alt={`${project.title} - view ${idx + 1}`} className="modal-img" />
            ))}
          </div>
          
          <div className="modal-info">
            <div className="modal-header">
              <h2>{project.title}</h2>
              <span className="modal-category">{project.category} &bull; {project.year}</span>
            </div>
            
            <div className="modal-desc">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
