import classes from "./LoginForm.module.css";
import { useRef } from "react";

function LoginForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = { email: enteredEmail, password: enteredPassword };

    props.login(loginData);
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-5">Login</h1>

          <form className={classes.form} onSubmit={submitHandler}>
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
                type="password"
                required
                id="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </div>

            <div className={classes.actions}>
              <button>LOGIN</button>
            </div>
          </form>
          <div className="text-center mt-3">Forgot password?</div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
