//- Імітуємо наповнення інтернет магазину товарами :
//    Створити форму з наступними полями :
//    - назва товару
//- кількість товару
//- ціна товару
//- картинка товару (посилання з інтернету)
//Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
//створити елемент <a href='list.html'> На сторінку товарів</a>,
// та list.html, при переході на який відобразити на сторінці всі товари.
//На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//    До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний  обраний  товар

const goods = document.forms.goods;

goods.btn.onclick = () => {
    const goodsInfo = [];
    const arrayGoods = JSON.parse(localStorage.getItem('favoritesGoods')) || [];
    goodsInfo.push(goods.name.value, goods.amount.value, goods.price.value, goods.img.value);
    arrayGoods.push(goodsInfo);
    localStorage.setItem('favoritesGoods', JSON.stringify(arrayGoods));
}

goods.onsubmit = function (evt) {
    if ((goods.name.value === "") || (goods.amount.value === "") || (goods.price.value === "") || (goods.img.value === "")) {
        evt.preventDefault();
        alert('stop!')
    }
}