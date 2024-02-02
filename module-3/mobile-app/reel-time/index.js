// Wait for the DOM content to be fully loaded before executing JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    const inputEl = document.getElementById('input-field');
    const buttonEl = document.getElementById('add-button');
    const containerEl = document.querySelector('.container');

    const addMovieToDB = () => {
        let inputValue = inputEl.value;
        // Example content to render, you can modify this as per your requirement
        let content = `<p>New movie added: ${inputValue}</p>`;
        // Append the content to the container
        containerEl.insertAdjacentHTML('beforeend', content);
        // Clear input field after adding the movie
        inputEl.value = '';
    }

    buttonEl.addEventListener('click', addMovieToDB);
});
