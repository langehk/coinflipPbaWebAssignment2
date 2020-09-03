


function first(s) {
  s = "JuperDupe20oolStrinS";

  console.log("This is the first char: " + s.charAt(0));
}

first();

function last(s) {
  s = "JuperDupe20oolStrinS";
  let lastCharInString = s[s.length - 1];

  console.log("This is the last char: " + lastCharInString);
}

last();

// Skriver et bogstav ud hvis det er ulige antal, hvis ikke skriver den to tal.
function middle(s) {
  s = "JuperDupe20oolStrinS";

  let middleChar =
    s.length % 2 ? s.substr(s.length / 2, 1) : s.substr(s.length / 2 - 1, 2);

  console.log( "This is the middle char: " + middleChar);

}

middle();
