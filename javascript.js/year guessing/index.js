const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const currentYear = new Date().getFullYear();

rl.question('In what year are we now? ', (year) => {
  const userYear = Number(year);

  if (userYear === currentYear) {
    console.log('Correct! Excellent job! You got it right!');
  } else {
    console.log(`Wrong year. The current year is ${currentYear}.`);
  }

  rl.close();
});
