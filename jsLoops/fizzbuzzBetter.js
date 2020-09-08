
let maxN = 100;

function printNumbers(){

console.log("---------FIZZBUZZ BETTER----------");

    for (let i = 1; i <= maxN; i++) {
        
        
        if(i % 3 == 0 && i % 5 == 0)
        {
            console.log("Fizzbuzz");
        }
        if ( i % 3 == 0){
            console.log("Fizz");
        }
        else if(i % 5 == 0)
        {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
        
        
       

        

    }
}

printNumbers();