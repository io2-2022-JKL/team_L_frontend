import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import AdminLogged from "./pages/admin/loged/adminLogged";
import RegistrationPatient from "./pages/patient/registration/RegistrationPatient";
import DoctorLogged from "./pages/doctor/logged/doctorLogged";
import React from "react";
import PatientLogged from "./pages/patient/logged/patientLogged";
import "./App.css";
import Auth from "./services/Auth";

function App() {
  return (
    <Routes>
      {!Auth.isUserLogged() && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/patient/sign_up" element={<RegistrationPatient />} />
        </>
      )}
      {Auth.isUserAccessRole("patient") && (
        <>
          <Route path="/patient/*" element={<PatientLogged />} />
        </>
      )}
      {Auth.isUserAccessRole("doctor") && (
        <>
          <Route path="/doctor/*" element={<DoctorLogged />} />
        </>
      )}
      {Auth.isUserAccessRole("admin") && (
        <>
          <Route path="/admin/*" element={<AdminLogged />} />
        </>
      )}
    </Routes>
  );
}

export default App;
