// console.log("Hello World!");

// Generate number from 1-3
// Return game choices based on number rolled
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    // console.log("Computer Choice Number: ", randomNumber);
    return "rock";
  } else if (randomNumber === 2) {
    // console.log("Computer Choice Number: ", randomNumber);
    return "paper";
  } else {
    // console.log("Computer Choice Number: ", randomNumber);
    return "scissors";
  }
}
// console.log("Computer Choice: ", getComputerChoice());

// Prompt user for game options
// Handle user options using toLowerCase
// Return human choice in console
function getHumanChoice() {
  const humanChoice = prompt(
    "Choose rock, paper, or scissors:",
    "",
  ).toLowerCase();
  return humanChoice;
}
// console.log("Human Choice: ", getHumanChoice());

// Create playGame function
// Move playRound function and scoring variables into playGame
// Invoke playRound 5 times
// Declare a winner after 5 rounds
function playGame() {
  // Declare variables for computer and human score tracking
  let humanScore = 0;
  let computerScore = 0;
  let roundNumber = 1;

  // Create function to track player scores
  // Declare parameters for function to take human and computer choices
  // Compare human and computer choices
  // Write in console who wins
  // Increment score by 1 based on winner
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
  }
  // console.log(playRound(getHumanChoice(), getComputerChoice()));

  for (roundNumber; roundNumber <= 5; roundNumber++) {
    console.log(`Round ${roundNumber} start!`);
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("GAME OVER! \nHere are the game stats: ");
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Human wins!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
