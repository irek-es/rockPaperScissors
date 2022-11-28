//computer choice, randomly rock, paper or scissors
function getComputerChoice () {
    //possible choices
    const words = ['Rock', 'Paper', 'Scissors']
    //random number to pick from array
    let choice = words[Math.floor(Math.random() * 3)];

    //test
    console.log("Computer: " + choice);

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
    console.log("Player: " + pickOne);
}

//play single round

//test
getPlayerChoice();
getComputerChoice();