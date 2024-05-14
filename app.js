let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}
const drawgame=()=>{
    console.log("game is draw");
    msg.innerText="Draw!";
}
const showgame=(userwin)=>{
    if (userwin){
        console.log("user wins");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
        userscore++;
        user.innerText=userscore;

    }
    else{
        console.log("user lose");
        msg.innerText="You Lose!";
        msg.style.backgroundColor="red";
        compscore++;
        comp.innerText=compscore;
    }
}
const playgame=(userchoice)=>{
    console.log("userchoice =" , userchoice);
    const compchoice=gencompchoice();
    console.log("compchoice = ",compchoice);
    if (userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;  

        }
        if(userchoice==="paper"){
            userwin=compchoice==="scissor"? false:true;  
        }
        if(userchoice==="scissor"){
            userwin=compchoice==="rock"? false:true;  
        }
        showgame(userwin);
    }
    


            
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});




