import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './home/reducers/index';

export default combineReducers({
  routing: routerReducer,
  counter,
});