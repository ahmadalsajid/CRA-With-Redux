import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { history } from './store';
import Home from './home/containers/index';
import PageNotFound from './core/components/pageNotFound';
import About from './about/index';

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path="/about-us" component={About} />
      <Route component={PageNotFound}/>
    </Switch>
  </Router>
)