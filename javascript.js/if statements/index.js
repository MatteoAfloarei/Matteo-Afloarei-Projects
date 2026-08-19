// JavaScript if statements examples
// -------------------------------
// if statements let the program choose actions based on conditions.
let age;
let hasLicense = false;
const number = document.getElementById("ageInput");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function() {
  age = number.value
  age = Number(age);
  if(age >= 18) {
  resultElement.textContent = "You can drive.";
}
else {
  resultElement.textContent = "You are too young to drive.";
}


if(age >= 100) {
  resultElement.textContent = "You are a centenarian.";
}
else if(age >= 18) {
  resultElement.textContent = "You are an adult.";
}
else if(age >= 13) {

  resultElement.textContent = "You are a teenager.";
}
  else if(age < 0) {
  resultElement.textContent = "You cant be younger than 0 years old.";
}
}

// Explanation:
// - if(condition) { ... } runs only when condition is true.
// - else if(condition) { ... } runs when previous conditions are false.
// - else { ... } runs when no previous condition is true.
// - Use && for "and", || for "or", and ! for "not".
