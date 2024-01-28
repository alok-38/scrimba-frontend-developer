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
    let inputvalue = inputFieldEl.value;
    // Push the input value to the Firebase Realtime Database
    push(shoppingListInDB, inputvalue).then(() => {
        // After successfully pushing the value to the database, update the UI
        const shoppingListUl = document.getElementById('shopping-list');
        // Create a new <li> element
        const listItem = document.createElement('li');
        // Set the text content
        listItem.textContent = inputvalue;
        // Append the new <li> to the <ul> with id 'shopping-list'
        shoppingListUl.appendChild(listItem);
    }).catch(error => {
        console.log("Error adding item to the shopping list:", error);
    });
}

addButtonEl.addEventListener('click', acceptInputValue);