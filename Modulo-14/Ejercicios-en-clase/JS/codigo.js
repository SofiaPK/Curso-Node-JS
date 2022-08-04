/*FUNCIONES - tienen diferente tipo de sintaxis
se usa la palabra reservada function*/

/*Formas de declarar funciones en JS:

-Primera:
function sumar(a, b){
    return a + b        //aca la estamos declarando
}
console.log(sumar(5, 20)); // aca la estamos inicializando


-Segunda: Funcion anonima, se llama asi ya que no le estoy poniendo ningun tipo de nombre.
let sumar = function (a, b){
    return a + b;
}
console.log(sumar(5, 10));

---

let sumar = function (a, b) {
    return a + b
}
console.log(sumar(10, 15))


-Tercera: Funcion Flecha (2015 ES6), son funciones anonimas, que no dicen nada, pero con una sintaxis mas simplificada
no usan la palabra reservada function.
let sumar = (a, b) => {
    return a + b;         CON RETURN
}
console.log(sumar(15, 20));

---

let sumar = (a, b) => a + b  --forma simplificada en una sola linea de codigo
console.log(sumar(15, 20));   SIN RETURN, sin llaves (las llaves son especificas del RETURN)


const sumar = function (a, b){
    return a + b
};
console.log(15, 20); o sumar(15,20);

--Buenas Practicas--
1) que las funciones no pasen de las 10 o 15 lineas de codigo.
2) tratar de evitar la repeticion, en este caso se usan funciones para no repetir codigo.

*/

/*CONSIGNA:
Realizar una unica funcion que tenga tres parametros (los dos primeros numeros y el tercero una operacion)
y realice las operaciones basicas de una calculadora (+, -, /, *) mostrandolas por consola.
Cuando se inicializa la funcion se le pasan los tres argumentos

por ej:
function sumar(a, b, operacion){
    return 1 + 2
}
(1, 2, "+")

Ejemplo de una calculadora hecho por el Profesor Juan:
function calculadora (primerNumero, segundoNumero, operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
    }
}
console.log(calculadora(5, 5, "+"));

Ejemplo:
const operacion = (a, b, c) => {
    switch (c) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
            return 0
    }
};
console.log(operacion(10, 5, "-")); ó console.log(operacion(10, 5, "o"));

Ejemplo de una compañera: 
let calculadora = function (a, b, c){
    if(c == "+"){
        return a + b;
    }
    else if(c == "-"){
        return a - b;
    }
    else if(c == "*"){
        return a * b;
    }
    else if(c == "/"){
        return a / b;
    }
    else{
        return "ingrese +, -, *, /";
    }
}
console.log(calculadora(4, 5, "*"));

Ejemplo de otro compañero:
let calculadora = (num1, num2, op) => {
    switch(op){
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
    }
}
let n1 = parseInt(prompt("Ingrese primer numero"));
let n2 = parseInt(prompt("Ingrese segundo numero"));
let operacion = prompt("Ingrese la operacion que desea realizar (+, -, *, /)");
calculadora(n1, n2, operacion);
*/

/*AMBITO DE LAS VARIABLES - SCOPE
-VARIABLE GLOBAL : estan definidas en cualquier punto de nuestro programa e incluso puede utilizarse dentro en una funcion.
let global = 'Soy una variable GLOBAL'; ó const global = 'Soy una variable GLOBAL';
console.log(global);

-VARIABLE LOCAL - son aquellas que solamente estan definidas dentro una funcion.
function mostrarMsj(){
    let msj = 'Variable Local';
    return msj
}
console.log(mostrarMsj());

-A su vez la global puede entrar dentro de la local:
const glocal = 'Soy una variable Global';
function mostrarMsj(){
    let msj = global + '' + 'Variable Local';
    return msj
}
console.log(global);
console.log(mostrarMsj());

Si declaramos una variable dentro o fuera de un bloque de codigo sin usar ninguna palabra reservada,
esta automaticamente se transforma en una variable de tipo global
console.log(globalVar);
console.log(globalSinPalabraReservada);
*/

function cambiarColor(nombreColor){
    let ele = document.getElementById('informacion');
    //console.log(ele)
    ele.style.color = nombreColor;
}
//cambiarColor('red')

function sumar(a, b){
    let suma = a + b;
    document.write(`<p>El resultado es: $(suma)</p>`)
}