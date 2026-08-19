// Method chaining = calling ome method after another
// in continuation, on the same object.

// ----- NO METHOD CHAINING -----
let username = "     mAtTEo";
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username); // returns "Brocode"

// ----- METHOD CHAINING -----
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username); // returns "Brocode"