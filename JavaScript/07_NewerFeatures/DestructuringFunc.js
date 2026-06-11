//Destructuring function parameters,
// we can destructing objects and arrays directly in function parameters

//Destructuring objects in function parameters
const user = { name: 'Alice', age: 30 };
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printUser(user); // Output: Name: Alice, Age: 30

//Destructuring arrays in function parameters
const numbers = [1, 2, 3];
function printNumbers([first, second, third]) {
    console.log(`First: ${first}, Second: ${second}, Third: ${third}`);
}
printNumbers(numbers); // Output: First: 1, Second: 2, Third: 3


