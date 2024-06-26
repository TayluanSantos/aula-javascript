/* 
    Elabore um algoritmo que leia 4 notas (números reais) de um participante e exiba na tela a média final do participante. 
    Veja o exemplo abaixo:

    Entrada:
    - Nota 1: 10.0
    - Nota 2: 8.0
    - Nota 3: 7.0
    - Nota 4: 7.5
    
    Saída: 
    - Média final: 8.1
*/

let entrada = require('readline-sync')

// DEFININDO VARIÁVEIS
let nota1;
let nota2;
let nota3;
let nota4;
let media;

// RECEBENDO ENTRADA DE DADOS
nota1 = entrada.questionFloat("Digite a primeira nota: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
nota2 = entrada.questionFloat("Digite a segunda nota: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
nota3 = entrada.questionFloat("Digite a terceira nota: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
nota4 = entrada.questionFloat("Digite a quarta nota: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});

// CALCULANDO A MÉDIA
media = (nota1 + nota2 + nota3 + nota4) / 4

//SAIDA DE DADOS
console.log(`A média final é: ${media.toFixed(1)}`);