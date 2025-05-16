const {ask} = require('../helpers/input');

async function main() {
    
    //Ejercicio 1: cuenta la cantidad de caracteres que tiene cada nombre
    
    const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol"];

    for (let i= 0; i < nombres.length; i++) {
        if (nombres[i].length >= 5 ){
            console.log(`${nombres[i]} tiene más de 5 caracteres`);
        } else {
            console.log(`${nombres[i]} tiene solo ${nombres[i].length} caracteres`);
        }

    }



    //Ejercicio 2: busca en los nombres las vocales para imprimirlos

    const nombres2 = ["Oscar", "Ana", "Luis", "Eduardo", "Isabel", "María", "Úrsula"];
    const vocales = ["a", "e", "i", "o", "u"];

    for (let a = 0; a <nombres2.length; a++) {
        const primeraLetra = nombres2[a][0].toLowerCase();
        for (let b = 0; b < vocales.length; b++) {
            if (primeraLetra ===vocales[b]) {
                console.log(vocales[b]);
            }
        }
    }

    //Ejercicio 3: pone las palabras al revés.

    const palabraAlReves = await ask ('Escribe una palabra');
    let resultado = "";
    for (let c = palabraAlReves.length-1; c>=0; c--) {
        resultado = resultado + palabraAlReves[c];
    }

}

main();