import './App.css';

import React, { Component } from 'react';
import {
  deleteContact,
  fetchContactsList,
  insertContact,
  updateContact,
} from '../../services/contactsService';

import Form from '../Form/Form';
import List from '../List/List';
import ListHead from '../ListHead/ListHead';

class App extends Component {
  state = {
    list: [],
    tempContact: {
      id: '',
    },
  };

  saveContact = (contact) => {
    if (contact.id) {
      return this.updateExistingContact(contact);
    } else {
      delete contact.id;
      return this.createContact(contact);
    }
  };

  createContact = (newContact) => {
    insertContact({
      ...newContact,
    }).then((data) => {
      console.log('created', data);
      this.setState({
        list: [...this.state.list, data],
      });
    });
  };

  updateExistingContact = (newContact) => {
    updateContact({
      ...newContact,
    }).then((data) => {
      console.log('updated', data);
      this.setState({
        list: this.state.list.map((item) =>
          item.id !== newContact.id ? item : data
        ),
        tempContact: {
          id: '',
        },
      });
    });
  };

  editContact = (contact) => {
    console.log('editContact', contact);
    this.setState({
      ...this.state,
      tempContact: { ...contact },
    });
  };

  removeContact = (id) => {
    deleteContact(id).then(() =>
      this.setState({
        list: this.state.list.filter((item) => item.id !== id),
      })
    );
  };

  componentDidMount() {
    fetchContactsList().then((data) => {
      console.log('list', data);
      this.setState({
        list: data,
      });
    });
  }

  render() {
    return (
      <div className="divTable paleBlueRows">
        <ListHead />
        <List
          list={this.state.list}
          onDelete={this.removeContact}
          onEdit={this.editContact}
        />
        <Form onSubmit={this.saveContact} contact={this.state.tempContact} />
      </div>
    );
  }
}

export default App;