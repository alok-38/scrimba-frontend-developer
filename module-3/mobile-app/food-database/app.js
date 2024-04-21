import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://realtime-database-db1b1-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const containerEl = document.querySelector(".container");

const addFoodToFirebase = () => {
    let inputValue = inputFieldEl.value;
    if (inputValue.trim() !== "") {
        // Push the input value to Firebase database
        const newItemRef = push(shoppingListInDB);
        // Instead of using newItemRef.set, directly set the value using set function
        set(newItemRef, inputValue);

        // Create and append paragraph element to show the confirmation
        const confirmationPara = document.createElement("p");
        confirmationPara.textContent = `${inputValue} has been added to the database`;
        containerEl.appendChild(confirmationPara);
        inputFieldEl.value = '';
    }
}

addButtonEl.addEventListener('click', addFoodToFirebase);
