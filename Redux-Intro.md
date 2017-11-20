### React Redux Intro

```bash
# Add React-Redux and Redux
# Redux is not dependent on React
yarn add redux react-redux
```


### On the parent component index.js
```javascript
// INDEX.JS

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

// Start the start with the reducer file
const store = createStore(reducer);

// Wrap the App with a Provider that passes the
// store to each child component
const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
```

### Reducer file
```javascript
// REDUCER.JS

// Declare initial state
const initialState = {
  count: 0
};

// Possible Actions
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
```

### On child component ex: Counter.js
```javascript
// COUNTER.JS

import { connect } from 'react-redux';

class Counter extends Component {
    // increment function
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };
    // decrement function
  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };
    // render the div
    render() {
        return (
        <div className="Counter">
            <h2>Counter</h2>
            <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
            </div>
        </div>
        );
    }
}

// declare what the mapToStateToProps does
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// connect the component passing mapStateToProps
export default connect(mapStateToProps)(Counter);
```