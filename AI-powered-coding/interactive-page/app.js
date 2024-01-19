document.addEventListener('DOMContentLoaded', function () {
    let previousColor; // Variable to store the previous background color

    const changeBackgroundColor = () => {
        const userInputValue = document.getElementById('textEl').value.toLowerCase();
        const bodyEl = document.body;

        if (userInputValue === 'change background color') {
            // Store the current background color before changing it
            previousColor = bodyEl.style.backgroundColor || getComputedStyle(bodyEl).backgroundColor;
            // Change the background color to a desired color
            bodyEl.style.backgroundColor = 'lightblue';
        } else {
            // Clear the input field
            document.getElementById('textEl').value = '';
            // Reset the background color to the previous color
            bodyEl.style.backgroundColor = previousColor;
        }
    };

    const handleBodyClick = (event) => {
        const textInput = document.getElementById('textEl');

        // Check if the click is outside the text input
        if (event.target !== textInput && !textInput.contains(event.target)) {
            // Clear the input field
            textInput.value = '';
            // Reset the background color to the previous color
            document.body.style.backgroundColor = previousColor;
        }
    };

    const interactiveBtn = document.getElementById('interactiveBtn');
    const mainBody = document.getElementById('mainBody');

    interactiveBtn.addEventListener('click', changeBackgroundColor);
    document.addEventListener('mousedown', handleBodyClick);
});
