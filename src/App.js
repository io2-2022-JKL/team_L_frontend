import { Route, Routes } from "react-router-dom";
import LoginDoctot from "./pages/doctor/login/LoginDoctor";
import LoginPacient from "./pages/pacient/login/LoginPacient";
import AdminLogged from "./pages/admin/loged/adminLogged";
import LoginAdmin from "./pages/admin/login/LoginAdmin";
import RegistrationPacient from "./pages/pacient/registration/RegistrationPacient";
import DoctorLogged from "./pages/doctor/logged/doctorLogged";
import React from "react";
import PatientLogged from "./pages/pacient/logged/patientLogged";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/pacient/login" element={<LoginPacient />} />
      <Route path="/doctor/login" element={<LoginDoctot />} />
      <Route path="/doctor/*" element={<DoctorLogged />} />
      <Route path="/admin/*" element={<AdminLogged />} />
      <Route path="/pacient/*" element={<PatientLogged />} />
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/pacient/sign_up" element={<RegistrationPacient />} />
    </Routes>
  );
}

export default App;
