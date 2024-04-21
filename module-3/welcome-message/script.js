document.addEventListener("DOMContentLoaded", function() {
    // Append the message to the body
    appendMessageToBody();
});

function appendMessageToBody() {
    const body = document.body;
    const welcomeEl = document.getElementById("welcome-el");
    const message = "Welcome back!";
    welcomeEl.textContent = message;
}