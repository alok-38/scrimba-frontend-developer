const inputElement = document.getElementById("input-field");
const buttonElement = document.getElementById("add-button");
const ulElement = document.getElementById("shopping-list");

const getInputFromTheUser = () => {
  const getInput = inputElement.value;
  const liElement = document.createElement("li");
  const textNode = document.createTextNode(getInput);
  liElement.appendChild(textNode);
  ulElement.appendChild(liElement);
};

buttonElement.addEventListener("click", getInputFromTheUser);
