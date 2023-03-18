function getComputerChoice() {
    let numberChosed = Math.floor(Math.random() * 3)
    let choice = ""

    if(numberChosed === 0) {
        choice = "rock"
    } else if (numberChosed === 1) {
        choice = "paper"
    } else if(numberChosed === 2) {
        choice = 'scissors'
    } 

    return choice
}

function playRound() {
    let playerSelection = prompt("rock, paper or scissors?")
    let computerSelection = getComputerChoice();
    let playButton = document.getElementById("play")

    if(playerSelection.toLowerCase() == computerSelection){
        console.log("Draw")
        playButton.style.backgroundColor = "yellow"
    } else if(playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        console.log("You lose")
        playButton.style.backgroundColor = "red"
    } else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        console.log("You won")
        playButton.style.backgroundColor = "green"
    } else if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        console.log("You won")
        playButton.style.backgroundColor = "green"
    } else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        console.log("You lose")
        playButton.style.backgroundColor = "red"
    } else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        console.log("You lose")
        playButton.style.backgroundColor = "red"
    } else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        console.log("You won")
        playButton.style.backgroundColor = "green"
    } else {
        console.log("You have to select between rock, paper or scissors.")
        playButton.style.backgroundColor = "gray"
    }
}


