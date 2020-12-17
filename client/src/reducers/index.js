import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import antdReducer from './antdReducer';

export default combineReducers({
  mainReducer,
  antdReducer,
});
