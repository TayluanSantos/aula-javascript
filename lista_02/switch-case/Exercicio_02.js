// Exercício 02 - SWITCH/CASE

const entrada = require('readline-sync')

let nome = entrada.question("\nPor favor, digite o seu nome: ");
let salario = entrada.questionFloat("\nPor favor,digite o valor referente ao seu salario: ",{limitMessage:"Por favor,insira um valor do tipo real."});


console.log("\nCódigo 1 - Cargo : Gerente | Percentual de Reajuste: 10%");
console.log("\nCódigo 2 - Cargo : Vendedor | Percentual de Reajuste: 7%");
console.log("\nCódigo 3 - Cargo : Supervisor | Percentual de Reajuste: 9%");
console.log("\nCódigo 4 - Cargo : Motorista | Percentual de Reajuste: 6%");
console.log("\nCódigo 5 - Cargo : Estoquista | Percentual de Reajuste: 5%");
console.log("\nCódigo 6 - Cargo : Técnico de TI | Percentual de Reajuste: 8%");

let codigo = entrada.questionInt("\nPor favor, digite o codigo referente ao seu cargo: ",{limitMessage:"Por favor,insira um valor inteiro."});


console.clear()


switch(codigo) {

    case 1: 
        let salarioGerente =  salario + (0.1 * salario)
        console.log(`Nome do Colaborador: ${nome}`);
        console.log("Cargo: Gerente");
        console.log(`Salário: R$ ${salarioGerente.toFixed(2)}`);
     break

     case 2: 
        let salarioVendedor =  salario + (0.07 * salario)
        console.log(`Nome do Colaborador: ${nome}`);
        console.log("Cargo: Vendedor ");
        console.log(`Salário: R$ ${salarioVendedor.toFixed(2)}`);
     break

     case 3: 
        let salarioSupervisor =  salario + (0.09 * salario)
        console.log(`Nome do Colaborador: ${nome}`);
        console.log("Cargo: Supervisor");
        console.log(`Salário: R$ ${salarioSupervisor.toFixed(2)}`);
     break

     case 4: 
        let salarioMotorista =  salario + (0.06 * salario)
        console.log(`Nome do Colaborador: ${nome}`);
        console.log("Cargo: Motorista ");
        console.log(`Salário: R$ ${salarioMotorista.toFixed(2)}`);
     break

     case 5: 
        let salarioEstoquista =  salario + (0.05 * salario)
        console.log(`Nome do Colaborador: ${nome}`);
        console.log("Cargo: Estoquista");
        console.log(`Salário: R$ ${salarioEstoquista.toFixed(2)}`);
     break

     case 6: 
        let salarioTecnicoTi =  salario + (0.08 * salario)
        console.log(`Nome do Colaborador: ${nome}`);
        console.log("Cargo: Técnico de TI");
        console.log(`Salário: R$ ${salarioTecnicoTi.toFixed(2)}`);
     break
     
    default:
        console.log("Código inválido. Por favor, insira um valor entre 1 e 6");

}