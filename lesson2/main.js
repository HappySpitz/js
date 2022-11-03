//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [];
arr[0] = 1;
arr[1] = 'black';
arr[2] = 'pink';
arr[3] = false;
arr[4] = 35;
arr[5] = 666;
arr[6] = 'red';
arr[7] = 'brown';
arr[8] = 11;
arr[9] = 'yellow';
console.log(arr);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: '11/22/63', pageCount: 976, genre: 'Science fiction'};
let book2 = {title: 'The Old Man and the Sea', pageCount: 104, genre: 'Literary Fiction'};
let book3 = {title: 'I, "Pobyeda" and Berlin', pageCount: 160, genre: 'Biographical fiction'};
console.log(book1, book2, book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'Influence: Science and Practice',
    pageCount: 352,
    genre: 'Self-help book',
    authors: [{name: 'Robert B. Cialdini', age: 77}]
};
let book5 = {title: 'Carrie', pageCount: 224, genre: 'Horror', authors: [{name: 'Stephen King', age: 75}]}
let book6 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 223,
    genre: 'Fantasy',
    authors: [{name: 'Joanne Rowling', age: 57}]
};
console.log(book4, book5, book6);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name: 'Vincas', username: 'stripprocessionary', password: '123456789'},
    {name: 'Greta', username: 'actualclue', password: '987654321'},
    {name: 'Qusay', username: 'swiftstetson', password: 'sjjsfjsfhj'},
    {name: 'Maria', username: 'afterdepartment', password: 'seieiie'},
    {name: 'Tatius', username: 'strategicpotable', password: 'fhdkjsejk'},
    {name: 'Kyros', username: 'intensecompetent', password: 'dklreke'},
    {name: 'Finlay', username: 'boardoysters', password: 'hehewjwe'},
    {name: 'Kallistrate', username: 'piperbesides', password: 'seeuwuw'},
    {name: 'Aton', username: 'cubcornflower', password: 'wwlkewklewkl'},
    {name: 'Fife', username: 'diversedistribute', password: 'esjejesjjesj'},
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
