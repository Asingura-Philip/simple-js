// rock papers scissors with terenary operators
let playerone = "rock";
let computer = "scissors";
let result = playerone === computer ? "tie game" 
:playerone === "rock" && computer === "paper" ? "computer wins"
:playerone === "paper" && computer === "scissors" ? "computer wins"
:playerone === "scissors" && computer === "rock" ? "computer wins"
: "playerone wins";
console.log(result);