import axios from "axios";
import contactActions from "./contactAction";

axios.defaults.baseURL = "http://localhost:2000";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(contactActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactActions.removeContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
