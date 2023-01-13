const h2 = document.createElement('h2');
h2.innerText = 'Favorites goods';
document.body.appendChild(h2);

const div = document.createElement('div');

const arrayGoods = JSON.parse(localStorage.getItem('favoritesGoods')) || [];

for (const arrayGood of arrayGoods) {

    const divGoods = document.createElement('div');

    const nameDiv = document.createElement('div');
    nameDiv.innerText = `Name: ${arrayGood.name}`;

    const amountDiv = document.createElement('div');
    amountDiv.innerText = `Amount: ${arrayGood.amount}`;

    const priceDiv = document.createElement('div');
    priceDiv.innerText = `Price: ${arrayGood.price} UAN`;

    const img = document.createElement('img');
    img.src = `${arrayGood.img}`;
    img.style.width = '200px';

    const button = document.createElement('button');
    button.classList.add('buttonGoods');
    button.innerText = 'click me';

    button.onclick = () => {
        function deleteGood(value) {
            const newArr = arrayGoods.filter(element => element !== value);
            localStorage.setItem('favoritesGoods', JSON.stringify(newArr));
            divGoods.style.display = 'none';
            button.style.display = 'none';
        }
        deleteGood(arrayGood)
    }

    divGoods.append(nameDiv, amountDiv, priceDiv, img);

    div.append(divGoods, button);

    document.body.appendChild(div)

}
const empty = () => {
    const h4 = document.createElement('h4');
    h4.innerText = 'List is empty';
    document.body.appendChild(h4)
}

const clearButton = document.createElement('button');
clearButton.innerText = 'clear';
clearButton.onclick = () => {
    div.style.display = 'none';
    clearButton.style.display = 'none';
    localStorage.clear()
    empty()
}

div.appendChild(clearButton);

if (!arrayGoods.length) {
    empty()
}