let count = 0;
const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");
const saveBtnEl = document.getElementById("save-btn");
const incrementBtn = document.getElementById("increment-btn");

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
  
  // Reset count to 0 after saving
  count = 0;
  
  // Update the displayed count
  countEl.innerText = count;
}

saveBtnEl.addEventListener('click', saveAndUpdate);