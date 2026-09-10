const prompt = require("prompt-sync") ()

function trianguloNumeros() {
    let numero = Number(prompt("Digite um número:"));

    for (let i = 1; i <= numero; i++) {
        let linha = "";

        for (let a = 1; a <= i; a++) {
            linha = linha + i;
        }

        console.log(linha);
    }
}

trianguloNumeros();