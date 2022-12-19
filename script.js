const buttons = document.querySelectorAll('button');
const playerWeaponContainer = document.querySelector(".player");
const computerWeaponContainer = document.querySelector(".computer");
const resultWeaponContainer = document.querySelector(".result");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
 
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

function playRound(p, c) {
    if ((p == 'rock'  && c == 'scissor') ||
        (p == 'paper'  && c == 'rock') ||
        (p == 'scissor'  && c == 'paper') ) {
        return `player win`
    } else if ((c == 'rock'  && p == 'scissor') ||
               (c == 'paper'  && p == 'rock') ||
               (c == 'scissor'  && p == 'paper')) {
                return `computer win`
    } else {
        return `tie`;
    }
}
let p = 0, c = 0;

buttons.forEach(button => {
    button.addEventListener('click', e => {
       let player = e.target.innerText.toLowerCase();
       let computer = getComputerChoice().toLowerCase();
       playerWeaponContainer.innerText = player;
       computerWeaponContainer.innerText = computer;
       let result = playRound(player, computer);
       resultWeaponContainer.innerText = result;
       if(result == 'player win')p++; playerScore.innerText = p;
       if(result == 'computer win') c++; computerScore.innerText = c;
    })
})