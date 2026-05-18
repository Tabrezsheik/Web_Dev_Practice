let maximum = parseInt(prompt("Enter the maximum number for the guessing game:"));


while(isNaN(maximum)){
    maximum = parseInt(prompt("Enter a valid number for the maximum:"));
    
}
 const targetNumber = Math.floor(Math.random() * maximum) + 1;
console.log("Welcome to the Guessing Game!");

let guess = parseInt(prompt("Enter your first guess:"));

let attempts = 1;
while(parseInt(guess) !== targetNumber){
    if(guess === 'q') break
    attempts++;
    if(parseInt(guess) < targetNumber){
        guess = (prompt("Too low! Try again."));
    }       
    else{
        guess = (prompt("Too high! Try again."));
    }
}
if(guess === 'q'){
    console.log("Game exited. Thanks for playing!");
}
else{   
console.log(`Congratulations! You guessed the number in ${attempts} attempts!`);
}