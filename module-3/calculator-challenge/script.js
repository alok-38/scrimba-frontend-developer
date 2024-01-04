// Get references to HTML elements
const num1El = document.getElementById('num1-el');
const num2El = document.getElementById('num2-el');
const addBtn = document.querySelector('.add-btn');
const subtractBtn = document.querySelector('.subtract-btn');
const divideBtn = document.querySelector('.divide-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const sumEl = document.getElementById('sum-el');
const resultEl = document.getElementById('result');

// Function to perform addition
function add() {
    const num1 = parseFloat(prompt('Enter Number 1:'));
    const num2 = parseFloat(prompt('Enter Number 2:'));
    const sum = num1 + num2;
    
    num1El.textContent = `Number 1: ${num1}`;
    num2El.textContent = `Number 2: ${num2}`;
    sumEl.textContent = `Sum: ${sum}`;
    resultEl.textContent = ''; // Clear the result when performing a new operation
}

// Event listeners for each button
addBtn.addEventListener('click', add);