const h2Element = document.getElementById('count-el');
const incrementButton = document.getElementById('increment-btn');
const saveButton = document.getElementById('save-btn');
let saveElement = document.getElementById('save-el');
const resetButton = document.getElementById('reset-btn');

let count = 0;

const incrementCount = () => {
	count++;
	h2Element.textContent = count;
}

incrementButton.addEventListener('click', incrementCount);

// Save previous entries
const saveCount = () => {
	if (saveElement.textContent !== 'Previous entries: ') {
		saveElement.textContent += ' - ';
	}
	saveElement.textContent += count;
	count = 0;
	h2Element.textContent = count; // Reset count display after saving
}


saveButton.addEventListener('click', saveCount);

// Reset count
const resetCount = () => {
	saveElement.textContent = 'Previous entries: ';
}

resetButton.addEventListener('click', resetCount);