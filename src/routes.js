import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { history } from './store';
import Home from './home/containers/index';
import PageNotFound from './core/components/pageNotFound';
import About from './about/index';
import Auth from './authenticate/containers/Auth';
import LoginContainer from './authenticate/containers/loginContainer';

const auth = new Auth();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
     auth.isAuthenticated()? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


export default () => (
  <Router history={history}>
    <Switch>
      {/*<Route exact path={'/'} render={(props)=><LoginContainer {...props}/>}/>*/}
      <Route exact path={'/login'} render={(props)=><LoginContainer {...props}/>}/>
      <PrivateRoute exact path={'/'} component={Home}/>
      <PrivateRoute exact path="/about-us" component={About} />
      <Route component={PageNotFound}/>
    </Switch>
  </Router>
)