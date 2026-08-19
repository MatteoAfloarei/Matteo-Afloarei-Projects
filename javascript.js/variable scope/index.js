// variable scope = where a variable is recognized and accessible (local vs global)
let x = 1;


function function1(){ // qua dato che c'e una variabile dentro alle parentesi si dovrebbe prendere in considerazione quello che c'e dentro la parentesi. 
                     //  ma dato che c'e una variabile globale e una locale con lo stesso segno il codice lo segna errore perche dovresti inserire un altro segno per distinguere le seguenti variabili
    let x = 1;
    console.log(x);
}
function function2(){ // qua non c'e la variabile nelle parentesi quindi la funzione prende la variabile globale
    console.log(x);
}
function2();