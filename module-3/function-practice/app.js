const generateSentence = () => {
    const description = document.getElementById('description').value;
    const elementsInput = document.getElementById('elements').value;
    const elementsArray = elementsInput.split(',').map(element => element.trim());
    const result = `The ${elementsArray.length} ${description} are ${elementsArray.join(', ')}`;
    document.getElementById('result').innerText = result;
}

const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateSentence);