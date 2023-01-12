const h2 = document.createElement('h2');
h2.innerText = 'Favorites goods';
document.body.appendChild(h2);

const div = document.createElement('div');

const arrayGoods = JSON.parse(localStorage.getItem('favoritesGoods'));

for (const arrayGood of arrayGoods) {

    const divGoods = document.createElement('div');

    const nameDiv = document.createElement('div');
    nameDiv.innerText = `Name: ${arrayGood[0]}`;

    const amountDiv = document.createElement('div');
    amountDiv.innerText = `Amount: ${arrayGood[1]}`;

    const priceDiv = document.createElement('div');
    priceDiv.innerText = `Price: ${arrayGood[2]} UAN`;

    const img = document.createElement('img');
    img.src = `${arrayGood[3]}`;
    img.style.width = '200px';

    const button = document.createElement('button');
    button.classList.add('buttonGoods');
    button.innerText = 'click me';

    button.onclick = () => {
        function deleteGood(value) {
            const newArr = arrayGoods.filter(element => element !== value);
            localStorage.clear();
            localStorage.setItem('favoritesGoods', JSON.stringify(newArr))
        }
        deleteGood(arrayGood)
    }

    divGoods.append(nameDiv, amountDiv, priceDiv, img);

    div.append(divGoods, button);

    document.body.appendChild(div)

}

const clearButton = document.createElement('button');
clearButton.classList.add('clear')
clearButton.innerText = 'clear';
clearButton.onclick = () => {
    div.style.display = 'none';
    localStorage.clear()
}

document.body.appendChild(clearButton)