// Function to render an unordered list to the DOM
const renderList = (array) => {
    // Get the output div
    const outputDiv = document.getElementById("output");
    // Clear previous content
    outputDiv.innerHTML = "";
    // Create an unordered list element
    const ulElement = document.createElement('ul');
     // Loop through the array and create list items
     array.forEach(item => {
        const liElement = document.createElement('li');
        liElement.textContent = item;
        ulElement.appendChild(liElement);
     });
     // Append the unordered list to the output div
     outputDiv.appendChild(ulElement);
}

// Example array
const myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];
    
// Get the button element
const buttonElement = document.getElementById('render-btn');

// Add an event listener to trigger the function on button click
buttonElement.addEventListener('click', function() {
  renderList(myCourses);
});