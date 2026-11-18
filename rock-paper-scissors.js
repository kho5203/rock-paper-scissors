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

const result = document.querySelector("#result");
const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");
const winner = document.querySelector("#winner");

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  if (humanChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  playerPoints.textContent = `Human Score: ${humanScore}`;
  computerPoints.textContent = `Computer Score: ${computerScore}`;

  if (humanScore === 5) {
    winner.textContent = "Human Wins!";
  } else if (computerScore === 5) {
    winner.textContent = "Computer Wins!";
  }
}
