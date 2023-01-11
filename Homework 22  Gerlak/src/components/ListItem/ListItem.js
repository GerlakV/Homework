import './ListItem.css';

import React, { Component } from 'react';

export class ListItem extends Component {
  onElementClick = () => {
    this.props.onToggle(this.props.todo.id);
  };

  onDeleteClick = (e) => {
    e.stopPropagation();

    this.props.onDelete(this.props.todo.id);
  };

  render() {
    return (
      <li
        className={'item' + (this.props.todo.isDone ? ' done' : '')}
        onClick={this.onElementClick}
      >
        {this.props.todo.title}
        <button className="remove-btn" onClick={this.onDeleteClick}>
          X
        </button>
      </li>
    );
  }
}

export default ListItem;