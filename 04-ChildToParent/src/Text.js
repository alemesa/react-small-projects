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
      width: '50vw',
      height: '50vh',
      position: 'absolute',
      backgroundColor: 'red',
      transition: 'all 0.5s ease-in'
    };

    return <div style={styles1}>Text</div>;
  }
}

export default Text;
