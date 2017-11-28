import { history } from '../../store';

export default class Auth {

  constructor() {
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    localStorage.removeItem('access_token');
    history.replace('/');
  }

  isAuthenticated() {
    let loggedIn = localStorage.getItem('jwt') === null ? false : true;
    return loggedIn;
  }
}

