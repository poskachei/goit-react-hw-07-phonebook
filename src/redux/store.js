import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./tasks/taskReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
