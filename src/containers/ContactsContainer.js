import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {getContacts} from '../api/Contacts';
import ContactsList from './../components/ContactsList';

export default class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  static defaultProps = {
    contacts: []
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  actions = {
    deleteContact: this.deleteContact.bind(this)
  };

  componentDidMount() {
    getContacts().then((contactsData) => {
      this.setState({
        contacts: contactsData
      });
    });
  }

  deleteContact(id) {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.id !== id
    });

    this.setState({contacts});
  }

  render() {
    return (
      <ContactsList contacts={ this.state.contacts } actions={ this.actions }/>
    )
  }
}