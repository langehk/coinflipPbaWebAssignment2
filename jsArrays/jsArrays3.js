'use strict'

const die = [1, 2, 3, 4 ,5 ,6];

/*
function that rolls a dice x amount of times

check:
- whether all faces were the same
- there were any n's where n is 1-6.
*/


// number of die rolls

function superDie(arr, num)
{
debugger;
    num = prompt("Enter number of die rolls: ");

    console.log(arr[0] === num || arr[arr.length - 1] === num);
}


superDie(die);