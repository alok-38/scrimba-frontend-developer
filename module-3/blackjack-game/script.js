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

// Grab the buttons and add event listeners
const startGameBtnEl = document.getElementById('startGameBtn');
const newGameBtnEl = document.getElementById('newGameBtn');

startGameBtnEl.addEventListener('click', startGame = () => {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard + secondCard];
    sum = firstCard + secondCard;
});