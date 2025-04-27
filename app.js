let msg=document.querySelector(".msg");
let newgame=document.querySelector("#newgame");
let choices=document.querySelectorAll(".choice");
let img=document.querySelector(".img");
let imgc=document.querySelector(".imgc");
let userScore=0;
let compScore=0;
let playerscorepa=document.querySelector("#player-score");
let compScorepa=document.querySelector("#computer-score");
const choicesArray=["rock","paper","scissors"];

function compchoice(){
    let randomNumber=Math.floor(Math.random()*3);
    return choicesArray[randomNumber];
}
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userchoice=choice.id;
    playgame(userchoice);
  })
})
function playgame(userchoice){
  if (userchoice==="rock"){
    img.innerHTML=`<img src="/images/rock.png" alt="rock">`;
}
  else if (userchoice==="paper"){
    img.innerHTML=`<img src="/images/paper.png" alt="paper">`;
  }
  else if (userchoice==="scissors"){
    img.innerHTML=`<img src="/images/scissors.png" alt="scissors">`;
  }
  const comp=compchoice();
  imgc.innerHTML=`<img src="/images/${comp}.png" alt="${comp}">`;
  if (userchoice===comp){
    msg.innerHTML="It's a draw!";
  }
  else if (userchoice==="rock" && comp==="scissors"){
    msg.innerHTML="You win! Rock crushes scissors!";
    userScore++;
  }
  else if (userchoice==="paper" && comp==="rock"){
    msg.innerHTML="You win! Paper covers rock!";
    userScore++;
  }
  else if (userchoice==="scissors" && comp==="paper"){
    msg.innerHTML="You win! Scissors cut paper!";
    userScore++;
  }
  else{
    msg.innerHTML=`You lose! ${comp} beats ${userchoice}!`;
    compScore++;
  }
  Score();


}
function Score(){
  console.log(userScore,compScore);
  playerscorepa.innerHTML=userScore;
  compScorepa.innerHTML=compScore;
}

newgame.addEventListener("click",()=>{
  userScore=0;
  compScore=0;
  playerscorepa.innerHTML=userScore;
  compScorepa.innerHTML=compScore;
  img.innerHTML=' ';
  imgc.innerHTML=' ';
  msg.innerHTML="Choose Your Weapon!";
})