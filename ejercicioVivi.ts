/*Encuentra el promedio de una lista de números.
Encuentra el número más grande en una lista.
Encuentra el número más pequeño en una lista.
Calcula la suma de dos arreglos elemento por elemento.
Encuentra el número de elementos pares en una lista.
Encuentra el número de veces que aparece un elemento en una lista.
Calcula el producto de todos los elementos en una lista.
Encuentra el número más grande entre dos números.
Ordena una lista de números de forma ascendente.
Lista a modo de ejemplo: [1,5,4,6,8,7,6]
*/
import * as readlineSync from "readline-sync";

let lista: number[] = [1, 5, 5, 6, 8, 7, 6];

// Variable global para almacenar el numero mas grande
let numMaximo: number = lista[0];

// Funcion para encontrar el numero mas grande
function listaMax(lista: number[]): number {
    let max = lista[0];
    for (let cont = 1; cont < lista.length; cont++) {
        if (lista[cont] > max) {
            max = lista[cont];
        }
    }
    return max;


}