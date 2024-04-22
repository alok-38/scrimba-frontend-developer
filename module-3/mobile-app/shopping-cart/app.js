const buttonElement = document.getElementById("add-button");
const inputElement = document.getElementById("input-field");
const formElement = document.querySelector("form");

const logFoodItem = (event) => {
  event.preventDefault();
  const foodItem = inputElement.value.trim();
  console.log(foodItem);
  inputElement.value = "";
};

buttonElement.addEventListener("click", logFoodItem);
