import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div className={css.contactList}>
    <ul className={css.contactList}>
      {contacts.map((contact, id) => (
        <li key={id} className={css.contactItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.deleteButton}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;