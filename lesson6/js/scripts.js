function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function toggleAnnouncement() {
    var d = new Date();
    var s = document.getElementById(+d.getDay());
    s.style.display = (s.style.display == 'block') ? 'none' : 'block';
}

toggleAnnouncement();

function getFormattedDate(){

    var d=new Date()
    var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
                    "Friday","Saturday")
    var monthname=new Array("January","February","March","April","May","June","July","August",
                    "September","October","November","December")
        
    //                 document.write(weekday[d.getDay()] + " ")
    // document.write(d.getDate() + ". ")
    // document.write(monthname[d.getMonth()] + " ")
    // document.write(d.getFullYear())

    // return document.getElementById("currentDate").innerHTML = weekday[d.getDay()] + ", " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear(); 
    // return document.write(weekday[d.getDay()] + ", " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear());
    return weekday[d.getDay()] + ", " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear();
}
    
document.getElementById("currentDate").innerHTML = getFormattedDate();

function getWindChill() {
    var temp = parseFloat (document.querySelector("p.sumtemp"));
    var windspeed = parseFloat (document.querySelector("p.sumspeed"));

    var speed = Math.pow(windspeed, .16);

    var windchill = 35.74 + 0.6215 * temp - 35.75 * speed + 0.4275 * temp * speed;

    return windchill;
}

document.querySelector("p.sumchill").innerHTML = getWindChill();

