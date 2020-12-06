import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import SingleProjectView from '../components/SingleProjectView';

export default function Routes({ projects, availableProjects }) {
  return (
    // <h1>Routes</h1>
    <Switch>
      <Route
        exact
        path='/about'
        component={() => <About />}
      />
      <Route
        exact
        path='/my-work'
        component={() => <Work projects={projects} availableProjects={availableProjects}/>}
      />
      <Route
        exact
        path='/contact'
        component={() => <Contact />}
      />
      <Route
        exact
        path="/my-work/:title"
        component={() => <SingleProjectView projects={projects} availableProjects={availableProjects}/>}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
