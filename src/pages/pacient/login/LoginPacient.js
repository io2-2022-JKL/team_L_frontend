import LoginForm from "../../../Forms/LoginForm";
import classes from "./LoginPacient.module.css";
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
