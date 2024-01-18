const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const generateRandomPassword = (length) => {
    let password = '';
    const charactersLength = characters.length;

    for (let index = 0; index < charactersLength; index++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        password += characters[randomIndex];
    }
    return password;
}

const generatePasswordBtn = document.getElementById('generatePasswordBtn');

generatePasswordBtn.addEventListener('click', () => {
    const passwordLength = 12;
    const password1 = generateRandomPassword(passwordLength);
    const password2 = generateRandomPassword(passwordLength);
    const displayField1El = document.getElementById('display-1');
    const displayField2El = document.getElementById('display-2');
    displayField1El.value = password1;
    displayField2El.value = password2;
});