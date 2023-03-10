//                  excersice 4
/* Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.*/
let names = []
let age = []
/* let cont = Number(prompt("cuantas: ")) */
for (let i = 0; i < 3; i++) {
    names.push(prompt(`Ingrese nombre: ${i}`))
    age.push(parseFloat(prompt(`Ingrese edad: ${i}`)))  
}
let mayor = age.indexOf(Math.max(...age))
alert(names[mayor]+` es la persona mayor con una edad de ${Math.max(...age)}`)