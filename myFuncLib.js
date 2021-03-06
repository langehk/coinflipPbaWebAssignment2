"use strict";

// Funktion der gør det muligt at beregne et random tal ud fra en min & max værdi.
function play(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}


// Throw 1 dice & have 6 numbers of outcome
function throwDice() {
  
  // terning
  let min = 1;
  let max = 6;

    let result = play(min, max);
    if (result > 0) {
      console.log("DiceRoll: " + result);
    }
}


// Flip one coin, with heads/tails
function flipCoin() {
  let min = 0;
  let max = 1;


    let result = play(min, max);

    console.log("Coinflip: " + (result > 0 ? "Heads" : "Tails"));

}


// Spin 1 roulette, with 37 numbers, 0 incl.
function spinRoulette() {
  let min = 0;
  let max = 36;
 
    let result = play(min, max);

    console.log("Roulette number:" + result);

}

// converts celsius temperatures to Fahrenheit
function C2F(c) {
  let ctemp = c;
  let convertF = (ctemp * 9) / 5 + 32;

  let result = ctemp + " degrees celsius is " + convertF + " Fahrenheit";
  console.log(result);
}

C2F(20);

// Fahrenheit to Celsius
function F2C(f) {
  let fTemp = f;
  let convert = ((fTemp - 32) * 5) / 9;

  let result = fTemp + " degrees fahrenheit is " + convert + " celsius";
  console.log(result);
}
F2C(50);
