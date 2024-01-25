const inputEl = document.getElementById('input-field');
const buttonEl = document.getElementById('add-button');
// Variable to store the paragraph content
let paraElement = null;

const acceptInputAndRenderOutput = () => {
    // Accept an input value
    const inputValue = inputEl.value;
    // If there is already a paragraph, remove it
    if (paraElement) {
        paraElement.remove();
    }
    // Create a new paragraph element
    paraElement = document.createElement('p');
    // Set the content of the paragraph
    paraElement.textContent = inputValue;
    // Append the same to the body
    document.body.appendChild(paraElement);
    // Clear the input field
    inputEl.value = '';
};

buttonEl.addEventListener('click', acceptInputAndRenderOutput);