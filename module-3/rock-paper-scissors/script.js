const options = ['rock', 'paper', 'scissors'];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return 'It\'s a tie!';
  } else if ((user === 'rock' && computer === 'scissors') ||
             (user === 'paper' && computer === 'rock') ||
             (user === 'scissors' && computer === 'paper')) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function displayResult(user, computer, result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `You chose ${user}. Computer chose ${computer}. ${result}`;
}

function userChoice(event) {
  const user = event.target.textContent.toLowerCase();
  const computer = computerChoice();
  const result = determineWinner(user, computer);
  displayResult(user, computer, result);
}

// Event listeners
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', userChoice);
paperBtn.addEventListener('click', userChoice);
scissorsBtn.addEventListener('click', userChoice);
