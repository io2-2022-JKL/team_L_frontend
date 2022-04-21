class Auth {
  static login(usrType, usrId) {
    localStorage.setItem("usrId", JSON.stringify(usrId));
    localStorage.setItem("usrType", JSON.stringify(usrType));
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

  static isUserLogged() {
    const usrId = this.getUserId();
    if (usrId === "") {
      return false;
    }
    return true;
  }
}

export default Auth;
