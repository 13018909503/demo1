import { combineReducers } from 'redux';
import counter from './counter';
import update from './update';

export default combineReducers({
  counter,
  update
});
