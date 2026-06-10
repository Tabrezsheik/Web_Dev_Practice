setTimeout(() => {
    console.log("Hello My name is setTimeout");
}, 2000);// here we are passing a function as the first argument to setTimeout, which will be executed after 2000 milliseconds (2 seconds). The second argument is the delay time in milliseconds.

setTimeout((num) => {
    console.log(num += 200);
}, 3000, 100);// here we are passing a function as the first argument to setTimeout, which will be executed after 3000 milliseconds (3 seconds). The second argument is the delay time in milliseconds, and the third argument (100) is passed as an argument to the callback function when it is executed.

const intervalId = setInterval(() => {
    console.log("Hello My name is setInterval");
}, 1000);// here we are passing a function as the first argument to setInterval, which will be executed every 1000 milliseconds (1 second). The second argument is the interval time in milliseconds.

setTimeout(() => {
    clearInterval(intervalId);// here we are using clearInterval to stop the interval after 5000 milliseconds (5 seconds).
}, 5000);
