import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "./contactAction";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};
const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const contacts = createReducer([], {
  [contactActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactActions.addContactSuccess]: addContact,
  [contactActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [contactActions.changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,
  [contactActions.removeContactRequest]: () => true,
  [contactActions.removeContactSuccess]: () => false,
  [contactActions.removeContactError]: () => false,
});

export default combineReducers({
  contacts,
  loading,
  filter,
});
