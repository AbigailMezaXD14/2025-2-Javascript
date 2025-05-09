const { ask } = require('../helpers/input.js');

async function main () {
    const name = await ask ('¿Cuál es tu nombre?');
    const age = Number(await ask ('¿Cuál es tu edad?'));
    const food = await ask ('¿Cuál es tu comida favorita?');

    console.log( `Hola ${name}, tienes ${age} años y te gusta ${food}`);


}

main ();

