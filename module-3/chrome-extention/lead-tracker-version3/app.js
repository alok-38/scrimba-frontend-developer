const inputElement = document.getElementById('input-el');
const buttonElement = document.getElementById('input-btn');
const ulElement = document.createElement('ul');
const resultContainer = document.getElementById('result-container')
let myLeads = [];

const displayMessageOnHover = () => {
    // Add an event listener for 'mouseover' event
    inputElement.addEventListener('mouseover', () => {
        // Display a message when hovering over the input field
        inputElement.value = 'Enter your leads';
    });

    // Add event lister for a 'click' event
    inputElement.addEventListener('click', () => {
        inputElement.value = '';
    });

    // Add event listener for 'mouseleave'
    inputElement.addEventListener('mouseleave', () => {
        inputElement.value = '';
    });

}

// Function to accept user input and store them in an array
const acceptUserInput = () => {
    const inputValue = inputElement.value.trim();
    if (inputValue !== '') {
        myLeads.push(inputValue);
        inputElement.value = '';
        renderOutput();
    }
}

// Function to render the user input as an unordered list
const renderOutput = () => {
    // Clear the existing list items
    ulElement.innerHTML = '';
    // Iterate through the myLeads array and create list items dynamically
    myLeads.forEach((lead) => {
        const liElement = document.createElement('li');
        liElement.textContent = lead;
        ulElement.appendChild(liElement);
    });
    // Append the unordered list to the result container
    // Clear the existing content
    resultContainer.innerHTML = '';
    resultContainer.appendChild(liElement);
}

// Add event listener to the button to trigger the acceptUserInput function
buttonElement.addEventListener('click', acceptUserInput);


displayMessageOnHover();
