import axios from 'axios';

export function authorizeUser (user, callback) {
  return function (dispatch) {
    dispatch({type:"AUTHENTICATION_PENDING"});
    axios.post('api/authenticate', user)
      .then((response) => {
        //response.data.email = user.email;
        console.log('user info ', response);
        dispatch({ type: 'AUTHENTICATION_SUCCESS', payload: response.data.data });
        localStorage.setItem('jwt', response.data.data.id_token);
        localStorage.setItem('access_token', response.data.data.access_token);
        localStorage.setItem('email', response.data.data.email);
        localStorage.setItem('auth0Object', JSON.stringify(response.data.data));
        callback(null, response.data.data);
      })
      .catch((error) => {
        console.log('ACTION error info ', error);
        dispatch({ type: 'AUTHENTICATION_REJECTED' });
        callback(error.response, null);
      });
  }
}

export function hardLogout () {
  return function (dispatch) {
    dispatch({type:"USER_LOGOUT"});

  }
}
