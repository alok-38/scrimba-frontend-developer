const inputElement = document.getElementById('input-el');
const buttonElement = document.getElementById('input-btn')

const displayMessageOnHover = () => {
    // Add an event listener for 'mouseover' event
    inputElement.addEventListener('mouseover', () => {
        // Display a message when hovering over the input field
        inputElement.value = 'Enter your leads';
    });

    // Add event lister for a 'click' event
    inputElement.addEventListener('click', () => {
        inputElement.value = '';
    });

    // Add event listener for 'mouseleave'
    inputElement.addEventListener('mouseleave', () => {
        inputElement.value = '';
    });

}

displayMessageOnHover();
