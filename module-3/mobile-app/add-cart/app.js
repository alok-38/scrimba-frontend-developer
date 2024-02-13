// Challenge: Import 'initializeApp' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Challenge: Import 'getDatabase' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-b5f72-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

const addItemsToTheCart = () => {
    let inputValue = inputFieldEl.value;
    // Challenge: Use the Firebase function 'push' to push inputValue to the database
    push(shoppingListInDB, inputValue);
     // Challenge: Append a new <li> with text content inputValue to the 'shopping-list' <ul>
     // Create a new <li> element with the input value
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;

    // Append the new <li> element to the 'shopping-list' <ul>
    const shoppingListUl = document.getElementById('shopping-list');
    shoppingListUl.appendChild(listItem);
    inputFieldEl.value = '';
}

addButtonEl.addEventListener('click', addItemsToTheCart);