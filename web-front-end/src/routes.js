import React from 'react';
import { Router, Route } from 'react-router';

import Map from './components/Map';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/DOSCG/map" component={Map} />
  </Router>
);

export default Routes;