import React, { Component } from 'react';
import NavBar from '../../core/components/navbar';

class HomeComponent extends Component {

  constructor (props) {
    super(props);
  }

  render(){
    return (
      <div>
        <NavBar/>
        <h1>Home</h1>
        <p>Count: {this.props.count}</p>
        <p>
          <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
          <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
        </p>
        <p>
          <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrement</button>
          <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrementing Async</button>
        </p>
        <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
      </div>
    )
  }
}

export default HomeComponent;