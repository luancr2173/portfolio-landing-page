import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <Link to={link} className="project-card-button">
          Ver projeto
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
