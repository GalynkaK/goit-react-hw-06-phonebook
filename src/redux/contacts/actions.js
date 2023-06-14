import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (nameText, numberText) => {
    return {
      payload: {
        id: nanoid(),
        name: nameText.toLowerCase(),
        number: numberText,
      },
    };
  }
);

export const delContact = createAction('contacts/delContact');
export const setFilter = createAction('contacts/setFilter');