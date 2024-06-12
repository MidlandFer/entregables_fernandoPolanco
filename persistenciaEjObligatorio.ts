import * as fs from 'node:fs';

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let contenidoPrecios:string= " ";
let contenidoProductos:string= " ";

for(let i:number=0;i< precios.length; i++){
    contenidoPrecios+= `${precios[i]}  `;
    contenidoProductos+= `${productos[i]}  `;
}

fs.writeFileSync('./precios.txt', contenidoPrecios); 
fs.writeFileSync('./productos.txt', contenidoProductos); 
console.log("Precios");
console.log("Productos");

const datosPrecios:string=fs.readFileSync('./precios.txt' , 'utf8' );
const datosProductos:string=fs.readFileSync('./productos.txt' , 'utf8' );

const datosPrecios1:string= datosPrecios.trim();
const datosPrecios2:string= datosProductos.trim();

const nuevoArray: string[]= datosPrecios1.split(" ");
const nuevoArray1: string[]= datosPrecios2.split(" ");
console.log(nuevoArray);
console.log(nuevoArray1);
