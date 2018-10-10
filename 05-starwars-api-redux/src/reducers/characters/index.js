// This is a reducer

import { SET_CHARACTERS } from './actions';

// Define initial State
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.characters;
    default:
      return state;
  }
};
