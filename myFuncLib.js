"use strict";


// Dice / coin / roulette


// Dice 6 - coin 2 - Roulette 37
let maxOutcomes;
const gameItem = 1;

function play(maxOutcomes) {

  let x = Math.floor(Math.random() * maxOutcomes + 1); // random nummer fra 1-6
  //gameItem = Math.floor(x * 2 + 1); // x = 2

  return x;
}



//Antallet af terninger 1 som std.
let diceAmount = 0;

// Throw 1 dice & have 6 numbers of outcome
function throwDice(){

// terning 
let maxOutcomes = 6;

  for(let i =0; i <= diceAmount; i++){
    let result = play(maxOutcomes);
    if(result > 0)
    {
      console.log("DiceRoll: " + result);
    }
  }
}


let coinAmount = 0;
// Flip one coin, with heads/tails
function flipCoin(){

 let maxOutcomes = 1;

  for(let i = 0; i <= coinAmount; i++)
  {
    let result = play(maxOutcomes);
  
    console.log("Coinflip:" + result);

  }
}


let rouletteSpin = 0;
// Spin 1 roulette, with 37 numbers, 0 incl.
function spinRoulette(){
let maxOutcomes = 36;

for(let i = 0; i <= rouletteSpin; i++)
  {
    let result = play(maxOutcomes);
   
    console.log("Roulette number:" + result);

  }

}



/*

console.log(play()); // the returned x value from play is printed
// or
var slag = play(); // the returned x value from play is assigned to slag
console.log(slag);

*/