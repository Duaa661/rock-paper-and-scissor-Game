let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const gencomputerchoice =()=>{
    //rock paper scissors
    const options=["rock","paper","scissors"];
     const randidx=Math.floor(Math.random()*3);
     return options[randidx];
}

//excess user score 
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#computer-score");

const drawgame= ()=>{
    msg.innerText="Game Was Draw. Play Again! ";
    msg.style.backgroundColor="yellow";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++;
        compScorepara.innerText=computerscore;
        msg.innerText=`You Loss! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
    
}
//acess masg
const msg=document.querySelector("#msg");

const playgames = (userchoice)=>{
    //generate computer choice
    const compchoice=gencomputerchoice();
    //draw match
    if(userchoice===compchoice){
     drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors, paper
            userwin=compchoice==="paper"?false: true;
        }
        else if(userchoice==="paper"){
            //rock scissors
           userwin= compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

   };
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
   playgames(userchoice);
    });
});
