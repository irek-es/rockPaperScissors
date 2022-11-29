//computer choice, randomly rock, paper or scissors
function getComputerChoice () {
    //possible choices
    const words = ['Rock', 'Paper', 'Scissors']
    //random number to pick from array
    let choice = words[Math.floor(Math.random() * 3)];

    //test
    console.log("Computer: " + choice);

    //return choice value to use later
    return choice;
}

//player choice
function getPlayerChoice () {
    //user input
    let pickOne = prompt("Your turn. Rock, Paper or Scissors?");
    //change input string to lower case
    pickOne = pickOne.toLowerCase();
    //check user input
    if (pickOne == "rock") {
        pickOne = "Rock"
    } else if (pickOne == "paper") {
        pickOne = "Paper";
    } else if (pickOne == "scissors") {
        pickOne = "Scissors";
    } else {
        console.log("Incorrect input. Chose between rock, paper and scissors.");
        getPlayerChoice();
    }
    
    //test
    //console.log("Player: " + pickOne);

    //return choice value to use later
    return pickOne;
}

//play single round
function playRound() {
    console.log(playerSelection);
    console.log(computerSelection);
}

//parameters for function playRound
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

//test
playRound();