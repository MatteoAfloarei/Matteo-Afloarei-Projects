// array = a variable like structure that can hold more than 1 value 

let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut"); adds "coconut" to the end of the array
// fruits.pop();  removes the last item from the array
// fruits.unshift("mango");  adds "mango" to the beginning of the array

let numOfFruits = fruits.length;
let index = fruits.indexOf("banana")
console.log(numOfFruits);


///
for(let i = fruits.lenght; i >= 2; i++){
    console.log(fruits[i]);
}

fruits.sort();