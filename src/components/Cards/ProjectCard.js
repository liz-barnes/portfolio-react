import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
      <div id={project.firebaseKey} className="project-card-container" style={{ backgroundImage: `url(${project.screenshot})` }}>
        <div class="project-card">
          <div class="hover-content">
            <p class="project-type">{project.type}</p>
            <h6 class="project-title">{project.title}</h6>
            <p>{project.description}</p>
            <div class="project-btn-container mt-4">
              <Link className='project-link view-project-btn' to={`/my-work/${project.title}`} project={project}>
                view project
              </Link>
              <a className="project-link" href={project.url} rel="noreferrer" target="_blank" class="outline project-btn visit-site-btn" id={project.firebaseKey}>visit site</a>
            </div>
            </div>
        </div>
      </div>
  );
}
