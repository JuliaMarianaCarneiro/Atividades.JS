const prompt = require("prompt-sync") ()

function somaFatoriais() {
    let numero = Number(prompt("Digite um número inteiro positivo:"));

    let fatorial = 1;
    let soma = 0;

    for (let i = 1; i <= numero; i++) {

        fatorial = fatorial * i;

        soma = soma + fatorial;
    }

    console.log("Resultado: " + soma);
}

somaFatoriais();