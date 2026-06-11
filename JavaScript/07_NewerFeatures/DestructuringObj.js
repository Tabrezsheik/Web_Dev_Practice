//destructuring object unpacking values from objects storing them in distinct variables
//Here order does not matter, we can unpack in any order we want
// Because we are using the name of the properties to unpack the values

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const { name, age, city } = person;
console.log(name);  // Output: John
console.log(age);   // Output: 30
console.log(city);  // Output: New York


//We can also assign new variable names while destructuring(renaming variables)
const { name: fullName, age: years, city: location } = person;
console.log(fullName);  // Output: John
console.log(years);   // Output: 30
console.log(location);  // Output: New York