const {ask} = require('../helpers/input');

function obtenerPromedio(numeros) {
let suma=0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma+edades[i];
}
const promedio = suma / numeros.length;
return promedio;
}


async function main() { 

    edades = [20,18,25,30,22,40,28,33];

    console.log(`Promedio = ${obtenerPromedio(edades)}`);



}

main();