const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        const filterpreston = towns.filter(x => x.name === 'Soda Springs');
        let eventspreston = filterpreston[0].events;
        let ul = document.createElement('ul');
        
        eventspreston.forEach(info => {
            let list = document.createElement('li');
            list.innerHTML = info;
            ul.appendChild(list);
        })
        
        document.getElementById("sodaspringsevent").appendChild(ul);

    });