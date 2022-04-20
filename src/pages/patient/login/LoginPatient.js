import LoginForm from "../../../forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { basicURL } from "../../../Services";
import Auth from "../../../services/Auth";

function LoginPatient() {
  const navigate = useNavigate();
  function loginHandler(loginData) {
    fetch(basicURL + "/signin", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        Auth.login(data.userType, data.userId);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        navigate("/" + Auth.getUserType());
        window.location.reload();
      });
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
