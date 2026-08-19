const email="Bro1@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username); // returns "Bro1"
console.log(extension); // returns "gmail.com"  