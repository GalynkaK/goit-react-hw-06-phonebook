import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "./Form.module.css";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/contacts-selector.js";

const Form = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);

  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert("Already exists in your contacts!");
      return;
    }

    handleSubmit({ name: name, number: number });
    form.reset();
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label}>Name </label>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChangeName}
      />
      <label className={css.label}>Number </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChangeNumber}
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;