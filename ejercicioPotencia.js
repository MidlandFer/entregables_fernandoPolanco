"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//const base:number =0;
//let exponente:number=0;
// Función para calcular la potencia
function calcPotencia(base, exponente) {
    var resultado = 1;
    for (var i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
// El usuario ingresa la base
var base = readlineSync.questionInt("Ingresa la base: ");
// El usuario ingresar el exponente 
var exponente;
do {
    exponente = readlineSync.questionInt("Ingresa el exponente (mayor o igual a 0): ");
} while (exponente < 0);
// Muestro el resultado
var potencia = calcPotencia(base, exponente);
console.log("La potencia de " + potencia);
