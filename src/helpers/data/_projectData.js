import axios from 'axios';

const baseUrl = 'https://portfolio-d1098.firebaseio.com';

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`).then((response) => {
      const allProjects = response.data;
      const projects = [];
      if (allProjects) {
        Object.keys(allProjects).forEach((projectId) => {
          projects.push(allProjects[projectId]);
        });
      }
      resolve(projects);
    }).catch((error) => reject(error));
});

const getSingleProject = (projectId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects/${projectId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export {
  getProjects,
  getSingleProject,
};
