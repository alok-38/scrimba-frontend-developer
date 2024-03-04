const participants = [];

document.getElementById('raffleForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const participantName = document.getElementById('participantName').value;
    if (participantName.trim() !== '') {
        participants.push(participantName);
        document.getElementById('participantName').value = '';
        alert('Participant added successfully!');
    } else {
        alert('Please enter a valid name.');
    }
});

document.getElementById('drawButton').addEventListener('click', function () {
    if (participants.length === 0) {
        alert('No participants entered yet!');
    } else {
        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];
        document.getElementById('winner').innerText = `Winner: ${winner}`;
    }
});
