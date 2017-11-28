import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './home/reducers/index';
import auth from './authenticate/reducers/index';

export default combineReducers({
  routing: routerReducer,
  counter,
  auth,
});