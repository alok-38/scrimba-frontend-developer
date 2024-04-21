// Array to store participants
const participants = [];

// Event listener for form submission
document.getElementById('raffleForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const participantName = document.getElementById('participantName').value.trim();
    if (participantName !== '') {
        participants.push(participantName); // Add participant to the array
        document.getElementById('participantName').value = ''; // Clear the input field
        displayParticipants(); // Update participants list
        alert('Participant added successfully!');
    } else {
        alert('Please enter a valid name.');
    }
});

// Event listener for draw button
document.getElementById('drawButton').addEventListener('click', function () {
    if (participants.length === 0) {
        alert('No participants entered yet!');
    } else {
        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];
        document.getElementById('winner').innerHTML = `<p>${winner} 🎂🎉</p>`; // Display winner with cake and party emojis
    }
});

// Function to display participants list
function displayParticipants() {
    const participantsList = document.getElementById('participants');
    participantsList.innerHTML = ''; // Clear previous list
    participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = participant;
        participantsList.appendChild(li);
    });
}
