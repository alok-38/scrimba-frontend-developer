// Get elements
const inputEl = document.getElementById('input-field');
const buttonEl = document.getElementById('add-button');

// Function to get input value and render
const getInputAndRenderOutput = () => {
    const inputValue = inputEl.value;
    const paraEl = document.createElement('p');
    paraEl.textContent = inputValue;
    document.body.appendChild(paraEl);
    inputEl.value = '';
}

buttonEl.addEventListener('click', getInputAndRenderOutput);