import jwt_decode from 'jwt-decode';

const initialState = {
  token: localStorage.getItem('jwt') ? localStorage.getItem('jwt') : null,
  loggingIn: false,
  user: localStorage.getItem('jwt') ? jwt_decode(localStorage.getItem('jwt')) : null,
  userProfile: localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : null,
}

export default (state= initialState, action) => {
  switch (action.type) {

    case "AUTHENTICATION_PENDING":
      return Object.assign({}, state, {
        loggingIn: true
      });

    case "AUTHENTICATION_SUCCESS" :
      return Object.assign({}, state, {
        token: (action.payload.id_token) ? action.payload.id_token : null,
        user: (action.payload.id_token) ? jwt_decode(action.payload.id_token) : null,
        loggingIn: false
      });

    case "AUTHENTICATION_REJECTED":
      return Object.assign({}, state, {
        loggingIn: false
      });

    case "USER_LOGOUT":
      // temp solution
      localStorage.removeItem('userProfile')
      return Object.assign({}, state, {
        token: null,
        user: null,
        userProfile: null
      });

    default:
      return state;
  }
}