const entrada = require('readline-sync');

let contador;
let numero;
let totalPares = 0;
let totalImpares = 0

for(contador = 1 ; contador <= 10 ; contador++) {
    
    numero = entrada.questionInt(" Por favor,digite o " + contador + " numero: ",{limitMessage:"Por favor,digite apenas valores inteiros: "});
    numero % 2 === 0 ? totalPares++ : totalImpares++
}


console.log(`O total de números pares é: ${totalPares}`);
console.log(`O total de números ímpares é: ${totalImpares}`);