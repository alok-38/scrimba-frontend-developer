const incrementBtnEl = document.getElementById('increment-btn');
const saveBtnEl = document.getElementById('save-btn');
const resetBtnEl = document.getElementById('reset-btn');
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let totalEl = document.getElementById('total-el');
let passengerCount = 0;
let totalEntries = 0;
let previousEntries = [];

// Increment
const incrementPassengerCount = () => {
    countEl.textContent = "";
    passengerCount++;
    totalEntries = calculateTotal(); // Update totalEntries with the current entry + previous entries
    countEl.textContent = passengerCount;
    updateTotalCount();
}

incrementBtnEl.addEventListener('click', incrementPassengerCount);

// Save passenger count
const savePassengerCount = () => {
    previousEntries.push(passengerCount);
    saveEl.textContent = "Previous entries: " + previousEntries.join(' - ');
    totalEntries = calculateTotal(); // Update totalEntries with the current entry + previous entries
    updateTotalCount();
}

saveBtnEl.addEventListener('click', savePassengerCount);

// Reset
const resetPassengerCount = () => {
    countEl.textContent = "";
    passengerCount = 0;
    totalEntries = 0;
    previousEntries = [];
    saveEl.textContent = "Previous entries: ";
    totalEl.textContent = "Total entry: " + totalEntries;
    countEl.textContent = passengerCount;
}

resetBtnEl.addEventListener('click', resetPassengerCount);

// Update total count
const updateTotalCount = () => {
    totalEl.textContent = "Total entry: " + totalEntries;
}

// Calculate total entry
const calculateTotal = () => {
    return passengerCount + previousEntries.reduce((acc, entry) => acc + entry, 0);
}
