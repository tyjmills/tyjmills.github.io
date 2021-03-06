const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=efd675dac7a1f59deb4d112586940beb&units=imperial";

fetch(apiURL)
 .then((response) => response.json())
 .then((jsObject) => {
   console.log(jsObject);
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('current-weather').textContent = jsObject.weather[0].description;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;

    const temp = jsObject.main.temp;
    const speed = jsObject.wind.speed;
    const result = windChill(temp, speed)

    function windChill(t, s) {
        let compute = 35.74 + (0.6215 * t) - 35.75 * Math.pow(s, 0.16) + (0.4275 * t * Math.pow(s, 0.16));
        let total = Math.round(compute);
        return total; 
    }

    if ((temp > 50) || (speed < 3)) {
        document.getElementById('wind-chill').innerHTML = "NA";
    } else {
        document.getElementById('wind-chill').innerHTML = result;
    }
    
    // const temperature = document.querySelector('#current-temp');
    // temperature.textContent = jsObject.main.temp;

    //const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    // const desc = jsObject.weather[0].description;  // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);

  });