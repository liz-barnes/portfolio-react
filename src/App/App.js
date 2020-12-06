// import React from 'react';
// import './App.scss';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
// import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from '../components/Navbar';
import Routes from '../helpers/routes';
import { getProjects } from '../helpers/data/_projectData';

// fbConnection();

class App extends React.Component {
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
    const { projects, availableProjects } = this.state;
    return (
      <div className='App'>
        <Router>
          <MyNavbar />
          <Routes projects={projects} availableProjects={availableProjects}/>
        </Router>
      </div>
    );
  }
}

export default App;
