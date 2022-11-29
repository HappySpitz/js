//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

//function cutString(str, n) {
//    let result =[];
//    for(let i = 0; i < str.length; i=i+n) {
//        result.push(str.substring(i, i + n))
//    }
//    console.log(result);
//    return result
//}
//cutString('наслаждение',3)

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//    let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7)); // Каждый

//function delete_characters(str, lenght) {
//    let newString = str.slice(0, lenght)
//    console.log(newString);
//    return newString
//}
//delete_characters('Каждый охотник желает знать', 7)

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//function insert_dash(str) {
//    let newStr = str.replaceAll(' ', '-');
//    return newStr.toUpperCase()
//}
//let str = "HTML JavaScript PHP";
//console.log(insert_dash(str));

//- Напишіть функцію, яка приймає рядок як аргумент
// і перетворює регістр першого символу рядка з нижнього регістру у верхній.

//let str = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eligendi.'
//let firstLetterUpperCase = (str) => str[0].toUpperCase()+str.substring(1, str.length);
//console.log(firstLetterUpperCase(str));

//- Дано список імен.
//    let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'

//let n1 = 'Harry..Potter';
//let n2 = 'Ron---Whisley';
//let n3 = 'Hermione__Granger';
//let normalize = (name) => {
//    let result = name.replace(/[._-]/g,' ')
//    return result.split(/\s+/).join(' ')
//}
//console.log(normalize(n1));
//console.log(normalize(n2));
//console.log(normalize(n3));

//    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

//let randomNumbers = (numbers) => {
//    for (let i = 0; i < 100; i++) {
//    numbers[i] = Math.round(Math.random()*100)
//    }
//    return numbers
//}
//let array = [];
//randomNumbers(array)
//console.log(array);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

//let sort = (randomNumbers) => {
//    randomNumbers.sort(function (a, b) {
//        return a - b
//    })
//}
//sort(array)
//console.log(array);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

//let filter = array.filter(number => (number % 2 === 0) && (number !== 0));
//console.log(filter);

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

//let str = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eligendi.'
//let capitalize = (str) => str.split(' ').map(strElement => strElement[0].toUpperCase() + strElement.slice(1)).join(' ');
//console.log(capitalize(str));

//- Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//Протестувати на значеннях
//someemail@gmail.com
//someeMAIL@gmail.com
//someeMAIL@i.ua
//some.email@gmail.com
//Примітка
//Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". 
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

//function validator(email) {
//    let dataValid1 = email.lastIndexOf('@');
//    let dataValid2 = email.lastIndexOf('.');
//    return dataValid1 > 0 &&
//        (
//            dataValid2 > dataValid1 + 2 &&
//            dataValid2 < email.length - 1
//        )
//}
//let e1 = 'someemail@gmail.com';
//let e2 = 'someeMAIL@gmail.com';
//let e3 = 'someeMAIL@i.ua';
//let e4 = 'some.email@gmail.com';
//console.log((validator(e1)));
//console.log((validator(e2)));
//console.log((validator(e3)));
//console.log((validator(e4)));

//- є масив
// let coursesArray = [
//    {
//        title: 'JavaScript Complex',
//        monthDuration: 5,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//    },
//    {
//        title: 'Java Complex',
//        monthDuration: 6,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'angular',
//            'aws',
//            'docker',
//            'git',
//            'java core',
//            'java advanced']
//    },
//    {
//        title: 'Python Complex',
//        monthDuration: 6,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'angular',
//            'aws',
//            'docker',
//            'python core',
//            'python advanced']
//    },
//    {
//        title: 'QA Complex',
//        monthDuration: 4,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//    },
//    {
//        title: 'FullStack',
//        monthDuration: 7,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'react',
//            'angular',
//            'aws',
//            'docker',
//            'git',
//            'node.js',
//            'python',
//            'java']
//    },
//    {
//        title: 'Frontend',
//        monthDuration: 4,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//    }
//];

//відсортувати його в спадаючому порядку за кількістю елементів в полі modules

//let sort = (array) => {
//    array.sort(function (a, b) {
//        return b.modules.length - a.modules.length
//    })
//}
//sort(coursesArray)
//console.log(coursesArray);

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//    let symb = "о", str = "Астрономия это наука о небесных объектах";
//document.writeln(count(str, symb)) // 5

//let symb = 'о';
//let str = 'Астрономия это наука о небесных объектах';
//let count = (str, stringsearch) => {
//    let splitIndexOf = str.split('').indexOf(stringsearch);
//    let i = 0;
//    while (splitIndexOf !== -1) {
//        i++;
//        splitIndexOf = str.indexOf(stringsearch, splitIndexOf + 1)
//    }
//    return i
//}
//console.log(count(str, symb));

//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//    let str = "Сила тяжести приложена к центру масс тела";
//document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

//let str = "Сила тяжести приложена к центру масс тела";
//let cutSrting = (str, n) => str.split(' ').splice(0, 5).join(' ');
//console.log(cutSrting(str, 5));

//-стоврити масив книжок (назва, кількість сторінок, автори , жанри).

//let books = [{title: 'bookname1', pageCount: 250, genres: ['art', 'fsfsdvcsd'], authors: ['author1']},
//    {title: 'bookname2', pageCount: 300, genres: ['scientific', 'assa', 'sdcdsc'], authors: ['author2', 'author3']},
//    {title: 'bookname3eeeeeeeeee', pageCount: 350, genres: ['fiction',], authors: ['author4']},
//    {title: 'bookname4ww', pageCount: 400, genres: ['technical'], authors: ['author5', 'author6']},
//    {title: 'bookname5qqqqq', pageCount: 450, genres: ['scientific', 'technical'], authors: ['author7', 'author8', 'author9']}
//]

//-знайти найбільшу книжку.

//let searchMaxPageCountBook = (books) =>
//{
//    books.sort(function (a, b) {
//        return b.pageCount - a.pageCount
//    })
//    return books[0]
//}
//console.log(searchMaxPageCountBook(books));

//- знайти книжку/ки з найбільшою кількістю жанрів

//let searchMaxGenresBook = (books) =>
//{
//    books.sort(function (a, b) {
//        return b.genres.length - a.genres.length
//    })
//    return books[0]
//}
//console.log(searchMaxGenresBook(books));

//- знайти книжку/ки з найдовшою назвою

//let searchMaxTitleBook = (books) =>
//{
//    books.sort(function (a, b) {
//        return b.title.length - a.title.length
//    })
//    return books[0]
//}
//console.log(searchMaxTitleBook(books));

//- знайти книжку/ки які писали 2 автори

//let filter = books.filter((book) => book.authors.length === 2);
//console.log(filter);

//- знайти книжку/ки які писав 1 автор

//let filter = books.filter((book) => book.authors.length === 1);
//console.log(filter);

//- вісортувати книжки по кількості сторінок по зростанню

//let sort = function (array) {
//    array.sort(function (a,b) {
//        return b.pageCount - a.pageCount
//    })
//}
//sort(books);
//console.log(books);