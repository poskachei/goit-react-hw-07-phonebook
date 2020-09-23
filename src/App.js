import React, { Component } from "react";
import { connect } from "react-redux";

import contactsOperations from "./redux/tasks/contactsOperations";
import contactsSelectors from "./redux/tasks/contactsSelectors";

import Appbar from "./components/Appbar/index";
import ContactForm from "./components/Form/Form";
import ContactList from "./components/List/List";
import Filter from "./components/Filter/Filter";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className="pnohebook-container">
        {this.props.isLoadingContacts && <h1> LOADING...</h1>}
        <Appbar />
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
