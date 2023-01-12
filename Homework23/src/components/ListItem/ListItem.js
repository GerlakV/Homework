import './ListItem.css';

import React, { Component } from 'react';

export class ListItem extends Component {
  onDeleteClick = (e) => {
    e.stopPropagation();

    this.props.onDelete(this.props.contact.id);
  };

  onEditClick = (e) => {
    e.stopPropagation();
    console.log('onEditClick', this.props.contact);
    this.props.onEdit(this.props.contact);
  };

  render() {
    return (
      <div className="divTableRow">
        <div className="divTableCell">{this.props.contact.name}</div>

        <div className="divTableCell">{this.props.contact.surname}</div>

        <div className="divTableCell">{this.props.contact.email}</div>

        <div className="divTableCell">
          <button className="edit-btn" onClick={this.onEditClick}>
            Edit
          </button>
          
          <button className="remove-btn" onClick={this.onDeleteClick}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;