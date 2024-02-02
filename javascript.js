

// let arr = ["string1", "string2", "string3", "string4"];
// let randomIndex = Math.floor(Math.random() * arr.length);
// let randomString = arr[randomIndex];
// console.log(randomString);


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomChoicesIndex = Math.floor(Math.random() * choices.length);
    let randomChoicesString = choices[randomChoicesIndex];
    return randomChoicesString;
}
// console.log(getComputerChoice());


// let sign = prompt("What's your sign?");

// if (sign.toLowerCase() === "scorpio") {
//     alert("Wow! I'm a Scorpio too!");
// }

// // there are many ways to use the prompt feature
// sign = window.prompt(); // open the blank prompt window
// sign = prompt(); //  open the blank prompt window
// sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
// sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"


const prompt = require('prompt-sync')();

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissor?");
    playerChoice = playerChoice; {
        return playerChoice;
    }
}

function playRound(playerSelection, computerSelection) {


    win = "Result: Easiest Win Of My Life";
    lose = "Result: A Bot Is Beating You?. Come On, Dude...";
    draw = "Both Lose"
    incorrect = "Invalid Answer";

    if (playerSelection === computerSelection) {
        return draw;
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return win;
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissor") {
        return lose;
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissor") {
        return win;
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return lose;
    }
    else if (computerSelection === "Scissor" && playerSelection === "Paper") {
        return lose;
    }
    else if (computerSelection === "Scissor" && playerSelection === "Rock") {
        return win;
    }
    else {
        return incorrect;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log("I Play:", playerSelection);
console.log("Bot Plays:", computerSelection);
console.log(playRound(playerSelection, computerSelection));


results = [];
function game() {

    let win = 1;
    let lose = 0;

    if (playRound(playerSelection) === win) {
        win++;
    }

    resultChoices = playRound(playerSelection, computerSelection);
    sum = win + lose;

    //     let i = 0;
    //     while (i < 5) {
    //         resultChoices;
    //         i++;
    //         results.push(sum);
    //         return results;
    //     }
    // }
    // console.log(game());

    for (let i = 0; i < 5; i++) {
        playRound(0);
        sum += resultChoices[i];
        results.push(sum);
        return results;
    }

    console.log(game());
}
