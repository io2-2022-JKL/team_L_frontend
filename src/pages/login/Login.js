import LoginForm from "../../forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { basicURL } from "../../Services";
import Auth from "../../services/Auth";

function LoginPage() {
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
        <Link to="/patient/sign_up">Create patient account</Link>
      </div>
    </LoginForm>
  );
}

export default LoginPage;
