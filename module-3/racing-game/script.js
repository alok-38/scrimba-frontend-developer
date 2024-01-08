// Game state
let player1Position = 0;
let player2Position = 0;
const raceTrackWidth = 400;
const playerSpeed = 5;

 
  // DOM elements
  const player1Element = document.getElementById('player1');
  const player2Element = document.getElementById('player2');

  document.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    if (event.key === 'ArrowRight') {
      movePlayer('player1', player1Element, player1Position);
      player1Position += playerSpeed;
    } else if (event.key === 'd') {
      movePlayer('player2', player2Element, player2Position);
      player2Position += playerSpeed;
    }

    checkWinner();
  }

  function movePlayer(playerId, playerElement, position) {
    if (position < raceTrackWidth) {
      position += playerSpeed;
      playerElement.style.top = position + 'px';
    }
  }

  function checkWinner() {
    if (player1Position >= raceTrackWidth) {
      alert('Player 1 wins!');
      resetGame();
    } else if (player2Position >= raceTrackWidth) {
      alert('Player 2 wins!');
      resetGame();
    }
  }

  function resetGame() {
    player1Position = 0;
    player2Position = 0;
    player1Element.style.top = '0';
    player2Element.style.top = '0';
  }