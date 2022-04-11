import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { DoctorNavigation } from "../navigator/doctorNavigation";
import { DoctorPatientList } from "./patientList/DoctorPatientList";
import styles from "./doctorLogged.module.css";

export default class DoctorLogged extends Component {
  render() {
    return (
      <div className={styles.divset}>
        <DoctorNavigation />
        <Routes>
          <Route path="/formerAppointmets" element={<DoctorPatientList />} />
        </Routes>
      </div>
    );
  }
}
