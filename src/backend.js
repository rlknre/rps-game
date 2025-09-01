
const main = document.querySelector("body");
const mainDiv = document.querySelector(".main");

const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const footer = document.querySelector(".footer");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";

function hand(choice) {
    switch(choice) {
        case(0):
            return "Rock";
        case(1):
            return "Paper";
        default:
            return "Scissors";
    }
}

function computer() {
    // generate random int 0-2
    let choice = Math.floor(Math.random() * 3);
    return hand(choice);
}

// function player() {
//     let choice = prompt("0-Rock | 1-Paper | 2-Scissors: ", "0-1-2");
//     return hand(choice);
// }

// returns winner of a round
function round(player, computer) {
    if (player === "Rock" && computer === "Scissors" || 
        player === "Paper" && computer === "Rock" || 
        player === "Scissors" && computer === "Paper"
    ) {
        console.log('Player wins.');
        result.textContent = `${player} beats ${computer}. Player wins!`;
        playerScore += 1;

    } else if (computer === "Rock" && player === "Scissors" || 
        computer === "Paper" && player === "Rock" || 
        computer === "Scissors" && player === "Paper"
    ) {
        console.log('Computer wins.');
        result.textContent = `${computer} beats ${player}. Computer wins!`;
        computerScore += 1;

    } else {
        console.log('Tie.');
        result.textContent = `${player} and ${computer}. Tie!`;
    }
}

function playGame() {
    // best of five game
    if (playerScore + computerScore != 5) {
        computerChoice = computer();
        console.log(`Player: ${playerChoice}`);
        console.log(`Computer: ${computerChoice}`);

        round(playerChoice, computerChoice)
        console.log(`Player: ${playerScore} \nComputer: ${computerScore}`);
        
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

        if (playerScore + computerScore === 5) {
            if (playerScore > computerScore) {
                result.textContent = `Player wins!`;
            } else {
                result.textContent = `Computer wins!`;
            }
        }
    } else {
        console.log("Refresh to start a new game.");
        score.textContent = "Refresh to start a new game.";
    }

};

rock.addEventListener("click", () => {
    playerChoice = "Rock";
    playGame();
});

paper.addEventListener("click", () => {
    playerChoice = "Paper";
    playGame();
});

scissors.addEventListener("click", () => {
    playerChoice = "Scissors";
    playGame();
});

// function playGame() {
//     // play five rounds
//     for (let i=0; i<5; i++) {
//         let playererHand = player();
//         let computerHand = computer();
//         console.log(`Player: ${playererHand}`);
//         console.log(`Computer: ${computerHand}`);

//         round(playererHand, computerHand)
//     }
//     console.log(`Player: ${playerScore} \nComputer: ${computerScore}`);
// }