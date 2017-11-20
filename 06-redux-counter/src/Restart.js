import React, { Component } from 'react';
// Redux Stuff
import { connect } from 'react-redux';

class Restart extends Component {
  restart = () => {
    this.props.dispatch({ type: 'RESTART' });
  };

  render() {
    return (
      <div className="Restart">
        <button onClick={this.restart}>Restart</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Restart);
