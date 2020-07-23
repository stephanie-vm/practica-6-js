// Ejercicio #1

let num1 = parseFloat(prompt('Ingrese  un primer número'));
let num2 = parseFloat(prompt('Ingrese un segundo número'));

let resultado = max(num1,num2);
console.log(resultado);

function max(num1,num2){
    if (num1 > num2) {
        return num1 ;
    }else {
        return num2;
    }
}



