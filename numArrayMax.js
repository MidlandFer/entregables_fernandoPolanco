/*Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar
*/
// Defino el arreglo como numero y le agrego 12 posiciones
var numArray = new Array(12);
var indice = 0;
numArray[0] = 4;
numArray[1] = 7;
numArray[2] = 9;
numArray[3] = 3;
numArray[4] = 1;
numArray[5] = 45;
numArray[6] = 67;
numArray[7] = 23;
numArray[8] = 29;
numArray[9] = 78;
numArray[10] = 11;
numArray[11] = 16;
// Guardo el numero en variable global
var max = numArray[0];
// Función para encontrar el numero mayor
function encontrarMayor(arreglo) {
    var max = arreglo[0];
    for (var cont = 1; cont < arreglo.length; cont++) {
        if (arreglo[cont] > max) {
            max = arreglo[cont];
        }
    }
    return max;
}
// Función para determinar si el numero es par o impar
function parImpar(numero) {
    if (numero % 2 === 0) {
        console.log("${numero} es un numero par");
    }
    else {
        console.log("${numero} es un numero impar.");
    }
}
// Buscar el numero mayor
max = encontrarMayor(numArray);
console.log("El numero más grande del arreglo es: ${maximo}");
// Consulto si el numero mayor del array es par o impar
parImpar(max);
