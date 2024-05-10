// Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase app settings
const appSettings = {
  databaseURL:
    "https://realtime-database-a7906-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase app
const app = initializeApp(appSettings);
const database = getDatabase(app);

// DOM elements
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const ulEl = document.querySelector("ul");

// Reference to shopping list in the database
const shoppingListRef = ref(database, "shoppingList");

// Function to create a new list item element with the provided text
const createListItem = (text) => {
  const liEl = document.createElement("li");
  const liTextNode = document.createTextNode(text);
  liEl.appendChild(liTextNode);
  return liEl;
};

// Function to add a new item to the shopping list
const addItemToShoppingList = (text) => {
  push(shoppingListRef, { value: text }); // Push the item to the database
  ulEl.appendChild(createListItem(text)); // Add the item to the DOM
  inputEl.value = ""; // Clear input field after adding to the list
};

// Function to handle accepting input
const acceptInput = () => {
  const inputValue = inputEl.value.trim();
  console.log(inputValue);

  if (inputValue) addItemToShoppingList(inputValue); // Check if input value is not empty
};

// Event listener for the button click
buttonEl.addEventListener("click", acceptInput);

// Listen for changes in the shoppingListRef reference
onValue(shoppingListRef, function (snapshot) {
  if (snapshot.exists()) {
    // Check if snapshot exists
    const objectToArray = Object.values(snapshot.val());

    if (objectToArray.length > ulEl.childElementCount) {
      // Check if new item added
      const newItems = objectToArray.slice(ulEl.childElementCount);
      newItems.forEach((item) => ulEl.appendChild(createListItem(item.value)));
    }
  }
});

// Function to clear all items in the database
const clearDatabase = () => {
  remove(shoppingListRef)
    .then(() => console.log("Database cleared successfully."))
    .catch((error) => console.error("Error clearing database:", error));
};

// Call the clearDatabase function to clear everything in the database
clearDatabase();
