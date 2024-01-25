const inputEl = document.getElementById('inputEl');
const convertBtn = document.getElementById('convertBtn');
const paraEl = document.createElement('p');

const meteresToFeet = (meteres) => {
    return meters * 3.28084;
}

const feetToMeteres = (feet) => {
    return feet / 3.28084;
}

const literesToGallon = (liters) => {
    return liters * 0.264172;
}

const GallonsToLiteres = (gallons) => {
    return gallons / 0.264172;
}

const kilosToPounds = (kilograms) => {
    return kilograms * 2.20462;
}

const poundsToKilos = (pounds) => {
    return pounds / 2.20462;
}