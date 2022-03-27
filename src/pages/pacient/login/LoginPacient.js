import LoginForm from "../../../forms/LoginForm";
import { useNavigate } from "react-router-dom";

function LoginPacient() {
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

export default LoginPacient;
