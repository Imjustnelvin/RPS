function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice) {
        case 1:
             return 'Rock';
            break;
        case 2:
             return 'Paper';
            break;
        case 3:
             return 'Scissor';
            break;
        default: 
             return 'Somethings wrong...';
            break;
    }   
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock'  && computerSelection == 'scissor') ||
        (playerSelection == 'paper'  && computerSelection == 'rock') ||
        (playerSelection == 'scissor'  && computerSelection == 'paper') ) {
        return `[Player Wins!] | player picked ${playerSelection}`
    } else if ((computerSelection == 'rock'  && playerSelection == 'scissor') ||
               (computerSelection == 'paper'  && playerSelection == 'rock') ||
               (computerSelection == 'scissor'  && playerSelection == 'paper') ){
                return `[Computer Wins!]| computer picked ${computerSelection}`
    } else if (playerSelection != ('rock' || 'paper' || 'scissor')) {
        return null;
    } else {
        return `[It's a tie!] | you both picked ${playerSelection}`
    }
  }

  for (i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = prompt('Choose your weapon: rock, paper or scissor').toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    if (playRound() == null) {i--} }
  