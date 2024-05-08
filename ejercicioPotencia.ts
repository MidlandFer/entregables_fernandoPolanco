import * as readlineSync from "readline-sync";

//const base:number=0;
//let exponente:number=0;

// Función para calcular la potencia
function calcPotencia(base:number,exponente:number):number {
    let resultado: number = 1;

    for (let cont = 0; cont < exponente; cont++) {
        resultado *= base;
    }

    return resultado;
}

// El usuario ingresa la base
 const base = readlineSync.questionInt("Ingresa la base: ");

// El usuario ingresa el exponente 
 let exponente;
do {
    exponente = readlineSync.questionInt("Ingresa el exponente (mayor o igual a 0): ");
} while (exponente < 0);

// Muestro el resultado de la operación
const potencia: number = calcPotencia(base, exponente);
console.log("El resultado de la potencia es:  " + potencia);