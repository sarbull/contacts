import React, {Component} from 'react';
import Contact from './Contact';

export default class ContactsList extends Component {
  renderTodoItems(contacts) {
    return contacts.map((contact) => {
      return <Contact key={contact.id} {...contact} {...this.props.actions} />
    });
  }

  render() {
    const {contacts} = this.props;

    return (
      <div>
        <ul className="list-group">
          { this.renderTodoItems(contacts) }
        </ul>
      </div>
    );
  }
}