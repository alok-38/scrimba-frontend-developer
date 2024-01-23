const inputElement = document.getElementById('input-el');
const saveButtonElement = document.getElementById('input-btn');
const resetButtonElement = document.getElementById('reset-btn');
const ulElement = document.createElement('ul');

let myLeads = [];

const displayOnHover = () => {
    inputElement.addEventListener('mouseover', () => {
        inputElement.style.fontWeight = 'normal';
        inputElement.value = 'Enter your leads';
    });

    inputElement.addEventListener('mouseleave', () => {
        inputElement.value = '';
    });

    inputElement.addEventListener('click', () => {
        inputElement.value = '';
    });
}

const acceptUserInput = () => {
    myLeads.push(inputElement.value);
    inputElement.value = '';
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