import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import Restart from './Restart';
import './index.css';

// Redux Stuff
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <Restart />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
