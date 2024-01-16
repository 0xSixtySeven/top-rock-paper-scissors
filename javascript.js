

// let arr = ["string1", "string2", "string3", "string4"];
// let randomIndex = Math.floor(Math.random() * arr.length);
// let randomString = arr[randomIndex];
// console.log(randomString);


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoicesIndex = Math.floor(Math.random() * choices.length);
    let randomChoicesString = choices[randomChoicesIndex];
    return randomChoicesString;
}
// console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return "You Lose, So The Bot";
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return "First Strike";
    }
    else if (computerSelection === "rock" || playerSelection === "paper") {
        return "Easiest Win Of My Life";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "First Strike"
    }
    else if (computerSelection === "paper" || playerSelection === "scissors") {
        return "Easiest Win Of My Life"
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "First Strike"
    }
    else if (computerSelection === "scissors" || playerSelection === "paper") {
        return "Easiest Win Of My Life"
    }

}

console.log("I Play:", playerSelection);
console.log("The Bot Plays:", computerSelection);
console.log(playRound(playerSelection, computerSelection));


function game() {
    // your code here!
}
