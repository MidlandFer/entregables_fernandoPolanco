import * as readlineSync from "readline-sync";

//declaracion de variables
let numeroIngresado:number=readlineSync.questionInt("Ingresar el numero para verificar si es Par o Impar: ");

//verificacion de numero
if (numeroIngresado === 0) {
    console.log( "El número ingresado es 0 (cero)");
} 
else if (numeroIngresado % 2 === 0) {
    console.log( "El número es par");
}
else{
    console.log( "El número es impar");

}