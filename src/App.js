import { Route, Routes } from "react-router-dom";
import LoginPacient from "./pages/pacient/login/LoginPacient";

function App() {
  return (
    <Routes>
      <Route path="/pacient/login" element={<LoginPacient />} />
    </Routes>
  );
}

export default App;
