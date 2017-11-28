import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../authenticate/containers/Auth'

const auth = new Auth();

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/about-us'}>About Us</Link>
        <button type='button' onClick={auth.logout}>Logout</button>
      </div>
    )
  }
}

export default NavBar;