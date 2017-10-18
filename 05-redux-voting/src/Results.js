import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  getAngularCount() {
    return this.store.getState().angular;
  }

  getReactCount() {
    return this.store.getState().react;
  }

  getVueCount() {
    return this.store.getState().vue;
  }

  getEmberCount() {
    return this.store.getState().ember;
  }

  getTotalCount() {
    return this.store.getState().total;
  }

  getReactPercentage() {
    if ((this.store.getState().total && this.store.getState().react) !== 0) {
      return (
        Math.round(this.getReactCount() / this.store.getState().total * 100) +
        '%'
      );
    } else {
      return '';
    }
  }
  getAngularPercentage() {
    if ((this.store.getState().total && this.store.getState().angular) !== 0) {
      return (
        Math.round(this.getAngularCount() / this.store.getState().total * 100) +
        '%'
      );
    } else {
      return '';
    }
  }
  getVuePercentage() {
    if ((this.store.getState().total && this.store.getState().vue) !== 0) {
      return (
        Math.round(this.getVueCount() / this.store.getState().total * 100) + '%'
      );
    } else {
      return '';
    }
  }
  getEmberPercentage() {
    if ((this.store.getState().total && this.store.getState().ember) !== 0) {
      return (
        Math.round(this.getEmberCount() / this.store.getState().total * 100) +
        '%'
      );
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="Results">
        <div className="language-container">
          <span className="label">React: {this.getReactCount()}</span>
          <div className="progress-bar">
            <div
              className="progress-bar-inner react-bar"
              style={{
                width: this.getReactPercentage()
              }}
            >
              {this.getReactPercentage()}
            </div>
          </div>
        </div>
        <div className="language-container">
          <span className="label">Angular: {this.getAngularCount()}</span>
          <div className="progress-bar">
            <div
              className="progress-bar-inner angular-bar"
              style={{
                width: this.getAngularPercentage()
              }}
            >
              {this.getAngularPercentage()}
            </div>
          </div>
        </div>
        <div className="language-container">
          <span className="label">Vue: {this.getVueCount()}</span>
          <div className="progress-bar">
            <div
              className="progress-bar-inner vue-bar"
              style={{
                width: this.getVuePercentage()
              }}
            >
              {this.getVuePercentage()}
            </div>
          </div>
        </div>
        <div className="language-container">
          <span className="label">Ember: {this.getEmberCount()}</span>
          <div className="progress-bar">
            <div
              className="progress-bar-inner ember-bar"
              style={{
                width: this.getEmberPercentage()
              }}
            >
              {this.getEmberPercentage()}
            </div>
          </div>
        </div>

        <span className="label label-success">
          Total: {this.getTotalCount()}
        </span>
      </div>
    );
  }
}

export default Results;
