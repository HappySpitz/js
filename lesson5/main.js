//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//let square = (a,b) => a*b
//let ab1 = square(40,20);
//let ab2 = square(50,13);
//console.log(ab1, ab2)

//- створити функцію яка обчислює та повертає площу кола з радіусом r

//function square(r) {
//    return Pi*r**2
//}
//const Pi = 3.14;
//let r1 = square(25);
//let r2 = square(9);
//console.log(r1, r2)

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//function square(h,r) {
//    return 2*Pi*r*(h+r)
//}
//const Pi = 3.14;
//let s1 = square(5,2);
//let s2 = square(1,1);
//console.log(s1, s2)

//- створити функцію яка приймає масив та виводить кожен його елемент

//function array(arr) {
//    for (const arrElement of arr) {
//        console.log(arrElement)
//    }
//}
//
//let users = [
//    {name: 'vasya', age: 31, status: false},
//    {name: 'petya', age: 30, status: true},
//    {name: 'kolya', age: 29, status: true},
//    {name: 'olya', age: 28, status: false},
//    {name: 'max', age: 30, status: true},
//    {name: 'anya', age: 31, status: false},
//    {name: 'oleg', age: 28, status: false},
//    {name: 'andrey', age: 29, status: true},
//    {name: 'masha', age: 30, status: true},
//    {name: 'olya', age: 31, status: false},
//    {name: 'max', age: 31, status: true}
//];
//
//let coursesTitleArray = [
//    'JavaScript Complex',
//    'Java Complex',
//    'Python Complex',
//    'QA Complex',
//    'Fullstack',
//    'Frontend'
//];
//
//array(users);
//array(coursesTitleArray)

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

//function text(paragraph) {
//    console.log(paragraph);
//    document.write(`<p>${paragraph}</p>`)
//}
//text(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eos?`);
//text(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium est mollitia temporibus totam.`)

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//function list(text) {
//    document.write(`<ul>`);
//    document.write(`<li>${text}</li>`);
//    document.write(`<li>${text}</li>`);
//    document.write(`<li>${text}</li>`)
//    document.write(`</ul>`)
//}
//let abc = list(`alallsdlds`)

//- створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//function list(text,counter) {
//    document.write(`<ul>`);
//    for (let i = 0; i < counter; i++) {
//        document.write(`<li>${text}</li>`)
//    }
//    document.write(`</ul>`)
//}
//let abc = list(`alallsdlds`, 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//function list(arr) {
//    document.write(`<ul>`)
//    for (const arrElement of arr) {
//        document.write(`<li>${arrElement}</li>`)
//    }
//    document.write(`</ul>`)
//    document.write(`-------------`)
//}
//let array = ['mother', 5, true, 67, 'what', 1, 0, 'hello', false, 'puppy'];
//let c = ['mother', 5, true, 67, 'what'];
//list(array);
//list(c)

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

//function list(array) {
//    for (const arr of array) {
//        document.write(`<div>${arr.name} --- ${arr.age} --- ${arr.id}<div>`)
//    }
//}
//
//let users = [
//    {name: 'vasya', age: 31, id: 1233},
//    {name: 'petya', age: 30, id: 43},
//    {name: 'kolya', age: 29, id: 12},
//    {name: 'olya', age: 28, id: 666},
//    {name: 'max', age: 30, id: 3553},
//    {name: 'anya', age: 31, id: 2},
//    {name: 'oleg', age: 28, id: 33},
//    {name: 'andrey', age: 29, id: 32},
//    {name: 'masha', age: 30, id: 45},
//    {name: 'olya', age: 31, id: 7767},
//    {name: 'max', age: 31, id: 545}
//];
//list(users)

//- створити функцію яка повертає найменьше число з масиву

//let a = [1, 3, 8, 90, 35, 56, 2, 0.1, 67];
//let count = a[0];
//function min(numbers) {
//    for (const number of numbers) {
//        if (number < count) {
//          count = number;
//        }
//    }
//}
//min(a)
//console.log(count)

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//let a = [1, 3, 8, 90];
//let count = 0;
//function sum(numbers) {
//    for (const number of numbers) {
//        count = count + number
//    }
//}
//sum(a);
//console.log(count)