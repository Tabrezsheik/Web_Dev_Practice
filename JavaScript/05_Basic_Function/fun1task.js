function test(str){
    return str[0].toUpperCase()+str.slice(1,str.length);
}
console.log(test("hello"));//makes the first letter of the string uppercase and rest of the letters remain unchanged.
x = test(prompt("Enter a string:"));//takes input from the user and applies the same function to it.
console.log(x);
