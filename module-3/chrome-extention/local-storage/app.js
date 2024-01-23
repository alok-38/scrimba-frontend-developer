let myLeads = localStorage.getItem('myLeads') ? JSON.parse(localStorage.getItem('myLeads')) : [];

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

const updateLocalStorage = () => {
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
}

const resetLocalStorage = () => {
    localStorage.removeItem('myLeads');
}


const loadLeadsFromLocalStorage = () => {
    if (localStorage.getItem('myLeads')) {
        myLeads = JSON.parse(localStorage.getItem('myLeads'));
        renderLeads();
    }
}

const acceptUserInput = () => {
    // Check if the currentInputValue is not already in the array
    if (!myLeads.includes(currentInputValue)) {
        myLeads.push(currentInputValue); // Push the currentInputValue to myLeads
        currentInputValue = ''; // Reset currentInputValue
        renderLeads();
        updateLocalStorage();
    } else {
        alert("Duplicate lead! Please enter a unique value.");
        inputElement.value = '';
    }
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
    updateLocalStorage();
    resetLocalStorage(); // Clear local storage
});

displayOnHover();

// Load leads from localStorage when the page loads
loadLeadsFromLocalStorage();
