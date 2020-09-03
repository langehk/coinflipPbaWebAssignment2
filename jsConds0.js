let dice1;
let dice2;
let flip = 10;

// Rolls two dice, from 1-6
function rollDice() {
  for (let i = 0; i < flip; i++) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    console.log("DiceRoll-" + i + ": " + dice1 + " & " + dice2);
  }
}

rollDice();

var vatField = document.getElementById("vatField");

function addVat(a) {
  vat = 1.25;

  a = prompt("Enter amount");

  result = a * vat;

  vatField.innerHTML = result;
}

function subVat(a) {
  vat = 0.75;

  a = prompt("Enter amount");

  result = a * vat;

  vatField.innerHTML = result;
}

function calcVat(a) {
  vatCalc = 1.25;

  //125
  a = prompt("Enter amount");

  //100
  temp = a / vatCalc;
  result = a - temp;

  vatField.innerHTML = result;
}

/*
flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

flip = Math.random();
flip = Math.floor(flip * 2 + 1);
if (flip === 1) tails++;
else heads++;

console.log("heads: " + heads);
console.log("tails: " + tails);
*/
