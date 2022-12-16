let apiURL = 'http://jsonplaceholder.typicode.com/users/';

let h2 = document.createElement('h2');
h2.innerText = 'User-details'

let url = new URL(location.href);
let id = url.searchParams.get("id");

fetch(apiURL + id)
    .then(response => response.json())
    .then(user => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = `
        id: ${user.id}
        name: ${user.name}
        username: ${user.username}
        email: ${user.email}
        address:
        street: ${user.address.street}
        suit: ${user.address.suit}
        city: ${user.address.city}
        zipcode: ${user.address.zipcode}
        geo:
        lat: ${user.address.geo.lat}
        lng: ${user.address.geo.lng}
        phone: ${user.phone}
        website: ${user.website}
        company:
        name: ${user.company.name}
        catchPhrase: ${user.company.catchPhrase}
        bs: ${user.company.bs}
        `
        div.append(p)

        document.body.append(div)
    })
document.body.append(h2)

