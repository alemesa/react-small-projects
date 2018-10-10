import { combineReducers } from 'redux';
// import all reducers to be combine
import characters from './characters';
import character from './character';

// combine all reducers to pass back
export default combineReducers({
  characters,
  character
});
