let form = document.querySelector('form');
let guidance = document.querySelector('.guidance');
let previousGuesses = document.querySelector('.previousGuess');
let feedback = document.querySelector('.feedback');
let hint = document.querySelector('.hint');

let randomNumber = Math.ceil(Math.random() * 100);

form.addEventListener('submit', e => {
    e.preventDefault();
})