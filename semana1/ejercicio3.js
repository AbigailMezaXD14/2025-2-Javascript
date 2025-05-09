const { ask } = require ('../helpers/input.js');

async function main() {

    const number=Number(await ask("Ingresa un número por favor: "));

    if((number%3 === 0) && number %5 === 0) {
        console.log("El número es múltiplo entre 3 y 5");
    } else if (number %3 === 0) {
        console.log("El número es múltiplo de 3");
    } else if (number %5 === 0) {
        console.log("El número es múltiplo de 5");
    } else {
        console.log("El número no es múltiplo de 3 ni de 5");
    }    

    //TODO: Hacer switch con las condicionales que se hicieron en el if anidado

    switch (true) {
        case number %3 === 0 && number %5 === 0:
            console.log("Múltiplo de 3 y 5");
            break;
        
        case number %3 === 0:
            console.log("Es múltiplo de 3");
            break;

        case number %5 === 0:
            console.log("Es múltiplo de 5");
            break;

        default: 
        console.log("No es múltiplo de 3 y 5");
        break;
    }
   
    const dia =Number(await ask ("Ingresa un número del 1 al 7: "));
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves","Viernes","Sábado","Domingo"]

    if (dia >= 1 && dia <= 7){
        console.log(diasSemana[dia - 1]);
    } else {
        console.log("Número no válido");
    }

}

main();
