import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-selector';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});