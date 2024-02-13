import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-abc66-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const moviesInDB = ref(database, "movies");
const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');

const addToDatabase = () => {
    let inputValue = inputFieldEl.value;
    push(moviesInDB, inputValue);
    const paragraphEl = document.createElement('p');
    paragraphEl.textContent = `${inputValue} added to database`;
    document.body.appendChild(paragraphEl);
    paragraphEl.style.textAlign = 'center';
    inputFieldEl.value = '';
}

addButtonEl.addEventListener('click', addToDatabase);