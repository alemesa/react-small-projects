import React from 'react';
import { render } from 'react-dom';
import Text from './Text';
import Video from './Video';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  display: 'flex',
  color: 'white'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shrink: false
    };

    this.handleSize = this.handleSize.bind(this);
  }

  handleSize(clicked) {
    console.log('being called');
    console.log(clicked);
    console.log(this.state.shrink);
    if (clicked) {
      this.setState({
        shrink: true
      });
    } else {
      this.setState({
        shrink: false
      });
    }
    console.log(this.state.shrink);
  }

  render() {
    return (
      <div style={styles}>
        <Text shrink={this.state.shrink} />
        <Video callBack={this.handleSize} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
