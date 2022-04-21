import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import DoctorAppointmentList from "./appointmentList/DoctorAppointmentList";
import Navbar from "../../../components/Navbar";
import styles from "./doctorLogged.module.css";
import { sidebarData } from "../../../components/doctor/SidebarData";

export default class DoctorLogged extends Component {
  render() {
    return (
      <div className={styles.divset}>
        <Navbar sidebarData={sidebarData} />
        <Routes>
          <Route
            path="/formerAppointments"
            element={<DoctorAppointmentList />}
          />
        </Routes>
      </div>
    );
  }
}
