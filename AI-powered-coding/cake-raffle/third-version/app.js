// Store participants in an array
let participants = [];

// Function to add a participant
const addParticipant = (event) => {
    event.preventDefault(); // Prevent form submission
    const participantInput = document.getElementById('participant-name');
    const participantName = participantInput.value.trim();

    if (participantName !== '') {
        participants.push(participantName);
        participantInput.value = '';
        renderParticipants();
    } else {
        alert('Please enter a valid name.');
    }
};

// Function to render participants list
const renderParticipants = () => {
    const participantsList = document.getElementById('participant-list');
    participantsList.innerHTML = '';
    participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = participant;
        participantsList.appendChild(li);
    });
};

// Function to draw a winner
const drawWinner = () => {
    if (participants.length > 0) {
        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];
        document.getElementById('winner-display').textContent = winner;
    } else {
        alert('No participants added yet.');
    }
};

// Function to reset winner display
const resetWinner = () => {
    document.getElementById('winner-display').textContent = '';
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to participant form
    const participantForm = document.getElementById('participant-form');
    participantForm.addEventListener('submit', addParticipant);

    // Add event listener to draw button
    const drawButton = document.getElementById('draw-button');
    drawButton.addEventListener('click', drawWinner);

    // Add event listener to reset button
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetWinner);
});
