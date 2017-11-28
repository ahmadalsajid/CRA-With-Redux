import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { history } from '../../store';
import {authorizeUser} from '../actions/index';
import LoginComponent from '../components/loginComponent';

class LoginContainer extends Component {
  constructor (props){
    super(props);
  }

  loginUser(event) {
    event.preventDefault();
    console.log('logging in')
    this.props.authorizeUser(this.refs.child.getQuery(), (error, result) => {
      if (error){
        console.log(error)
      } else {
        history.replace('/')
      }
    });
  }

  render() {
    console.log('loginContainer')
    return (
      <LoginComponent ref="child" {...this.props} clickedSubmit={this.loginUser.bind(this)}/>
    );
  }


}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
  authorizeUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)