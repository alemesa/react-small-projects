import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '50',
      visible: true,
      left:'50'
    };

    console.log(this.props.callBack);

    this.expand = this.expand.bind(this);
    this.shrink = this.shrink.bind(this);
  }

  expand() {
    this.props.callBack(true);
    this.setState({
      width: '100',
      visible: false,
      left: '0'
    });
  }
  shrink() {
    this.props.callBack(false);
    this.setState({
      width: '50',
      visible: true,
      left:'50'
    });
  }

  render() {
    let width = this.state.width;

    const styles2 = {
      fontFamily: 'sans-serif',
      position: 'relative',
      textAlign: 'center',
      width: `${this.state.width}vw`,
      height: '50vh',
      left: `${this.state.left}%`,
      backgroundColor: 'blue',
      transition: 'all 0.5s ease-in'
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
