import './Form.css';

import React, { Component } from 'react';

import TextField from '../../common/TextField/TextField';

export class Form extends Component {
  static defState = {
    values: {
      name: '',
      surname: '',
      email: '',
    },
    editId: '',
    touched: {},
    errors: {},
    isValid: false,
  };

  state = { ...Form.defState };

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

  validate(inputsObj) {
    const errors = {};

    for (const key in inputsObj) {
      const value = inputsObj[key];
      if (!value || value === '') {
        errors[key] = 'Value is required';
      }
    }
    console.log('errors', errors);
    return errors;
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: this.state.editId,
      name: e.target.elements.name.value,
      surname: e.target.elements.surname.value,
      email: e.target.elements.email.value,
    };

    this.props.onSubmit(formData);
    this.setState({ ...Form.defState });
    e.target.reset();
  };

  static getDerivedStateFromProps(props, state) {
    console.log('new props', props);
    console.log('state', state);
    if (props.contact.id !== '' && state.editId === '') {
      const newState = {
        ...Form.defState,
        values: props.contact,
        editId: props.contact.id,
      };
      console.log('SET NEW STATE', newState);
      return newState;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="divTableFoot tableFootStyle">
        <form className="divTableRow" onSubmit={this.onFormSubmit}>
          <TextField
            name="name"
            placeholder="First Name"
            classes="divTableCell"
            value={this.state.values.name}
            onChange={this.onInputChange}
            isTouched={this.state.touched.name}
            error={this.state.errors.name}
          />
          <TextField
            name="surname"
            placeholder="Last Name"
            classes="divTableCell"
            value={this.state.values.surname}
            onChange={this.onInputChange}
            isTouched={this.state.touched.surname}
            error={this.state.errors.surname}
          />
          <TextField
            name="email"
            placeholder="Email"
            classes="divTableCell"
            value={this.state.values.email}
            onChange={this.onInputChange}
            isTouched={this.state.touched.email}
            error={this.state.errors.email}
          />
          <div className="divTableCell">
            <button className="save-btn" disabled={!this.state.isValid}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;