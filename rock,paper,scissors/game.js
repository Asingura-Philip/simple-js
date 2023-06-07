// interactive game
let playgame = confirm("shall we play rock ,paper,scissors?");
if (playgame){
    let playerchoice = prompt("please enter rock,paper or scissors");
    if(playerchoice){
        let playerone = playerchoice.trim().toLowerCase();
        if (playerone === "rock" || playerone === "paper" || playerone === "scissors"){
            let computerchoice = Math.floor(Math.random()* 3 + 1);
            let computer = computerchoice === 1 ? "rock"
            :computerchoice === 2 ? "paper"
            : "scissors";

            let result = playerone === computer? `playerone: ${playerone} computer: ${computer} tie game!`
            : playerone === "rock" && computer === "paper"? `playerone: ${playerone} computer: ${computer} computer wins!`
            : playerone === "paper" && computer === "scissors"? `playerone: ${playerone} computer: ${computer} computer wins!`
            : playerone === "scissors" && computer === "rock"? `playerone: ${playerone} computer: ${computer} computer wins!`
            : `playerone: ${playerone} computer: ${computer} playerone wins!`;
            alert(result);  
            let playagain = confirm("play again?")
            playagain ? location.reload() : alert("ok, thanks for playing");  
        }else{
            alert("you didnt enter the required choices");
        }
    }else{
        alert("i guess you changed your mind. maybe nexttime.");
    }
}else{
    alert("ok,,maybe next time.");
}
