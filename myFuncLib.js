"use strict";
function play() {
  let x = Math.random();
  x = Math.floor(x * 2 + 1);
  return x;
}

console.log(play()); // the returned x value from play is printed
// or
var slag = play(); // the returned x value from play is assigned to slag
console.log(slag);
