const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        // const cards = document.querySelector('.cards');

        // towns.forEach(town => {
        //     let card = document.createElement('section');
        //     let h2 = document.createElement('h2');
        //     let h3 = document.createElement('h3');
        //     let yearfounded = document.createElement('p');
        //     let population = document.createElement('p');
        //     let rainfall = document.createElement('p');
        //     let pic = document.createElement('img');

        //     h2.innerHTML = `${town.name}`;
        //     h3.innerHTML = `${town.motto}`;
        //     yearfounded.innerHTML = `Year Founded: ${town.yearFounded}`;
        //     population.innerHTML = `Population: ${town.currentPopulation}`;
        //     rainfall.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;
        //     pic.setAttribute('src', `images/${town.photo}`);
        //     pic.setAttribute('alt', `Portrait of ${town.name}`);


        //     card.append(h2);
        //     cards.append(card);
        //     card.append(h3);
        //     card.append(yearfounded);
        //     card.append(population);
        //     card.append(rainfall);
        //     card.append(pic);
        // });

        const cities = document.querySelector('.cards');

        const cityfilter = towns.filter(x => x.name === 'Preston' || x.name === 'Fish Haven' || x.name == 'Soda Springs');
        // || towns.name == 'Fish Haven' || towns.name == 'Soda Springs')
        cityfilter.forEach(city => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let yearfounded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let pic = document.createElement('img');

            h2.innerHTML = `${city.name}`;
            h3.innerHTML = `${city.motto}`;
            yearfounded.innerHTML = `Year Founded: ${city.yearFounded}`;
            population.innerHTML = `Population: ${city.currentPopulation}`;
            rainfall.innerHTML = `Annual Rain Fall: ${city.averageRainfall}`;
            pic.setAttribute('src', `images/${city.photo}`);
            pic.setAttribute('alt', `Portrait of ${city.name}`);

            card.append(h2);
            cities.append(card);
            card.append(h3);
            card.append(yearfounded);
            card.append(population);
            card.append(rainfall);
            card.append(pic);
        });

    });