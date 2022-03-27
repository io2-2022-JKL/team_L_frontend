import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styless from "./adminNavigation.module.css"


export class AdminNavigation extends Component{

    render(){
        return(
            <Navbar  className={styless.navBar} bg="red" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav color="red">
                        <NavLink className={styless.ItemInNavigation} to=".">
                                Strona główna
                        </NavLink>
                        <NavLink className={styless.ItemInNavigation} to="./doctorList">
                                Lista lekarzy
                        </NavLink>
                        <NavLink className={styless.ItemInNavigation} to="./pacientList">
                                lista pacjentów
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )

    }
}