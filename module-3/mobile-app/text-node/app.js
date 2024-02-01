const yesBtnEl = document.getElementById('yesBtn');
const noBtnEl = document.getElementById('noBtn');
const weCanBtnEl = document.getElementById('weCanBtn');

const addTextNode = (text) => {
    const newText = document.createTextNode(text);
    const paraEl = document.getElementById('paraEl');
    paraEl.appendChild(newText);
}

yesBtnEl.addEventListener('click', addTextNode('YES! '));
noBtnEl.addEventListener('click', addTextNode('NO! '));
weCanBtnEl.addEventListener('click', addTextNode('WE CAN! '));