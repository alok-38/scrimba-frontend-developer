const incrementBtnEl = document.getElementById('increment-btn');
const saveBtnEl = document.getElementById('save-btn');
const resetBtnEl = document.getElementById('reset-btn');
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let totalEl = document.getElementById('total-el');
let passengerCount = 0;
let previousEntries = [];

// Increment
const incrementPassengerCount = () => {
    countEl.textContent = "";
    passengerCount++;
    countEl.textContent = passengerCount;
}

incrementBtnEl.addEventListener('click', incrementPassengerCount);

// Save passenger count
const savePassengerCount = () => {
    previousEntries.push(passengerCount);
    saveEl.textContent = "Previous entries: " + previousEntries.join(' - ');
}

saveBtnEl.addEventListener('click', savePassengerCount);

// Reset
const resetPassengerCount = () => {
    countEl.textContent = "";
    passengerCount = 0
    countEl.textContent = passengerCount;
    previousEntries = [];
    saveEl.textContent = "Previous entries: ";
}

resetBtnEl.addEventListener('click', resetPassengerCount);