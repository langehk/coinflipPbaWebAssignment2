let myFirstArray = [ 4 , 2, 0 , 2 ,4];

// Enter your own array.
let mySecondArray = [ prompt("Enter First number"), 
                    prompt("Enter Second number"), 
                    prompt("Enter Third number"),
                    prompt("Enter Fourth number"),
                    prompt("Enter Fifth number")
                 ];


/* Check if the array is palindromic

First enter your array of 5 numbers.
Then it check if the array is palindormic.

*/
function checkPalindromic(arr)
{
    arr = mySecondArray;
    let palindromic = true;

    for(let i = 0; i < arr.length / 2; i++)
    {

        if(arr[i] !== arr[arr.length - i - 1])
        {
          palindromic = false;
        }
        console.log("This is your array: [" + mySecondArray + "] press F5 for a new one!");
        console.log("The array is palindromic: " + palindromic);
        return palindromic;
    }
   
}



// Check if the first and last element in the array are identical

function checkFirstAndLastElement(arr){

    arr = mySecondArray;
    let isIdentical = false;

    let first =arr[0];

    let last = arr[arr.length-1];
    

    if(first === last)
    {
        
        isIdentical = true;
    }
    else {
        isIdentical = false;
    }

    console.log("The first and last element is identical: " + isIdentical);
}



