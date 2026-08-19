// for loop = repeat some code a certain amount of times

//  for (let i = 1; i < 11; i++) {
//     console.log(i);
//  }
//  console.log("HAPPY NEW YEAR!");

for(let i = 1; i <= 20; i++) {
    if(i == 13) {
        continue; // skip the iteration when i is 13
        // break; // exit the loop when i is 13
    }
    else{
    console.log(i);
    }

}


// in the first part of the for loop, we declare a variable i and set it to 1. 
// This variable will be used to keep track of how many times the loop has run.

//  In the second part of the for loop, we set the condition that will be checked before each iteration of the loop.
//  If the condition is true, the loop will continue to run. 
// If it is false, the loop will stop. In this case, we are checking if i is less than or equal to 20. 
// If it is, the loop will continue to run. If it is not, the loop will stop.


// in the third part of the for loop, we set the increment that will be applied to the variable i after each iteration of the loop.
// In this case, we are incrementing i by 1 after each iteration of the loop.