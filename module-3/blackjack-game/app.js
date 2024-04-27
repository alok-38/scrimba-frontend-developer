let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
const sumEl = document.querySelector('.sum--paragraph');

function startGame() {
	// 3. Render the sum on the page using this format -> "Sum: 14"
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "You've got Blackjack!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isAlive = false
	}
	messageEl.textContent = message
	sumEl.textContent += sum;
}

const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', startGame);