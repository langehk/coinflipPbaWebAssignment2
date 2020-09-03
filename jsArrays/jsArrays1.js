
const dice = [  1, 2, 3, 4 ,5, 6  ];
const coin = [ "heads", "tails "];

// takes a variable as input, here we can use an array.
function playWithArray(myArray){

let x = (myArray[Math.floor(Math.random() * myArray.length)]);
console.log(x);

return x;

}

//Throws a coin, which returns a random result from the given array.
function throwCoinWithArray()
{
    return result = playWithArray(coin);
    
}

//Throws a dice, which return a random result from the given array.
function throwDiceWithArray()
{

return result = playWithArray(dice);

}

