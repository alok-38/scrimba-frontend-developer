const sayHelloBtn = document.getElementById('sayHelloBtn');
const messageEl = document.getElementById('message');

const sayHello = () => {
   messageEl.innerHTML = '<p>Hello there! Thanks for visiting my website.</p>';
   messageEl.style.display = 'block';
}

sayHelloBtn.addEventListener('click', sayHello);