import LoginForm from "../../../forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPatient() {
  const navigate = useNavigate();
  function loginHandler(loginData) {
    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify(loginData),
    //   headers: { "Content-Type": "application/json" },
    // }).then(() => {
    //   navigate("/");
    // });
  }

  return (
    <LoginForm login={loginHandler}>
      <div className="text-center mt-2">
        Don't have an account? <Link to="/patient/sign_up">Sign Up</Link>
        <div className="text-center mt-1">Forgot password?</div>
      </div>
    </LoginForm>
  );
}

export default LoginPatient;
