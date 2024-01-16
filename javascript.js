

// let arr = ["string1", "string2", "string3", "string4"];
// let randomIndex = Math.floor(Math.random() * arr.length);
// let randomString = arr[randomIndex];
// console.log(randomString);


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoicesIndex = Math.floor(Math.random() * choices.length);
    let randomChoicesString = choices[randomChoicesIndex];
    return randomChoicesString;
}
// console.log(getComputerChoice());

function getPlayerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoicesIndex = Math.floor(Math.random() * choices.length);
    let randomChoicesString = choices[randomChoicesIndex];
    return randomChoicesString;
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        return "Both Lose";

    }
    else if (computerSelection === "Rock" && playerSelection === "Paper") {
        // return "Result: Easiest Win Of My Life";
        return "Win";
    }
    else if (computerSelection === "Rock" || playerSelection === "Paper") {
        // return "Result: A Bot Is Beating You?. Come On, Dude...";
        return "Lose";
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        // return "Result: Easiest Win Of My Life"
        return "Win";
    }
    else if (computerSelection === "Paper" || playerSelection === "Scissors") {
        // return "Result: A Bot Is Beating You?. Come On, Dude..."
        return "Lose";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        // return "Result: A Bot Is Beating You?. Come On, Dude..."
        return "Lose";
    }
    else if (computerSelection === "Scissors" || playerSelection === "Paper") {
        // return "Result: Easiest Win Of My Life"
        return "Win";
    }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log("I Play:", playerSelection);
console.log("Bot Plays:", computerSelection);
console.log(playRound(playerSelection, computerSelection));


function game() {
    let resultChoices = ["Win", "Lose", "Both Lose"];
    let sum = 0;
    let results = [];

    for (let i = 0; i = 4; i++) {
        playRound();
        sum += resultChoices[i];
        results.push(sum);
    }
}
//     if (playRound === "win") {

//     }


//     // const
//     // const playerWins = "Win";
//     // const botWins = "Lose";
// }
console.log(results);
