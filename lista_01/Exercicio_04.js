/*
    Elabore um algoritmo que leia quatro valores (n1, n2, n3, n4). A seguir, calcule e
    mostre a diferença do produto entre n1 e n2 pelo produto entre n3 e o n4. 
    Veja os exemplos abaixo:  
    
    Entrada:
    - numero1: 5.0
    - numero2: 6.0
    - numero3: 7.0
    - numero4: 8.0

    Saída:
    - Diferença: -26.0
*/

let entrada = require('readline-sync')

// DEFININDO VARIÁVEIS
let numero1;
let numero2;
let numero3;
let numero4;
let diferenca;

// RECEBENDO ENTRADA DE DADOS
numero1 = entrada.questionFloat("Digite o primeiro numero: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
numero2 = entrada.questionFloat("Digite o segundo numero: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
numero3 = entrada.questionFloat("Digite o terceiro numero: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
numero4 = entrada.questionFloat("Digite o quarto numero: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});

// CALCULANDO O SALÁRIO LÍQUIDO
diferenca = (numero1 * numero2) - (numero3 * numero4);

//SAIDA DE DADOS
console.log(`O valor da diferença é: ${diferenca}`);