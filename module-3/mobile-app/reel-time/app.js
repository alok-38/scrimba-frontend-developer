const inputEl = document.getElementById('input-field');
const buttonEl = document.getElementById('add-button');

const addMovieToTheDatabase = () => {
    let movie = inputEl.value;
    const paraEl = document.createElement('p');
    const movieTextNode = document.createTextNode(movie);
    paraEl.appendChild(movieTextNode);
    document.body.appendChild(paraEl);
    paraEl.style.textAlign = 'center';
    inputEl.value = '';
}

buttonEl.addEventListener('click', addMovieToTheDatabase);