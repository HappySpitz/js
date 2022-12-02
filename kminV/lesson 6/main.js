//1) Створити масив з 20 чисел та:

//let randomNumbers = (numbers) => {
//    for (let i = 0; i < 20; i++) {
//    numbers[i] = Math.round(Math.random()*100)
//    }
//    return numbers
//}
//let array = [];
//randomNumbers(array)
//console.log(array);

//    a) відсортувати його від меншого до більшого.

//console.log(array.sort(function (a, b) {
//    return a - b
//}));

//    b) відсортувати його від більшого до меншого.

//console.log(array.sort(function (a, b) {
//    return b - a
//}));

//    c) Відфілтрувати числа які є кратними 3.

//console.log(array.filter(value => value % 3 === 0));;

//d) Відфілтрувати числа які є більшими за 10.

//console.log(array.filter(value => value > 10));

//e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

//console.log(array.forEach(value => document.write(`${value} `)));

//f) За допомогою map збільшити кожен елемент в масиві в три рази.

//console.log(array.map(value => value * 3));

//    g) Порахувати загальну суму всіх елментів у масиві (reduce)

//console.log(array.reduce(function (a, b) {
//    return a + b
//}));

//2) Створити масив з 20 стрічок та:

//let array = [
//    'one', 'two', 'three', 'four', 'five',
//    'six', 'seven', 'eight', 'nine', 'ten',
//    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
//    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
//];
//console.log(array);

//    a) Відсортувати його в алфавітному порядку

//console.log(array.sort(function (a, b) {
//    if (a < b) {
//        return -1
//    }
//    if (a > b) {
//        return 1
//    }
//    if (a === b) {
//        return 0
//    }
//}))

//b) Відсортувати в зворотньому порядку

//console.log(array.sort(function (a, b) {
//    if (a < b) {
//        return 1
//    }
//    if (a > b) {
//        return -1
//    }
//    if (a === b) {
//        return 0
//    }
//}))

//c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

//console.log(array.filter(value => value.length > 4));

//d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

//console.log(array.map(value => value = 'Sam says' + ' ' + value.slice(0)));;

//3) Все робити тільки за допомогою методів масивів!
//    Дано масив :
   //const users = [
   //    {name: 'vasya', age: 31, isMarried: false},
   //    {name: 'petya', age: 30, isMarried: true},
   //    {name: 'kolya', age: 29, isMarried: true},
   //    {name: 'olya', age: 28, isMarried: false},
   //    {name: 'max', age: 30, isMarried: true},
   //    {name: 'anya', age: 31, isMarried: false},
   //    {name: 'oleg', age: 28, isMarried: false},
   //    {name: 'andrey', age: 29, isMarried: true},
   //    {name: 'masha', age: 30, isMarried: true},
   //    {name: 'olya', age: 31, isMarried: false},
   //    {name: 'max', age: 31, isMarried: true}
   //];
//a) відсортувати його за  віком (зростання , а потім окремо спадання)

//console.log(users.sort(function (a, b) {
//    return a.age - b.age
//}));

//------------------------------------------------------------------------

//console.log(users.sort(function (a, b) {
//    return b.age - a.age
//}));

//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

//console.log(users.sort(function (a, b) {
//    return a.name.length - b.name.length
//}));

//------------------------------------------------------------------------

//console.log(users.sort(function (a, b) {
//    return b.name.length - a.name.length
//}));

//c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
//та зберегти це в новий масив (первинний масив залишиться без змін)

//let map = (users.map((value, index) => ({...value, id: index + 1})));
//let newArray = [...map];
//console.log(map);

//d) відсортувати його за індентифікатором

//let sort = newArray.sort(function (a, b) {
//    return b.id - a.id
//});
//console.log(sort);

//e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

//let reduce = users.reduce((acc, value, index) =>
//    (value.isMarried) ? [...acc, {...value, flat: index + 1}] : acc,[])
//console.log(reduce);

//______________________________________________________________________________________________________________________________________________________
//РОБОТА В АУДИТОРІЇ
//______________________________________________________________________________________________________________________________________________________


//const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//];

//Відфільтрувати масив за наступними крітеріями :
//    - двигун більше 3х літрів

//console.log(cars.filter(value => value.volume > 3));

//- двигун = 2л

//console.log(cars.filter(value => value.volume === 2));

//- виробник мерс

//console.log(cars.filter(value => value.producer === 'mercedes'));

