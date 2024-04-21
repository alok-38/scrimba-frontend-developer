// Grab all the buttons
const homeBtnOneEl = document.getElementById("homeBtnOne");
const homeBtnTwoEl = document.getElementById("homeBtnTwo");
const homeBtnThreeEl = document.getElementById("homeBtnThree");
const guestBtnOneEl = document.getElementById("guestBtnOne");
const guestBtnTwoEl = document.getElementById("guestBtnTwo");
const guestBtnThreeEl = document.getElementById("guestBtnThree");
const newGameBtnEl = document.getElementById("newGameBtn");

// Grab all the paragraphs
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

// Variable to track the last clicked button value
let lastClickedValue = 1;

// Function to update the score based on the last clicked button value
function updateScore(value, scoreElement) {
    let currentScore = parseInt(scoreElement.textContent, 10);
    currentScore += value;
    scoreElement.textContent = currentScore;
    lastClickedValue = value;
}

// Adding event listeners and performing calculations for +1 buttons
homeBtnOneEl.addEventListener('click', () => {
    updateScore(lastClickedValue === 2 ? 1 : 1, homeScoreEl);
});

guestBtnOneEl.addEventListener('click', () => {
    updateScore(lastClickedValue === 2 ? 1 : 1, guestScoreEl);
});

// Adding event listeners and performing calculations for +2 buttons
homeBtnTwoEl.addEventListener('click', () => {
    updateScore(2, homeScoreEl);
});

guestBtnTwoEl.addEventListener('click', () => {
    updateScore(2, guestScoreEl);
});

// Adding event listeners and performing calculations for +3 buttons (if needed)
homeBtnThreeEl.addEventListener('click', () => {
    updateScore(3, homeScoreEl);
});

guestBtnThreeEl.addEventListener('click', () => {
    updateScore(3, guestScoreEl);
});

// Reset the score if the user clicks on the "New Game" button
newGameBtnEl.addEventListener('click', () => {
    homeScoreEl.textContent = "0";
    guestScoreEl.textContent = "0";
    lastClickedValue = 1; // Reset last clicked value to 1
});
