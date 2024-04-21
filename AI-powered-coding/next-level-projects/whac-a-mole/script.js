class FaceBompGame {
    constructor() {
        this.holes = document.querySelectorAll('.hole');
        this.scoreDisplay = document.getElementById('score-value');
        this.timerDisplay = document.getElementById('timer-value');
        this.startButton = document.getElementById('start-btn');
        this.images = [];
        this.score = 0;
        this.timer = 30;
        this.gameTimer = null;
    }

    // Randomly show an image in a hole
    showImage() {
        const randomIndex = Math.floor(Math.random() * this.holes.length);
        const hole = this.holes[randomIndex];
        const image = hole.querySelector('img');
        image.style.transform = 'translate(-50%, -50%) scale(1)';
        image.addEventListener('click', () => this.increaseScore(image));
        setTimeout(() => {
            image.style.transform = 'translate(-50%, -50%) scale(0)';
            image.removeEventListener('click', () => this.increaseScore(image));
        }, Math.random() * 2000 + 1000);
    }

    // Increase score when an image is clicked
    increaseScore(image) {
        this.score++;
        this.scoreDisplay.textContent = this.score;
        image.style.transform = 'translate(-50%, -50%) scale(0)';
    }

    // Update timer and end the game when it reaches zero
    updateTimer() {
        this.timer--;
        this.timerDisplay.textContent = this.timer;
        if (this.timer === 0) {
            clearInterval(this.gameTimer);
            this.endGame();
        }
    }

    // End the game and display final score with message
    endGame() {
        const message = this.score > 20 ? "Wow! You're a FaceBomp master!" :
            this.score > 10 ? "Great job! You're getting better!" :
                "Better luck next time! Keep practicing!";
        alert(`Game Over!\nYour final score: ${this.score}\n${message}`);
    }

    // Start the game
    startGame() {
        this.score = 0;
        this.scoreDisplay.textContent = this.score;
        this.timer = 30;
        this.timerDisplay.textContent = this.timer;
        this.gameTimer = setInterval(() => this.updateTimer(), 1000);
        this.showImagesInterval = setInterval(() => this.showImage(), 2000);
    }
}

// Initialize and start the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new FaceBompGame();
    game.startButton.addEventListener('click', () => game.startGame());
});
