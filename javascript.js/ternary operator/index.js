// ternary operator = a shorthand for if statements
// helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIfFalse;
let age = 21;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
//e' uguale a:
// if(age >= 18) {
//     message = "You are an adult.";
// }
// else {
//     message = "You are a minor.";
// }
console.log(message);

let time = 10;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let purchaseAmount = 100;
let discount = purchaseAmount > 50 ? 10 : 0;
console.log(`You have a discount of $${purchaseAmount - purchaseAmount * (discount / 100)}.`);
