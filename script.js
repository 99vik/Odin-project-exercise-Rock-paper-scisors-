let playerScore = 0;
let computerScore = 0;
const resultText = document.querySelector('.result');
const currentResult = document.querySelector('.current-result');
const playAgainBtn = document.createElement('button');
const choiceDiv = document.querySelector('.choice');
const choicePictures = document.querySelector('.choice-pictures');
playAgainBtn.className = "play-again-btn";
playAgainBtn.textContent = "Play again?";
const choiceText = document.querySelector('.choice-text');
playAgainBtn.addEventListener('click', () => {
    resetGame();
});

//generate random nuber from 0 to 2, and turn it into 
//rock paper or scissors
function computerGenerate () {
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

//2 inputs that return a result of a RPS round
function playRound (playerValue,computerSelection) {
    if (playerValue == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lost, paper beats rock!";
    }
    else if (playerValue == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win, rock beats scissors!";
    }
    else if (playerValue == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You win, paper beats rock!";
    }
    else if (playerValue == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose, scissors beats paper!";
    }
    else if (playerValue == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lost, rock beats scissors!";
    }
    else if (playerValue == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You win, scissors beats paper!";
    }
    else if (playerValue == computerSelection) {
        return "Draw, you both selected " + playerValue;
    }
    else return "Error, unexpected result";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    currentResult.textContent = (playerScore + " : " + computerScore);
    playAgainBtn.replaceWith(choicePictures);
    resultText.textContent = "";
    choiceText.textContent = "Choose one";
}

function checkResult() {
    if (playerScore >= 5) {
        resultText.textContent = "YOU WON!";
        choicePictures.replaceWith(playAgainBtn);
        choiceText.textContent = "";
    }
    if (computerScore >= 5) {
        resultText.textContent = "YOU LOST!";
        choicePictures.replaceWith(playAgainBtn);
        choiceText.textContent = "";
    }
}

//player choice from images
const chooseRock = document.querySelector('img.rock');
const choosePaper = document.querySelector('img.paper');
const chooseScissors = document.querySelector('img.scissors');
chooseRock.addEventListener('click',() => {
    playGame("rock",computerGenerate());

});
choosePaper.addEventListener('click',() => {
    playGame("paper",computerGenerate());
});
chooseScissors.addEventListener('click',() => {
    playGame("scissors",computerGenerate());
});

//main function 
function playGame (playerValue,computerSelection) {
    resultText.textContent = playRound(playerValue,computerSelection);
    resultText.style.display = "inline";
    currentResult.textContent = (playerScore + " : " + computerScore);
    checkResult();
}


