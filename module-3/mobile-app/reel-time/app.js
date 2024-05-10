import { add } from "./functions.js";

const buttonEl = document.querySelector("#add-button");
const inputEl = document.querySelector("#input-field");

const useFunctions = () => {
  console.log("Button clicked");
  const inputValue = parseFloat(inputEl.value);
  if (!isNaN(inputValue)) {
    const result = add(inputValue, 10);
    console.log("Result:", result);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
};

buttonEl.addEventListener("click", useFunctions);
