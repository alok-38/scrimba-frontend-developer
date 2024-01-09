let fruits = { "🍎": [], "🍊": [] };
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function updateShelves() {
    // Clear the shelves before updating
    appleShelf.textContent = "";
    orangeShelf.textContent = "";

    // Update shelves based on the current list of fruits
    for (const [fruit, shelf] of Object.entries(fruits)) {
        shelf.forEach(() => {
            if (fruit === "🍎") {
                appleShelf.textContent += "🍎 ";
            } else if (fruit === "🍊") {
                orangeShelf.textContent += "🍊 ";
            }
        });
    }
}

function addFruit() {
    const newFruitInput = document.getElementById("new-fruit");
    const newFruit = newFruitInput.value.trim();

    if (newFruit !== "") {
        // Add the new fruit to the respective shelf
        if (fruits.hasOwnProperty(newFruit)) {
            fruits[newFruit].push(newFruit);
            // Update the shelves
            updateShelves();
            // Clear the input field
            newFruitInput.value = "";
        } else {
            alert("Invalid fruit! Please select either 🍎 or 🍊.");
        }
    }
}

function removeFruit() {
    const removeFruitSelect = document.getElementById("remove-fruit");
    const selectedFruit = removeFruitSelect.value;

    // Remove the selected fruit from the respective shelf
    if (fruits.hasOwnProperty(selectedFruit) && fruits[selectedFruit].length > 0) {
        fruits[selectedFruit].pop();
        // Update the shelves
        updateShelves();
    } else {
        alert("No more " + selectedFruit + " to remove.");
    }
}

const addFruitBtn = document.getElementById('addFruitBtn');
const removeFruitBtn = document.getElementById('removeFruitBtn');

addFruitBtn.addEventListener('click', addFruit);
removeFruitBtn.addEventListener('click', removeFruit);
