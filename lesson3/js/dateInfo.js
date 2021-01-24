function lastChange(){
    return document.lastModified;
}

document.getElementById("lastMod").innerHTML = lastChange();

// function currentYear(){
//     new Date().getFullYear
//     return document.currentYear;
// }

document.getElementById("year").innerHTML = new Date().getFullYear();