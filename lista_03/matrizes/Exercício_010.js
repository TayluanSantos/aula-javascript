const entrada = require('readline-sync');


let matriz = new Array(10);
let matrizMedia = [];
let soma = 0;

for(let i = 0 ; i < matriz.length ; i++) {
    matriz[i] = new Array(4);
}

for(let linha = 0 ; linha < matriz.length ; linha++) {
    for(let coluna = 0 ; coluna < matriz[linha].length ; coluna++) {
        matriz[linha][coluna] = entrada.questionFloat(`Digite uma nota do elemento [${linha}][${coluna}]:`);
    }
}

for (let linha = 0; linha < matriz.length; linha++) {

    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        soma += matriz[linha][coluna] 
        matrizMedia[linha] = (soma / 4).toFixed(1);
    }
    soma = 0

}

console.table(matrizMedia);


 

