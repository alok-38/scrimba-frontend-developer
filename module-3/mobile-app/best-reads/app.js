import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://playground-cbcd5-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const booksInDB = ref(database, "books");

const booksEl = document.getElementById("books");
let ulEl = document.createElement('ul');
booksEl.appendChild(ulEl); // Append the ul outside the loop

onValue(booksInDB, function (snapshot) {
    let booksArray = Object.values(snapshot.val());
    // Challenge: Write a for loop where you console log each book.
    for (let i = 0; i < booksArray.length; i++) {
        let currentBook = booksArray[i]

        // Challenge: Use the appendBookToBooksListEl() function to append book instead of console logging
        appendBookToBooksListEl(currentBook)
    }
});

const clearBooksListEl = () => {
    booksEl.innerHTML = '';
};

const appendBookToBooksListEl = (bookValue) => {
    booksEl.innerHTML += `<li>${bookValue}</li>`;
};
