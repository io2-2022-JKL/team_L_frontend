import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./patientLogged.module.css";
import { TimeSlotsList } from "./timeSlotsList/timeSlotsList";
import Navbar from "../../../components/Navbar";
import { sidebarData } from "../../../components/patient/SidebarData";

export default class PatientLogged extends Component {
  render() {
    return (
      <div className={styles.divset}>
        <Navbar sidebarData={sidebarData} />
        <Routes>
          <Route path="/timeSlots" element={<TimeSlotsList />} />
        </Routes>
      </div>
    );
  }
}
