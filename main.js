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

//player choice ///fix bug with wrong input/double entry read
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
    console.log("Player: " + pickOne);

    //return choice value to use later
    return pickOne;
}

//play single round
function playRound() {
    //parameters for function playRound
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    //find who wins 1.1 / use old one just change first letter to capital
    if (playerSelection === computerSelection) {
        console.log("Draw. Play again");
        playRound();
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            console.log("User win. Paper wrap rock.");
        } else {
            console.log("Computer win. Scissors cut paper.");
        }
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            console.log("Computer win. Paper wrap rock.");
        } else {
            console.log("User win. Rock nick scissors.");
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            console.log("Computer win. Rock nick scissors.");
        } else {
            console.log("Player win. Scissors cut paper.");
        }
    } else {
        console.log("something misssing");
    }
}

//play 5 rounds
function playFiveRounds() {
    for (i = 0; i < 4; i++) {
        playRound();
    }
}

//run program
playFiveRounds();