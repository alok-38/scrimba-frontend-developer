let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// Create a new function called startGame() that calls renderGame()
const startGame = () => {
	renderGame();
}

// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById('message-el');
// 2. Store the sum paragraph in a variable called sumEl
const sumEl = document.querySelector('.sum--paragraph');
// 2. Store the cards paragraph in a variable called cardsEl
const cardsEl = document.querySelector('.cards--paragraph');

const renderGame = () => {
	// 3. Render the cars on the page using this format -> "Cards: 10 4"
	cardsEl.textContent += `${firstCard} ${secondCard}`;
	sumEl.textContent += sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card? "
	} else if (sum === 21) {
		message = "You've got Blackjack! "
		hasBlackJack = true
	} else {
		message = "You're out of the game! "
		isAlive = false
	}
	// 2. Display the message in the messageEl using messageEl.textContent
	messageEl.textContent = message;
	console.log(message)
}

const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', startGame);

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
const newCard = () => {
	console.log(`Drawing a new card from the deck!`);
	// 1. Create a card variable, and hard code its value to a number (2-11)
	let card = 6;
	// 2. Add the new card to the sum variable
	sum += card;
	// 3. Call startGame()
	renderGame();
}

const newCardButtonEl = document.querySelector('.new__card--btn');
newCardButtonEl.addEventListener('click', newCard);