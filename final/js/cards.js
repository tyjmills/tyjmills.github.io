const requestURL = 'json/businessdata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const business = jsonObject['business'];

        const cards = document.querySelector('.cards');

        business.forEach(company => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let phone = document.createElement('p');
            let address = document.createElement('p');
            let website = document.createElement('p');
            let pic = document.createElement('img');
            
            h2.innerHTML =  `${company.name}`;
            phone.innerHTML = `${company.phone}`;
            address.innerHTML = `${company.address}`;
            website.innerHTML = `${company.website}`;
            pic.setAttribute('src', `images/${company.logo}`);
            pic.setAttribute('alt', `Logo of ${company.name}`)

            card.append(h2);
            cards.append(card);
            card.append(phone);
            card.append(address);
            card.append(website);
            card.append(pic);
        });
    });