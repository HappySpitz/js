//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

//let locations = [
//    {
//        title: "м. Київ",
//        type: "city"
//    },
//    {
//        title: "Житомирська область",
//        type: "oblast"
//    },
//    {
//        title: "Харківська область",
//        type: "oblast"
//    },
//    {
//        title: "Вінницька область",
//        type: "oblast"
//    },
//    {
//        title: "Чернігівська область",
//        type: "oblast"
//    },
//    {
//        title: "Дніпропетровська область",
//        type: "oblast"
//    },
//    {
//        title: "Черкаська область",
//        type: "oblast"
//    },
//    {
//        title: "Волинська область",
//        type: "oblast"
//    },
//    {
//        title: "Київська область",
//        type: "oblast"
//    },
//    {
//        title: "Миколаївська область",
//        type: "oblast"
//    }];
//for (const location of locations) {
//    document.write(`<div><h3>${location.title} - ${location.type}</h3></div>`)
//}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

//let locations = [
    //    {
//        title: "м. Київ",
//        type: "city"
        //    },
//    {
//        title: "Житомирська область",
//        type: "oblast"
        //    },
//    {
//        title: "Харківська область",
//        type: "oblast"
        //    },
//    {
//        title: "Вінницька область",
//        type: "oblast"
        //    },
//    {
//        title: "Чернігівська область",
//        type: "oblast"
        //    },
//    {
//        title: "Дніпропетровська область",
//        type: "oblast"
        //    },
//    {
//        title: "Черкаська область",
//        type: "oblast"
        //    },
//    {
//        title: "Волинська область",
//        type: "oblast"
        //    },
//    {
//        title: "Київська область",
//        type: "oblast"
        //    },
//    {
//        title: "Миколаївська область",
//        type: "oblast"
        //    }];
//for (let i = 0; i < locations.length; i++) {
//    const location = locations[i];
//    document.write(`<div><h3>${location.title} - ${location.type}</h3></div>`);
//};

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//let users = [
//    {name: 'vasya', age: 31, status: false},
//    {name: 'petya', age: 30, status: true},
//    {name: 'petya', age: 30, status: true},
//    {name: 'kolya', age: 29, status: true},
//    {name: 'olya', age: 28, status: false},
//    {name: 'max', age: 30, status: true},
//    {name: 'max', age: 30, status: true},
//    {name: 'anya', age: 31, status: false},
//    {name: 'oleg', age: 28, status: false},
//    {name: 'andrey', age: 29, status: true},
//    {name: 'masha', age: 30, status: true},
//    {name: 'masha', age: 30, status: true},
//    {name: 'olya', age: 31, status: false},
//    {name: 'olya', age: 31, status: false},
//    {name: 'olya', age: 31, status: false},
//    {name: 'olya', age: 31, status: false},
//    {name: 'olya', age: 31, status: false},
//    {name: 'olya', age: 31, status: false},
//    {name: 'max', age: 31, status: true},
//    {name: 'max', age: 31, status: true}
//];
//let i = 0;
//while (i<users.length) {
//    let user = users[i];
//    document.write(`<div><h1>${user.name} ${user.age} ${user.status}</h1></div>`)
//        i++;
//}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

//let locations = [
//    {
//        "title": "м. Київ",
//        "type": "city"
//    },
//    {
//        "title": "Житомирська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Харківська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Вінницька область",
//        "type": "oblast"
//    },
//    {
//        "title": "Чернігівська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Дніпропетровська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Черкаська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Волинська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Київська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Миколаївська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Рівненська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Сумська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Тернопільська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Краматорський район",
//        "type": "raion"
//    },
//    {
//        "title": "Кіровоградська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Хмельницька область",
//        "type": "oblast"
//    },
//    {
//        "title": "Запорізька область",
//        "type": "oblast"
//    },
//    {
//        "title": "Одеська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Полтавська область",
//        "type": "oblast"
//    },
//    {
//        "title": "Львівська область",
//        "type": "oblast"
//    }]
//let i = 0;
//while (i<locations.length) {
//    let location = locations[i];
//    document.write(`<div><h1>${location.title} ${location.type}</h1></div>`);
//    i++;
//};

//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:

//let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//for (let i = 0; i < listOfItems.length; i++) {
//    let listOfItem = listOfItems[i];
//    document.write(`<div><ul>
//    <li>${listOfItem}</li>
//    </ul></div>`)
//}

//    Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону  Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

//let products = [
//    {
//        title: 'milk',
//        price: 22,
//        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//    },
//    {
//        title: 'juice',
//        price: 27,
//        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//    },
//    {
//        title: 'tomato',
//        price: 47,
//        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//    },
//    {
//        title: 'tea',
//        price: 15,
//        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//    },
//];
//for (const product of products) {
//    document.write(` <style>
// .product-card {
// width: 100%;
// height: 100%;
// display: flex;
//justify-content : center;
// }
//img {
//width: 300px;
//}
//</style>
//<div class="product-card">
//        <div><h3 class="product-title">${product.title} - ${product.price} грн</h3>
//            <img src="${product.image}" alt="image"></div>
//    </div>`)
//}

//    є масив

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

//за допомоги циклу вивести:
//    - користувачів зі статусом true

//for (let i = 0; i < users.length; i++) {
//    const user = users[i];
//    if (user.status){
//        console.log(user);
//        document.write(`<div><h2>${user.name} - ${user.age} - ${user.status}</h2></div>`)
//    }
//}

//- користувачів зі статусом false

//for (let i = 0; i < users.length; i++) {
//    const user = users[i];
//    if (!user.status){
//        console.log(user);
//        document.write(`<div><h2>${user.name} - ${user.age} - ${user.status}</h2></div>`)
//    }
//}

//- користувачів які старші за 30 років

//for (let i = 0; i < users.length; i++) {
//    const user = users[i];
//    if (user.age > 30){
//        console.log(user);
//        document.write(`<div><h2>${user.name} - ${user.age} - ${user.status}</h2></div>`)
//    }
//}