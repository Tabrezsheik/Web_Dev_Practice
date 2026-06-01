let num1 = parseInt(prompt("enter number1: "));
let num2 = parseInt(prompt("enter number2: "));
let num3 = parseInt(prompt("enter number3: "));
//max logic
if(num1 > num2 && num1 > num3){
    console.log(`${num1} is a max`);
}
else if(num2 > num3){
    console.log(`${num2} is a max`);
    }
else{
    console.log(`${num3} is a max`);
}
//min logic
if(num1 < num2 && num1 < num3){
    console.log(`${num1} is a min`);
}
else if(num2 < num3){
    console.log(`${num2} is a min`);
    }
else{
    console.log(`${num3} is a min`);
}
//can also use Math.max(a,b,c), Math.min(a,b,c)
