const prompt = require("prompt-sync") ()

function escadaDireita() {
    let numero = Number(prompt("Digite um número:"));

    for (let i = 1; i <= numero; i++) {

        let linha = "";

        for (let a = 1; a <= numero - i; a++) {
            linha = linha + " ";
        }

        for (let a = 1; a <= i; a++) {
            linha = linha + "*";
        }

        console.log(linha);
    }
}

escadaDireita();