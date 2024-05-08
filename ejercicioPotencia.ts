import * as readlineSync from "readline-sync";

//const base:number =0;
//let exponente:number=0;

// Función para calcular la potencia
function calcPotencia(base:number,exponente:number):number {
    let resultado: number = 1;

    for (let i = 0; i < exponente; i++) {
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

// Muestro el resultado
const potencia: number = calcPotencia(base, exponente);
console.log("La potencia de " + potencia );