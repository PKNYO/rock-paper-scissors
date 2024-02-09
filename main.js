let computerChoice = getComputerChoice()
let playerChoice = ""

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
        playerChoice = formatedString
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

playerChoice = prompt('Rock, Paper, Scissors?')

getPlayerChoice(playerChoice)

