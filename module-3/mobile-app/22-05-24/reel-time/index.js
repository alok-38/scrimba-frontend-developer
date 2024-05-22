const appSettings = {
  databaseURL:
    "https://playground-3db2f-default-rtdb.asia-southeast1.firebasedatabase.app",
};
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  console.log(`${inputValue} added to database`);
});
