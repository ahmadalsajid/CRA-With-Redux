import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home/containers/index';
import PageNotFound from './core/components/pageNotFound';
import About from './about';

class App extends Component {
  render(){
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route component={PageNotFound}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
