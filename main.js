
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['Rock', 'Paper', 'Scissors'];

    return choices[randomNumber];
}

function getPlayerChoice(playerString) {
    if (playerString == "" || null || undefined) {
        alert('Please, write your choice.');
        return;
    } 

    let formatedString  = formateString(playerString)

    if (isValid(formatedString)) {
        return formatedString;
    } else {
        alert('Please, write Rock, Paper or Scissors');
    }
}

function isValid(string) {
    if (string === "Rock" || string === "Paper" || string === "Scissors") {
        return true;
    } else {
        return false;
    }
}

function formateString(string) {
    let formatedString = string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();

    return formatedString;
}

function playRound(player, computer) {
    if (player === 'Rock' && computer === 'Scissors' ||
        player === 'Paper' && computer === 'Rock' ||
        player === 'Scissors' && computer === 'Paper') {

        playerScore++;
        return (`You won! ${player} beats ${computer}.`);
    }  else if (player === computer) {
        return (`That's a draw! ${player} vs ${computer}.`);
    } else {
        computerScore++;
        return (`You lose, ${computer} beats ${player}.`);
    }
}

function playGame() {
    console.log(playRound(getPlayerChoice(playerSelection), getComputerChoice())) // Cette retourne le resultat de la manche
    
    if (computerScore === 3) {
        alert(`Computer wins ${playerScore} - ${computerScore}.`);
        return;
    } else if (playerScore === 3) {
        alert(`Player wins ${playerScore} - ${computerScore}.`);
        return;
    }

    playerSelection = prompt('Rock, Paper, Scissors?');

    playGame();
}

playerSelection = prompt('Rock, Paper, Scissors?');

playGame();

