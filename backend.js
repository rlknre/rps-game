
let playerScore = 0;
let computerScore = 0;

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

function player() {
    let choice = prompt("0-Rock | 1-Paper | 2-Scissors: ", "0-1-2");
    return hand(choice);
}

// returns winner of a round
function round(player, computer) {
    if (player === "Rock" && computer === "Scissors" || 
        player === "Paper" && computer === "Rock" || 
        player === "Scissors" && computer === "Paper"
    ) {
        console.log('Player wins.');
        playerScore += 1;

    } else if (computer === "Rock" && player === "Scissors" || 
        computer === "Paper" && player === "Rock" || 
        computer === "Scissors" && player === "Paper"
    ) {
        console.log('Computer wins.');
        computerScore += 1;

    } else {
        console.log('Tie.');
    }
}

function playGame() {
    // play five rounds
    for (let i=0; i<5; i++) {
        let playererHand = player();
        let computerHand = computer();
        console.log(`Player: ${playererHand}`);
        console.log(`Computer: ${computerHand}`);

        round(playererHand, computerHand)
    }
    console.log(`Player: ${playerScore} \nComputer: ${computerScore}`);
}

playGame();