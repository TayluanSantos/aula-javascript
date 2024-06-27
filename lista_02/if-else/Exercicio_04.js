// Exercício 04 - IF/ELSE

const entrada = require('readline-sync');

let p1 = entrada.question("Por favor, digite a primeira palavra: ").toLowerCase();
let p2 = entrada.question("Por favor, digite a segunda palavra: ").toLowerCase();
let p3 = entrada.question("Por favor, digite a terceira palavra: ").toLowerCase();


if (p1 === "vertebrado" && p2 === "ave" && p3 === "carnivoro") {
    console.log("Águia");
} else if (p1 === "vertebrado" && p2 === "ave" && p3 === "onivoro") {
    console.log("Pomba");
} else if (p1 == "vertebrado" && p2 === "mamifero" && p3 === "onivoro" ){
    console.log("Homem");
} else if (p1 == "vertebrado" && p2 === "mamifero" && p3 === "herbivoro"){
    console.log("Vaca");
} else if (p1 === "invertebrado" && p2 === "inseto" && p3 === "hematofago") {
    console.log("Pulga");
} else if (p1 === "invertebrado" && p2 === "inseto" && p3 === "herbivoro") {
    console.log("Lagarta");
} else if (p1 === "invertebrado" && p2 === "anelidio" && p3 === "hematofago") {
    console.log("Sangessuga");
} else if (p1 === "invertebrado" && p2 === "anelidio" && p3 === "onivoro") {
    console.log("Minhoca");
} else {
    console.log("Erro! Por favor,verifique os valores inseridos.")
}

