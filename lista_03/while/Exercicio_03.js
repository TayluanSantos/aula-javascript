const entrada = require('readline-sync');

let continua = true;
let menoresQue21anos = 0;
let maioresQue50anos = 0;

while(continua) {

    let idade = entrada.questionInt(" Por favor,digite sua idade: ",{limitMessage:"Por favor,digite apenas valores inteiros: "});

    if(idade < 0) {
        console.log("Por favor,digite um número maior ou igual a zero!");
        continua = false;
    } else if(idade >= 0 && idade < 21) {
        menoresQue21anos++
    } else if (idade > 50) {
        maioresQue50anos++;
    } 
}

console.log(`O total de pessoas menores que 21 anos é: ${menoresQue21anos}`);
console.log(`O total de pessoas maiores que 50 anos: ${maioresQue50anos}`);

