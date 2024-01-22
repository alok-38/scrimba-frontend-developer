myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const unorderedListEl = document.createElement('ul');

const promptOnHover = () => {
    inputEl.addEventListener('mouseover', () => {
        inputEl.style.fontWeight = 'normal';
        inputEl.value = 'Enter your leads';
    });

    inputEl.addEventListener('click', () => {
        inputEl.value = '';
    });
}

const isLeadDuplicate = (lead) => {
    return myLeads.includes(lead);
}

const acceptUserInput = () => {
    const userInput = inputEl.value.trim();
    if (userInput !== '' && !isLeadDuplicate(userInput)) {
        myLeads.push(userInput);
        displayLeads();
        inputEl.value = '';
    } else {
        // Optionally, you can notify the user that the lead is a duplicate
        alert("Duplicate lead! Please enter a unique lead.");
    }
}

const displayLeads = () => {
    unorderedListEl.innerHTML = '';

    myLeads.forEach((lead) => {
        const listItem = document.createElement("li");
        listItem.textContent = lead;
        unorderedListEl.appendChild(listItem);
    });

    document.body.appendChild(unorderedListEl);
}

inputBtn.addEventListener('click', acceptUserInput);
promptOnHover(); // Add this line to ensure the promptOnHover is initialized
