/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

const acceptInput = () => {
  const inputValue = inputEl.value.trim();
  console.log(inputValue);
};

buttonEl.addEventListener("click", acceptInput);
