"use strict";

// Funktion der gør det muligt at beregne et random tal ud fra en min & max værdi.
function play(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

//Antallet af terninger 1 som std.
let dice = 0;

// Throw 1 dice & have 6 numbers of outcome
function throwDice() {
  // terning
  let min = 1;
  let max = 6;

  for (let i = 0; i <= dice; i++) {
    let result = play(min, max);
    if (result > 0) {
      console.log("DiceRoll: " + result);
    }
  }
}

let coin = 0;

// Flip one coin, with heads/tails
function flipCoin() {
  let min = 0;
  let max = 1;

  for (let i = 0; i <= coin; i++) {
    let result = play(min, max);

    console.log("Coinflip: " + (result > 0 ? "Head" : "Tails"));
  }
}

let roulette = 0;
// Spin 1 roulette, with 37 numbers, 0 incl.
function spinRoulette() {
  let min = 0;
  let max = 36;

  for (let i = 0; i <= roulette; i++) {
    let result = play(min, max);

    console.log("Roulette number:" + result);
  }
}

// converts celsius temperatures to Fahrenheit
function C2F(c) {}

// Fahrenheit to Celsius
function F2C(f) {}
