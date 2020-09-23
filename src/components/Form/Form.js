import React, { Component } from "react";
import { connect } from "react-redux";

import contactsOperation from "../../redux/tasks/contactsOperations";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name && number) {
      this.props.onAddContact(name, number);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="phone">Phone</label>

          <input
            type="text"
            id="phone"
            name="number"
            value={number}
            onChange={this.handleChange}
          />

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: contactsOperation.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
