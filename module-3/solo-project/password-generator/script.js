// Declares and store possible characters in a variable called chars
const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Declares a variable called passwordLength and assign its value to 12
let passwordLength = 8;

// Stores the password1-el paragraph in a variable called password1EL
const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");
const password3El = document.getElementById("password3-el");
const password4El = document.getElementById("password4-el");

// Get a reference to the slider and sliderNumber DOM elements
const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("sliderNumber");

// Creates a function generatePasswords() that return a random password composed of passwordLength characters
function generatePasswords() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

