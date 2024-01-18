let messageEl;
let h1El;
let isMessageVisible = false; // Track the state of the message

const toggleMessage = () => {
    messageEl = document.getElementById('message');
    h1El = document.querySelector('h1');

    if (isMessageVisible) {
        // If message is visible, hide it and revert the h1 color to the original color
        messageEl.textContent = '';
        h1El.style.color = originalColor;
        clickMeBtn.textContent = 'Show message';
    } else {
        // If message is hidden, show it and change the h1 color to 'orange'
        messageEl.textContent = 'Hey there!';
        originalColor = h1El.style.color; // Store the original color
        h1El.style.color = 'orange';
        clickMeBtn.textContent = 'Hide message';
    }

    // Toggle the state for the next click
    isMessageVisible = !isMessageVisible;
}

const clickMeBtn = document.getElementById('clickMeBtn');
clickMeBtn.addEventListener('click', toggleMessage);
