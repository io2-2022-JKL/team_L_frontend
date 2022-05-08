class Helper {
  static convertDate(data) {
    const array = data.replace("T", "-").split("-");
    const newData = array[2] + "-" + array[1] + "-" + array[0];
    return newData;
  }

  static convertDateTime(data) {
    const array = data.replace("T", "-").split("-");
    const newData = array[2] + "-" + array[1] + "-" + array[0] + " " + array[3];
    return newData;
  }
}
export default Helper;
