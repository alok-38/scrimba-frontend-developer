import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://playground-cbcd5-default-rtdb.asia-southeast1.firebasedatabase.app"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const moviesInDB = ref(database, "movies");
const inputEl = document.getElementById('input-field');
const buttonEl = document.getElementById('add-button');

const addMovieToTheDatabase = () => {
    let movieInput = inputEl.value;
    // Create a paragraph element
    let paraEl = document.createElement('p');
    // Create a text node with the message
    let movieTextNode = document.createTextNode(`Added ${movieInput} to the database`);
    // Append the text node to the paragraph element
    paraEl.appendChild(movieTextNode);
    // Append the paragraph element to the document body (or any other parent element)
    paraEl.style.textAlign = 'center';
    document.body.appendChild(paraEl);
    push(moviesInDB, movieInput);
    // Clear the input field after adding the movie
    inputEl.value = '';
}

buttonEl.addEventListener('click', addMovieToTheDatabase);