import './Form.css';

import React, { Component } from 'react';

import TextField from '../common/TextField/TextField';

export class Form extends Component {
  state = {
    values: {
      title: '',
    },
    touched: {},
    errors: {},
    isValid: false,
  };

  onInputChange = (e) => {
    const values = {
      ...this.state.values,
      [e.target.name]: e.target.value,
    };
    const errors = this.validate(values);

    this.setState({
      values,
      errors,
      touched: {
        ...this.state.touched,
        [e.target.name]: true,
      },
      isValid: Object.keys(errors).length === 0,
    });
  };

  validate({ title }) {
    const errors = {};

    if (title === '') {
      errors.title = 'Title is required';
    }

    if (title.length > 25) {
      errors.title = 'Title is too long';
    }

    return errors;
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.elements.title.value,
    };

    this.props.onSubmit(formData);

    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <TextField
          name="title"
          placeholder="Title"
          value={this.state.values.title}
          onChange={this.onInputChange}
          isTouched={this.state.touched.title}
          error={this.state.errors.title}
        />
        <div>
          <button className="save-btn" disabled={!this.state.isValid}>
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default Form;