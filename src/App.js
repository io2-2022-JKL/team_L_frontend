import { Route, Routes } from "react-router-dom";
import LoginDoctot from "./pages/doctor/login/LoginDoctor";
import LoginPacient from "./pages/pacient/login/LoginPacient";

function App() {
  return (
    <Routes>
      <Route path="/pacient/login" element={<LoginPacient />} />
      <Route path="/doctor/login" element={<LoginDoctot />} />
    </Routes>
  );
}

export default App;
