let loggedIn = false;
let username;
let password;
while(!loggedIn) {
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");
    // In a real application, you would check the credentials against a database
    if(username === "admin" && password === "password") {
        loggedIn = true;
        console.log("Login successful!");
    } else {
        window.alert("Invalid username or password. Please try again.");
    }
}
console.log(`Welcome, ${username}!`); 