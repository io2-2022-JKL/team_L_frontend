import RegistrationPacientForm from "../../../forms/RegistrationPacientForm";
import { useNavigate } from "react-router-dom";

function RegistrationPacient() {
  const navigate = useNavigate();
  function registrationHandler(registrationData) {
    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify(registrationData),
    //   headers: { "Content-Type": "application/json" },
    // }).then(() => {
    //   navigate("/");
    // });
  }
  return <RegistrationPacientForm registration={registrationHandler} />;
}

export default RegistrationPacient;
