import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-cbcd5-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const booksInDB = ref(database, "books");

const booksEl = document.getElementById("books");

onValue(booksInDB, function (snapshot) {
    let booksArray = Object.values(snapshot.val());
    booksArray.forEach(book => {
        console.log(book);
    });
})

const clearBooksListEl = () => {
    booksEl.innerHTML = '';
}

const appendBookToBooksListEl = (bookValue) => {
    booksEl.innerHTML += `<li>${bookValue}</li>`;
}

