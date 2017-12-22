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
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button className="contact-remove">Remove</button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
