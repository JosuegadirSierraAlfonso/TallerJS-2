//                  excersice 9
/* N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.*/


let names = []
let jump = []
do {
  names.push(prompt("Enter a name: "))
  jump.push(parseFloat(prompt("Enter jump mark: ")))
} while (confirm("wanna continue? "));
let bestJump = jump.indexOf(Math.max(...jump))

if (jump[bestJump
] > 15.5){
    alert(`${names[bestJump]} you won 500 million for breaking the world record`)
}else if(jump[bestJump] <= 15.5){
    alert(`${names[bestJump]} you won the gold medal`)
}else{
    alert("ERROR")
}