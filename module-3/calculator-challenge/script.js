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
    resultEl.textContent = sum; // Update the result value without changing "Sum:"
}

// Function to perform subtraction
function subtract() {
    const num1 = parseFloat(prompt('Enter Number 1:'));
    const num2 = parseFloat(prompt('Enter Number 2:'));
    const difference = num1 - num2;

    num1El.textContent = `Number 1: ${num1}`;
    num2El.textContent = `Number 2: ${num2}`;
    sumEl.textContent = `Difference: ${difference}`; // Update the string "Sum:" with "Difference:" and include the result value
}

// Function to perform multiplication
function multiply() {
    const num1 = parseFloat(prompt('Enter Number 1:'));
    const num2 = parseFloat(prompt('Enter Number 2:'));
    const multiply = num1 * num2;

    num1El.textContent = `Number 1: ${num1}`;
    num2El.textContent = `Number 2: ${num2}`;
    sumEl.textContent = `Multiply: ${multiply}`;
    resultEl.textContent = '';
}

// Function to perform division
function divide() {
    const num1 = parseFloat(prompt('Enter Number 1:'));
    const num2 = parseFloat(prompt('Enter Number 2:'));
    if (num2 === 0) {
        alert('Cannot divide by zero. Please enter a non-zero divisor.');
        return;
    }
    const quotient = num1 / num2;

    num1El.textContent = `Number 1: ${num1}`;
    num2El.textContent = `Number 2: ${num2}`;
    sumEl.textContent = `Quotient: ${quotient}`;
    resultEl.textContent = ''; // Clear the sum when performing a new operation
}

// Event listeners for each button
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);