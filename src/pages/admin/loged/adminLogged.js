import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPatientList } from "./patientList/AdminPatientList";
import { AdminDoctorList } from "./Doctorlist/AdminDoctorList";
import { sidebarData } from "../../../components/admin/SidebarData";
import styles from "./adminLogged.module.css";
import Navbar from "../../../components/Navbar";
import AdminVaccineList from "./adminVaccineList/adminVaccineList";
import AdminTimeSlotsList from "./TimeSlotsList/AdminTimeSlotsList";

export default class AdminLogged extends Component {
  render() {
    return (
      <div className={styles.divset}>
        <Navbar sidebarData={sidebarData} />
        <Routes>
          <Route path="/doctors" element={<AdminDoctorList />} />
          <Route path="/patients" element={<AdminPatientList />} />
          <Route path="/vaccines" element={<AdminVaccineList />} />
          <Route path="/timeSlots" element={<AdminTimeSlotsList />} />
        </Routes>
      </div>
    );
  }
}
