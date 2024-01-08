function calculateDiscount() {
    const ageInput = document.getElementById('ageInput');
    const discountMessage = document.getElementById('discountMessage');
    // Parse the age input value to an integer
    const age = parseInt(ageInput.value);
    // Check the age range and determine the discount
    if (age < 6) {
        discountMessage.textContent = "You get a free ticket!";
    } else if (age >= 6 && age <= 17) {
        discountMessage.textContent = "You qualify for a child discount.";
    } else if (age >= 18 && age <= 26) {
        discountMessage.textContent = "You qualify for a student discount.";
    } else if (age >= 27 && age <= 66) {
        discountMessage.textContent = "You need to pay the full price.";
    } else {
        discountMessage.textContent = "You qualify for a senior citizen discount.";
    }
}

const calculateDiscountBtn = document.getElementById('calculateDiscountBtn');
calculateDiscountBtn.addEventListener('click', calculateDiscount);