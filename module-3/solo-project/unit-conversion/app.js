const inputEl = document.getElementById('inputEl');
const convertBtn = document.getElementById('convertBtn');
const lengthResult = document.getElementById('lengthResult');
const volumeResult = document.getElementById('volumeResult');
const massResult = document.getElementById('massResult');

convertBtn.addEventListener('click', () => {
    const inputValue = parseFloat(inputEl.value);

    if (!isNaN(inputValue)) {
        // Length conversion
        const meters = inputValue;
        const feet = meteresToFeet(meters);
        const toMeters = feetToMeteres(feet);
        lengthResult.textContent = `${meters.toFixed(3)} meters = ${feet.toFixed(3)} feet | ${feet.toFixed(3)} feet = ${toMeters.toFixed(3)} meters`;

        // Volume conversion
        const liters = inputValue;
        const gallons = literesToGallon(liters);
        const toLiters = gallonsToLiteres(gallons);
        volumeResult.textContent = `${liters.toFixed(3)} liters = ${gallons.toFixed(3)} gallons | ${gallons.toFixed(3)} gallons = ${toLiters.toFixed(3)} liters`;

        // Mass conversion
        const kilograms = inputValue;
        const pounds = kilosToPounds(kilograms);
        const toKilos = poundsToKilos(pounds);
        massResult.textContent = `${kilograms.toFixed(3)} kilos = ${pounds.toFixed(3)} pounds | ${pounds.toFixed(3)} pounds = ${toKilos.toFixed(3)} kilos`;
    } else {
        alert('Please enter a valid numeric value.');
    }
});

const meteresToFeet = (meters) => {
    return meters * 3.28084;
}

const feetToMeteres = (feet) => {
    return feet / 3.28084;
}

const literesToGallon = (liters) => {
    return liters * 0.264172;
}

const gallonsToLiteres = (gallons) => {
    return gallons / 0.264172;
}

const kilosToPounds = (kilograms) => {
    return kilograms * 2.20462;
}

const poundsToKilos = (pounds) => {
    return pounds / 2.20462;
}
