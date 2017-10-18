import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Results from './Results';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import myApp from './reducers';

let store = createStore(myApp);

function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store} />
      <Results store={store} />
    </div>,
    document.getElementById('root')
  );
  registerServiceWorker();
}

store.subscribe(render);

render();
