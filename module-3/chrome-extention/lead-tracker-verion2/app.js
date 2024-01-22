myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const promptOnHover = () => {
    // Display a message when the user hovers over the input field
    inputEl.addEventListener('mouseenter', () => {
        inputEl.style.fontWeight = 'normal';
        inputEl.value = 'Enter your leads';
    });
    // Remove the message when the user leaves the input field
    inputEl.addEventListener("mouseleave", () => {
        inputEl.value = "";
    });
    // Remove the message when the user starts typing
    inputEl.addEventListener("click", () => {
        inputEl.value = "";
    });
}

promptOnHover();