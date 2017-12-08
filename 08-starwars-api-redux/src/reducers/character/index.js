import { combineReducers } from 'redux';
// import all reducers to be combine
import id from './id';
import profile from './profile';
import world from './world';
import movies from './movies';

// combine all reducers to pass back
export default combineReducers({
  id,
  profile,
  world,
  movies
});
