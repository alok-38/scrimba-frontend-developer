let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}

// Get the values of the scrimba users object
let values = Object.values(scrimbaUsers);

// Get the body element of the HTML document
let body = document.body;

// Iterate over the array and append each value as a new line to the body
values.forEach(function (value) {
    // Create a paragraph element
    let paragraph = document.createElement('p');
    // Set the text content of the paragraph to the current value
    paragraph.textContent = value;
    // Append the paragraph to the body
    body.appendChild(paragraph);
});