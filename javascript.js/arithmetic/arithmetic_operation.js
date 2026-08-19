// arithmetic operation are operands (values, variables, etc...)
// operators (+ - * / ** %)
// ** definisce una potenza di ...
// % is the remainder (modulo) operator — it returns the remainder left after dividing the left operand by the right.
let students = 30;
let professors = 10;
let president = 2;
let friends = 20;
let people = 200;
let parents = 4;

students = students * 2;
professors = professors / 2;
friends = friends + friends;
president = president-president + 1;
people = people ** 2;
parents = parents % 3;
//students -= 1
//students += 1
//students *= 1
//students /= 1
//students **= 1
//students %= 1

//students++;
//students--;

console.log(students);
console.log(friends);
console.log(professors);
console.log(president);
console.log(people);
console.log(parents);

/* operators precedence
1. parenthesis ()
2. exponents
3. multiplication & division & modulo
4. addition & subtraction*/

let result = 1 + 2 * 3 + 4 ** 2;
let result1 = 12 % 5 + 8 / 2;
console.log(result);
console.log(result1);