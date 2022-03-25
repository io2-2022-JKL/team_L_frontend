import classes from "./LoginPacient.module.css";

function LoginPacient() {
  function submitHandler() {}
  return (
    <div className="container">
      <div className="form-container">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-5">Login</h1>

          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <input type="email" required id="email" placeholder="Email" />
            </div>
            <div className={classes.control}>
              <input
                type="password"
                required
                id="password"
                placeholder="Password"
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

export default LoginPacient;
