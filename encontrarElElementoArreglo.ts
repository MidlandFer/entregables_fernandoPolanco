/*Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar
*/
import * as rls from "readline-sync";
let dimensionArreglo : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let arreglo : number[] = new Array (dimensionArreglo);
let indice : number;
let resultado : number = 0;
for (indice = 0; indice < dimensionArreglo; indice++) {
arreglo[indice] = rls.questionInt(`Indique el nro que va en la posicion ${indice}: `);
resultado += arreglo[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
console.log(`El numero en la posicion ${indice} es: ${arreglo[indice]}`);
}
console.log(`La suma del arreglo es: ${resultado}`);