var selectionImage = document.getElementById('selectimg');

var rockButton = document.getElementById('rock');
var paperButton = document.getElementById('paper');
var scissorsButton = document.getElementById('scissors');

var userScoreDisplay = document.getElementById('score-1');
var computerScoreDisplay = document.getElementById('score-2');

var computerImage = document.getElementById('compimg');

let computerChoice;
let computerGesture;
let userScore = 0;
let computerScore = 0;

function generateComputerGesture(computerChoice){
    computerChoice = Math.ceil(Math.random()*3);
    console.log(computerChoice);
    switch(computerChoice){
        case 1: 
            computerImage.src = './assets/rock-hand.png';
            computerGesture = 'r';
            break;
        case 2: 
            computerImage.src = './assets/paper-hand.png';
            computerGesture = 'p';
            break;
        case 3: 
            computerImage.src = './assets/scissors-hand.png';
            computerGesture = 's';
            break;
        default: 
            computerImage.src = '';
    }
}

rockButton.addEventListener('click', ()=>{
    selectionImage.src='./assets/rock-hand.png';
    playGame('r');
});

paperButton.addEventListener('click', ()=>{
    selectionImage.src='./assets/paper-hand.png';
    playGame('p');
});

scissorsButton.addEventListener('click', ()=>{
    selectionImage.src='./assets/scissors-hand.png';
    playGame('s');
});

function playGame(userChoice){
    generateComputerGesture(computerChoice);
    if (
        (userChoice == 'r' && computerGesture == 's') ||
        (userChoice == 'p' && computerGesture == 'r') ||
        (userChoice == 's' && computerGesture == 'p')
        ){
            userScore += 1;
    }
    else if (userChoice == computerGesture){
        userScore += 0;
    }
    else{
        computerScore += 1;
    }
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    determineWinner();
}

function determineWinner(){
    let winnerDisplay = document.getElementById('winner');
    console.log(winnerDisplay);
    if(userScore == 5){
        winnerDisplay.innerHTML = 'You';
    }
    else if(computerScore == 5){
        winnerDisplay.innerHTML = 'Computer';
    }
}

var playAgainButton = document.getElementsByClassName('playagain');

playAgainButton.onclick = () => {
    window.location.href = './game.html';
};
