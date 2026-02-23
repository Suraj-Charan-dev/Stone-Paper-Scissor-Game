let userSc = 0;
let compSc = 0;

const choices = document.querySelectorAll(".choice");

const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

//modular way of programming
const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame = ()=>{
    console.log("Game was Draw");
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game was draw.Play Again.";
    msg.style.color = "white";
}


const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win!");
        userSc++;
        userScore.innerText = userSc;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose!");
        compSc++;
        computerScore.innerText = compSc;
        msg.innerText = `You Lost!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{

    console.log("user choice = ",userChoice);
    //generate computer choice
   const compChoice = genCompChoice();
   console.log("computer choice = ",compChoice);

   if(userChoice===compChoice){
        drawGame();
   }else{
        let userWin = true;

        if(userChoice==="rock"){
            //scissors,paper
            userWin = (compChoice === "paper") ? false:true;
        }else if(userChoice==="paper"){
            //scissor,rock
            userWin = (compChoice === "scissor") ? false:true;
        }else{
            //rock,paper
            userWin = (compChoice === "rock") ? false:true;
        }

        showWinner(userWin,userChoice,compChoice);
   }
}


choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was cliced",userChoice);
        playGame(userChoice);
    });
});