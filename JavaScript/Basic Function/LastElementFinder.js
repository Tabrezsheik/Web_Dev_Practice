function Lastele(arr){
    if(arr.length === 0){
        return null;
    }
    return arr[arr.length -1];
}

console.log(Lastele([1,2,3,4,5])); // Output: 5
console.log(Lastele([])); // Output: null
console.log(Lastele("hello")); // Output: 'o'