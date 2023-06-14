import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { addContact, delContact } from "redux/contacts/actions";
import { getContacts, getFilter } from "redux/contacts/contacts-selector";

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const [firstRenderFlag, setFlag] = useState(true);

  useEffect(() => { }, []);

  useEffect(() => {
    if (firstRenderFlag) {
      const contactsFromLocalStorage = localStorage.getItem('contactList');

      if (contactsFromLocalStorage !== 'undefined') {
        const parsedContacts = JSON.parse(contactsFromLocalStorage);

        if (parsedContacts) {
        }
      }
      setFlag(false);
    } else {
      localStorage.setItem('contactList', JSON.stringify(contacts));
    }
  }, [contacts, firstRenderFlag]);

  const handleSubmit = e => {
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }
  };

  const handleDelete = e => {
    dispatch(delContact(e));
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form handleSubmit={handleSubmit} />
      <h2> Contacts</h2>
      <Filter />
      <ContactList
        contacts={filteredContacts}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;