console.log("*****************************************************************************************\n");

console.log("Returning a function from another function is a higher order function");


function makebetween(min,max) {
    return function (age) {
        return age >= min && age <= max;
    };
}
const isChild = makebetween(0,18);

console.log(isChild(10)); // true
console.log(isChild(20)); // false

console.log("\n*****************************************************************************************\n");
console.log("Passing a function as an argument to another function is also a higher order function");

function rolldie(){
    return Math.floor(Math.random() * 6) + 1;
};
function callNTimes(func) {
    for (let i = 0; i < 5; i++) {
        console.log(func());
    }
};
callNTimes(rolldie); // will call rolldie 5 times and print the result

