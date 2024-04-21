let count = 0;
let total = 0;
const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");
const saveBtnEl = document.getElementById("save-btn");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");
const totalEl = document.getElementById("total-el");

// Define the callback function
const increment = () => {
  count++;
  countEl.textContent = count;
};

// Add a click event listener to the "INCREMENT" button and associate it with the callback function
incrementBtn.addEventListener('click', increment);

// Update the entry upon save
const saveAndUpdate = () => {
  // Update the innerText with the current count
  saveEl.innerText = 'Previous entry: ' + count;

  // Update the total count
  total += count;

  // Display the total count
  totalEl.innerText = 'Total entry: ' + total;

  // Reset count to 0 after saving
  count = 0;

  // Update the displayed count
  countEl.innerText = count;
}

saveBtnEl.addEventListener('click', saveAndUpdate);

// Reset
const reset = () => {
  // Reset both "Previous entry" and "Total entry" to 0
  saveEl.innerText = 'Previous entry: 0';
  totalEl.innerText = 'Total entry: 0';

  // Reset count to 0
  count = 0;

  // Update the displayed count
  countEl.innerText = count;
}

resetBtn.addEventListener('click', reset);
