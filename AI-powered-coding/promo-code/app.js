document.addEventListener('DOMContentLoaded', () => {
    const promoCodeInput = document.getElementById('promoCode');
    const finalPriceElement = document.getElementById('finalPrice');
    const promoForm = document.getElementById('promoForm');
    const basePrice = 50; // base ticket price

    // Display the base initially
    finalPriceElement.textContent = `Ticket Price: $${basePrice.toFixed(2)}`;
    finalPriceElement.style.textAlign = 'center';

    // Calculate the discount based on users input
    const applyDiscount = (basePrice, userCode) => {
        let discountRate = 0;
        if (userCode === 'HALF') {
            discountRate = 0.5;
        }
        // Calculate the final price
        const finalPrice = basePrice - basePrice * discountRate;
        return finalPrice;
    }

    // When the user submits the form
    promoForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const userCode = promoCodeInput.value.trim();
        const finalPrice = applyDiscount(basePrice, userCode);

        if (finalPrice < basePrice) {
            finalPriceElement.textContent = `Final Ticket Price: $${finalPrice.toFixed(2)}`;
            promoCodeInput.placeholder = '';
        } else {
            promoCodeInput.placeholder = 'Invalid Promocode';
        }
        promoCodeInput.value = '';
    });
});
