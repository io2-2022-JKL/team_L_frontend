import RegistrationPatientForm from "../../../forms/RegistrationPatientForm";
import { useNavigate } from "react-router-dom";
import { basicURL } from "../../../Services";

function RegistrationPatient() {
  const navigate = useNavigate();
  function registrationHandler(registrationData) {
    fetch(basicURL + "/register", {
      method: "POST",
      body: JSON.stringify(registrationData),
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      if (response.status === 200) {
        navigate("/");
      }
    });
  }
  return <RegistrationPatientForm registration={registrationHandler} />;
}

export default RegistrationPatient;
