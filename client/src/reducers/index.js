import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import antdReducer from './antdReducer';
import currencyReducer from './currencyReducer';

export default combineReducers({
  mainReducer,
  antdReducer,
  currencyReducer
});
