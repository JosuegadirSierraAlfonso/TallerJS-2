//                  excersice 7
/* Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.*/

let nProduct = ""
let price = 0
let cantidad = 0
let totalFinal = 0
do {    
    nProduct = prompt("Ingrese nombre del producto: ") 
    price = parseInt(prompt("Ingrese el precio: "))
    cantidad = parseInt(prompt("Ingrese la cantidad de productos: "))

    let total = price * cantidad
    totalFinal += total


} while (confirm("Wanna continue?"))
alert("El total a pagar es: "+totalFinal)