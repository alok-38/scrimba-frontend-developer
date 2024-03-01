import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-cbcd5-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books")

onValue(booksInDB, function (snapshot) {
    if (snapshot.exists()) { // Check if the snapshot has data
        let booksArray = Object.values(snapshot.val())

        clearBooksListEl()

        for (let i = 0; i < booksArray.length; i++) {
            let currentBook = booksArray[i]

            appendBookToBooksListEl(currentBook)
        }
    } else {
        // Handle case where no data is available
        clearBooksListEl()
        booksEl.innerHTML += "<li>No books available</li>"
    }
})

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    // Assuming bookValue is an object with properties like title, author, etc.
    // Adjust this according to your actual data structure
    booksEl.innerHTML += `<li>${bookValue.title} by ${bookValue.author}</li>`
}
