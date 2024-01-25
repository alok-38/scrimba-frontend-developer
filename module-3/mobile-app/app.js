const inputEl = document.getElementById('input-field');
const buttonEl = document.getElementById('add-button');

const acceptInputAndRenderOutput = () => {
    const inputValue = inputEl.value;
    const paraEl = document.createElement('p');
    paraEl.textContent = inputValue;
}