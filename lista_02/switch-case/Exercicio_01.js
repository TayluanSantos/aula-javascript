// Exercício 01 - SWITCH/CASE

const entrada = require('readline-sync')

console.log("--------------------------- MENU -------------------------------");
console.log("\nCódigo 1 - Produto: Cachorro Quente | Preço Unitário: R$ 10,00");
console.log("\nCódigo 2 - Produto: X- Salada | Preço Unitário: R$ 15,00");
console.log("\nCódigo 3 - Produto: X- Bacon | Preço Unitário: R$ 18,00");
console.log("\nCódigo 4 - Produto: Bauru | Preço Unitário: R$ 12,00");
console.log("\nCódigo 5 - Produto: Refrigerante |  Preço Unitário: R$ 8,00");
console.log("\nCódigo 6 - Produto: Suco de Laranja | Preço Unitário: R$ 13,00");

let codigo = entrada.questionInt("\nPor favor, digite o codigo do produto: ",{limitMessage:"Por favor,insira um valor do tipo inteiro."});
let quantidade = entrada.questionInt("\nPor favor, digite a quantidade do produto: ",{limitMessage:"Por favor,insira um valor do tipo real."});

console.clear();

switch(codigo) {

    case 1: 
        valorTotal = quantidade * 10.00;
        console.log("Produto : Cachorro Quente");
        console.log(`O valor total é R$${valorTotal.toFixed(2)} reais`);
     break

    case 2: 
        valorTotal = quantidade * 15.00;
        console.log("Produto : X- Salada");
        console.log(`O valor total é R$${valorTotal.toFixed(2)} reais`);
     break

    case 3: 
        valorTotal = quantidade * 18.00;
        console.log("Produto : X- Bacon");
        console.log(`O valor total é R$${valorTotal.toFixed(2)} reais`);
     break

    case 4: 
        valorTotal = quantidade * 12.00;
        console.log("Produto : Bauru");
        console.log(`O valor total é R$${valorTotal.toFixed(2)} reais`);
     break

    case 5: 
        valorTotal = quantidade * 8.00;
        console.log("Produto : Refrigerante");
        console.log(`O valor total é R$${valorTotal.toFixed(2)} reais`);
     break

    case 6: 
        valorTotal = quantidade * 13.00;
        console.log("Produto :Suco de Laranja");
        console.log(`O valor total é R$${valorTotal.toFixed(2)} reais`);
      break

    default:
        console.log("Código inválido. Por favor, insira um valor entre 1 e 6");

}


