import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./patientLogged.module.css";
import { TimeSlotsList } from "./timeSlotsList/timeSlotsList";
import { PatientNavigation } from "../navigator/patientNavigation";

export default class PatientLogged extends Component {
  render() {
    return (
      <div className={styles.divset}>
        <PatientNavigation />
        <Routes>
          <Route path="/timeSlots" element={<TimeSlotsList />} />
        </Routes>
      </div>
    );
  }
}
