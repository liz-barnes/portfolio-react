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
    // this.filterProjects();
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
  //   getProjects().then((projects) => {
  //     this.setState({ projects });
  //     projects.forEach((project) => {
  //       if (project.available === 'true' || project.available === true) {
  //         this.setState({
  //           availableProjects: this.state.availableProjects.concat(project),
  //         });
  //     });
  //   });
  // }

  // getAvailableProjects = () => {
  //   const { projects } = this.state;
  //   projects.forEach((project) => {
  //     if (project.available === 'true' || project.available === true) {
  //       this.setState({
  //         availableProjects: this.state.availableProjects.concat(project),
  //       });
  //       console.warn('aval', this.state.availableProjects);
  //     } else {
  //       console.warn('boooo');
  //     }
  //   });
  // };

  // filterProjects = () => {
  //   const filter = this.state.projects.filter((project) => project.available === true);
  //   this.setState({ availableProjects: filter });
  //   console.warn('filter', filter);
  //   // filter.map((project) => <ProjectCard key={project.id} project={project} />);
  //   // console.warn('filter', filter);
  // }
  // showProjects = () => {
  //   const { projects } = this.state;
  //   projects.forEach((project) => {
  //     if (project.availability === true) {
  //       <ProjectCard />;
  //     }
  //   });
  // }

  render() {
    // const filterArray = this.getAvailableProjects();
    const { availableProjects } = this.state;
    return (
      <>
      <h1>Work</h1>
      {availableProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      {/* {projects.filter((project) => project.availabe === true || project.availabe === true)} */}

      {/* {projects.map((project) => <ProjectCard key={project.id} project={project} />)} */}
      </>
    );
  }
}
