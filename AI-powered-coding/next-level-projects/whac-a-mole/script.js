// Define the holes and images
const holes = document.querySelectorAll('.hole');
const images = document.querySelectorAll('.hole img');

// Initialize game variables
let score = 0;
let timer = 30;
let gameTimer;

// Function to randomly show an image in a hole
function showImage() {
    const randomIndex = Math.floor(Math.random() * holes.length);
    const hole = holes[randomIndex];

    // Show the image
    const image = hole.querySelector('img');
    image.style.transform = 'translate(-50%, -50%) scale(1)';
    image.addEventListener('click', increaseScore);

    // Hide the image after a delay
    setTimeout(() => {
        image.style.transform = 'translate(-50%, -50%) scale(0)';
        image.removeEventListener('click', increaseScore);
    }, Math.random() * 2000 + 1000); // Random duration between 1 and 3 seconds
}

// Function to increase score when an image is clicked
function increaseScore() {
    score++;
    document.getElementById('score-value').textContent = score;
}

// Function to update the timer and end the game when it reaches zero
function updateTimer() {
    timer--;
    document.getElementById('timer-value').textContent = timer;

    if (timer === 0) {
        clearInterval(gameTimer);
        endGame();
    }
}

// Function to end the game and display final score and message
function endGame() {
    const message = score > 20 ? "Wow! You're a FaceBomp master!" :
        score > 10 ? "Great job! You're getting better!" :
            "Better luck next time! Keep practicing!";

    alert(`Game Over!\nYour final score: ${score}\n${message}`);
}

// Function to start the game
function startGame() {
    // Reset game variables
    score = 0;
    timer = 30;
    document.getElementById('score-value').textContent = score;
    document.getElementById('timer-value').textContent = timer;

    // Start the game timer
    gameTimer = setInterval(updateTimer, 1000);

    // Show images at random intervals
    setInterval(showImage, 2000);
}

// Event listener for the start button
document.getElementById('start-btn').addEventListener('click', startGame);
