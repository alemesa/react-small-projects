// This is a reducer

import { SET_CHARACTER_MOVIES } from './actions';

// Define initial State
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_MOVIES:
      return action.movies;
    default:
      return state;
  }
};
