import React, {Component} from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {increment, incrementAsync, decrement, decrementAsync} from '../actions/index';
import HomeComponent from '../components/index';

class HomeContainer extends Component{
  constructor (props){
    super(props);
  }

  render(){
    return (
      <HomeComponent {...this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)