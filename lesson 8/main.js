//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

//function User(id, name, surname, email, phone) {
//    this.id = id;
//    this.name = name;
//    this.surname = surname;
//    this.email = email;
//    this.phone = phone;
//}
//
//let users = [
//    new User(71, 'vasya', 'pupkin', 'vasyapupkin@gmail.com', 380956781234),
//    new User(22, 'olya', 'kusko', 'olyakusko@gmail.com', 380123456712),
//    new User(43, 'anya', 'herkules', 'anyaherkules@gmail.com', 38087654321),
//    new User(42, 'petya', 'jessop', 'petyajessop@gmail.com', 380958795058),
//    new User(58, 'lisa', 'heil', 'lisaheil@gmail.com', 380989875674),
//    new User(96, 'anton', 'shevchenko', 'antonshevchenko@gmail.com', 380968912345),
//    new User(997, 'max', 'tataryn', 'maxtataryn@gmail.com', 380761237898),
//    new User(80, 'oleg', 'depp', 'olegdepp@gmail.com', 380978373733),
//    new User(975, 'olena', 'lunina', 'olenalunina@gmail.com', 380546781276),
//    new User(101, 'alex', 'lipko', 'alexlipko@gmail.com', 380798356781),
//]
//console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//let filter = users.filter(user => user.id % 2 === 0);
//console.log(filter);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//let sort = users.sort(function (a, b) {
//    return a.id - b.id
//})
//console.log(sort);


//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

//function Client(id, name, surname, email, phone, order) {
//    User.apply(this, arguments)
//    this.order = order;
//}
//
//let clients = [
//    new Client(71, 'vasya', 'pupkin', 'vasyapupkin@gmail.com', 380956781234, ['milk', 'tea', 'coffee']),
//    new Client(22, 'olya', 'kusko', 'olyakusko@gmail.com', 380123456712, ['scarf', 'cat']),
//    new Client(43, 'anya', 'herkules', 'anyaherkules@gmail.com', 38087654321, ['dog food']),
//    new Client(42, 'petya', 'jessop', 'petyajessop@gmail.com', 380958795058, ['cake', 'soup', 'fish', 'chocolate']),
//    new Client(58, 'lisa', 'heil', 'lisaheil@gmail.com', 380989875674, ['phone']),
//    new Client(96, 'anton', 'shevchenko', 'antonshevchenko@gmail.com', 380968912345, ['tea', 'rice', 'chips']),
//    new Client(997, 'max', 'tataryn', 'maxtataryn@gmail.com', 380761237898, ['melons', 'lemons', 'cocoa', 'milk']),
//    new Client(80, 'oleg', 'depp', 'olegdepp@gmail.com', 380978373733, ['apples', 'lemon']),
//    new Client(975, 'olena', 'lunina', 'olenalunina@gmail.com', 380546781276, ['dog food', 'hot dog', 'cat', 'cake', 'fish']),
//    new Client(101, 'alex', 'lipko', 'alexlipko@gmail.com', 380798356781, ['popcorn', 'chocolate']),
//]
//console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

//let sort = clients.sort(function (a, b) {
//   return a.order.length - b.order.length
//})
//console.log(sort);


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з
// властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//function Car(model, producer, year, speed, volume) {
//        this.model = model;
//        this.producer = producer;
//        this.year = year;
//        this.speed = speed;
//        this.volume = volume;
//    Car.prototype.drive = function () {
//        return (`їдемо зі швидкістю ${this.speed} км на годину`);
//    }
//    Car.prototype.info = function () {
//        return `
//        model - ${this.model},
//        producer - ${this.producer},
//        year - ${this.year},
//        speed - ${this.speed},
//        volume - ${this.volume}`
//    }
//    Car.prototype.increaseMaxSpeed = function (newSpeed) {
//        return this.speed += newSpeed
//    }
//    Car.prototype.changeYear = function (newValue) {
//        return this.year = newValue
//    }
//    Car.prototype.addDriver = function (driver) {
//        return this.driver = driver
//    }
//    }
//
//let car = new Car('wrx', 'subaru', 2010, 400, 2);
//console.log(car);
//console.log(car.drive());
//console.log(car.info());
//car.increaseMaxSpeed(150);
//car.changeYear(2022);
//car.addDriver({name: 'vasya', age: 24, status: true});
//console.log(car);

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//class Car{
//    constructor (model, producer, year, speed, volume) {
//        this.model = model;
//        this.producer = producer;
//        this.year = year;
//        this.speed = speed;
//        this.volume = volume;
//    }
//    drive() {
//        return (`їдемо зі швидкістю ${this.speed} км на годину`);
//    }
//    info () {
//        return `
//        model - ${this.model},
//        producer - ${this.producer},
//        year - ${this.year},
//        speed - ${this.speed},
//        volume - ${this.volume}`
//                }
//    increaseMaxSpeed (newSpeed) {
//        return this.speed += newSpeed;
//    }
//    changeYear (newValue) {
//        return this.year = newValue
//                }
//    addDriver (driver) {
//        return this.driver = driver
//    }
//}
//let car = new Car('wrx', 'subaru', 2010, 400, 2);
//console.log(car);
//console.log(car.drive());
//console.log(car.info());
//car.increaseMaxSpeed(150);
//car.changeYear(2020);
//car.addDriver({name: 'vasya', age: 24, status: true});
//console.log(car);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

//class Cinderella {
//    constructor(name, age, footSize) {
//        this.name = name;
//        this.age = age;
//        this.footSize = footSize
//    }
//}
//
//let girls = [
//    new Cinderella('anya', 18, 36),
//    new Cinderella('olya', 20, 37),
//    new Cinderella('masha', 29, 36),
//    new Cinderella('olena', 19, 39),
//    new Cinderella('nadiya', 18, 38),
//    new Cinderella('lesya', 22, 39),
//    new Cinderella('iryna', 18, 39),
//    new Cinderella('kristina', 20, 38),
//    new Cinderella('ruslana', 25, 39),
//    new Cinderella('lisa', 30, 36),
//]
//
//console.log(girls);

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

//class Prince {
//    constructor(name, age, footSizeShoeCinderella) {
//        this.name = name;
//        this.age = age;
//        this.footSizeShoeCinderella = footSizeShoeCinderella;
//    }
//}
//
//let prince = new Prince('alex', 23, 37);

//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.

//for (const girl of girls) {
//    if (prince.footSizeShoeCinderella === girl.footSize) {
//        console.log(girl);
//    }
//}

//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//let find = girls.find(value => value.footSize === prince.footSizeShoeCinderella);
//console.log(find)