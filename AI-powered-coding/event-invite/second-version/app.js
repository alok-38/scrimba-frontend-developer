// JavaScript code to handle form submission and display confirmation message
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvp-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        const attendance = document.getElementById('attendance').value;

        if (attendance === 'yes') {
            confirmationMessage.innerHTML = '🎉 You are attending the GIF Gala! See you there!';
            confirmationMessage.style.display = 'block'; // Show confirmation message

            document.body.style.backgroundImage = "url('https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif')";
            document.body.style.backgroundSize = "cover";
        } else {
            confirmationMessage.innerHTML = 'We\'re sorry you can\'t make it. Maybe next time!';
            confirmationMessage.style.display = 'block'; // Show confirmation message even if not attending
            document.body.style.backgroundImage = "none"; // Remove background image if not attending
        }
    });
});
