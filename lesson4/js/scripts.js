function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


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

