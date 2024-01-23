let myLeads = []; // Add this line to declare and initialize myLeads array

const inputElement = document.getElementById('input-el');
const saveButtonElement = document.getElementById('input-btn');
const resetButtonElement = document.getElementById('reset-btn');
const ulElement = document.createElement('ul');

let currentInputValue = ''; // Variable to store the entered value

const displayOnHover = () => {
    inputElement.addEventListener('mouseover', () => {
        inputElement.style.fontWeight = 'normal';
        inputElement.value = 'Enter your leads';
    });

    inputElement.addEventListener('click', () => {
        inputElement.value = currentInputValue; // Set value to currentInputValue
    });

    inputElement.addEventListener('mouseleave', () => {
        inputElement.value = currentInputValue; // Set value to currentInputValue
    });

    // Update currentInputValue when the input value changes
    inputElement.addEventListener('input', () => {
        currentInputValue = inputElement.value;
    });
}

const acceptUserInput = () => {
    myLeads.push(currentInputValue); // Push the currentInputValue to myLeads
    currentInputValue = ''; // Reset currentInputValue
    renderLeads();
}

const renderLeads = () => {
    // Clear the existing list
    ulElement.innerHTML = '';

    // Iterate over myLeads and create anchor elements
    myLeads.forEach(lead => {
        let listItem = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.textContent = lead;
        anchor.href = '#'; 
        anchor.target = '_blank';
        listItem.appendChild(anchor);
        ulElement.appendChild(listItem);
        inputElement.value = '';
    });

    // Append the updated list to the body
    document.body.appendChild(ulElement);
}

saveButtonElement.addEventListener('click', acceptUserInput);

// Add functionality to the reset button
resetButtonElement.addEventListener('click', () => {
    myLeads = [];
    renderLeads();
});

displayOnHover();
