document.addEventListener("DOMContentLoaded", function () {
    // Select the RSVP form and confirmation message elements
    const rsvpForm = document.getElementById("rsvpForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Add event listener for form submission
    rsvpForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the selected attendance option
        const attendanceSelect = document.getElementById("attendance");
        const selectedAttendance = attendanceSelect.value;

        // If the user selected 'attending', display a party emoji and positive message
        if (selectedAttendance === "yes") {
            confirmationMessage.innerHTML = "<p>🎉 Thank you for RSVPing! We can't wait to see you at the GIF Gala!</p>";
        } else {
            // If the user selected 'not attending', display a message accordingly
            confirmationMessage.innerHTML = "<p>😢 We're sorry you can't make it, but thanks for letting us know!</p>";
        }

        // Show the confirmation message
        confirmationMessage.style.display = "block";
        confirmationMessage.style.marginTop = '20px'

        // Reset the form after submission
        rsvpForm.reset();
    });
});
