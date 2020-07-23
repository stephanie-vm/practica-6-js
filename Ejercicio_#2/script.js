//Ejercicio #2

let num1 = parseInt(prompt('Ingrese el primer número'));
let num2 = parseInt(prompt('Ingrese el segundo número'));
const funcion = getmiFuncion(num1,num2);
const resultado = getmiFuncion(num1,num2);
console.log(resultado);

function getmiFuncion(num1,num2){
    if(num1 % num2 ==0) {
        return true;
    }else{
        return false;
    }
}