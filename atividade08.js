const prompt = require("prompt-sync") ()

function tabelaMultiplicacao() {

    for (let numero = 1; numero <= 10; numero++) {

        console.log("Tabuada do " + numero);

        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {

            let resultado = numero * multiplicador;

            console.log(
                numero + " x " + multiplicador + " = " + resultado
            );
        }

        console.log("----------------");
    }
}

tabelaMultiplicacao();