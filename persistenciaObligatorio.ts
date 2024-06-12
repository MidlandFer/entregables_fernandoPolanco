import * as fs from "node:fs";

// decalro los arrays
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let contenidoPrecios:string= " ";
let contenidoProductos:string= " ";
//realizo el bucle para que recora los arrrays
for(let i:number=0;i< precios.length; i++){
    contenidoPrecios+= `${precios[i]} `;
    contenidoProductos+= `${productos[i]} `;
}
// creo la información txt
fs.writeFileSync('./precios.txt', contenidoPrecios); 
fs.writeFileSync('./productos.txt', contenidoProductos); 
console.log("Precios");
console.log("Productos");
//creo las constantes parapara leerla información txt
const datosPrecios:string=fs.readFileSync('./precios.txt' , 'utf8' );
const datosProductos:string=fs.readFileSync('./productos.txt' , 'utf8' );
//saco los espcios delante y atras del txt
const datosPrecios1:string= datosPrecios.trim();
const datosPrecios2:string= datosProductos.trim();
//separolos strings y creo los arrays
const nuevoArray: string[]= datosPrecios1.split(" ");
const nuevoArray1: string[]= datosPrecios2.split(" ");
console.log(nuevoArray);
console.log(nuevoArray1);







/*
const cigarros:string[]=["Marlboro" , "Parliament" , "Camel" , "Chesterfield"];
let contenido:string= " ";
//let cigarrosString:string= cigarros.toString();

for(let i:number=0;i< cigarros.length; i++){
    contenido+= `${cigarros[i]}  `;
       }
   

   fs.writeFileSync('./cigarros.txt', contenido);
   console.log("Terminado"); 

//Lee la información
   const datos:string =fs.readFileSync('./cigarros.txt ' , 'utf8');
 console.log(datos);
  
//el método trim lo que hace es sacar los espacios de una cadena de texto de adelante y atras
const datos2:string =datos.trim();

 //se crea un array y que se genere un elementocada vez que hay un espacio
 const nuevoArray:string[]=datos2.split(" ");
 console.log(nuevoArray);

 */

