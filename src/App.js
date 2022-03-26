import { Route, Routes } from "react-router-dom";
import LoginDoctot from "./pages/doctor/login/LoginDoctor";
import LoginPacient from "./pages/pacient/login/LoginPacient";
import LoginAdmin from "./pages/admin/login/LoginAdmin";

function App() {
  return (
    <Routes>
      <Route path="/pacient/login" element={<LoginPacient />} />
      <Route path="/doctor/login" element={<LoginDoctot />} />
      <Route path="/admin/login" element={<LoginAdmin />} />
    </Routes>
  );
}

export default App;
