import { useNavigate } from "react-router-dom";
import LoginForm from "../../../forms/LoginForm";

function LoginAdmin() {
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

  return <LoginForm login={loginHandler} />;
}

export default LoginAdmin;
