// Get the form element and confirmation message element
const rsvpForm = document.getElementById('rsvp-form');
const confirmationMessage = document.getElementById('confirmation-message');

// Add event listener to the form submission
rsvpForm.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the selected attendance value
    const attendance = document.getElementById('attendance').value;

    if (attendance === 'will-go') {
        confirmationMessage.innerHTML = '🎉 Party on! We look forward to seeing you at the GIF Gala!';
    } else {
        confirmationMessage.innerHTML = '😔 We will miss you at the GIF Gala!';
    }

    // Show the confirmation message
     confirmationMessage.style.display = 'block';
     confirmationMessage.style.backgroundColor = '#fff';
     confirmationMessage.style.color = 'rebeccapurple';
     confirmationMessage.style.fontWeight = 'bold';
  
    // Reset the form
    rsvpForm.reset();

});
