import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import DoctorAppointmentList from "./appointmentList/DoctorAppointmentList";
import IncomingApointments from "./incomingAppointmentList/incomingAppointmentList";
import DoctorTimeSlots from "./doctorTimeSlots/doctorTimeSlots";
import Navbar from "../../../components/Navbar";
import styles from "./doctorLogged.module.css";
import { sidebarData } from "../../../components/doctor/SidebarData";
import Home from "./home/home";

export default class DoctorLogged extends Component {
  render() {
    return (
      <div className={styles.divset}>
        <Navbar sidebarData={sidebarData} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/formerAppointments"
            element={<DoctorAppointmentList />}
          />
          <Route
            path="/incomingAppointments"
            element={<IncomingApointments />}
          />
          <Route path="/timeSlots" element={<DoctorTimeSlots />} />
        </Routes>
      </div>
    );
  }
}
