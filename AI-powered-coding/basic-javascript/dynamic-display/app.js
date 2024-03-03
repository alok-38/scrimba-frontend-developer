const displayDivEl = document.getElementById('nameDisplay');
const submitButtonEl = document.getElementById('submitButton');
const nameInputEl = document.getElementById('nameInput');

const welcomeMessage = () => {
    const name = nameInputEl.value;
    displayDivEl.innerHTML = `Welcome ${name}!`;
    document.body.appendChild(displayDivEl);
    displayDivEl.style.textAlign = 'center';
    nameInputEl.value = '';
}

submitButtonEl.addEventListener('click', welcomeMessage);