import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../core/components/navbar';

const About = props => (
  <div>
    <NavBar/>
    <h1>About us</h1>
    <p>Want to know about us!</p>
    <button onClick={() => props.changePage()}>Go to home page via redux</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(About)