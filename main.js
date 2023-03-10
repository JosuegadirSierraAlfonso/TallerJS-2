//                  excersice 2
/* Dado un número indicar si es par o impar y si es mayor de 10.*/

let numero = prompt("Introduce un numero")
if(numero % 2 == 0 && numero < 10){
    document.write("El numero "+numero+" es par y menor que 10")
}
else if(numero % 2 == 0 && numero == 10){
    document.write("El numero "+numero+" es par")
}
else if(numero % 2 == 0 && numero > 10){
    document.write("El numero "+numero+" es par y es mayor a 10")
}
else if(numero % 2 != 0 && numero < 10){
    document.write("El numero "+numero+" es impar y es menor a 10")
}
else if(numero % 2 != 0 && numero > 10){
    document.write("El numero "+numero+" es impar y es mayor a 10")
}
else{
    document.write("error")
}
