// string methods = allow you to manipulate and work with text(strings).
//let userName = "John Doe";

//console.log(userName.charAt(0)); // returns the character at index (n).]
//console.log(userName.indexOf("o")); // returns the index of the first occurrence of the specified value
//console.log(userName.length); // returns the length of the string

//console.log(userName.toUpperCase()); // returns the string in uppercase
//console.log(userName.toLowerCase()); // returns the string in lowercase
//console.log(userName.startsWith("")); // returns true if the string starts with the specified value

//console.log(userName.startsWith("")); 
//console.log(userName.includes(" ")); // returns true if the string contains the specified value
//console.log(userName.padStart(15, "*")); // pads the current string with another string (multiple times) until the resulting string reaches the given length

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", ""); // replaces all occurrences of the specified value
console.log(phoneNumber); // returns 1234567890