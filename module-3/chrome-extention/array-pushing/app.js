let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');

// Push the input value to myLeads array when the button is clicked
const pushValueToArray = () => {
    const inputValue = inputEl.value.trim(); // Trim to remove leading and trailing whitespaces
    if (inputValue !== "") {
        myLeads.push(inputValue);
        inputEl.value = ""; // Clear the input field after pushing to the array
        console.log(myLeads); // Optional: Log the array to the console
    }
}

// Attach the pushValueToArray function to the button click event
inputBtn.addEventListener('click', pushValueToArray);
