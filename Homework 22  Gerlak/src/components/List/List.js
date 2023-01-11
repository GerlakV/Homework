import './List.css';

import React, { Component } from 'react';

import ListItem from '../ListItem/ListItem';

export class List extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.list.map((item) => (
          <ListItem
            key={item.id}
            todo={item}
            onToggle={this.props.onToggle}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default List;