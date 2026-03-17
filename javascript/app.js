let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
function getComputerChoice(){
    const choices=["rock","papper","scissor"];
    const randomIndex=Math.floor(Math.random()*choices.length);
    if (randomIndex==3){
        randomIndex=0;
    }
    return choices[randomIndex];
}
function determineWinner(userChoice,computerChoice){
    if (userChoice===computerChoice){
        return "tie";
    }
    if ((userChoice==="rock" && computerChoice==="scissor") ||
        (userChoice==="papper" && computerChoice==="rock") ||
        (userChoice==="scissor" && computerChoice==="papper")){
            return "user win";
        }
    else{
        return "computer win";
    }
}
function updateScore(winner){
    if (winner==="user win"){
        userScore++;
        document.querySelector("#user-score").textContent=userScore;
    }
    else if (winner==="computer win"){
        computerScore++;
        document.querySelector("#computer-score").textContent=computerScore;
    }
}





choices.forEach(choice=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        console.log(choice.id);
        const userChoice=choice.id;
        const computerChoice=getComputerChoice();
        console.log("computer choice: "+computerChoice);
        const winner=determineWinner(userChoice,computerChoice);
        updateScore(winner);
    }
)
}

)