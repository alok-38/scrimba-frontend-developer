// Initial score
let score = 0;

// Function to update and render the score
const updateScore = () => {
    const scoreElement = document.getElementById('currentScore');
    scoreElement.textContent = score;
};

// Function to handle increment button click
const handleIncrement = () => {
    score++;
    updateScore();
}

// Decrement function
const handleDecrement = () => {
    if (score > 0) {
        score--;
        updateScore();
    }
}

// Get the button elements by their IDs
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

// Add click event listeners to the buttons
incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);

