const prompt = require("prompt-sync") ()

function somaAcumulada() {
    let numero = Number(prompt("Digite um número:"));

    let soma = 0;
    let linha = "";

    for (let i = 1; i <= numero; i++) {

        soma += i;

        if (i == 1) {
            linha = "1";
        } else {
            linha += " + " + i;
        }

        console.log(linha + " = " + soma);
    }
}

somaAcumulada();