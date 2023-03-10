//                  excersice 5
/* Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo.*/

let n1 = parseFloat(prompt("Enter a number: "))
let n2 = parseFloat(prompt("Enter a number: "))

if (n1 > n2){
    alert(`The sum is ${n1+n2} and their difference is ${n1-n2}`)
}
else{
    alert(`The product is ${n1*n2} and its division is ${n1/n2}`)
}