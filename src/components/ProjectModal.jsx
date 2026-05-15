import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={project.thumbnail} alt={project.title} />
          </div>
          
          <div className="modal-info">
            <div className="modal-header">
              <span className="project-category">{project.category}</span>
              <h2>{project.title}</h2>
              <span className="project-year">{project.year}</span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="modal-footer">
              <Link to={`/work/${project.slug}`} className="view-project-link" onClick={onClose}>
                View Full Project &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
