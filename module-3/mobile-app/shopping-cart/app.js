import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://shopping-cart-fd6ad-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const buttonElement = document.getElementById("add-button");
const inputElement = document.getElementById("input-field");
const ulElement = document.querySelector(".food--items");

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const logFoodItem = (event) => {
  event.preventDefault();
  const foodItem = inputElement.value.trim();
  const liElement = document.createElement("li");
  // Create a text node
  const textNode = document.createTextNode(foodItem);
  liElement.appendChild(textNode);
  //   Append this to the ul
  ulElement.appendChild(liElement);
  push(shoppingListInDB, foodItem);
  inputElement.value = "";
};

buttonElement.addEventListener("click", logFoodItem);
