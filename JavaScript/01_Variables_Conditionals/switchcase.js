let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");
switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);   
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }  
        break;
    default:
        console.log("Invalid operator. Please use +, -, *, or /.");
        break;
}  
