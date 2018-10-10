// This is a reducer

import { SET_CHARACTER_PROFILE } from './actions';

// Define initial State
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_PROFILE:
      return action.profile;
    default:
      return state;
  }
};
