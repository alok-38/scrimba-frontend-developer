// ES6 class for the Counter App
class CounterApp {
    constructor() {
        this.count = 0;
        this.render();
        this.setupEventListeners();
    }

    // Increment the count
    increment() {
        this.count++;
        this.render();
    }

    // Decrement the count
    decrement() {
        this.count--;
        this.render();
    }

    // Render the count to the DOM
    render() {
        const countElement = document.getElementById('count');
        countElement.textContent = this.count;
    }

    // Setup event listeners for buttons
    setupEventListeners() {
        const incrementButton = document.getElementById('incrementBtn');
        const decrementButton = document.getElementById('decrementBtn');

        if (incrementButton && decrementButton) {
            incrementButton.addEventListener('click', () => this.increment());
            decrementButton.addEventListener('click', () => this.decrement());
        } else {
            console.error("Buttons not found in the DOM.");
        }
    }
}

// Instantiate the CounterApp class when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CounterApp();
});
