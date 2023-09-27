let form = document.querySelector('form');
let guidance = document.querySelector('.guidance');
let previousGuesses = document.querySelector('.previousGuesses');
let feedback = document.querySelector('.feedback');
let hint = document.querySelector('.hint');

let randomNumber = Math.ceil(Math.random() * 100);

console.log(randomNumber);

form.addEventListener('submit', e => {
    e.preventDefault();

    guidance.style.display = 'block';

    let userGuess = parseInt(e.target.userGuess.value);

    previousGuesses.innerHTML += `<span> ${userGuess} </span>`;

    if (userGuess !== randomNumber) {
        feedback.textContent = 'WRONG!';

        feedback.style.backgroundColor = 'red';
        feedback.style.color = 'white';
    } else {
        feedback.textContent = 'Congratulations! You got it right!';

        feedback.style.backgroundColor = 'green';
        feedback.style.color = 'white';
    }

    form.reset();
})