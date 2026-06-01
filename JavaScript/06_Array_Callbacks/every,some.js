const numbers = [2, 4, 6, 8];
const numbers2 = [1, 2, 3, 5];

const allEven = numbers.every(num => num % 2 === 0);
const hasOdd = numbers2.some(num => num % 2 !== 0);

console.log('All even:', allEven);
console.log('Has odd:', hasOdd);