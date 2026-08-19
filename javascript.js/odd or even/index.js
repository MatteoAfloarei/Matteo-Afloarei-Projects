const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number) => {
  const value = Number(number);

  if (value % 2 === 0) {
    console.log(`${value} is even.`);
  } else {
    console.log(`${value} is odd.`);
  }

  rl.close();
});