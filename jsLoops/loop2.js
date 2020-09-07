function isPrime(p) {
  let isPrime = true;
  let input = document.getElementById("checkPrime").value;

  p = input;

  if (p === 1) {
    console.log("1 er hverken et primtal eller sammensat ");
  }

  // checker om taller er større end 1.
  else if (p > 1) {
    // Looper i gennem
    for (let i = 2; i < p; i++) {
      // Hvis det giver 0 er det ikke et primtal.
      if (p % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${p} er et primtal `);
    } else {
      console.log(`${p} er ikke et primtal`);
    }
  }
}
