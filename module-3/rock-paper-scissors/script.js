const options = ['rock', 'paper', 'scissors'];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if ((user === 'rock' && computer === 'scissors') || (user === 'paper' && computer === 'rock') || (user === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}