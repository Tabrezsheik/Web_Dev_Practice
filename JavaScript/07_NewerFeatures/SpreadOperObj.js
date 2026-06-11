//spread operator with objects used to copy, combine or add properties to an object

//copy objects:
const originalObj = {x:10, y:20};
const copiedObj = {...originalObj};
console.log(copiedObj); // Output: {x: 10, y: 20}

//combine objects:
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const combinedObj = {...obj1, ...obj2};
console.log(combinedObj); // Output: {a: 1, b: 2, c: 3, d: 4}

//add properties to an object:
const baseObj = {name: "Alice", age: 30};
const extendedObj = {...baseObj, city: "New York", profession: "Engineer"};
console.log(extendedObj); // Output: {name: "Alice", age: 30, city: "New York", profession: "Engineer"}