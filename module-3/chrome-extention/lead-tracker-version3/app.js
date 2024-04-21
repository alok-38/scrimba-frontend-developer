myLeads = loadLeadsFromLocalStorage(); // Load leads from local storage

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const resetBtn = document.getElementById("reset-btn");
const unorderedListEl = document.createElement('div'); // Changed ul to div for anchor elements

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
        saveLeadsToLocalStorage(); // Save leads to local storage
        displayLeads();
        inputEl.value = '';
    } else {
        alert("Duplicate lead! Please enter a unique lead.");
    }
}

const displayLeads = () => {
    unorderedListEl.innerHTML = '';

    myLeads.forEach((lead) => {
        const anchorElement = document.createElement("a");
        anchorElement.href = lead;
        anchorElement.textContent = lead;
        anchorElement.target = "_blank"; // Open links in a new tab/window
        anchorElement.style.display = "block"; // Add some space between links
        unorderedListEl.appendChild(anchorElement);
    });

    document.body.appendChild(unorderedListEl);
}

const resetLeads = () => {
    myLeads = [];
    saveLeadsToLocalStorage(); // Save empty array to clear local storage
    displayLeads();
}

function saveLeadsToLocalStorage() {
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
}

function loadLeadsFromLocalStorage() {
    const storedLeads = localStorage.getItem("myLeads");
    return storedLeads ? JSON.parse(storedLeads) : [];
}

inputBtn.addEventListener('click', acceptUserInput);
resetBtn.addEventListener('click', resetLeads); // Added event listener for reset button
promptOnHover();

// Display leads when the page loads
displayLeads();
