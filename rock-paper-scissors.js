function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("#choices button");
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    const playerSelection = element.id;
    console.log("Player Selection: ", playerSelection);
    const computerSelection = getComputerChoice();
    console.log("Computer Selection: ", computerSelection);
    playRound(playerSelection, computerSelection);
  });
});

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
