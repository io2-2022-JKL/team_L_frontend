import { Route, Routes } from "react-router-dom";
import LoginDoctot from "./pages/doctor/login/LoginDoctor";
import LoginPatient from "./pages/patient/login/LoginPatient";
import AdminLogged from "./pages/admin/loged/adminLogged";
import LoginAdmin from "./pages/admin/login/LoginAdmin";
import RegistrationPatient from "./pages/patient/registration/RegistrationPatient";
import DoctorLogged from "./pages/doctor/logged/doctorLogged";
import React from "react";
import PatientLogged from "./pages/patient/logged/patientLogged";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/patient/login" element={<LoginPatient />} />
      <Route path="/doctor/login" element={<LoginDoctot />} />
      <Route path="/doctor/*" element={<DoctorLogged />} />
      <Route path="/admin/*" element={<AdminLogged />} />
      <Route path="/patient/*" element={<PatientLogged />} />
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/patient/sign_up" element={<RegistrationPatient />} />
    </Routes>
  );
}

export default App;
