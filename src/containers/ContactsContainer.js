import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {getContacts} from '../api/Contacts';
import ContactsList from './../components/ContactsList';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px'
  }
};

export default class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      modalIsOpen: false,
      selectedContact: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  static defaultProps = {
    contacts: []
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  actions = {
    deleteContact: this.deleteContact.bind(this),
    openModal: this.openModal.bind(this)
  };

  openModal(contact) {
    this.setState({
      modalIsOpen: true,
      selectedContact: contact
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedContact: null
    });
  }

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

  renderTable() {
    return (
      <table className="table table-bordered table-condensed">
        <tbody>
        <tr>
          <td>Name</td>
          <td>{ this.state.selectedContact.name ? this.state.selectedContact.name : ''}</td>
        </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <ContactsList contacts={ this.state.contacts } actions={ this.actions }/>
        <Modal isOpen={ this.state.modalIsOpen }
               onRequestClose={ this.closeModal }
               style={customStyles}
               contentLabel="Details">

          <h3>
            Edit
            <span className="pull-right">
              <button onClick={ this.closeModal } className="btn btn-xs btn-success">Close</button>
            </span>
          </h3>

          { this.state.selectedContact ? this.renderTable() : '' }
        </Modal>
      </div>
    )
  }
}