let WordsArray = [];
const words = () => {
    return WordsArray.push(prompt('Enter a word:'));

}
for (let i = 0; i < 5; i++) {
    words();
}
const longestWord = WordsArray.reduce((longest,currentword) => {
    if (currentword.length > longest.length) {
        return currentword;
    }
    
        return longest;
})
console.log(`The longest word is: ${longestWord}`);
