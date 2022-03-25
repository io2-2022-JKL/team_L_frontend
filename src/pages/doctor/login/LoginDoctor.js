import LoginForm from "../../../Forms/LoginForm";
import { useNavigate } from "react-router-dom";

function LoginDoctot() {
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

export default LoginDoctot;
