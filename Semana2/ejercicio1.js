const { ask } = require('../helpers/input');

function saludar(nombre) {
    console.log("hola ", nombre);
}

const personas = [
    "Juan",
    "Roberto",
    "Esteban",
    "Pancracio",
    "Rigoberta",
    "Nepomuseno",
    "Diploma",
    "Karla",
    "Aniv. De la Rev.",

]


async function main()  {

    for (let i = personas.length - 1; i>=0; i --) {
        saludar(personas[i]);
    }
 


}

main();