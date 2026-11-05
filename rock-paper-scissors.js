console.log("Hello World!");

// Generate number from 1-3
// Return game choices based on number rolled
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    console.log("Computer Choice Number: ", randomNumber);
    return "rock";
  } else if (randomNumber === 2) {
    console.log("Computer Choice Number: ", randomNumber);
    return "paper";
  } else {
    console.log("Computer Choice Number: ", randomNumber);
    return "scissors";
  }
}
console.log("Computer Choice: ", getComputerChoice());

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
console.log("Human Choice: ", getHumanChoice());
