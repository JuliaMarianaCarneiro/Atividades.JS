const prompt = require("prompt-sync") ()

function escadaInvertida() {
    let numero = Number(prompt("Digite um número:"));

    for (let i = numero; i >= 1; i--) {

        let linha = "";

        for (let a = 1; a <= i; a++) {
            linha = linha + a;
        }

        console.log(linha);
    }
}

escadaInvertida();