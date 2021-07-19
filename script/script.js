let computerSelection;
let computerWin=0;
let playerWin=0;
function computerPlay(){
   let x= Math.floor(Math.random()*3+1)
   if(x==1){
    computerSelection ='rock'
   } else if(x==2){
    computerSelection ='paper'
}else if(x==3){
    computerSelection='Scissor'
}
}
function playRound(playerSelection,computerSelection){
     if(playerSelection=='rock' && computerSelection=='paper'){
         console.log('You lose! paper beats the rock')
         computerWin++;
     }else if(playerSelection=='rock' && computerSelection=='Scissor'){
        console.log('You Win! rock beats the Scissor')
        playerWin++;
    }else if(playerSelection=='rock' && computerSelection=='rock'){
        console.log('its a tie')
    } else if(playerSelection=='paper' && computerSelection=='Scissor'){
        console.log('You lose! Scissor beats the paper')
        computerWin++;
    }else if(playerSelection=='paper' && computerSelection=='rock'){
        console.log('You win! paper beats the rock')
        playerWin++;
    }else if(playerSelection=='paper' && computerSelection=='paper'){
        console.log('its a tie')
    }else if(playerSelection=='Scissor' && computerSelection=='paper'){
        console.log('You Win! Scissor beats the paper')
        playerWin++;
    }else if(playerSelection=='Scissor' && computerSelection=='rock'){
        console.log('You lose! rock beats the Scissor')
        computerWin++;
    }else if(playerSelection=='Scissor' && computerSelection=='Scissor'){
        console.log('its a tie')
    }
}
function game(){
    for(let i=0;i<5;i++){
        playerSelection=window.prompt('chase your side');
        computerPlay();
        playRound(playerSelection,computerSelection)
        console.log("player :",playerWin )
        console.log("player :",computerWin )
    }
}
game();
