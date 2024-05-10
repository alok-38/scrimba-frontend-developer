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

const acceptInput = () => {
  const inputValue = inputEl.value.trim();
  // Challenge: Use the Firebase function 'push' to push inputValue to the database
  push(shoppingListInDB, {
    value: inputValue,
  });
  console.log(inputValue);
  inputEl.value = "";
};

buttonEl.addEventListener("click", acceptInput);
