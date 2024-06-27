// Exercicio 03 - SWITCH/CASE

const entrada = require('readline-sync');

let n1 = entrada.questionFloat("\nPor favor, digite o primeiro numero: ",{limitMessage:"Por favor,insira um valor do tipo real."});
let n2 = entrada.questionFloat("\nPor favor, digite o segundo numero: ",{limitMessage:"Por favor,insira um valor do tipo real."});

console.log("\nCódigo 1 - Soma");
console.log("\nCódigo 2 - Subtração");
console.log("\nCódigo 3 - Multiplicação");
console.log("\nCódigo 4 - Divisão");

let codigo = entrada.questionInt("\nPor favor,digite o codigo da operacao que deseja fazer: ",{limitMessage:"Por favor,insira um valor do tipo inteiro."});

console.clear()

switch(codigo){

    case 1:
        let resultadoSoma = n1 + n2;
        console.log(`Resultado: ${n1} + ${n2} = ${resultadoSoma}`)
     break

    case 2:
        let resultadoSubtracao = n1 - n2;
        console.log(`Resultado: ${n1} - ${n2} = ${resultadoSubtracao}`)
     break

    case 3:
        let resultadoMultiplicacao = n1 * n2;
        console.log(`Resultado: ${n1} * ${n2} = ${resultadoMultiplicacao}`)
     break

    case 4:
        let resultadoDivisao = n1 / n2;
        console.log(`Resultado: ${n1} / ${n2} = ${resultadoDivisao}`)
     break 

     default:
        console.log("Por favor,insira um código válido.")
}