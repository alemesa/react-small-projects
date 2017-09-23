import React from 'react';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles1 = {
      fontFamily: 'sans-serif',
      textAlign: 'center',
      width: `${this.props.shrink ? '0' : '50vw'}`,
      //width: `${this.state.width}vw`,
      height: '50vh',
      backgroundColor: 'red',
      transition: 'all 1s ease-in'
    };

    return <div style={styles1}>Text</div>;
  }
}

export default Text;
