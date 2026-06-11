//default params means assigning deafault values to the parameters of a function 
// if no value or undefined is passed
//deafult params are used to avoid errors when a function is called without providing all the arguments
//default params should be placed after all the required parameters in the function definition(means end of the parameter list)

function add(a, b = 0) {
    return a + b;
}
console.log(add(5)); // Output: 5
console.log(add(5, 3)); // Output: 8

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!