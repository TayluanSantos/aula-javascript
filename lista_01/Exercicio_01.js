/*
    1) Dado o Fluxograma abaixo, desenvolva o algoritmo:
    
        Entrada:
        - Salario: 10000.00
        - Abono:  1000.00

        Saída: 
        - Novo Salário: 11000.00
*/

let entrada = require('readline-sync')

// DEFININDO VARIÁVEIS
let salario;
let abono;
let novoSalario;

// RECEBENDO ENTRADA DE DADOS
salario = entrada.questionFloat("Digite o salario: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
abono = entrada.questionFloat("Digite o abono: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});

// CALCULANDO NOVO SALÁRIO
novoSalario = salario + abono;

//SAIDA DE DADOS
console.log(`O valor do novo salário é: ${novoSalario}`);
