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
import Auth from "./services/Auth";

function App() {
  return (
    <Routes>
      {!Auth.isUserLogged() && (
        <>
          <Route path="/patient/login" element={<LoginPatient />} />
          <Route path="/doctor/login" element={<LoginDoctot />} />
          <Route path="/patient/sign_up" element={<RegistrationPatient />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
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
