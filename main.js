//                  excersice 1
/* Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" */

let n1 = parseFloat(prompt("Ingrese nota1: "))
let n2 = parseFloat(prompt("Ingrese nota2: "))
let n3 = parseFloat(prompt("Ingrese nota3: "))

let notas = (n1+n2+n3)/3
let round = Math.round(notas)
if (round <= 3.9 ){
    console.log("estudie")
}
else{
    console.log("Becado")
}