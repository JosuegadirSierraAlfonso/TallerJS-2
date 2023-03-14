//                  excersice 10
/* Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR.*/


let numbers = []

while (true) {
    let enter = (parseInt(prompt("Enter number: ")))
    numbers.push(enter)
    if (enter == 0){
        numbers.pop()
        if (true){
            break
        }
    }
}

let sum = numbers.reduce(function(a, b){
    return a + b; }, 0);

let average = parseInt((sum / (numbers.length)));
let maxNumber = numbers.indexOf(Math.max(...numbers));
let minNumber = numbers.indexOf(Math.min(...numbers));

alert(`The sum of all the values is: ${sum}\n
the average of the values is: ${average}\n
the number of total added values were: ${numbers.length}\n
the greater number is: ${numbers[maxNumber]}\n
and the  lesser number is: ${numbers[minNumber]}`)