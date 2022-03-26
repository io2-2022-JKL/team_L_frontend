import AdminLoginForm from "../../../Forms/admin/AdminLoginForm";
import { useNavigate } from "react-router-dom";

function LoginAdmin(){
const navigate = useNavigate();
function loginHandler(loginData){
    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify(loginData),
    //   headers: { "Content-Type": "application/json" },
    // }).then(() => {
    //   navigate("/");
    // });

}

return <AdminLoginForm login={loginHandler} />;
}


export default LoginAdmin