import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-d7897-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const containerEl = document.querySelector('.container');

const renderShoppingList = (data) => {
    containerEl.innerHTML = ""; 
    data.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.textContent = item.item;
        containerEl.appendChild(listItem);
    });
}

const addShoppingListToDB = () => {
    const shoppingListItem = inputFieldEl.value.trim();
    if (shoppingListItem) {
        push(shoppingListInDB, {
            item: shoppingListItem
        }).then(() => {
            console.log("Item added to the database");
        }).catch((error) => {
            console.error("Error adding item to database: ", error);
        });
        inputFieldEl.value = ''; 
    }
}

onValue(shoppingListInDB, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        const shoppingListArray = Object.values(data);
        renderShoppingList(shoppingListArray);
    }
}, {
    onlyOnce: false 
});

addButtonEl.addEventListener('click', addShoppingListToDB);
