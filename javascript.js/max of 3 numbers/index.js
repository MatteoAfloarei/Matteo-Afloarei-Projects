function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number1: ', (num1) => {
  rl.question('Enter number2: ', (num2) => {
    rl.question('Enter number3: ', (num3) => {
      const a = Number(num1);
      const b = Number(num2);
      const c = Number(num3);

      console.log(`The maximum number is: ${maxOfThree(a, b, c)}`);
      rl.close();
    });
  });
});