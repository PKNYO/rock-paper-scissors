const scoreDisplay = document.querySelector('.score')
const choiceButtons = document.querySelectorAll('button')
const infoText = document.querySelector('.info')

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['Rock', 'Paper', 'Scissors'];

    return choices[randomNumber];
}

function playRound(player, computer) {
    if (player === 'Rock' && computer === 'Scissors' ||
        player === 'Paper' && computer === 'Rock' ||
        player === 'Scissors' && computer === 'Paper') {

        playerScore++;
        scoreDisplay.textContent = `${playerScore} - ${computerScore}`
        infoText.textContent = (`You won! ${player} beats ${computer}.`);
    }  else if (player === computer) {
        infoText.textContent = (`That's a draw! ${player} vs ${computer}.`);
    } else {
        computerScore++;
        scoreDisplay.textContent = `${playerScore} - ${computerScore}`
        infoText.textContent = (`You lose, ${computer} beats ${player}.`);
    }

    isWinner()
}

function isWinner() {
    if (playerScore === 5) {
        scoreDisplay.textContent = `YOU WIN!`
    } else if (computerScore === 5) {
        scoreDisplay.textContent = `PC WINS!`
    } else {
        return
    }

    choiceButtons.forEach((button) => {
        button.disabled = true
    })
    playAgain()
}

function playAgain() {
    const againButton = document.createElement('button')
    againButton.classList.add('againButton')
    againButton.textContent = "Play Again ?"

    infoText.textContent = ""
    infoText.appendChild(againButton)

    againButton.addEventListener("click", () => {
        infoText.removeChild(againButton)
        scoreDisplay.textContent = "0 - 0"
        playerScore = 0
        computerScore = 0
        choiceButtons.forEach((button) => {
            button.disabled = false
        })
    })
}

scoreDisplay.textContent = "0 - 0"

choiceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.id, getComputerChoice())
    })
})

