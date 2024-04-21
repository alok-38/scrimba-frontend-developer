const paraEl = document.getElementById('textContainer');
const buttonEl = document.getElementById('changeTextBtn');

// Store the original text content
const originalText = paraEl.textContent;

let isTextChanged = false;

const toggleText = () => {
    if (isTextChanged) {
        paraEl.textContent = originalText;
    } else {
        paraEl.textContent = 'JavaScript, better be called TypeScript.';
    }

    // Toggle the state
    isTextChanged = !isTextChanged;
}

buttonEl.addEventListener('click', toggleText);
