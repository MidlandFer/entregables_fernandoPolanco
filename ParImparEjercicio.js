"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//declaracion de variables
var numeroIngresado = readlineSync.questionInt("Ingresar el numero para verificar si es Par o Impar: ");
//verificacion de numero
if (numeroIngresado === 0) {
    console.log("El número ingresado es 0 (cero)");
}
else if (numeroIngresado % 2 === 0) {
    console.log("El número es par");
}
else {
    console.log("El número es impar");
}
