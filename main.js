//                  excersice 7
/* Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo*/

let square = parseInt(prompt("Number of one side of the square: "));
let rectangleHight = parseInt(prompt("Hight of the rectangle"));
let rectangleWidht = parseInt(prompt("Widht of the rectangle"));

alert(`The perimeter of the square is: ${square * 4} and the rectangle area is: ${rectangleHight * rectangleWidht}`)