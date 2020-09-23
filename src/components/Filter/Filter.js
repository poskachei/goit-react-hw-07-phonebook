import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactAction from "../../redux/tasks/contactAction";

const Filter = ({ value, onChangeFilter }) => (
  <div className="filter-container">
    <label htmlFor="filter">Find contacts by name</label>
    <input
      type="text"
      id="filter"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </div>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactAction.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};
