const requestURL = 'json/businessdata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['business'];

        const cards = document.querySelector('.cards');

        const businessfilter = business.filter(x => x.name === 'Shaw Dance Studio' || x.name === 'Maurices' || x.name == 'Lowes');
        // || towns.name == 'Fish Haven' || towns.name == 'Soda Springs')
        businessfilter.forEach(company => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let phone = document.createElement('p');
            let address = document.createElement('p');
            let website = document.createElement('p');
            let pic = document.createElement('img');

            h2.innerHTML = `${company.name}`;
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