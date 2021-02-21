function getFormattedDate() {

  var d = new Date();
  var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday");
  var monthname = new Array("January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December");

  return weekday[d.getDay()] + ", " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear();
}
document.getElementById("currentDate").innerHTML = getFormattedDate();
