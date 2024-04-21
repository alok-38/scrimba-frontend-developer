// Define a global object to store person details
const person = {};

// Function to update person details
function updatePersonDetails() {
  person.name = document.getElementById('name').value;
  person.age = document.getElementById('age').value;
  person.country = document.getElementById('country').value;
}

// Function to log data using the person object
function logData() {
  updatePersonDetails();

  // Display the result in the <p> element
  const resultElement = document.getElementById('result');
  resultElement.textContent = `${person.name} is ${person.age} years old and lives in ${person.country}`;
}

const logDataBtnEl = document.getElementById('logDataBtn');
logDataBtnEl.addEventListener('click', logData);