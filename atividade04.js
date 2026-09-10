const prompt = require("prompt-sync") ()

function desenharMoldura() {
    let altura = Number(prompt("Digite a altura:"));
    let largura = Number(prompt("Digite a largura:"));

    for (let i = 1; i <= altura; i++) {

        let linha = "";

        for (let a = 1; a <= largura; a++) {

            if (i == 1 || i == altura || a == 1 || a == largura) {
                linha += "*";
            } else {
                linha += " ";
            }
        }

        console.log(linha);
    }
}

desenharMoldura();