//Rest Operator is used collect multiple elements and condense them into a single element.
//  It is denoted by three dots (...).
function sum(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3)); // Output: 6


// The first two parameters will capture the first two arguments, 
// and the rest will be collected into the 'others' array.
//rest parameters must be the last parameter in the function definition
//There can only be one rest parameter in a function.

function animals(first, second, ...others) {
    console.log("First animal:", first);
    console.log("Second animal:", second);
    console.log("Other animals:", others);
}
animals("Lion", "Tiger", "Bear", "Elephant"); 

// Output: First animal: Lion, Second animal: Tiger, Other animals: ["Bear", "Elephant"]