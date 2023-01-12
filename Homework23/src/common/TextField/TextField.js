import './TextField.css';

import React, { Component } from 'react';

export class TextField extends Component {
  render() {
    let classes = this.props.classes;
    classes +=
      this.props.isTouched && this.props.error ? ' invalid-input ' : '';
    return (
      <div className={classes}>
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        {this.props.isTouched && this.props.error ? (
          <div className="error">{this.props.error}</div>
        ) : null}
      </div>
    );
  }
}

export default TextField;