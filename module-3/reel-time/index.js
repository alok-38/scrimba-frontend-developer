import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://shopping-cart-f6e7d-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app =  initializeApp(appSettings);
const database = getDatabase(app);
const moviesInDB = ref(database, "movies");

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');

const pushInputValueToDB = () => {
    let inputValue = inputFieldEl.value;
    push(moviesInDB, inputValue);
    console.log(`${inputValue} add to the database`);
};

addButtonEl.addEventListener('click', pushInputValueToDB);