const readline = require('readline');

function compute(a, operator, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
    case 'x':
      return a * b;
    case '/':
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    case '%':
      return a % b;
    case '^':
      return Math.pow(a, b);
    default:
      throw new Error('Unsupported operator: ' + operator);
  }
}

function parseNumber(s) {
  const n = Number(s);
  if (!Number.isFinite(n)) throw new Error('Invalid number: ' + s);
  return n;
}

// Support quick usage: `node index.js 2 + 3`
if (require.main === module) {
  const [,, arg1, arg2, arg3] = process.argv;
  if (arg1 && arg2 && arg3) {
    try {
      const a = parseNumber(arg1);
      const b = parseNumber(arg3);
      const res = compute(a, arg2, b);
      console.log(`Result: ${res}`);
      process.exit(0);
    } catch (e) {
      console.error('Error:', e.message);
      process.exit(1);
    }
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const question = (q) => new Promise((resolve) => rl.question(q, resolve));

  (async function main() {
    console.log('Simple CLI Calculator. Type "exit" to quit.');
    while (true) {
      try {
        const num1Str = (await question('Enter first number: ')).trim();
        if (num1Str.toLowerCase() === 'exit') break;
        const operator = (await question('Enter operator (+ - * / % ^): ')).trim();
        if (operator.toLowerCase() === 'exit') break;
        const num2Str = (await question('Enter second number: ')).trim();
        if (num2Str.toLowerCase() === 'exit') break;

        const a = parseNumber(num1Str);
        const b = parseNumber(num2Str);
        const result = compute(a, operator, b);
        console.log(`Result: ${result}`);
      } catch (e) {
        console.log('Error:', e.message);
      }
    }
    rl.close();
  })();
}