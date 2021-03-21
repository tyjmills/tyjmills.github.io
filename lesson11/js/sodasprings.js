const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=efd675dac7a1f59deb4d112586940beb&units=imperial";
const apiForcast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=efd675dac7a1f59deb4d112586940beb&units=imperial";

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
    });

fetch(apiForcast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var forecast5 = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast5.length; day++) {
            const d = new Date(forecast5[day].dt_txt);
            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];

            const imagesrc = 'https://openweathermap.org/img/wn/' + forecast5[day].weather[0].icon + '@2x.png';
            const descript = forecast5[day].weather[0].description;

            
            document.getElementById(`temp${day+1}`).textContent = Math.round(forecast5[day].main.temp) + "°F";
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', descript);
        }
    });