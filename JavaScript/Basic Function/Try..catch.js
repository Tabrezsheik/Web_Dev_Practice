function divide(a, b) {
    try {
    if (b === 0) {
        throw "Cannot divide by zero";
    }
    console.log(a / b);
}
catch (error) {
    console.log(error);
}
}
divide(10, 2);
divide(10, 0);
