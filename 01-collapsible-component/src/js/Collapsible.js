import React from 'react';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
      height: this.refs.inner.clientHeight
    });
  }

  render() {
    let { title, children } = this.props;
    let { isExpanded, height } = this.state;
    let currentHeight = isExpanded ? height : 0;

    return (
      <div
        className={`panel${isExpanded ? ' is-expanded' : ''}`}
        onClick={e => this.handleToggle(e)}
      >
        <div className="panel-heading">
          <h2>
            {title} <span> {isExpanded ? '🔓' : '🔒'} </span>
          </h2>
        </div>
        <div
          className="panel-collapse"
          style={{ height: currentHeight + 'px' }}
        >
          <div className="panel-body" ref="inner">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapsible;