//- двигун більше 3х літрів + виробник мерседес

//console.log(cars.filter(value => (value.volume > 3) && (value.producer === 'mercedes')));

//- двигун більше 3х літрів + виробник субару

//console.log(cars.filter(value => (value.volume > 3) && (value.producer === 'subaru')));

//- сили більше ніж 300

//console.log(cars.filter(value => value.power > 300));

//- сили більше ніж 300 + виробник субару

//console.log(cars.filter(value => (value.power > 300) && (value.producer === 'subaru')));

//- мотор серіі ej

//console.log(cars.filter(value => (value.engine).includes('ej')));

//- сили більше ніж 300 + виробник субару + мотор серіі ej

//console.log(cars.filter(value =>
//    (value.power > 300) && (value.producer === 'subaru') && ((value.engine).includes('ej'))));

//- двигун меньше 3х літрів + виробник мерседес

//console.log(cars.filter(value => (value.volume < 3) && (value.producer === 'mercedes')));

//- двигун більше 2л + сили більше 250

//console.log(cars.filter(value => (value.volume > 2) && (value.power > 250)));

//- сили більше 250  + виробник бмв

//console.log(cars.filter(value => (value.power > 250) && (value.producer === 'bmw')));

//- взять слдующий массив
//const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
//];

//-- Відсортувати їх по ID

//let sort = usersWithAddress.sort(function (a, b) {
//    return a.id - b.id
//});
//console.log(sort);

//-- Відсортувати їх по ID в зворотньому порядку

//let sort = usersWithAddress.sort(function (a, b) {
//    return b.id - a.id
        //});
//console.log(sort);

//-- Відсортувати по віку

//let sort = usersWithAddress.sort(function (a, b) {
//    return a.age - b.age
//});
//console.log(sort);

//-- Відсортувати по віку в зворотньому порядку

//let sort = usersWithAddress.sort(function (a, b) {
//    return b.age - a.age
//});
//console.log(sort);

//-- Відсорутвати по імені

//console.log(usersWithAddress.sort(function (a, b) {
//    if (a.name < b.name) {
//        return -1
//    }
//    if (a.name > b.name) {
//        return 1
//    }
//    if (a.name === b.name) {
//        return 0
//    }
//}))

//-- Відсорутвати по назві вулиці

//console.log(usersWithAddress.sort(function (a, b) {
//    if (a.address.street < b.address.street) {
//        return -1
//    }
//    if (a.address.street > b.address.street) {
//        return 1
//    }
//    if (a.address.street === b.address.street) {
//        return 0
//    }
//}))

//-- Відсорутвати по номеру будинку

//console.log(usersWithAddress.sort(function (a, b) {
//    return a.address.number - b.address.number
//}))

//-- Залигити тільки тих, хто молодший ніж 30 (filter)

//console.log(usersWithAddress.filter(value => value.age < 30));

//-- Залишити тільки одружених

//console.log(usersWithAddress.filter(value => value.isMarried));

//-- Залишити тільки одружених, які молодні за 30

//console.log(usersWithAddress.filter(value => (value.isMarried) && (value.age < 30)));

//-- Залишити лише тих, в кого парні номери будинків.

//console.log(usersWithAddress.filter(value => value.address.number % 2 === 0));

//-- Порахувати загальний вік всіх людей. (reduce)

//let reduce = usersWithAddress.reduce(function (a, b) {
//    return a.age + b.age
//})
//console.log(reduce);

//-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

//let reduce = usersWithAddress.reduce((acc, value, index) =>
//    (value.isMarried) && (value.age < 30) ? [...acc, {...value, child: index + 1}] : acc
//,[])
//console.log(reduce);

//______________________________________________________________________________________________________________________________________________________
//Додатково
//______________________________________________________________________________________________________________________________________________________

//Створити обєкт автомобіля з полями:
//    Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//    Власник автомобіля теж має бути обєкт, у якого є поля Імя, вік, стаж водіння.
//    Створити не менше 7 та не більше 20 машинок.
//    Для початку вкладіть всі наші створені автомобілі в масив cars.
//    Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
//На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
//Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//    то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//    Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


//Задача: дан отсортированный по возрастанию массив целых чисел.
//    Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//    Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//    Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

//Пример:
//    Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
//1. Key = 1
//Answer: MinIndex = 0, MaxIndex = 0.
//2. Key = 4
//Answer: MinIndex = 3, MaxIndex = 6.



