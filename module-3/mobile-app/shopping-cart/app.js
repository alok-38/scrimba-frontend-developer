import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://realtime-database-d7897-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "cart");

const addToCart = () => {
    let inputValue = inputFieldEl.value;
    if (inputValue.trim() !== '') {
        // Push the value to the database
        push(itemsInDB, {
            name: inputValue
        }).then(() => {
            console.log("Item added to cart:", inputValue);
            inputFieldEl.value = ''; // Clear the input field
        }).catch((error) => {
            console.error("Error adding item to cart:", error);
        });
    } else {
        console.log("Please enter a valid item name.");
    }
};

addButtonEl.addEventListener('click', addToCart);
