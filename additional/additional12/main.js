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

const goodsFood = document.getElementsByClassName('goodsFood');
for (const goodsFoodElement of goodsFood) {
    const buttons = document.getElementsByClassName('btn');
    for (const button of buttons) {
        button.onclick = () => {
            const favoritesGoods = JSON.parse(localStorage.getItem('favoritesGoods')) || [];
            favoritesGoods.push(goodsFoodElement);
            localStorage.setItem('favoritesGoods', JSON.stringify(favoritesGoods))
            console.log(favoritesGoods);
        }
    }
}