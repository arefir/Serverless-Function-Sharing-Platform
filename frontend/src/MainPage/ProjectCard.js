import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ status, title, link, date, authorFile }) {

  const navigate = useNavigate(); // Initialize navigate

  const handleClick = () => {
    navigate('/example'); // Navigate to ExampleFunc on click
  };

  return (
    <article className="project-card" onClick={handleClick}>
      <div className="card-content">
        <span className="status-badge">{status}</span>
        <h2 className="project-title">{title}</h2>
        <div className="project-info">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c70408ebfb13ef62e6cae638acba9cf2ac7a479607181634b085f7af29e3602?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="project-icon" />
          <span className="content-link">{link}</span>
          <div className="project-meta">
            <time dateTime={date}>{date}</time>
            <span className="separator-project">•</span>
            <span className="author-project">{authorFile}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
