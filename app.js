let form = document.querySelector('form');
let guidance = document.querySelector('.guidance');
let previousGuesses = document.querySelector('.previousGuesses');
let feedback = document.querySelector('.feedback');
let hint = document.querySelector('.hint');

let randomNumber = Math.ceil(Math.random() * 100);

console.log(randomNumber);

function displayResult(userGuess, randomNumber) {
    if (userGuess !== randomNumber) {
        feedback.textContent = 'WRONG!';
        feedback.style.backgroundColor = 'red';
        feedback.style.color = 'white';
    } else {
        feedback.textContent = 'Congratulations! You got it right!';
        feedback.style.backgroundColor = 'green';
        feedback.style.color = 'white';
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    guidance.style.display = 'block';

    let userGuess = parseInt(e.target.userGuess.value);

    previousGuesses.innerHTML += `<span> ${userGuess} </span>`;

    displayResult(userGuess, randomNumber);

    if (userGuess > randomNumber) {
        hint.textContent = 'Previous guess was too high!'
    } else if (userGuess < randomNumber) {
        hint.textContent = 'Previous guess was too low!'
    } else {
        form.remove();
        hint.remove();

        let reloadButton = document.createElement('button');
        reloadButton.textContent = 'Start new game';

        guidance.appendChild(reloadButton);

        reloadButton.addEventListener('click', e => {
            location.reload();
        })
    }

    form.reset();
})