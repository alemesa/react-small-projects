### React Redux Intro

```bash
# Add React-Redux
yarn add redux react-redux
```

```javascript
// Connect the component to redux
import { connect } from 'react-redux'

// mapStateToProps function
mapStateToProps(state) => {
    count: state.count
};

// change the export default
export default connect(mapStateToProps)(Counter)

// Pass a provider to wrap every child so it can uses connect()
import { Provider } from 'react-redux' 

const App = () => {
    <Provider>
        <Counter/>
    </Provider>
}

// Create a Store
import { createStore } from 'redux';

const store = createStore();

```