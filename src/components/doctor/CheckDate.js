function CheckDate(date) {
  return new Date(new Date().toDateString()) > new Date(date);
}

export default CheckDate;
