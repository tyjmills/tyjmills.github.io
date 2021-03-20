function getWindChill() {
    var temp = parseFloat(document.querySelector("p.sumtemp"));
    var windspeed = parseFloat(document.querySelector("p.sumspeed"));

    var speed = Math.pow(windspeed, .16);

    var windchill = 35.74 + 0.6215 * temp - 35.75 * speed + 0.4275 * temp * speed;

    return windchill;
}

document.querySelector("p.sumchill").innerHTML = getWindChill();