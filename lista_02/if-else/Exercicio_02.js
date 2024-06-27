// Exercício 02 - IF/ELSE

const entrada = require('readline-sync');

let numero = entrada.questionInt("Digite um numero: ",{limitMessage: "Por favor,digite um valor do tipo inteiro"});

if(numero % 2 === 0 && numero >= 0) {
    console.log(`\nO numero ${numero} é par e positivo.`);
} else if (numero % 2 === 0 && numero < 0) {
    console.log(`\nO numero ${numero} é par e negativo.`)
} else if (numero % 2 > 0 && numero > 0) {
    console.log(`\nO numero ${numero} é ímpar e positivo.`)
} else {
    console.log(`\nO numero ${numero} é ímpar e negativo.`)
}