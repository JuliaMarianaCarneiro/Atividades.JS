const prompt = require("prompt-sync") ()

function relogioDigital() {

    for (let hora = 0; hora < 24; hora++) {

        for (let minuto = 0; minuto < 60; minuto++) {

            let h = hora;
            let m = minuto;

            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            console.log(h + ":" + m);
        }
    }
}

relogioDigital();