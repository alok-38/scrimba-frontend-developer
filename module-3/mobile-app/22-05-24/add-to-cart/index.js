/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

const acceptInputAndLogOutput = () => {
  const acceptInput = inputElement.value;
  console.log(acceptInput);
  inputElement.value = "";
};

buttonElement.addEventListener("click", acceptInputAndLogOutput);
