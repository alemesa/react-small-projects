import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/store';
import { getCharacters } from './reducers/characters/actions';

// Create a store with all reducers & middleware + triggering the Redux Dev Tools
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// Tells the store to dispatch an action
store.dispatch(getCharacters());

// Wrap our app with a Provider and pass the store so all childs have access to the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
