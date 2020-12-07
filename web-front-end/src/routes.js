import React from 'react';
import { Router, Route } from 'react-router';

import Header from './components/Header/Header'
import Map from './components/Map/Map';

const Routes = (props) => (
  <Router {...props}>
    <Header/>
    <Route path="/DOSCG/map" component={Map} />
  </Router>
);

export default Routes;