let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsParaEl = document.querySelector('.cards--paragraph');
let sumParaEl = document.querySelector('.sum--paragraph');

const startGameButton = document.querySelector('.start__card--btn');
const newCardButton = document.querySelector('.new__card--btn');

const startGame = () => {
 renderGame();
}

const renderGame = () => {
	cardsParaEl.textContent = "Cards: " + cards[0] + " " + cards[1];
	sumParaEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = `Do you want to draw a new card?`;
	} else if (sum === 21) {
		message = `You've got Blackjack!`
		hasBlackJack = true;
	} else {
		message = `You are out of the game.`;
		isAlive = false;
	}
	messageEl.textContent = message;
}

const newCard = () => {
	let card = 6;
	sum += card;
	// Push the card to the cards array
	cards.push(card);
	renderGame();
}

startGameButton.addEventListener('click', startGame);
newCardButton.addEventListener('click', newCard);