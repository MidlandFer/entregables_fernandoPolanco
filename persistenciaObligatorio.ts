import * as fs from "node:fs";

// declaro los arrays
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let contenidoPrecios:string= " ";
let contenidoProductos:string= " ";

//realizo el bucle para que recora los arrrays
for(let i:number=0;i< precios.length; i++){
    contenidoPrecios+= `${precios[i]} `;
    contenidoProductos+= `${productos[i]} `;
}

// creo la informacion txt
fs.writeFileSync('./precios.txt', contenidoPrecios); 
fs.writeFileSync('./productos.txt', contenidoProductos); 

//creo las constantes para leer la informacion txt
const datosPrecios:string=fs.readFileSync('./precios.txt' , 'utf8' );
const datosProductos:string=fs.readFileSync('./productos.txt' , 'utf8' );

//saco los espacios delante y atras del txt
const datosPrecios1:string= datosPrecios.trim();
const datosPrecios2:string= datosProductos.trim();

//separo los strings y creo los arrays
const nuevoArray: string[]= datosPrecios1.split(" ");
const nuevoArray1: string[]= datosPrecios2.split(" ");

//retorno arrays por consola
console.log(nuevoArray);
console.log(nuevoArray1);






