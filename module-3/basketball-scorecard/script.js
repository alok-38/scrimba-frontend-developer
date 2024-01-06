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

// Adding event listeners and performing calculations
homeBtnOneEl.addEventListener('click', () => {
    // Display the current score in base 10
    let currentScore = parseInt(homeScoreEl.textContent, 10);
    currentScore += 1;
    // Update the text content 
    homeScoreEl.textContent = currentScore;
});

guestBtnOneEl.addEventListener('click', () => {
    let currentScore = parseInt(guestScoreEl.textContent, 10);
    currentScore += 1;
    guestScoreEl.textContent = currentScore;
});

// Reset the score if the user clicks on this button
