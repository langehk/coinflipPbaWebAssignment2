"use strict";


// Dice / coin / roulette
let gameItem; 

// Dice 6 - coin 2 - Roulette 37
let maxOutcomes;

function play(maxOutcomes) {
  gameItem = 1;

  let x = Math.round(Math.random(maxOutcomes));
  //gameItem = Math.floor(x * 2 + 1); // x = 2
  
  return x;
}


let diceAmount = 2;

// Throw 1 dice & have 6 numbers of outcome
function throwDice(){

let maxOutcomes = 6; // terning

  for(let i =0; i < diceAmount; i++){
  
    play(maxOutcomes);
      
  }

}

// Flip one coin, with heads/tails
function flipCoin(){

}


// Spin 1 roulette, with 37 numbers, 0 incl.
function spinRoulette(){

}



/*

console.log(play()); // the returned x value from play is printed
// or
var slag = play(); // the returned x value from play is assigned to slag
console.log(slag);

*/