"use strict";
/* Downey: thinkjava, ex 71 */
let iArray = [];
let nArray = [];

const loop = function (n) {
  let i = n;
  while (i > 1) {
    iArray.push(i);
    nArray.push(n);
    if (i % 2 == 0) {
      i = i / 2;
    } else {
      i = i + 1;
    }
  }
  console.log("i\t" + iArray);
  console.log("n\t" + nArray);
};

loop(10);
