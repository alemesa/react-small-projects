import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '50',
      visible: true
    };

    console.log(this.props.callBack);

    this.expand = this.expand.bind(this);
    this.shrink = this.shrink.bind(this);
  }

  expand() {
    this.props.callBack(true);
    this.setState({
      width: '100',
      visible: false
    });
  }
  shrink() {
    this.props.callBack(false);
    this.setState({
      width: '50',
      visible: true
    });
  }

  render() {
    let width = this.state.width;

    const styles2 = {
      fontFamily: 'sans-serif',
      textAlign: 'center',
      width: `${this.state.width}vw`,
      height: '50vh',
      position: `${this.state.width === '100' ? '' : ''}`,
      backgroundColor: 'blue',
      transition: 'all 1s ease-in'
    };
    return (
      <div style={styles2}>
        Video
        {this.state.visible && <button onClick={this.expand}>Expand</button>}
        {!this.state.visible && <button onClick={this.shrink}>Shrink</button>}
      </div>
    );
  }
}

export default Video;
