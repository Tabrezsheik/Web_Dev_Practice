const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const greaterThan5 = numbers.filter(num => num > 5);

console.log('Even:', evenNumbers);
console.log('Greater than 5:', greaterThan5);