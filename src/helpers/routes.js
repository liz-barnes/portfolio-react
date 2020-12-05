import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

export default function Routes() {
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
        component={() => <Work />}
      />
      <Route
        exact
        path='/contact'
        component={() => <Contact />}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
