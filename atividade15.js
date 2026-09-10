const prompt = require("prompt-sync") ()

function sequenciaLetras() {
    let letra = prompt("Digite uma letra:");

    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let linha = "";

    for (let i = 0; i < letras.length && letras[i] <= letra; i++) {
        linha = linha + letras[i];
        console.log(linha);
    }
}

sequenciaLetras();