import LoginForm from "../../forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { basicURL } from "../../Services";
import Auth from "../../services/Auth";
import { useState } from "react";

function LoginPage() {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  async function loginHandler(loginData) {
    const response = await fetch(basicURL + "/signin", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      const data = await response.json();
      Auth.login(data.userType, data.userId);
      navigate("/" + Auth.getUserType());
      window.location.reload();
    } else {
      setErrors(response.statusText);
    }
  }

  return (
    <LoginForm login={loginHandler} error={errors}>
      <div className="text-center mt-2">
        <Link to="/patient/sign_up">Create patient account</Link>
      </div>
    </LoginForm>
  );
}

export default LoginPage;
