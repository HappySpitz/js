let container = document.createElement('div');
container.classList.add('box');

let h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Users';

let div = document.createElement('div');
div.classList.add('elements')

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => {
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('user');
            divUser.innerText = (`${user.id}. ${user.name} => `);
            div.appendChild(divUser)

            let a = document.createElement('a');
            a.classList.add('link');
            a.innerText = ('user-info');
            a.href = 'user_details.html?id=' + user.id;
            divUser.appendChild(a)
        }
    })

container.append(h1, div);
document.body.append(container)
