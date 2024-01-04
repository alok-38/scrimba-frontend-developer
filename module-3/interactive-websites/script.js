// Create a function that renders a message on the body
const renderMessage = () => {
    const name = prompt("What's your name?");
    const greeting = `Greetings!`;
    let message = `${greeting}, ${name}! Can I help you with something?`;
    const userResponse = prompt(message);
    if (userResponse) {
        message = `Great! You said: "${userResponse}". Thank you for chatting with us, ${name}!`;
    } else {
        message = `Sorry to hear that you didn't want to chat. If you change your mind, feel free to click the button again, ${name}.`;
    }
    // Create a new paragraph element
    const messageParagraph = document.createElement('p');
    // Set the text content of the paragraph
    messageParagraph.textContent = message;
    // Append the paragraph to the body
    document.body.appendChild(messageParagraph);
};

// Get the button element by its ID
const buttonEl = document.getElementById('message-btn');
 // Add a click event listener to the button
 buttonEl.addEventListener('click', renderMessage);