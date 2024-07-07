let input = document.getElementById('input');
let btn = document.getElementById("btn");

let wrong = document.getElementById('wrng');

let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click", () => {
    guessesNumber();
});

function guessesNumber() {
    
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrong.innerHTML = "Enter a number between 1 & 100";
    } else {
        numGuesses++;
        guesses.innerHTML = "Number of guesses: " + numGuesses;

        if (Number(input.value) > answer) {
            wrong.innerHTML = "Too High!";
            input.value = "";
        } else if (Number(input.value) < answer) {
            wrong.innerHTML = "Too Low!";
            input.value = "";
        } else {
           
            wrong.innerHTML = "Congrats! You guessed it right";
            btn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    guesses.innerHTML = "Number of guesses: 0";
    btn.disabled = false;
}

