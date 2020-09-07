let input1 = document.getElementById("input1");

//Laver vores input til lower case.
//let lowerCaseString = input1.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
let count = 0;


let palindrome = true;
/*
function isPalindrome(s){
    
    s = input1; // Henter vores værdi fra input.
    
    if(firstP(s))
    {
        palindrome = true;
    }else if (lastP(s))
    {
        palindrome = true;
    }
}
*/



function checkPalindromicP(s)
{
    s = input1;
    let palindromic = true;

    for(let i = 0; i < s.length / 2; i++)
    {

        if(s[i] !== s[s.length - i - 1])
        {
          palindromic = false;
        }
        console.log("This is your string: [" + input1 + "] press F5 for a new one!");
        console.log("The string is palindromic: " + palindromic);
        return palindromic;
    }
   
}


function firstP(s) {
    s = input1;

    console.log("This is the first char: " + s.charAt(0));
  }
  
  
  function lastP(s) {
    s = input1;
    let lastCharInString = s[s.length - 1];
  
    console.log("This is the last char: " + lastCharInString);
  }
  
  
  // Skriver et bogstav ud hvis det er ulige antal, hvis ikke skriver den to tal.
  function middleP(s) {
    s = input1;
  
    let middleChar =
      s.length % 2 ? s.substr(s.length / 2, 1) : s.substr(s.length / 2 - 1, 2);
  
    console.log( "This is the middle char: " + middleChar);
  
  }