const inputElement = document.getElementById('input-el');
const ulElement = document.createElement('ul');
const saveButtonElement = document.getElementById('input-btn');
const resetButtonElement = document.getElementById('reset-btn');

const displayMessageOnHover = () => {
    // Adding an event listener for the "mouseover" event
    inputElement.addEventListener('mouseover', () => {
        inputElement.value = 'Enter your leads';
    });
    // Remove display as soon as the mouse leaves
    inputElement.addEventListener('mouseleave', () => {
        inputElement.value = '';
    });
}

displayMessageOnHover();