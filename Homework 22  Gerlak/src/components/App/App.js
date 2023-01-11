import './App.css';

import React, { Component } from 'react';
import {
  addTodo,
  getTodosList,
  removeTodo,
  updateTodo,
} from '../../services/todosService';

import Form from '../Form/Form';
import List from '../List/List';

class App extends Component {
  state = {
    list: [],
  };

  toggleTodo = (id) => {
    const todo = this.state.list.find((item) => item.id === id);
    updateTodo({ ...todo, isDone: !todo.isDone }).then((data) => {
      this.setState({
        list: this.state.list.map((item) => (item.id !== id ? item : data)),
      });
    });
  };

  deleteTodo = (id) => {
    removeTodo(id).then(() =>
      this.setState({
        list: this.state.list.filter((item) => item.id !== id),
      })
    );
  };

  createTodo = (newTodo) => {
    addTodo({
      ...newTodo,
      isDone: false,
    }).then((data) => {
      this.setState({
        list: [...this.state.list, data],
      });
    });
  };

  componentDidMount() {
    getTodosList().then((data) =>
      this.setState({
        list: data,
      })
    );
  }

  render() {
    return (
      <>
        <List
          list={this.state.list}
          onToggle={this.toggleTodo}
          onDelete={this.deleteTodo}
        />
        <Form onSubmit={this.createTodo} />
      </>
    );
  }
}

export default App;