//import * as readlineSync from "readline-sync";

// Declaro el array con 6 números y lo muestro por consola
let arrayBurbuja = [19, 5, 83, 6, 46, 8];
console.log("Arreglo sin orden descendente:", arrayBurbuja);
//creo la funcion burbujear
function burbujear(arreglo:number[], cantidad:number):number[] {
    let i:number, j:number;
    for (i = 0; i < cantidad - 1; i++) {
        for (j = 0; j < cantidad - i - 1; j++) {
            if (comparacion(arreglo, j, j + 1) === 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
    return arreglo;
}
//creo la funcion para comparar
function comparacion(arreglo:number[], i:number, j:number):number {
    if (arreglo[i] < arreglo[j]) {
        return 1;  
    } else if (arreglo[i] > arreglo[j]) {
        return -1;
    } else {
        return 0;
    }
}
//creo la funcion para el intercambio
function intercambiar(arreglo:number[], index1:number, index2:number):void {
    let aux:number= arreglo[index1];
    arreglo[index1]= arreglo[index2];
    arreglo[index2]= aux;
}
//ordeno el arreglo utilizando el metodo burbujear
let arregloOrdenado:number[]= burbujear(arrayBurbuja, arrayBurbuja.length);
console.log("Resultado del arreglo ordenado en descendente: ", arregloOrdenado);
<<<<<<< HEAD



=======
>>>>>>> e53cb7f6f10e67b38c5a0d5acddfdab1de94a1ac
