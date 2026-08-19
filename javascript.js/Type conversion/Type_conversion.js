// type conversion = change the datatype of a value to another (strings, numbers, booleans)
let x = "Pizza";
let y = "Pizza";
let z = "Pizza";
x = Number(x); // queste 3 righe rappresentano la conversione delle variabili in qualsiasi cosa(in questa riga convertiamo x in un numero ma dato che la variabile contiene una stringa risulta NaN ma js lo rinomina in un numero anche se non e' un numero).
y = String(y); 
z = Boolean(z);
console.log(x, typeof x); //In JavaScript, typeof è un operatore che restituisce una stringa indicante il tipo di un valore o di una variabile.
console.log(y, typeof y);
console.log(z, typeof z);
// NaN = not a number