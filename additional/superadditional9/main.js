//let users = [{
//    name: 'vasya',
//    age: 31,
//    status: false,
//    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//}, {
//    name: 'petya',
//    age: 30,
//    status: true,
//    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//}, {
//    name: 'kolya',
//    age: 29,
//    status: true,
//    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//}, {
//    name: 'olya',
//    age: 28,
//    status: false,
//    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//}, {
//    name: 'max',
//    age: 30,
//    status: true,
//    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//}, {
//    name: 'anya',
//    age: 31,
//    status: false,
//    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//}, {
//    name: 'oleg',
//    age: 28,
//    status: false,
//    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//}, {
//    name: 'andrey',
//    age: 29,
//    status: true,
//    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//}, {
//    name: 'masha',
//    age: 30,
//    status: true,
//    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//}, {
//    name: 'olya',
//    age: 31,
//    status: false,
//    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//}, {
//    name: 'max',
//    age: 31,
//    status: true,
//    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//}];

//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

//const newArray = [];
//for (const user of users) {
//    const address = user.address;
//    newArray.push(address)
//}
//console.log(newArray);

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

//for (const user of users) {
//    const divUser = document.createElement('div');
//    divUser.innerText = `${user.name} -- ${user.age} -- ${user.status} -- address: ${user.address.city} -- ${user.address.country} -- ${user.address.street} -- ${user.address.houseNumber}`
//    document.body.append(divUser)
//}

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//for (const user of users) {
//    const divUser = document.createElement('div');
//    for (const item in user) {
//        const divUserElement = document.createElement('div');
//        if (typeof user[item] !== 'object') {
//            divUserElement.innerText = `${item} -- ${user[item]}`
//        } else {
//            divUserElement.innerText = `${item}:`
//            for (const key in user[item]) {
//                const userKey = document.createElement('div');
//                userKey.innerText = `${key} -- ${user[item][key]}`
//                divUserElement.append(userKey)
//            }
//        }
//        divUser.append(divUserElement)
//    }
//    document.body.append(divUser, '-----------')
//}

//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//    створити скріпт, котрий зчитує всі заголовки,
//    та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//    Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

//const h2 = document.getElementsByTagName('h2');
//const div = document.getElementById('content');
//const ul = document.createElement('ul')
//for (const item of h2) {
//    const li = document.createElement('li');
//    li.innerHTML = item.innerText;
//    ul.append(li)
//}
//div.append(ul)
//document.body.append(div)

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

//let rules = [
//    {
//        title: 'Первое правило Бойцовского клуба.',
//        body: 'Никому не рассказывать о Бойцовском клубе.'
//    },
//    {
//        title: 'Второе правило Бойцовского клуба.',
//        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//    },
//    {
//        title: 'Третье правило Бойцовского клуба.',
//        body: 'В схватке участвуют только двое.'
//    },
//    {
//        title: 'Четвертое правило Бойцовского клуба.',
//        body: 'Не более одного поединка за один раз.'
//    },
//    {
//        title: 'Пятое правило Бойцовского клуба.',
//        body: 'Бойцы сражаются без обуви и голые по пояс.'
//    },
//    {
//        title: 'Шестое правило Бойцовского клуба.',
//        body: 'Поединок продолжается столько, сколько потребуется.'
//    },
//    {
//        title: 'Седьмое правило Бойцовского клуба.',
//        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//    },
//    {
//        title: 'Восьмое и последнее правило Бойцовского клуба.',
//        body: 'Новичок обязан принять бой.'
//    },
//
//];

//const h1 = document.createElement('h1');
//h1.innerText = 'Правила бойцовского клуба';
//const div = document.createElement('div');
//for (const item of rules) {
//    const blockRule = document.createElement('div');
//    const h2 = document.createElement('h2');
//    h2.innerText = `${item.title}`;
//    const p = document.createElement('p');
//    p.innerText = `${item.body}`;
//    blockRule.append(h2, p)
//    div.append(blockRule)
//}
//document.body.append(h1, div)