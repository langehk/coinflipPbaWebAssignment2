

let numberRoll; 
let option;
let roll;

option = window.prompt('Enter number of options');
numberRoll = window.prompt('Enter number of rolls:');


const play = function() { //funktion til at få randomiseret værdi mellem 1-6
    return Math.floor(Math.random() * option + 1); 
}

console.log(option);

for(let i=0; i<numberRoll; i++){ //terningen slår x antal gange
    
    roll = play(); //Vi kaster terningen
    console.log(roll);
}
