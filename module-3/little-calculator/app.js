document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const resultElement = document.getElementById('result');
    let operation = 'add'; // Initial operation
    let addButtonText = 'Add numbers'; // Store the initial text content

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const num1 = parseFloat(document.getElementById('num1').value) || 0;
        const num2 = parseFloat(document.getElementById('num2').value) || 0;

        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
            default:
                result = 0;
        }

        resultElement.textContent = `${num1} ${getOperationSymbol()} ${num2} = ${result}`;
    });

    // Event listener for operation button clicks
    document.getElementById('btn-add').addEventListener('click', function () {
        operation = 'add';
        updateButtonText(addButtonText); // Reset the button text
    });

    document.getElementById('btn-subtract').addEventListener('click', function () {
        operation = 'subtract';
        updateButtonText('Subtract numbers');
    });

    document.getElementById('btn-multiply').addEventListener('click', function () {
        operation = 'multiply';
        updateButtonText('Multiply numbers');
    });

    document.getElementById('btn-divide').addEventListener('click', function () {
        operation = 'divide';
        updateButtonText('Divide numbers');
    });

    // Function to update the button text
    function updateButtonText(text) {
        document.getElementById('btn-add').textContent = text;
    }

    // Function to get the symbol for the current operation
    function getOperationSymbol() {
        switch (operation) {
            case 'add':
                return '+';
            case 'subtract':
                return '-';
            case 'multiply':
                return '*';
            case 'divide':
                return '/';
            default:
                return '';
        }
    }
});
