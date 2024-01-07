const sendBtnEl = document.getElementById("sendBtn");

// Array to store chat messages
let chatMessages = [];

// Function to render messages
function renderMessages() {
    const messagesEl = document.getElementById("messages");
    messagesEl.innerHTML = "";
    chatMessages.forEach(message => {
        const listItem = document.createElement("li");
        listItem.textContent = `${message.sender}: ${message.content}`;
        messagesEl.appendChild(listItem);
    });

    // Scroll to the bottom to show the latest messages
    messagesEl.scrollTop = messagesEl.scrollHeight;
}


// Function to send a message
function sendMessage() {
    const messageInputEl = document.getElementById("messageInput");
    const messageContent = messageInputEl.value.trim();

    if (messageContent !== "") {
        // Create a message object with sender as "You"
        const message = {
            sender: "You",
            content: messageContent
        };
         // Add the message to the array
        chatMessages.push(message);
        // Render the updated message
        renderMessages();
        // Clear the input field
        messageInputEl.value = "";
    }
}

sendBtnEl.addEventListener('click', sendMessage);