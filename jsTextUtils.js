function first(s) {
  s = "JuperDupe20oolStrinS";

  document.writeln("output: " + s.charAt(0));
}

first();

function last(s) {
  s = "JuperDupe20oolStrinS";
  let lastCharInString = s[s.length - 1];

  document.writeln(lastCharInString);
}

last();

// Skriver et bogstav ud hvis det er ulige antal, hvis ikke skriver den to tal.
function middle(s) {
  s = "JuperDupe20oolStrinS";

  let middleChar =
    s.length % 2 ? s.substr(s.length / 2, 1) : s.substr(s.length / 2 - 1, 2);

  document.writeln(middleChar);
}

middle();
