import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-selector';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;