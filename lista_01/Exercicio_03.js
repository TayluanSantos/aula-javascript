/* 
     Elabore um algoritmo que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e
     os Descontos de um Colaborador e exiba na tela o Salário Líquido. 
     Veja o exemplo abaixo:

     Entrada:
     - Salário Bruto: 2000.00
     - Adicional Noturno: 500.00
     - Horas Extras: 100.00
     - Descontos: 200.00

     Saída
     - Salário Líquido: 2800.00
*/

let entrada = require('readline-sync')

// DEFININDO VARIÁVEIS
let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

// RECEBENDO ENTRADA DE DADOS
salarioBruto = entrada.questionFloat("Digite o salario bruto: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
adicionalNoturno = entrada.questionFloat("Digite o adicional noturno: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
horasExtras = entrada.questionFloat("Digite as horas extras: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});
descontos = entrada.questionFloat("Digite o desconto: ",{limitMessage: 'Por favor, digite um valor do tipo float.'});

// CALCULANDO O SALÁRIO LÍQUIDO
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

//SAIDA DE DADOS
console.log(`O valor do salário líquido é: ${salarioLiquido}`);