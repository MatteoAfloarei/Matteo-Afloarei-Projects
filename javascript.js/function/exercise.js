
function add(x, y) {
    let result = x + y;
    return result;
}

function subtract(x, y) {
    let result = x - y;
    return result;
}

function multiply(x, y) {
    let result = x * y;
    return result;
}

function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero is not allowed.";
    }

}

let answer = add(5, 10); // returns 15
console.log(answer); // prints 15

let difference = subtract(10, 5); // returns 5
console.log(difference); // prints 5

let product = multiply(5, 10); // returns 50
console.log(product); // prints 50

let quotient = divide(10, 2); // returns 5
console.log(quotient); // prints 5

let error = divide(10, 0); // returns error message
console.log(error); // prints "Error: Division by zero is not allowed."


//function odd or even:
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(4)); // prints true  

//function if a email is valid:
function isValidEmail(email) {
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail("test@example.com")); // prints true