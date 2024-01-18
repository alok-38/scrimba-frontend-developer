// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


const errorEl = document.getElementById('error');
const purchaseBtn = document.getElementById('purchaseBtn');

const logError = () => {
    errorEl.textContent = `Something went wrong, please try again`;
}

purchaseBtn.addEventListener('click', logError);