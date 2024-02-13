const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const containerEl = document.getElementsByClassName('container');

const addToDatabase = () => {
    let inputValue = inputFieldEl.value;
    const paragraphEl = document.createElement('p');
    paragraphEl.textContent = `${inputValue} added to database`;
    document.body.appendChild(paragraphEl);
    paragraphEl.style.textAlign = 'center';
    inputFieldEl.value = '';
}

addButtonEl.addEventListener('click', addToDatabase);