let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

// Define the callback function
const increment = () => {
  console.log('Button clicked!');
  // Add your logic or code here
};

 // Add a click event listener to the button and associate it with the callback function
 countEl.addEventListener('click', increment);