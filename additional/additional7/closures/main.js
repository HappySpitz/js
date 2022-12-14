const userCard = (id) => {
    let balance = 100;
    let transactionLimit = 100;
    const historyLog = [];
    const key = id;

    const createMessage = (operationType, credits) => ({operationType, credits, operationTime: new Date()});

    const getCardOptions = () => ({balance, historyLog, transactionLimit, key});

    const putCredits = (money) => {
        balance += money;
        historyLog.push(createMessage('putCredits', money));
    }

    const takeCredits = (money) => {
        if (balance - money >= 0) {
            balance -= money;
            historyLog.push(createMessage('takeCredits', money))
        } else {
            historyLog.push(createMessage('takeCreditsError'));
            console.error('not enough money');
        }
    }

    const setTransactionLimit = (limit) => {
        transactionLimit = limit;
        historyLog.push(createMessage('setTransactionLimit', limit))
    }

    const transferCredits = function(numberOfCredits, card) {
        if (balance - numberOfCredits >= 0 && transactionLimit > numberOfCredits) {
            let creditTrans = numberOfCredits + numberOfCredits / 100 * 0.5;
            balance -= creditTrans
            historyLog.push(createMessage('transferCredits', creditTrans));
            card.putCredits(numberOfCredits);
        }
        else {
            historyLog.push(createMessage('transferCreditsError'));
            console.error('not transfer credits')
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length === 3) {
            console.error('limit error');
            return;
        }
        this.cards.push(userCard(this.cards.length + 1));
    }

    getCardById(id) {
        const card = this.cards[id - 1];
        if (!card) {
            console.error('not present id');
            return;
        }
        return card;
    }
}

const user = new UserAccount('Vasya');

user.addCard();
user.addCard();
user.addCard();

const card1 = user.getCardById(1);
const card2 = user.getCardById(2);
const card3 = user.getCardById(3);

//card1.putCredits(200);
//console.log(card1.getCardOptions());

//console.log('-------------------------------------------------');
//
//card2.takeCredits(120);
//console.log(card2.getCardOptions());
//
//console.log('-------------------------------------------------');
//
card3.setTransactionLimit(80);
//console.log(card3.getCardOptions());

card3.transferCredits(70, card1);
console.log(card3.getCardOptions());

console.log('-------------------------------------------------');

console.log(card1.getCardOptions());