const inputElement = document.getElementById("input-field");
const buttonElement = document.getElementById("add-button");
const ulElement = document.getElementById("shopping-list");

const handleAddToCart = () => {
  const getInput = inputElement.value.trim(); // Trim to remove leading/trailing whitespace
  if (getInput !== "") {
    const liElement = document.createElement("li");
    const textNode = document.createTextNode(getInput);
    liElement.appendChild(textNode);
    ulElement.appendChild(liElement);
    inputElement.value = ""; // Clear the input field after adding item
  }
};

buttonElement.addEventListener("click", handleAddToCart);
