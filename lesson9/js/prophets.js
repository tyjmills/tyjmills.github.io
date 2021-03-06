const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        const cards = document.querySelector('.cards');

        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birth = document.createElement('p');
            let pic = document.createElement('img');
            
            h2.innerHTML =  `${prophet.name} ${prophet.lastname}`;
            birth.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace}`;
            pic.setAttribute('src', prophet.imageurl);
            pic.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`)

            card.append(h2);
            cards.append(card);
            card.append(birth);
            card.append(pic);
        });
    });

