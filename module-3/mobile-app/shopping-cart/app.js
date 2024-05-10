// Challenge: Import 'initializeApp' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Challenge: Import 'getDatabase' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {
  databaseURL:
    "https://realtime-database-a7906-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(appSettings);

const database = getDatabase(app);

const shoppingListInDB = ref(database, "shoppingList");

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

// Function to create a new list item element with the provided text
const createListItem = (text) => {
  const liEl = document.createElement("li");
  const liTextNode = document.createTextNode(text);
  liEl.appendChild(liTextNode);
  return liEl;
};

// Function to add a new item to the shopping list
const addItemToShoppingList = (text) => {
  // Push the item to the database
  push(shoppingListInDB, {
    value: text,
  });

  // Add the item to the DOM
  const ulEl = document.querySelector("ul");
  ulEl.appendChild(createListItem(text));

  // Clear input field after adding to the list
  inputEl.value = "";
};

// Function to handle accepting input
const acceptInput = () => {
  const inputValue = inputEl.value.trim();
  console.log(inputValue);

  // Check if input value is not empty
  if (inputValue) {
    addItemToShoppingList(inputValue);
  }
};

// Event listener for the button click
buttonEl.addEventListener("click", acceptInput);
