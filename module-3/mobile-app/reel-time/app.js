import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// Challenge: Import the 'getDatabase' from
// "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-c0cdd-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(appSettings);

const database = getDatabase(app);

const moviesInDB = ref(database, "movies");

const buttonEl = document.querySelector("#add-button");
const inputEl = document.querySelector("#input-field");

const acceptMovieInput = () => {
  let movieInput = inputEl.value.trim();
  push(moviesInDB, movieInput);
  console.log(`${movieInput} added to database`);
  inputEl.value = "";
};

buttonEl.addEventListener("click", acceptMovieInput);
