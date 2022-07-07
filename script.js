// Create function computerPlay that returns random value (Rock, paper or scissors)
function computerPlay () {
    let randomValue = Math.floor(Math.random()*(3));
    switch (randomValue) {
        case 0: 
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
        default: 
            console.log("ERROR");
    }
}


//Write a function that plays a single round of rock paper scissors
// It should take 2 parameters in and return a string that declares if you either won or lost
function playRound (playerSelection,computerSelection) {
    let playerValue = playerSelection.toLowerCase();
    if (playerValue == "rock" && computerSelection == "paper") {
        return "You lost, paper beats rock!";
    }
    else if (playerValue == "rock" && computerSelection == "scissors") {
        return "You win, rock beats scissors!";
    }
    else if (playerValue == "paper" && computerSelection == "rock") {
        return "You win, paper beats rock!";
    }
    else if (playerValue == "paper" && computerSelection == "scissors") {
        return "You lose, scissors beats paper!";
    }
    else if (playerValue == "scissors" && computerSelection == "rock") {
        return "You lost, rock beats scissors!";
    }
    else if (playerValue == "scissors" && computerSelection == "paper") {
        return "You win, scissors beats paper!";
    }
    else if (playerValue == computerSelection) {
        return "Draw, you both selected " + playerValue;
    }
    else return "Error, unexpected result";
}

function game() {
for (let i=0;i<5;i++) {
    let playerSelection = prompt("Enter your choice");
    const computerSelection = computerPlay();
    alert(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
}
}

game();
