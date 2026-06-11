//Destructring Array means to unpack values from arrays and store them in variables easily. 
// It allows us to extract values from an array and assign them to variables in a more concise way.

// Example of destructuring an array:

const numbers = [1, 2, 3];
const [a, b, c] = numbers;// Here, we are using array destructuring to assign the values of the 'numbers' array to the variables 'a', 'b', and 'c'.
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Destructuring with Rest operator
const cats = ['Whiskers', 'Fluffy', 'Mittens'];
const [firstCat, ...otherCats] = cats;
console.log(firstCat); // Output: Whiskers
console.log(otherCats); // Output: ['Fluffy', 'Mittens']