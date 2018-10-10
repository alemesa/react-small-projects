## Redux Notes

* #### State

  Central Location - JS Object

* #### Action

  Change that needs to happen on the state.

* #### Reducer

Javascript function that get the state and current action and then returns the
new piece of state

An app could have 1 reducer, but usually there are `multiple reducers`

Reducers are put together with a `combineReducers function`

* #### View

  Elements rendered on the screen, render() method for React

* #### Dispatch

  Send an action to the state to be "processed"

* #### Subscribe
  To listen to a change on the state

#### Flow

dispatch => action => reducer => combineReducers => 💥
