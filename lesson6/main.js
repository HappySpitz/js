//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

//let str1 = 'hello world';
//console.log(str1.length);
//
//let str2 = 'lorem ipsum';
//console.log(str2.length);
//
//let str3 = 'javascript is cool';
//console.log(str3.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

//let str1 = 'hello world';
//let toUpperCase1 = str1.toUpperCase();
//console.log(toUpperCase1);
//
//let str2 = 'lorem ipsum';
//let toUpperCase2 = str2.toUpperCase();
//console.log(toUpperCase2);
//
//let str3 = 'javascript is cool';
//let toUpperCase3 = str3.toUpperCase();
//console.log(toUpperCase3);

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

//let str1 = 'HELLO WORLD';
//console.log(str1.toLowerCase());
//
//let str2 = 'LOREM IPSUM';
//console.log(str2.toLowerCase());
//
//let str3 = 'JAVASCRIPT IS COOL';
//console.log(str3.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів

//let str = ' dirty string   ';
//str.replace(' ', '');
//console.log(str)

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//let str = 'Ревуть воли як ясла повні';
//function stringToarray(str) {
//    console.log(str.split(' '))
//}
//stringToarray(str)

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//let array = [10,8,-7,55,987,-1011,0,1050,0];
//console.log(array.map((value) => value.toString()));

//- створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]

//let nums1 = [11,21,3];
//let nums = [11,21,3];
//let sortNums = function(array, direction) {
//    if (direction === 'ascending') {
//        array.sort((a, b) => a - b)
//    }
//    else if(direction === 'descending') {
//        array.sort((a, b) => b - a)
//    }
//}
//sortNums(nums1, 'ascending');
//sortNums(nums,'descending')
//console.log(nums1)
//console.log(nums)


//- є масив

//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];

//-- відсортувати його за спаданням за monthDuration

//let sort = function(array) {
//        array.sort(function (a, b) {
//            return b.monthDuration - a.monthDuration
//        })
//}
//sort(coursesAndDurationArray)
//console.log(coursesAndDurationArray)

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

//let filter = coursesAndDurationArray.filter((cours) => cours.monthDuration > 5);
//console.log(filter);

//описати колоду карт

//let cardSuit = ['spade', 'diamond','heart', 'clubs'];
//let value = ['6', '7', '8', '9', '10', 'ace','jack','queen','king','joker'];
//let color = ['red','black'];
//
//let cards = [];
//
//for (const item of cardSuit) {
//    for (const cardVal of value) {
//        if (item === 'spade' && cardVal !== 'joker' || item === 'clubs' && cardVal !== 'joker') {
//            let card = {cardSuit: item, value: cardVal, color: color[1]};
//            cards.push(card)
//        }
//        else if (item === 'diamond' && cardVal !== 'joker' || item === 'heart' && cardVal !== 'joker'){
//            let card = {cardSuit: item, value: cardVal, color: color[0]};
//            cards.push(card)
//        }
//    }
//}
//cards.push({value: 'joker', color: 'black'});
//cards.push({value: 'joker', color: 'red'});
//console.log(cards);

//- знайти піковий туз
//
//let filter1 = cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace' && value.color === "black");
//console.log(filter1);
//
//- всі шістки
//
//let filter2 = cards.filter(value => value.value === '6');
//console.log(filter2);
//
////- всі червоні карти
//
//let filter3 = cards.filter(value => value.color === 'red');
//console.log(filter3);
//
////- всі буби
//
//let filter4 = cards.filter(value => value.cardSuit === 'diamond');
//console.log(filter4);
//
////- всі трефи від 9 та більше
//
//let filter5 = cards.filter(value => (value.cardSuit === 'clubs') && ((value.value >= 9) || (value.value.length >= 2)));
//console.log(filter5);
//
//Додатково по reduce
//Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

//let reduce = cards.reduce((accumulator, card) => {
//    if (card.cardSuit === 'spade') {
//        accumulator.spades.push(card);
//    }
//    if (card.cardSuit === 'diamond') {
//        accumulator.diamonds.push(card);
//    }
//    if (card.cardSuit === 'heart') {
//        accumulator.hearts.push(card);
//    }
//    if (card.cardSuit === 'clubs') {
//        accumulator.clubs.push(card);
//    }
//    return accumulator
//}, {spades: [], diamonds: [], hearts: [], clubs: []});
//
//console.log(reduce)
