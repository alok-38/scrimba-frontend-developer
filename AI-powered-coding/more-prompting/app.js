const interactiveButton = document.getElementById('interactive-button');

const h1Element = document.querySelector('h1');
const mainElement = document.querySelector('main');
const interactiveMessageElement = document.getElementById('interactive-message');

const toggleh1ElementColor = () => {
    interactiveButton.style.backgroundColor = '#DE6C6A';
    interactiveButton.textContent = 'Click again';
    h1Element.style.color = 'orange';
    mainElement.style.backgroundColor = '#DE976A';
    mainElement.style.color = '#fff';
    interactiveMessageElement.style.color = '#fff';
}

interactiveButton.addEventListener('click', toggleh1ElementColor);