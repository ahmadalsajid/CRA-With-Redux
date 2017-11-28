import React, { Component } from 'react'

export default class LoginComponent extends Component {

  constructor(props) {
    super(props);
  }

  getQuery() {
    return {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
  }
  render() {
    return (
      <div>
        <div >
          <h2>Welcome</h2>
        </div>
        <div>
        <form>
            <div className="form-group login_formgrp">
              <label htmlFor="exampleInputEmail1" >Email</label>
              <input type="email" ref="email"
                     placeholder="Email"/>
            </div>
            <div >
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" ref="password"
                     placeholder="Password"/>
            </div>

            {
              this.props.auth.loggingIn?
                <div>
                  <button type="submit" disabled>

                    <span>Logging in..</span>
                  </button>
                </div>:
                <div >
                  <button onClick={this.props.clickedSubmit}>Log in</button>
                </div>
            }
          </form>
        </div>

      </div>
    );
  }
}
