import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-a70cb-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');

const acceptInputValue = () => {
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue);
    console.log(inputValue);
}

addButtonEl.addEventListener('click', acceptInputValue);