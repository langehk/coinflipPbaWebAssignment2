'use strict'

const die = [1, 2, 3, 4 ,5 ,6];

/*
function that rolls a die x amount of times

check:
- whether all faces were the same
- there were any n's where n is 1-6.
*/

// number of die rolls

function superDie(arr, num, n)
{
    arr = die;    // 1, 2, 3 ,4 ,5 ,6 
    num = prompt("Enter number of die rolls: "); // 1  fx
    n = prompt("Enter n value to check for: "); // 1  fx
    let nAmount = 0;
    let rollHistory = [];

    for(let i =0; i < num; i++)
    {
        // Rolls the die/dice and adds to the rollHistory array.
        let item = arr[Math.floor(Math.random() * arr.length)];
        
        if(item == n){
            nAmount++;
        }

        rollHistory.push(item); 
    }

    // Checks if all items in the array is equal
    const allEqual = arr => arr.every(v => v === arr[0])
    
    var isAllEqual = (allEqual(rollHistory) ? 'They are all equal!' : "They aren't equal :-(");
    console.log(isAllEqual);
    console.log("Your number " + n + " was rolled " + nAmount + " times!");
    console.log("All rolls: " + rollHistory);
}
