// EXERCICIO 04 - SWITCH/CASE

const entrada = require('readline-sync');

let saldo = 1000.00;

console.log("----------------- BANCO ABCD -------------------");
console.log("Código da Operação : 1 | Saldo");
console.log("Código da Operação : 2 | Saque");
console.log("Código da Operação : 3 | Depósito");

let codigo = entrada.questionFloat("\nPor favor,insira o codigo referente a operacao que deseja fazer: " , {limitMessage:"Por favor,digite um numero inteiro"});

console.clear();

switch (codigo) {
    case 1: 
        console.log("Operação - Saldo");
        console.log(`Saldo disponível: R$ ${saldo.toFixed(2)}`);
        break

    case 2:
        let valorSaque =  entrada.questionFloat("\nPor favor,insira o valor do saque: " , {limitMessage:"Por favor,digite um numero inteiro"});
        console.clear()

        if(valorSaque <= 0) {
            console.log("Operação inválida! O valor do saque deve ser maior que 0");
        } else if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log("Operação - Saque");
            console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
        } else {
            console.log("Operação inválida! Por favor,verifique o valor digitado.");
        }
        break

    case 3:
        let valorDeposito =  entrada.questionFloat("\nPor favor,insira o valor do deposito: " , {limitMessage:"Por favor,digite um numero inteiro"});
        console.clear()

        if(valorDeposito <= 0) {
            console.log("Operação inválida. O valor do saque deve ser maior que 0"); 
        } else {
            saldo += valorDeposito;
            console.log("Operação - Depósito");
            console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
        }
        break
    
    default: 
           console.log("Operação Inválida. Verifique o valor digitado e tente novamente.");

}