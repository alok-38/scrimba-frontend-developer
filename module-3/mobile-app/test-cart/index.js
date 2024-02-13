const addbuttonEl = document.getElementById('add-button');
const inputEl = document.getElementById('input-field');

const writeToBody = () => {
    const inputItem = inputEl.value;
    
    // Create a paragraph element
    const paraElForInput = document.createElement('p');
    
    // Set the text content of the paragraph element to the input value
    paraElForInput.textContent = inputItem;
    
    // Append the paragraph element to the body
    document.body.appendChild(paraElForInput);
    
    // Clear the input field after adding the text to the body
    inputEl.value = '';
}

addbuttonEl.addEventListener('click', writeToBody);