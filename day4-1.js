// rock papers scissors with switch statements
let playerone = "rock";
let computer = "paper";

switch(playerone){
    case computer:
        console.log("tie game");
        break;
    case "rock":
    if (computer === "paper"){
        console.log("computer wins ");

    }else {
        console.log("playerone wins");
    }
    break;
    case "paper":
        if (computer === "scissors"){
            console.log("computer win");
        }else {
            console.log("playerone wins");
        }
        break;
    case "scissors":
        if (computer === "rock"){
            console.log("computer wins");
        }else{
            console.log("playerone wins");
        }break;
}