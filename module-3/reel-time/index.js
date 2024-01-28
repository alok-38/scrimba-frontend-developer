import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const appSettings = {
    databaseURL: "https://shopping-cart-f6e7d-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings);

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');

const testFunction = () => {
    console.log(app);
}

addButtonEl.addEventListener('click', testFunction);