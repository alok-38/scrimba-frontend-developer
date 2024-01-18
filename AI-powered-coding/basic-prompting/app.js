let messageEl;

const toggleMessage = () => {
    messageEl = document.getElementById('message');
    if (messageEl.textContent === 'Hey there!') {
        messageEl.textContent = '';
        clickMeBtn.textContent = 'Show message';
    } else {
        clickMeBtn.textContent = 'Hide message';
        messageEl.textContent = 'Hey there!';
    }
}

const clickMeBtn = document.getElementById('clickMeBtn');
clickMeBtn.addEventListener('click', toggleMessage);
