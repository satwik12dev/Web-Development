// Math Object In JS
// let x = 5;
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045
// console.log(Math.sqrt(16));
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.abs(-5));
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.8));
// console.log(Math.round(4.5)); // 5
// console.log(Math.max(1, 5, 3)); // 5
// console.log(Math.min(1, 5, 3)); // 1
// console.log(Math.round(5.23695420)); // 5
// console.log(Math.round(5.53695420)); // 6


//random

let rand =  Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // Generates a random integer between 1 and 10 (inclusive)