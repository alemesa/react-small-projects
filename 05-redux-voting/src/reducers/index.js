const initialState = {
  angular: 0,
  react: 0,
  vue: 0,
  ember: 0,
  total: 0
};

// Object.assign() is use to copy the state to the new empty object

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_REACT':
      return Object.assign({}, state, {
        react: state.react + 1,
        total: state.total + 1
      });
    case 'VOTE_ANGULAR':
      return Object.assign({}, state, {
        angular: state.angular + 1,
        total: state.total + 1
      });
    case 'VOTE_VUE':
      return Object.assign({}, state, {
        vue: state.vue + 1,
        total: state.total + 1
      });
    case 'VOTE_EMBER':
      return Object.assign({}, state, {
        ember: state.angular + 1,
        total: state.total + 1
      });
    default:
      return state;
  }
};
