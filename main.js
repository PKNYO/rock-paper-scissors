let computerSelection = getComputerChoice()
let playerSelection = ""

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    const choices = ['Rock', 'Paper', 'Scissors']

    return choices[randomNumber]
}

function getPlayerChoice(playerString) {
    if (playerString == "" || null || undefined) {
        console.log('Please, write your choice.')
        return
    } 

    let formatedString  = formateString(playerString)

    if (isValid(formatedString)) {
        playerSelection = formatedString
    } else {
        console.log('Please, write Rock, Paper or Scissors')
    }
}

function isValid(string) {
    if (string === "Rock" || string === "Paper" || string === "Scissors") {
        return true
    } else {
        return false
    }
}

function formateString(string) {
    let formatedString = string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase()

    return formatedString
}

playerSelection = prompt('Rock, Paper, Scissors?')

getPlayerChoice(playerSelection)

