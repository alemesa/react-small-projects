// This is a reducer
import { SET_CHARACTER_WORLD } from './actions';

// Define initial State
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_WORLD:
      return action.world;
    default:
      return state;
  }
};
