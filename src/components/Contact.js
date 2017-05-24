import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const {deleteContact, name, id}  = this.props;


    return (
      <li className="list-group-item">
        #{id}: { name }

        <span className="pull-right">
          <button className="btn btn-xs btn-success">Send SMS</button>
          <button className="btn btn-xs btn-info">Details</button>
          <button className="btn btn-xs btn-danger" onClick={ ()=> deleteContact(id) }>Delete</button>
        </span>
      </li>
    );
  }
}