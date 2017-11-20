import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import Restart from './Restart';

// Redux Stuff
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESTART':
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <Restart />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
