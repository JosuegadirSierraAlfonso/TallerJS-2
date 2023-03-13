//                  excersice 6
/* Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.*/




let names = []
let notes = []
let gender = ""
let m = []
let f = []
do {
  names.push(prompt("Enter a name: "))
  gender = (prompt("Enter your gender (M or F): "))
  if (gender == "m" || gender == "M" ){
     m.push(1)
  }else if(gender == "f" || gender == "F"){
     f.push(1)
  }
  notes.push(parseFloat(prompt("Enter a note: ")))
} while (confirm("wanna continue? "));
let bestNote = notes.indexOf(Math.max(...notes))
let worseNote = notes.indexOf(Math.min(...notes))
alert(`The student with the highest grade is ${names[bestNote]}\n
The student with the lowest grade is ${names[worseNote]}\n
There are ${m.length} men and ${f.length} women`)