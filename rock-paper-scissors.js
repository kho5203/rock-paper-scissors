console.log("Hello World!");

// Generate number from 1-3
// Return game choices based on number rolled
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    console.log(randomNumber);
    return "rock";
  } else if (randomNumber === 2) {
    console.log(randomNumber);
    return "paper";
  } else {
    console.log(randomNumber);
    return "scissors";
  }
}
console.log(getComputerChoice());
