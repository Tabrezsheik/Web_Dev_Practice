 // The filter() method creates a new array with all elements that satisfy the condition implemented by the provided function. 
 // In this case, we are checking if the number is even (num % 2 === 0) or odd (num % 2 !== 0).



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];
const evenNumbers = nums.filter(num => num %2 ===0);
const oddNumbers = nums.filter(num => num %2 !==0);

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);
