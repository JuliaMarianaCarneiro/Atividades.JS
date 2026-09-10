const prompt = require("prompt-sync") ()

function desenharX() {
    let numero = Number(prompt("Digite um número ímpar maior ou igual a 5:"));

    for (let i = 0; i < numero; i++) {

        let linha = "";

        for (let a = 0; a < numero; a++) {

            if (a == i || a == numero - 1 - i) {
                linha = linha + "*";
            } else {
                linha = linha + " ";
            }
        }

        console.log(linha);
    }
}

desenharX();