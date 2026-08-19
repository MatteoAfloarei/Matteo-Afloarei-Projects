// spread operator = ... allow an interable such as an
// array or string to be expanded
// into seperate elements (unpacks the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers)
console.log(numbers);

let fruits = ["apples", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables];
console.log(foods);