// Grab the input and the button element
const buttonEl = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');

// Array to store the leads
let myLeads = [];

// Create a new paragraph element
const paraEl = document.createElement('p');
// Append the paragraph to the body initially
document.body.appendChild(paraEl);

// Function to render leads to the paragraph element
const renderLeads = () => {
    // Set the text content of the paragraph to the values in the myLeads array
    paraEl.textContent = myLeads.join(', ');
}

// Function to accept the user input and update the leads
const acceptUserInput = () => {
    // Get the user input from the input element
    const userInput = inputEl.value.trim();
    // Ensure that it is not empty before storing
    if (userInput !== '') {
        // Use a Set to store unique values
        const uniqueLeads = new Set(myLeads);
        // Add the input to the uniqueLeads set
        uniqueLeads.add(userInput);
        // Convert the uniqueLeads set back to an array
        myLeads = Array.from(uniqueLeads);
        // Clear the input field
        inputEl.value = '';
        // Render the updated leads
        renderLeads();
    }
}

buttonEl.addEventListener('click', acceptUserInput);
