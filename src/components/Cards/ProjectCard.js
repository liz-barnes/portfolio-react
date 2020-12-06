// import React from 'react';

// export default function ProjectCard({ project }) {
//   return (
//     <h1>{project.title}</h1>
//   );
// }

import React from 'react';

export default function ProjectCard({ project }) {
  return (
  // <div className="project-card-container">
      <div id={project.firebaseKey} className="project-card-container" style={{ backgroundImage: `url(${project.screenshot})` }}>
        <div class="project-card">
          <div class="hover-content">
            <p class="project-type">{project.type}</p>
            <h6 class="project-title">{project.title}</h6>
            <p>{project.description}</p>
            <div class="project-btn-container mt-4">
              <a className="project-link" href={project.url} rel="noreferrer" target="_blank" class="outline project-btn visit-site-btn" id={project.firebaseKey}>visit site</a>
            </div>
            </div>
        </div>
      </div>
  // </div>
  );
}

// import projectData from '../helpers/data/_projectsData';
// // import projectView from './_projectView';

// const buildProjects = () => {
//   projectData.getProjects().then((response) => {
//     response.forEach((project) => {
//       if (project.available === 'true') {
//         $('#projectsContainer').append(`
// <div id="project-${project.firebaseKey}" class="project-card-container" style="background-image: url(${project.screenshot})">
//   <div class="project-card">
//     <div class="hover-content">
//       <p class="project-type">${project.type}</p>
//       <h6 class="project-title">${project.title}</h6>
//       <p>${project.description}</p>
//       <div class="project-btn-container mt-4">
//         <a href="${project.url}" target="_blank" class="outline project-btn visit-site-btn" id="${project.firebaseKey}">visit site</a>
//       </div>
//       </div>
//   </div>
// </div>
//         `);
//       }
//       // $('body').on('click', '.view-project-btn', (e) => {
//       //   e.stopImmediatePropagation();
//       //   const projectId = e.currentTarget.id;
//       //   console.warn(projectId);
//       //   projectData.getSingleProject(projectId).then((project) => {
//       //   });
//     });
//   });
// };
// //  <button id="${project.firebaseKey}" class="view-project-btn">View Project</button>
// // <button class="btn-outline view-project-btn project-btn" id="${project.firebaseKey}">view project</button>
// // <a href="${project.url}" target="_blank" class="outline project-btn visit-site-btn" id="${project.firebaseKey}">visit site</a>

// export default { buildProjects };
