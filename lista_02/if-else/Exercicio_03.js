// Exercício 03 - IF/ELSE

const entrada = require('readline-sync');

let nome = entrada.question("Por favor, digite seu nome: ");
let idade = entrada.questionInt("Por favor, digite  sua idade: ",{limitMessage: "Por favor,digite apenas um valor inteiro."});
let isDoador = entrada.questionInt("Voce ja fez alguma doacao anteriormente? Se sim, digite - 1 , caso contrario digite - 2 : ",{limitMessage: "Por favor,digite apenas um valor inteiro."});


if(idade >= 18 && idade < 60 ) {
    console.log(`${nome} está apto(a) para doar sangue!`);
} else if (idade <70 && isDoador == 2) {
    console.log(`${nome} está apto(a) para doar sangue!`);
} else {
    console.log(`${nome} não está apto(a) para doar sangue!`);
}
