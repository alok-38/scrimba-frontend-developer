document.addEventListener('DOMContentLoaded', function () {
    // Get the elements from the HTML that we'll need to interact with
    const promoCodeInput = document.getElementById('promoCode');
    const finalPriceElement = document.getElementById('finalPrice');
    const promoForm = document.getElementById('promoForm');
    const basePrice = 50; // base ticket price

    // Initially display the base ticket price
    finalPriceElement.textContent = `Ticket Price: $${basePrice}`;

    // Object to hold discount rates for different promo codes
    const discountRates = {
        'HALF': 0.5 // 'HALF' promo code gives 50% discount
        // Add more promo codes and corresponding discount rates here if needed
    };

    // Function to apply discount based on the user's promo code
    function applyDiscount(basePrice, userCode) {
        const discountRate = discountRates[userCode] || 0; // Get the discount rate for the entered promo code or default to 0%
        return basePrice * (1 - discountRate); // Calculate the final price after applying the discount
    }

    // Event listener for form submission
    promoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        let userCode = promoCodeInput.value.trim().toUpperCase(); // Get the user's entered promo code, trim whitespace, and convert to uppercase

        // Handle case where user enters promo code in lowercase
        if (!(userCode in discountRates)) {
            userCode = userCode.toUpperCase(); // Convert to uppercase for comparison
        }

        const finalPrice = applyDiscount(basePrice, userCode); // Calculate the final price using the entered promo code

        if (finalPrice < basePrice) {
            finalPriceElement.textContent = `Final Ticket Price: $${finalPrice.toFixed(2)}`; // Update the display to show the discounted price
            promoCodeInput.placeholder = ''; // Clear the input placeholder
        } else {
            promoCodeInput.placeholder = 'Invalid Promo Code!'; // Show an error message in the input placeholder
        }
        promoCodeInput.value = ''; // Clear the input field for the next use
    });
});
