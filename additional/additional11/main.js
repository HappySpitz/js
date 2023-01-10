//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const userBoxDiv = document.createElement('div');

for (const user of users) {
    const div = document.createElement('div')
    const userDiv = document.createElement('div');
    userDiv.innerText = `${user.name} -- ${user.age} -- ${user.status} `;
    let button = document.createElement('button');
    button.innerText = 'add to favorites';
    button.onclick = function () {
        let favoritesUsers = JSON.parse(localStorage.getItem('favorites')) || [];
        favoritesUsers.push(user);
        localStorage.setItem('favorites', JSON.stringify(favoritesUsers));
        button.disabled = true;
    }
    div.append(userDiv, button)
    userBoxDiv.append(div)
}

const a = document.createElement('a');
a.href = 'favorites.html';
a.innerText = 'to favorites users';

document.body.append(userBoxDiv, a)
