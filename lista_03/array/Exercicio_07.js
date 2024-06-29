const input = require('readline-sync');

let numerosInteiros = [2,5,1,3,4,9,7,8,10,6];
let numero;
let numeroEncontrado = false;

numero = input.questionInt("Por favor,digite um numero: ");

for(let i = 0 ; i < numerosInteiros.length ; i++) {
    if(numero === numerosInteiros[i]) {
        numeroEncontrado = true
        break
    } 
}

if(numeroEncontrado) {
    console.log(`O número ${numero} está localizado na posição: ${numerosInteiros.indexOf(numero)}`);
} else {
    console.log(`O número ${numero} não foi encontrado.`);
}




