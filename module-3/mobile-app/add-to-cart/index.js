const inputEl = document.getElementById('input-field');
const addBtnEl = document.getElementById('add-button');
const shoppinglistEl = document.getElementById('shopping-list');
const containerEl = document.getElementsByClassName('container');

const updateListItems = () => {
    const inputItem = inputEl.value;
    const listEl = document.createElement('li');
    const listItem = document.createTextNode(inputItem); // Create a text node
    listEl.appendChild(listItem); // Append text node to list item
    shoppinglistEl.appendChild(listEl); // Append list item to shopping list
    inputEl.value = ''; // Clear input value
    inputEl.placeholder = ''; // Clear input placeholder
}

addBtnEl.addEventListener('click', updateListItems);