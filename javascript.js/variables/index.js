// 1. declaration let x;
// 2. assignment x = 100;

let firstName = "Matteo";
let favouriteFood = "Pizza";
let email = "Matteo123@gmail.com";

console.log(typeof firstName); //typeof serve in output a vedere che tipo di variabile e'(string,number ecc...)
console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);


//BOOLEANS
let online = false;
let forsale = true;
let isStudent = true;

console.log(`Bro is online ${online}`);
console.log(`Is this car for sale ${forsale}`);
console.log(`Enrolled${isStudent}`);

//PAGINA WEB
document.getElementById("h1").textContent = fullName;
document.getElementById("h1").textContent = Age;
// .textContent = It gets or sets the text inside an element.
//document is the browser’s object that represents the current web page.