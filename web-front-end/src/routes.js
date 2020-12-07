import React from 'react';
import { Router, Route } from 'react-router';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map';
import ValueAnswer from './components/ValueAnswer/ValueAnswer';

const Routes = (props) => (
  <Router {...props}>
    <Header/>
    <Route path="/DOSCG/xyz" component={() => <ValueAnswer question="X, Y, 5, 9, 15, 23, Z" description="Please finding X, Y, Z value" url="/api/xyz" /> } />
    <Route path="/DOSCG/bc" component={() => <ValueAnswer question="If A = 21, A + B = 23, A + C = -21" description="Please finding B and C value" url="/api/bc"/> } />
    <Route path="/DOSCG/map" component={Map} />
    <Footer/>
  </Router>
);

export default Routes;