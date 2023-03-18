const divPlayer = document.getElementById("player-score");
const divComputer = document.getElementById("computer-score");

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

var computerScore = 0;
var playerScore = 0;

function playRound(playerSelection) {
    var computerSelection = getComputerChoice();
    
    if(playerSelection == computerSelection) {
        computerScore++
        playerScore++
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
    }

    if(playerScore >= 5 && computerScore >= 5) {
        alert("Draw")
        playerScore = 0
        computerScore = 0
    } else if (playerScore >= 5) {
        alert("You won")
        playerScore = 0
        computerScore = 0
    } else if (computerScore >= 5) {
        alert("You lost")
        playerScore = 0
        computerScore = 0
    }

    divPlayer.innerHTML = playerScore;
    divComputer.innerHTML = computerScore;
}
