'use strict';

let image = document.querySelector('.diceImage');

let activePlayer1 = document.querySelector('.player0');
let activePlayer2 = document.querySelector('.player1');
let score0 = document.querySelector('.score0');
let score1 = document.querySelector('.score1');
const current0El = document.querySelector('.current-0');
const current1El = document.querySelector('.current-1');

let game, s, scores, activePlayercurrent;


function initer(){
     s = 0;
     scores = [0, 0]
     game = true;
     activePlayercurrent = 0

     current0El.textContent = 0;
     current1El.textContent = 0;
     score0.textContent = 0;
     score1.textContent = 0;

     activePlayer1.classList.add('active');
     activePlayer2.classList.remove('active');
     activePlayer1.classList.remove('winner');
     activePlayer2.classList.remove('winner');
     image.classList.add('hidden');
     
}
initer();

let switchUser = () => {
     document.querySelector(`.current-${activePlayercurrent}`).textContent = 0;
          s = 0;
          activePlayercurrent = activePlayercurrent === 0 ? 1 : 0;
          activePlayer1.classList.toggle('active');
          activePlayer2.classList.toggle('active');
}

document.querySelector('.rollDice').addEventListener('click', function(){
     if(game){
     let dice = Math.trunc(Math.random()*6)+1;
     image.src = `./assets/image/dice-${dice}.png`;
     image.classList.remove('hidden');
     if(dice !== 1){
          s+=dice;
          document.querySelector(`.current-${activePlayercurrent}`).textContent = s;
     }
     else{     
          switchUser()
     }
     }
})

document.querySelector('.hold').addEventListener('click', function(){
    if (game){
    scores[activePlayercurrent] += s;
    document.querySelector(`.score${activePlayercurrent}`).textContent = scores[activePlayercurrent];
    winnerPlayer();
} 
})


function winnerPlayer(){
     if( scores[activePlayercurrent]>=30){
          image.classList.add('hidden');
          game = false;
          document.querySelector(`.player${activePlayercurrent}`).classList.add('winner');
         document.querySelector(`.player${activePlayercurrent}`).classList.remove('active');
     }
     else{
          switchUser()
     }
}

document.querySelector('.newGame').addEventListener('click', initer)






