const interactiveButton = document.getElementById('interactive-button');

const h1Element = document.querySelector('h1');
const mainElement = document.querySelector('main');
const interactiveMessageElement = document.getElementById('interactive-message');

let isButtonClicked = false;

const toggleh1ElementColor = () => {
    if (isButtonClicked) {
        // Restore the initial state
        interactiveButton.style.backgroundColor = '';
        interactiveButton.textContent = 'Click Me';
        h1Element.style.color = '';
        mainElement.style.backgroundColor = '';
        mainElement.style.color = '';
        interactiveMessageElement.style.color = '';
    } else {
        // Change the colors when the button is clicked for the first time
        interactiveButton.style.backgroundColor = '#DE6C6A';
        interactiveButton.textContent = 'Click again';
        h1Element.style.color = 'orange';
        mainElement.style.backgroundColor = '#DE976A';
        mainElement.style.color = '#fff';
        interactiveMessageElement.style.color = '#fff';
    }

    // Toggle the state
    isButtonClicked = !isButtonClicked;
}

interactiveButton.addEventListener('click', toggleh1ElementColor);
