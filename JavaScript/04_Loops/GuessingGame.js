const secretNumber = 7;
let guess = 0;
let attempts = 0;

while (guess !== secretNumber) {
  guess = Math.floor(Math.random() * 10) + 1;
  attempts++;
  console.log(`Attempt ${attempts}: Guessed ${guess}`);
}

console.log(`Found it in ${attempts} attempts!`);