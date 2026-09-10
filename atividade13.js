const prompt = require("prompt-sync") ()

function desenharQuadrado() {
    let tamanho = Number(prompt("Digite o tamanho:"));
    let simbolo = prompt("Digite o simbolo:");

    for (let i = 1; i <= tamanho; i++) {

        let linha = "";

        for (let a = 1; a <= tamanho; a++) {
            linha = linha + simbolo;
        }

        console.log(linha);
    }
}

desenharQuadrado();