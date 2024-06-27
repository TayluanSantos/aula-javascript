
// Exercício 01 - IF/ELSE

const entrada = require('readline-sync');

let numeroA = entrada.questionInt("Digite o primeiro numero: ",{limitMessage: "Por favor,digite um valor do tipo inteiro"});
let numeroB = entrada.questionInt("Digite o segundo numero: ",{limitMessage: "Por favor,digite um valor do tipo inteiro"});
let numeroC = entrada.questionInt("Digite o terceiro numero: ",{limitMessage: "Por favor,digite um valor do tipo inteiro"});

if((numeroA + numeroB) > numeroC){
    console.log("\n A Soma de A + B é Maior do que C.")
} else if ((numeroA + numeroB) < numeroC){
    console.log("\n A Soma de A + B é Menor do que C.")
} else {
    console.log("\n A Soma de A + B é Igual a C.")
}