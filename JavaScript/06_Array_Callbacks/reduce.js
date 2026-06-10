// reduce() is a powerful method in JavaScript that allows you to reduce an array to a single value by applying a function to each element of the array.
//  In this example, we will use reduce() to find the longest word from an array of words entered by the user.

let WordsArray = [];
for(i=0;i<5;i++){
    let word = prompt("enter a word:");
    WordsArray.push(word);
}
const longestWord = WordsArray.reduce((longest,currentword) => {
    if (currentword.length > longest.length) {
        return currentword;
    }
    
        return longest;
})
console.log(`The longest word is: ${longestWord}`);
