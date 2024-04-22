const buttonElement = document.getElementById("add-button");
const inputElement = document.getElementById("input-field");
const formElement = document.querySelector("form");
const ulElement = document.querySelector(".food--items");

const logFoodItem = (event) => {
  event.preventDefault();
  const foodItem = inputElement.value.trim();
  const liElement = document.createElement("li");
  // Create a text node
  const textNode = document.createTextNode(foodItem);
  liElement.appendChild(textNode);
  //   Append this to the ul
  ulElement.appendChild(liElement);
  inputElement.value = "";
};

buttonElement.addEventListener("click", logFoodItem);
