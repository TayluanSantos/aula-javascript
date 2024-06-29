const entrada = require('readline-sync');

let soma = 0;
let numero;

do {
    numero = entrada.questionInt(" Por favor,digite um numero : ",{limitMessage:"Por favor,digite apenas valores inteiros: "});

    if(numero > 0) {
        soma+= numero;
    }
} while (numero !== 0)

console.log(`A soma dos números positivos é: ${soma}`);