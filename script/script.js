let computerSelection;
let computerWin=0;
let playerWin=0;
let playerSelection;
const paper=document.querySelector('#paper');
const scissor=document.querySelector('#scissor');
const rock=document.querySelector('#rock');
const div1=document.createElement('div');
const h1=document.createElement('h3')
const h2=document.createElement('h3')
const h3=document.createElement('h3')
const h4=document.createElement('h1')
const section=document.querySelector('section');
section.appendChild(div1)
div1.appendChild(h1);
div1.appendChild(h2);
div1.appendChild(h3)
div1.appendChild(h4)
div1.classList.add('div1')
paper.addEventListener('click',function(){
    playerSelection='paper';
})
rock.addEventListener('click',function(){
    playerSelection='rock';
})
scissor.addEventListener('click',function(){
    playerSelection='Scissor';
})
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
         h1.innerText= 'You lose! paper beats the rock'
         computerWin++;
     }else if(playerSelection=='rock' && computerSelection=='Scissor'){
        h1.innerText= 'You Win! rock beats the Scissor'
        playerWin++;
    }else if(playerSelection=='rock' && computerSelection=='rock'){
        h1.innerText= 'its a tie'
    } else if(playerSelection=='paper' && computerSelection=='Scissor'){
        h1.innerText= 'You lose! Scissor beats the paper'
        computerWin++;
    }else if(playerSelection=='paper' && computerSelection=='rock'){
        h1.innerText= 'You win! paper beats the rock'
        playerWin++;
    }else if(playerSelection=='paper' && computerSelection=='paper'){
        h1.innerText= 'its a tie'
    }else if(playerSelection=='Scissor' && computerSelection=='paper'){
        h1.innerText= 'You Win! Scissor beats the paper'
        playerWin++;
    }else if(playerSelection=='Scissor' && computerSelection=='rock'){
        h1.innerText= 'You lose! rock beats the Scissor'
        computerWin++;
    }else if(playerSelection=='Scissor' && computerSelection=='Scissor'){
        h1.innerText= 'its a tie'
    }
}
// function game(){
//     for(let i=0;i<5;i++){
//         playerSelection=window.prompt('chase your side');
//         computerPlay();
//         playRound(playerSelection,computerSelection)
//         console.log("player :",playerWin )
//         console.log("player :",computerWin )
//     }
// }
function gamePlay(){
    if(computerWin==5 && playerWin==5){
        return h4.innerText='Match is a tie'
        
    }
    if(computerWin>=5 ){
        return h4.innerText='Computer wins the Match' 
    }
    if(playerWin>=5){
        return h4.innerText='Player wins the Match' 
    }
        computerPlay()
        playRound(playerSelection,computerSelection)
        h2.innerText= `player   :`+playerWin 
        h3.innerText= `computer :`+computerWin 
    
}

const game=document.querySelector('#play')
game.addEventListener('click',gamePlay)
