document.addEventListener("DOMContentLoaded", () => {
    const rsvpForm = document.getElementById("rsvpForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const container = document.querySelector(".container");
  
    rsvpForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get values from the form
      const email = document.getElementById("email").value;
      const attendance = document.getElementById("attendance").value;
  
      // Create a new div to display the confirmation message
      const confirmationDiv = document.createElement("div");
      confirmationDiv.classList.add("confirmation-div");
      confirmationDiv.innerHTML = `
        <p>Thank you for your RSVP!</p>
        <p>Email: ${email}</p>
        <p>Attendance: ${attendance === "yes" ? "Yes, I'll be there!" : "Sorry, can't make it."}</p>
      `;
  
      // Append the confirmation div next to the container
      container.insertAdjacentElement("afterend", confirmationDiv);
  
      // You can perform additional actions here, such as sending the form data to a server.
  
      // Clear the form
      rsvpForm.reset();
    });
  });
  