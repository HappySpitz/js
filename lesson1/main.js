//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let one = 'hello';
console.log(one);

let two = 'owu';
console.log(two);

let three = 'com';
console.log(three);

let four = 'ua';
console.log(four);

let five = 1;
console.log(five);

let six = 10;
console.log(six);

let seven = -999;
console.log(seven);

let eight = 123;
console.log(eight);

let nine = 3.14;
console.log(nine);

let ten = 2.7;
console.log(ten);

let eleven = 16;
console.log(eleven);

let twelve = true;
console.log(twelve);

let thirteen = false;
console.log(thirteen);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Татарин';
let middleName = 'Крістіна';
let lastName = 'Вікторівна';
console.log(firstName + ' ' + middleName + ' ' + lastName);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

//Додаткове для тих хто цікавився prompt`oм
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name1 = prompt('What is your first name?');
let name2 = prompt('What is your last name?');
let years = +prompt('How old are you?');
console.log(name1,name2,years);