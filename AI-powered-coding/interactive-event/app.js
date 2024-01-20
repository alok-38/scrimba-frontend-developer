const paragraphEl = document.querySelector('p');
const buttonEl = document.querySelector('button');

const displayMessage = (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const attendanceInput = document.getElementById('attendance').value;

    let message = '';

    if (emailInput && attendanceInput) {
        message = `Thank you for your RSVP. See you at the venue!`;
    } else {
        message = `See you next time`;
    }

    // Add a class to trigger the fade-in animation
    paragraphEl.textContent = message;
    paragraphEl.classList.add('p-active');

    // Optional: Remove the class after a delay to make it interactive again
    setTimeout(() => {
        paragraphEl.classList.remove('p-active');
    }, 2000); // Adjust the delay as needed
}

buttonEl.addEventListener('click', displayMessage);
