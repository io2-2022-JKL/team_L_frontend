import classes from "./AuthorizationForm.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function RegistrationPatientForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const namesInputRef = useRef();
  const surnameInputRef = useRef();
  const peselInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const dateOfBirthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredNames = namesInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredPesel = peselInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredDateOfBirth = dateOfBirthInputRef.current.value;

    const registrationData = {
      mail: enteredEmail,
      password: enteredPassword,
      firstName: enteredNames,
      lastName: enteredSurname,
      PESEL: enteredPesel,
      phoneNumber: enteredPhoneNumber,
      dateOfBirth: enteredDateOfBirth,
    };

    props.registration(registrationData);
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-5">Registration</h1>
          <p className={classes.error}>{props.error}</p>

          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <input
                type="input"
                required
                id="names"
                placeholder="Names"
                ref={namesInputRef}
              />
            </div>

            <div className={classes.control}>
              <input
                type="input"
                required
                id="surname"
                placeholder="Surname"
                ref={surnameInputRef}
              />
            </div>

            <div className={classes.control}>
              <input
                type="email"
                required
                id="email"
                placeholder="Email"
                ref={emailInputRef}
              />
            </div>

            <div className={classes.control}>
              <input
                type="date"
                required
                id="dateOfBirth"
                placeholder="Date Of Birth"
                ref={dateOfBirthInputRef}
              />
            </div>

            <div className={classes.control}>
              <input
                type="input"
                required
                minLength={11}
                maxLength={11}
                id="pesel"
                placeholder="PESEL"
                ref={peselInputRef}
              />
            </div>

            <div className={classes.control}>
              <input
                type="input"
                required
                id="phone_number"
                placeholder="Phone number"
                ref={phoneNumberInputRef}
              />
            </div>

            <div className={classes.control}>
              <input
                type="password"
                required
                id="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </div>

            <div className={classes.actions}>
              <button>SIGN UP</button>
            </div>
          </form>
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPatientForm;
