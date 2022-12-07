//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
//Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

//{
//    id: 1,
//        name: 'Leanne Graham',
//    username: 'Bret',
//    email: 'Sincere@april.biz',
//    address: {
//    street: 'Kulas Light',
//        suite: 'Apt. 556',
//        city: 'Gwenborough',
//        zipcode: '92998-3874',
//        geo: {
//        lat: '-37.3159',
//            lng: '81.1496'
//    }
//},
//    phone: '1-770-736-8031 x56442',
//        website: 'hildegard.org',
//    company: {
//    name: 'Romaguera-Crona',
//        catchPhrase: 'Multi-layered client-server neural-net',
//        bs: 'harness real-time e-markets'
//}
//}

//function Foo(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, compName, catchPhrase, bs) {
//    this.id = id;
//    this.name = name;
//    this.username = username;
//    this.email = email;
//    this.address = {street: street, suite: suite, city: city, zipcode: zipcode, geo: {lat, lng}};
//    this.phone = phone;
//    this.website = website;
//    this.company = {name: compName, catchPhrase: catchPhrase, bs: bs};
//}
//
//let user = new Foo(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
//    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
//    '1-770-736-8031 x56442', 'hildegard.org',
//    'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
//console.log(user);

//-  Створити функцію конструктор / клас  який описує об'єкт тегу
//Поля :
//    -назва тегу ()
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru

//class Tag {
//    constructor(titleOfTag, action, attrs) {
//        this.titleOfTag = titleOfTag;
//        this.action = action;
//        this.attrs = attrs
//    }
//}
//
////Таким чином описати теги
////-a
//
//const a = new Tag('a', 'Тег <a> используется для определения ссылки (гиперссылки, якоря) в HTML документе.',
//    [{titleOfAttr: 'href', actionOfAttr:'Определяет адрес документа, на который ведет ссылка.'},
//        {titleOfAttr: 'download', actionOfAttr: 'Указывает браузеру, что материал по ссылке необходимо скачать.'},
//        {titleOfAttr: 'type', actionOfAttr: 'Указывает на тип ссылаемого документа.'}]);
//console.log(a);
//
////-div
//
//const div = new Tag('div', 'Тег <div> в HTML является блочным элементом верстки. Используется как контейнер для содержимого.', []);
//console.log(div);
//
////-h1
//
//const h1 = new Tag('h1', 'Тег <h1> - <h6> в HTML используются для определения заголовков на веб-странице. h1 - заголовок первого уровня', []);
//console.log(h1);
//
////-span
//
//const span = new Tag('span', 'Тег <span> в HTML является срочным элементом. Используется как контейнер для содержимого.', []);
//console.log(span);
//
////-input
//
//const input = new Tag('input', 'Тег <input> в HTML определяет элемент формы. В зависимости от выбранного типа, элемент input может принимать вид поля для ввода текста, кнопки, переключателя, чек-бокса и т.д.',
//    [{titleOfAttr: 'accept', actionOfAttr: 'Определяет типы файлов, которые можно использовать в поле input.'},
//        {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст.'},
//        {titleOfAttr: 'formaction', actionOfAttr: 'URL адрес документа - обработчика формы. '}])
//console.log(input);
//
////-form
//
//const form = new Tag('form', 'Тег <form> в HTML используется для создания формы пользовательского ввода, является контейнером для элементов HTML форм.',
//    [{titleOfAttr: 'accept-charset', actionOfAttr: 'Список кодировок символов, поддерживаемых сервером. '},
//        {titleOfAttr: 'action', actionOfAttr: 'URL адрес документа - обработчика формы. По этому адресу данные формы будут отправлены после наступления события submit.'}])
//console.log(form);
//
////-option
//
//const option = new Tag('option', 'Тег <option> в HTML определяет пункт списка <select> - выпадающего списка или списка с выбором нескольких значений, а также списка вариантов для поля <input> со списком предопределенных вариантов <datalist>.',
//    [{titleOfAttr: 'disabled', actionOfAttr: 'Логический атрибут. Если указан, отключает возможность выбора данного пункта.'},
//        {titleOfAttr: 'label', actionOfAttr: 'Название пункта, выводимое в выпадающем списке (подпись пункта). '}])
//console.log(option);
//
////-select
//
//const select = new Tag('select', 'Тег <select> в HTML используется для создания выпадающего списка в HTML форме.',
//    [{titleOfAttr: 'autofocus', actionOfAttr: 'Логический атрибут. Если указан, при загрузке документа фокус будет переведен на список.'},
//        {titleOfAttr: 'disabled', actionOfAttr: 'Логический атрибут. Если указан, делает список неактивным.'}])
//console.log(select);

//Приклад результуючого об'єкту
//{
//    titleOfTag: 'area',
//        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//    attrs: [
//    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//    {/*some props and values*/},
//    {/*...*/},
//    {/*...*/},
//]
//
//}