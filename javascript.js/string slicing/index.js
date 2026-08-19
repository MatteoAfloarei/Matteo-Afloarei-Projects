// string slicing = creating a substring 
// from a portion of another string.
//  string.slice(start,end)
const fullName = "John Doe";

let firstName = fullName.slice(0, 4); // returns "John"
let lastName = fullName.slice(5); // returns "Doe"
let firstChar = fullName.slice(0, 1); // returns "J"
let lastChar = fullName.slice(-1); // returns "e"


let firstName = fullName.slice(0, fullName.indexOf(" ")); // returns "John"
let lastName = fullName.slice(fullName.indexOf(" ") + 1); // returns "Doe"

console.log(firstChar);
console.log(lastChar);
console.log(firstName);
console.log(lastName);
