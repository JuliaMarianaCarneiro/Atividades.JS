const prompt = require("prompt-sync") ()

function sequenciaAlternada() {
    let numero = Number(prompt("Digite um número:"));

    for (let i = 1; i <= numero; i++) {

        if (i % 2 == 0) {
            console.log(-i);
        }else{
            console.log(i);
        }
    }
}

sequenciaAlternada();