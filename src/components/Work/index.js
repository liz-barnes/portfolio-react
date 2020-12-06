import React, { Component } from 'react';
import { getProjects } from '../../helpers/data/_projectData';
import ProjectCard from '../Cards/ProjectCard';

export default class Work extends Component {
  state = {
    projects: [],
    availableProjects: [],
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    getProjects().then((projects) => {
      this.setState({ projects });
      projects.forEach((project) => {
        if (project.available === true || project.available === 'true') {
          this.setState({
            availableProjects: this.state.availableProjects.concat(project),
          });
          console.warn('project', project.title);
        }
      });
    });
  }

  render() {
    const { availableProjects } = this.state;
    return (
      <div className="work-page-container">
        <div id="projectsContainer">
        {availableProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    );
  }
}
