import Helper from "../../services/Helper";

function CheckDate(dateIn) {
  var currTime = new Date().toLocaleTimeString();
  var currDate = new Date().toLocaleDateString({
    year: "4-digit",
    month: "2-digit",
    day: "2-digit",
  });

  var current = Helper.combineDateWithTimeForCheckDate({
    Date: currDate,
    Time: currTime,
  });

  var check = Helper.convertDateTimeForCheckDate(dateIn);

  return check < current;
}

export default CheckDate;
