import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styless from "./adminNavigation.module.css";

export class AdminNavigation extends Component {
  render() {
    return (
      <Navbar className={styless.navBar} bg="red" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav color="red">
            <NavLink className={styless.ItemInNavigation} to=".">
              Home
            </NavLink>
            <NavLink className={styless.ItemInNavigation} to="./doctorList">
              Doctors list
            </NavLink>
            <NavLink className={styless.ItemInNavigation} to="./pacientList">
              Patients list
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
