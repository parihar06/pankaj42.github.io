// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Maximum attempts
let maxAttempts = 7;
let attemptsLeft = maxAttempts;

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    // Input validation
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️ Please enter a number between 1 and 100";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        endGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high! Try again.";
    } else {
        message.textContent = "📈 Too low! Try again.";
    }

    attemptsText.textContent = `Attempts left: ${attemptsLeft}`;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = `❌ Game Over! The number was ${randomNumber}`;
        endGame();
    }
}

function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;

    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("restartBtn").style.display = "none";
}
