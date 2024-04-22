// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://shopping-cart-fd6ad-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase app
const initializeFirebaseApp = () => {
  return initializeApp(firebaseConfig);
};

// Get Firebase database reference
const getFirebaseDatabase = (app) => {
  return getDatabase(app);
};

// Get reference to the shopping list in the database
const getShoppingListRef = (database) => {
  return ref(database, "shoppingList");
};

// Log food item to the database and display it on the UI
const logFoodItem = (event, shoppingListRef, inputElement, ulElement) => {
  event.preventDefault();
  const foodItem = inputElement.value.trim();

  if (foodItem === "") {
    return; // Ignore empty food items
  }

  // Create <li> element
  const liElement = document.createElement("li");
  // Create text node for food item
  const textNode = document.createTextNode(foodItem);
  liElement.appendChild(textNode);
  // Append <li> to <ul>
  ulElement.appendChild(liElement);

  // Push food item to Firebase database
  push(shoppingListRef, foodItem);

  // Clear input field
  inputElement.value = "";
};

// Main function to initialize the app
const initializeAppMain = () => {
  // Get DOM elements
  const buttonElement = document.getElementById("add-button");
  const inputElement = document.getElementById("input-field");
  const ulElement = document.querySelector(".food--items");

  // Initialize Firebase app
  const app = initializeFirebaseApp();
  // Get Firebase database reference
  const database = getFirebaseDatabase(app);
  // Get reference to the shopping list in the database
  const shoppingListRef = getShoppingListRef(database);

  // Event listener for add button
  buttonElement.addEventListener("click", (event) => {
    logFoodItem(event, shoppingListRef, inputElement, ulElement);
  });
};

// Initialize the app when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeAppMain);
