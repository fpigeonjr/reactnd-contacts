import React, { Component } from "react";

export class ListContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact => (
          <li key={contact.id}> {contact.name} </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
