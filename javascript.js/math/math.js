// JavaScript math helper examples
// ------------------------------
// Use this file for the built-in Math object and advanced numeric helpers.
// Basic arithmetic operators are covered in arithmetic_operation.js.

let pi = Math.PI;              // Math.PI gives the value of π, about 3.141592653589793
let rounded = Math.round(4.6); // Math.round(4.6) rounds to the nearest integer(intero), 5
let ceil = Math.ceil(4.1);     // Math.ceil(4.1) rounds up to 5
let floor = Math.floor(4.9);   // Math.floor(4.9) rounds down to 4
let random = Math.random();    // Math.random() returns a decimal from 0 (inclusive) to 1 (exclusive)
let absolute = Math.abs(-9);   // Math.abs(-9) returns the absolute value, 9
let squareRoot = Math.sqrt(25); // Math.sqrt(25) returns the square root, 5
let power2 = Math.pow(2, 4);    // Math.pow(2, 4) computes 2 to the power of 4, 16
let min = Math.min(1, 4, -2, 10); // Math.min(...) returns the smallest argument, -2
let max = Math.max(1, 4, -2, 10); // Math.max(...) returns the largest argument, 10

console.log('pi =', pi);
console.log('rounded =', rounded);
console.log('ceil =', ceil);
console.log('floor =', floor);
console.log('random =', random);
console.log('absolute =', absolute);
console.log('squareRoot =', squareRoot);
console.log('power2 =', power2);
console.log('min =', min);
console.log('max =', max);

let radius = 5;
let circleArea = Math.PI * radius * radius; // area of a circle
let degrees = 180;
let radians = degrees * (Math.PI / 180);   // convert degrees to radians

let x = 1;
let y = 2;
let z = 3;


console.log('circleArea =', circleArea);
console.log('radians =', radians);
 
