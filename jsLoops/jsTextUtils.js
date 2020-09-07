function checkPalindromic(s) {
  let palindrome = true;
  var removeChars = /[^A-Za-z0-9]/g; // Fjernet Chars som vi ikke vil have i strengen.
  let str = document.getElementById("input1").value;
  // Angiver de chars som vi ikke gider at have, og laver en tom streng i stedet.
  // - Den bliver bare fjernet.

  //Konverteter den til lowerCase.
  let convertedString = str.toLowerCase();

  var strLength = convertedString.length;

  for (let i = 0; i < strLength / 2; i++) {
    if (convertedString[i] !== convertedString[strLength - 1 - i]) {
      // Hvis index af stengen matcher kører loopet.
      palindrome = false; // Hvis de ikke matcher, stopper den looper og returnerer false.
      logResult(convertedString, palindrome);
      return; // Stopper loop, hvis den bliver ramt.
    } else palindrome = true;

    logResult(convertedString, palindrome);
  }
}

// brugt til at printe resultat ud med...
function logResult(s, pali) {
  str = s;
  palindrome = pali;

  if (pali == true) {
    console.log("The entered string: " + str + " is palindrome!");
  } else if (pali == false) {
    console.log("The entered string: " + str + " isn't palindrome!");
  }
}
