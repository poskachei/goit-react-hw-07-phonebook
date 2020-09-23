import React from "react";
import { CSSTransition } from "react-transition-group";
import "./heading.css";

const Appbar = () => (
  <CSSTransition in={true} appear={true} classNames="title" timeout={500}>
    <h1>Phonebook</h1>
  </CSSTransition>
);

export default Appbar;
