const h2 = document.createElement('h2');
h2.innerText = 'Favorites users';
document.body.appendChild(h2);

const arrayUsers = JSON.parse(localStorage.getItem('favorites'));

for (const user of arrayUsers) {
    const userDiv = document.createElement('div');
    userDiv.innerText = `${user.name} -- ${user.age} -- ${user.status} `;
    document.body.appendChild(userDiv)
}