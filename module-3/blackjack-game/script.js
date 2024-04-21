let player = {
    name: "Alok",
    chips: 200
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


// displays player name and their chips
playerEl.textContent = player.name + ": $" + player.chips;

// Function to generate random cards
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber;
    }
}

// Function to render the game
function renderGame() {
    // Clear the previous content of the "Cards" element
    cardsEl.textContent = "Cards: ";

    // Loop through the cards array and append each card to the "Cards" element
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    // Update the content of the "Sum" element with the current sum of the player's cards
    sumEl.textContent = "Sum: " + sum;

    // Determine the message based on the sum of the player's cards
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    // Update the content of the "message" element with the determined message
    messageEl.textContent = message;
}

// Grab the buttons and add event listeners
const startGameBtnEl = document.getElementById('startGameBtn');
const newGameBtnEl = document.getElementById('newGameBtn');

startGameBtnEl.addEventListener('click', startGame = () => {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard + secondCard];
    sum = firstCard + secondCard;
    renderGame();
});

newGameBtnEl.addEventListener('click', newCard = () => {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
});