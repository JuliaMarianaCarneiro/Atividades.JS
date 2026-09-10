const prompt = require("prompt-sync") ()

function piramideNumerica() {
    let numero = Number(prompt("Digite um número:"));

    for (let i = 1; i <= numero; i++) {
        let linha = "";

        for (let a = 1; a <= i; a++) {
            linha = linha + a;
        }

        console.log(linha);
    }
}

piramideNumerica();