let secretNumber;
let userGuess;

function startNewGame() {
    // Enable input and buttons, generate a new secret number
    document.getElementById("instructions").innerText = "Guess a number between 1 and 10";
    document.getElementById('userGuess').disabled = false;
    document.getElementById('userGuess').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('userGuess').focus();
    document.getElementById('makeAGuessBtn').disabled = false;
    document.getElementById('showResultBtn').disabled = false;
    secretNumber = Math.floor(Math.random() * 10) + 1;
}

const startNewGameBtnEl = document.getElementById('startNewGameBtn');
startNewGameBtnEl.addEventListener('click', startNewGame);

function makeAGuess() {
    // Get the user's guess from the input field
    userGuess = parseInt(document.getElementById('userGuess').value);

    // Check if the value is valid
    if (!isNaN(userGuess)) {
        document.getElementById('message').innerText = 'Guess made! Click "Show Result" to see if you are correct.';
    } else {
        document.getElementById('message').innerText = 'Please enter a valid number.';
    }
}

const makeAGuessBtnEl = document.getElementById('makeAGuessBtn');
makeAGuessBtnEl.addEventListener('click', makeAGuess);

function displayResult() {
    // Check if the guess is correct
    if (!isNaN(userGuess)) {
        if (userGuess === secretNumber) {
            document.getElementById('message').innerText = 'Congratulations! You guessed the correct number.';
        } else {
            document.getElementById('message').innerText = `Wrong guess. The correct number was ${secretNumber}. Try again.`;
        }
    } else {
        document.getElementById('message').innerText = 'Please make a guess first.';
    }

    // Disable input and buttons after displaying the result
    document.getElementById('userGuess').disabled = true;
    document.getElementById('makeAGuessBtn').disabled = true;
    document.getElementById('showResultBtn').disabled = true;
}

const showResultBtnEl = document.getElementById('showResultBtn');
showResultBtnEl.addEventListener('click', displayResult);
