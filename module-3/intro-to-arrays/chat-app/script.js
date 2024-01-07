let chatMessages = [];

    function renderMessages() {
      const messagesContainer = document.getElementById("messages");
      messagesContainer.innerHTML = "";

      chatMessages.forEach(message => {
        const listItem = document.createElement("li");
        listItem.textContent = `${message.sender}: ${message.content}`;
        messagesContainer.appendChild(listItem);
      });

      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function sendMessage() {
      const messageInput = document.getElementById("messageInput");
      const userMessage = messageInput.value.trim();

      if (userMessage !== "") {
        const userMessageObj = {
          sender: "You",
          content: userMessage
        };

        chatMessages.push(userMessageObj);
        renderMessages();
        messageInput.value = "";

        // Simulate a computer response after a short delay
        setTimeout(() => {
          const computerResponseObj = {
            sender: "Computer",
            content: generateComputerResponse(userMessage)
          };

          chatMessages.push(computerResponseObj);
          renderMessages();
        }, 500); // Adjust the delay as needed
      }
    }

    function generateComputerResponse(userMessage) {
      // Basic logic for generating a computer response
      // You can customize this logic based on your requirements
      const responses = [
        "I'm a computer, not a human.",
        "Tell me more about that.",
        "Interesting!",
        "I don't understand. Can you clarify?"
      ];

      // Randomly select a response from the array
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }

    const sendBtnEl = document.getElementById("sendBtn");
    sendBtnEl.addEventListener('click', sendMessage);