const prompt = require("prompt-sync") ()

function piramideCompleta() {
    let numero = Number(prompt("Digite um número:"));

    for (let i = 1; i <= numero; i++) {

        let linha = "";

        for (let a = 1; a <= numero - i; a++) {
            linha = linha + " ";
        }

        for (let a = 1; a <= (2 * i - 1); a++) {
            linha = linha + "*";
        }

        console.log(linha);
    }
}

piramideCompleta();