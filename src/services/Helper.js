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

  static convertDateTimeForInput(data) {
    if (!data) return;
    const array = data.replace(" ", "-").split("-");
    const newData = array[2] + "-" + array[1] + "-" + array[0] + "T" + array[3];
    return newData;
  }

  static convertDateForInput(data) {
    if (!data) return;
    const array = data.split("-");
    const newData = array[2] + "-" + array[1] + "-" + array[0];
    return newData;
  }

  static combineDateWithTimeForCheckDate(data) {
    if (!data) return;
    const array = data.Date.split(".");
    const newData =
      array[2] + "-" + array[1] + "-" + array[0] + " " + data.Time;
    return newData;
  }
  static convertDateTimeForCheckDate(data) {
    if (!data) return;
    const newData =
      data.substring(6, 10) +
      data.substring(2, 6) +
      data.substring(0, 2) +
      data.substring(10, 16);
    return newData;
  }
}
export default Helper;
