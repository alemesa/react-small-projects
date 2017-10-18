import React, { Component } from 'react';
import { voteReact, voteAngular, voteVue, voteEmber } from './actions';
import reactLogo from './images/react.svg';
import angularLogo from './images/angular.svg';
import vueLogo from './images/vue.svg';
import emberLogo from './images/ember.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };
  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };
  handleVoteVue = () => {
    this.store.dispatch(voteVue());
  };
  handleVoteEmber = () => {
    this.store.dispatch(voteEmber());
  };

  render() {
    return (
      <div className="App">
        <h2>Favorite Framework?</h2>
        <div className="frameworks">
          <img src={reactLogo} onClick={this.handleVoteReact} />
          <img src={angularLogo} onClick={this.handleVoteAngular} />
          <img src={vueLogo} onClick={this.handleVoteVue} />
          <img src={emberLogo} onClick={this.handleVoteEmber} />
        </div>
      </div>
    );
  }
}

export default App;
