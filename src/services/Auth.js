class Auth {
  static login(usrType, usrId, token) {
    localStorage.setItem("usrId", JSON.stringify(usrId));
    localStorage.setItem("usrType", JSON.stringify(usrType));
    localStorage.setItem("token", JSON.stringify(token));
  }

  static logout() {
    localStorage.clear();
  }

  static getUserType() {
    const usrType = JSON.parse(localStorage.getItem("usrType")) || "";
    return usrType;
  }

  static isUserAccessRole(role) {
    return this.getUserType().includes(role);
  }

  static getUserId() {
    const usrId = JSON.parse(localStorage.getItem("usrId")) || "";
    return usrId;
  }

  static getToken() {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    return token;
  }

  static getFullToken() {
    const token = this.getToken();
    return "Bearer " + token;
  }

  static isUserLogged() {
    const usrId = this.getUserId();
    if (usrId === "") {
      return false;
    }
    return true;
  }
}

export default Auth;
