
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



let result;
let tempResult;
let a;

function facti(n) {
  
  a = 1;
  result = n; 
  for(let i=1; i < n; i++)
  {
    result *= (n - a);
    
    a++;
    
  }
  console.log(result);
}

facti(prompt("Enter a factorial number: "));



