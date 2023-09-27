let form = document.querySelector('form');
let guidance = document.querySelector('.guidance');
let previousGuesses = document.querySelector('.previousGuesses');
let feedback = document.querySelector('.feedback');
let hint = document.querySelector('.hint');

let randomNumber = Math.ceil(Math.random() * 100);

form.addEventListener('submit', e => {
    e.preventDefault();

    guidance.style.display = 'block';

    let userGuess = e.target.userGuess.value;

    form.reset();
})