import './ListHead.css';

import React, { Component } from 'react';

export class ListHead extends Component {
  render() {
    return (
      <div className="divTableHeading">
        <div className="divTableRow">
          <div className="divTableHead">First Name</div>
          <div className="divTableHead">Last Name</div>
          <div className="divTableHead">Email</div>
          <div className="divTableHead">Actions</div>
        </div>
      </div>
    );
  }
}

export default ListHead;