playerScore = 0;
computerScore = 0;

function getComputerChoice() {
    x = Math.floor(Math.random()*3);
    console.log(x);
    if (x === 0) {
        return 'rock';
    }
    else if (x === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    //console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        console.log('Tie!');
        return 0;

    }
    else if ((playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'rock' && computerSelection === 'scissor') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
        console.log('Player wins! ' + playerSelection + ' beats ' + computerSelection)
        playerScore++;
        return 1; 
    }
    else {
        console.log('Computer wins! ' + computerSelection + ' beats ' + playerSelection);
        computerScore++;
        return 2; 
    }

}

function game() {
    let playerSelection;
    let computerSelection;

    for(let i = 0; i < 5; i++) {
        while ((playerSelection != 'paper') && (playerSelection != 'rock') && (playerSelection != 'scissors')) {
        playerSelection = prompt("Input: Rock, Paper or Scissors").toLowerCase().trim();
            if ((playerSelection != 'paper') && (playerSelection != 'rock') && (playerSelection != 'scissors')) {
            console.log("INVALID INPUT");
            }
        }
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);    
        playerSelection = '';
    }

    console.log('Final Score - Player: ' + playerScore + ' - ' + 'CPU: ' + computerScore);

    if(playerScore > computerScore) {
        console.log('Player wins!');
    }
    else if(playerScore < computerScore) {
        console.log('Computer wins!');
    }
    else {
        console.log('Tie Game!');
    }

    
    
}