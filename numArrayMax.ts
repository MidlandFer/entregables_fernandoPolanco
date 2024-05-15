/*Encontrar el elemento mas grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cual es el numero
mas grande del arreglo e imprimirlo por consola
- Almacenar el numero mas grande en una variable
global y pasarlo a una funcion para determinar si el
numero es par o impar
*/
// Definicion del arreglo
const array: number[] = new Array (12);
array[0] = 4;
array[1] = 7;
array[2] = 9;
array[3] = 3;
array[4] = 1;
array[5] = 45;
array[6] = 67;
array[7] = 23;
array[8] = 29;
array[9] = 78;
array[10] = 11;
array[11] = 16;

// Variable global para almacenar el numero mas grande
let numMaximo: number = array[0];

// Funcion para encontrar el numero mas grande
function arrayMax(array: number[]): number {
    let max = array[0];
    for (let cont = 1; cont < array.length; cont++) {
        if (array[cont] > max) {
            max = array[cont];
        }
    }
    return max;
}

// Funcion para determinar si un numero es par o impar
function determinarParImpar(numero: number): void {
    if (numero % 2 === 0) {
        console.log(`${numero} es un número par.`);
    } else {
        console.log(`${numero} es un número impar.`);
    
    }
}

// Funcion para dibujar linea
function dibujarLinea(){
    let linea:string =" ";

    for(let cont:number=0; cont<= 40; cont++){
        linea= linea + "-"
    }
    console.log(linea);

    return linea;
}

// Encontrar el numero mayor
numMaximo = arrayMax(array);
console.log(`El numero mayor del arreglo es: ${numMaximo}`)

// Determinar si el numero mayor es par o impar
determinarParImpar(numMaximo);

//Dibujar linea
dibujarLinea();