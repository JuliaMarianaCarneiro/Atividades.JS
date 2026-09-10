const prompt = require("prompt-sync") ()

function numeroTriangular() {
    let numero = Number(prompt("Digite um número inteiro:"));

    let soma = 0;
    let i = 1;

    while (soma < numero) {
        soma = soma + i;
        i++;
    }

    if (soma == numero) {
        console.log(" Número triangular.");
    }else{
        console.log(" Não é um número triangular.");
    }
}

numeroTriangular();