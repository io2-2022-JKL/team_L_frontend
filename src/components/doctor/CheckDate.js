function CheckDate(dateIn) {
  var tmp = dateIn;
  var current = new Date(new Date().toDateString());
  current.setMonth(current.getMonth() + 1);
  let date_raw = current.getDate();
  let month_raw = current.getMonth();
  let year = current.getFullYear();
  let hours_raw = current.getDate() + 2;
  let minutes_raw = current.getMonth() + 30;
  var date, month, minutes, hours;

  if (date_raw < 10) {
    date = "0" + date_raw.toString();
  } else {
    date = date_raw.toString();
  }
  if (month_raw < 10) {
    month = "0" + month_raw.toString();
  } else {
    month = month_raw.toString();
  }
  if (hours_raw < 10) {
    hours = "0" + hours_raw.toString();
  } else {
    hours = hours_raw.toString();
  }
  if (minutes_raw < 10) {
    minutes = "0" + minutes_raw.toString();
  } else {
    minutes = minutes_raw.toString();
  }

  current = year + "-" + month + "-" + date + " " + hours + ":" + minutes;

  var check =
    dateIn.substring(6, 10) +
    dateIn.substring(2, 6) +
    dateIn.substring(0, 2) +
    dateIn.substring(10, 16);

  return check < current;
}

export default CheckDate;
