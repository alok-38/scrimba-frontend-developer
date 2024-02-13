import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Initialize Firebase app and get database reference
const initializeFirebaseApp = () => {
    const appSettings = {
        databaseURL: "https://realtime-database-b5f72-default-rtdb.asia-southeast1.firebasedatabase.app"
    };
    const app = initializeApp(appSettings);
    return getDatabase(app);
}

// Function to push a new item to the Firebase database
const pushToDatabase = (databaseRef, value) => {
    return push(databaseRef, value);
}

// Function to create a new <li> element with given text content
const createListItemElement = (text) => {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    return listItem;
}

// Function to add a new item to the shopping list
const addItemToShoppingList = () => {
    const database = initializeFirebaseApp();
    const shoppingListInDB = ref(database, "shoppingList");
    const inputValue = inputFieldEl.value;

    // Push the new item to the Firebase database
    pushToDatabase(shoppingListInDB, inputValue);

    // Create a new <li> element with the input value
    const listItem = createListItemElement(inputValue);

    // Append the new <li> element to the 'shopping-list' <ul>
    const shoppingListUl = document.getElementById('shopping-list');
    shoppingListUl.appendChild(listItem);

    // Clear the input field after adding the item
    inputFieldEl.value = '';
}

// DOM elements
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

// Event listener to add item to the shopping list when the button is clicked
addButtonEl.addEventListener('click', addItemToShoppingList);
