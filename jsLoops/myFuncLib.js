function pow(r, e) {
  let roden = document.getElementById("roden").value;
  let eksponenten = document.getElementById("eksponenten").value;
  r = roden;
  e = eksponenten;

  let result = 1;

  for (let i = 0; i < e; i++) {
    result *= r;
  }
  console.log("Resultat:" + result);
}
