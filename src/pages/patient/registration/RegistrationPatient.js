import RegistrationPatientForm from "../../../forms/RegistrationPatientForm";
import { useNavigate } from "react-router-dom";
import { basicURL } from "../../../Services";
import { useState } from "react";

function RegistrationPatient() {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  async function registrationHandler(registrationData) {
    const response = await fetch(basicURL + "/register", {
      method: "POST",
      body: JSON.stringify(registrationData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      navigate("/login");
    } else {
      setErrors(response.statusText);
    }
  }
  return (
    <RegistrationPatientForm
      registration={registrationHandler}
      error={errors}
    />
  );
}

export default RegistrationPatient;
