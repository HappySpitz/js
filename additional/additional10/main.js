//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//    Перевірку робити при натисканні на кнопку

//const arrSwearWords = ['shit', 'son of bitch', 'arsehole', 'balls', 'bint', 'bollocks', 'bullshit', 'fuck', 'munter', 'pissed'];
//const input = document.createElement('input');
//input.type = 'text';
//const button = document.createElement('button');
//button.innerText = 'click me';
//document.body.append(input, button)
//button.onclick = () => {
//    for (const word of arrSwearWords) {
//        if (input.value === word) {
//            alert('stop it!')
//        }
//    }
//}

//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//    Кинути алерт з попередженням у випадку якщо містить.
//    Перевірку робити при натисканні на кнопку

//const arrSwearWords = ['shit', 'son of bitch', 'arsehole', 'balls', 'bint', 'bollocks', 'bullshit', 'fuck', 'munter', 'pissed'];
//const input = document.createElement('input');
//input.type = 'text';
//const button = document.createElement('button');
//button.innerText = 'click me';
//document.body.append(input, button)
//button.onclick = () => {
//    const sentence = input.value;
//    const arguments = (sentence.split(' '));
//    for (const argument of arguments) {
//        for (const word of arrSwearWords) {
//            if (argument === word) {
//                alert('stop it!')
//            }
//        }
//    }
//}

//- Создайте меню, которое раскрывается/сворачивается при клике

//const array = ['hello', 'okten', 'bye', 'good night'];
//
//const div = document.createElement('div');
//
//const menu = document.createElement('div');
//menu.innerText = 'menu';
//
//const ul = document.createElement('ul');
//for (const arrayElement of array) {
//    const li = document.createElement('li');
//    li.innerText = `${arrayElement}`;
//    ul.append(li)
//}
//ul.classList.add('open')
//
//menu.onclick = () => ul.classList.toggle("open");
//
//div.append(menu, ul)
//document.body.append(div)

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//    Вывести список комментариев в документ, каждый в своем блоке.
//    Добавьте каждому комментарию по кнопке для сворачивания его body.
//

//const comments = [
//    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
//    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
//    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'},
//    {title : 'lorem4', body:'lorem ipsum dolo sit ameti'},
//    {title : 'lorem5', body:'lorem ipsum dolo sit ameti'}
//]
//
//const div = document.createElement('div');
//div.innerText = 'Comments:'
//const ul = document.createElement('ul');
//for (const comment of comments) {
//    const li = document.createElement('li');
//    li.innerText = `${comment.title} -- ${comment.body}`;
//    const button = document.createElement('button');
//    button.innerText = 'no body'
//    button.onclick = () => {
//        li.innerText = `${comment.title}`
//    }
//    ul.append(li, button);
//}
//document.body.append(div, ul)

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

//const button = document.createElement('button');
//button.innerText = 'click me';
//button.onclick = () => {
//    button.style.display = 'none';
//}
//document.body.append(button)

//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//    При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//    Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

//function explorer(htmlElement) {
//    const children = htmlElement.children;
//    if (children.length !== 0) {
//        for (const child of children) {
//            explorer(child)
//        }
//    }
//    htmlElement.onclick = () => {
//        console.log(`
//                Tagname: ${htmlElement.tagName}
//                Classlist: ${htmlElement.classList}
//                Id: ${htmlElement.id}
//                Width: ${htmlElement.scrollWidth}
//                Height: ${htmlElement.scrollHeight}
//                `);
//    }
//}
//explorer(document.body)

//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//    При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//    Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

//function explorer(htmlElement) {
//    const children = htmlElement.children;
//    if (children.length !== 0) {
//        for (const child of children) {
//            explorer(child)
//        }
//    }
//    htmlElement.onclick = () => {
//        const popup = document.createElement('popup');
//        popup.innerText = `
//        Tagname: ${htmlElement.tagName}
//        Classlist: ${htmlElement.classList}
//        Id: ${htmlElement.id}
//        Width: ${htmlElement.scrollWidth}
//        Height: ${htmlElement.scrollHeight}
//        `;
//        document.body.append(popup)
//    }
//}
//explorer(document.body)

//-- взять массив пользователей
//let usersWithAddress = [
//    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//];
//- Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
//1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//2й - оставляет старше 29 лет включительно
//3й - оставляет тех у кого город киев
//Данные выводить в документ

//const content = document.createElement('div');
//const divInput = document.createElement('div');
//
//const show = (users) => {
//    content.innerHTML = '';
//    users.forEach(user => {
//        const divUser = document.createElement('div');
//        divUser.innerText = JSON.stringify(user);
//        content.appendChild(divUser)
//    })
//
//}
//
//show(usersWithAddress);
//
//const labelOne = document.createElement('label');
//labelOne.innerText = 'Status: '
//const inputOne = document.createElement('input');
//labelOne.appendChild(inputOne);
//inputOne.type = 'checkbox';
//
//const labelTwo = document.createElement('label');
//labelTwo.innerText = ' City Kyiv: '
//const inputTwo = document.createElement('input');
//labelTwo.appendChild(inputTwo);
//inputTwo.type = 'checkbox';
//
//const labelThree = document.createElement('label');
//labelThree.innerText = ' Age 29: '
//const inputThree = document.createElement('input');
//labelThree.appendChild(inputThree);
//inputThree.type = 'checkbox';
//
//divInput.onchange = () => {
//    let array = usersWithAddress;
//    if (inputOne.checked) {
//        array = array.filter(value => !value.status);
//    }
//    if (inputTwo.checked) {
//        array = array.filter(value => value.address.city === 'Kyiv');
//    }
//    if (inputThree.checked) {
//        array = array.filter(value => value.age >= 29)
//    }
//    show(array)
//}
//
//divInput.append(labelOne, labelTwo, labelThree);
//document.body.append(content, divInput)

//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
//при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
//НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//    Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

function infoDOM(htmlElement) {
    const buttonOne = document.createElement('button');
    buttonOne.innerText = 'back';
    const buttonTwo = document.createElement('button');
    buttonTwo.innerText = 'forward';
    document.body.append(buttonOne, buttonTwo)
    buttonTwo.onclick = () => {
        console.log(htmlElement);
        const children = htmlElement.children;
        if (children.length !== 0) {
            for (const child of children) {
                infoDOM(child)
            }
        }
    }
}

infoDOM(document.body)

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//    Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан