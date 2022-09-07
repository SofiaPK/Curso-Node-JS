/*FUNCIONES CALLBACK
pasarle a la funcion otra funcion como parametro

function nombreDeLaFun(a, b){
}
nombreDeLaFun(25, () =>{  //que esto se ejecute cuando termine de ejecutarse la primera funcion
})

PRIMER EJEMPLO:
function buscar (numero, funcAnonima){
    console.log(numero);
    funcAnonima();
}
buscar(123, ()=>{   
    console.log('enviando callback') //aca estoy pasando la funcion solo como parametro
});


SEGUNDO EJEMPLO:
function saludar (nombre){
    alert('Hola ' + nombre);
}
function nombreUsuario(callback){
    let nombre = prompt('Ingrese su nombre de usuario');
    callback(nombre);
}
nombreUsuario(saludar);

3ER EJEMPLO ASINCRONICA
function primera (segunda){
    fetch('https://jsonplaceholder.typicode.com/todos/1')  //peticion a la api de placeholder
    .then(response => response.json())   
    .then(json => console.log(json));        //luego trae la respuesta y la muestra
    
    setTimeout(() => {   //controlo el flujo de como se va a ejecutar la funcions segunda
        segunda(); 
    }, 500);
}
function segunda(){
    console.log('segunda');
}
primera(segunda);

-----------------------------------------------

FORM
const form = document.querySelector('#form');
const nombre = document.querySelector('#nombre');
const password = document.querySelector('#password');
const errorElement = document.querySelector('#error');

form.addEventListener('submit', (e) => {
    let mensaje = [];   //aca vamos a poner la validacion que le queremos dar al nombre y a la contraseña
   
    if (nombre.value !== '' || nombre.value == null){  //tiene que ser estrictamente igual
        mensaje.push('Nombre es requerido') //ingresar nuestro dato al array vacio que inventamos antes
    }

    if (password.value.length <= 6){
        mensaje.push('La contraseña debe de tener más de seis caracteres')
    }

    if (password.value.length >= 20){
        mensaje.push('La contraseña debe de tener más de veinte caracteres')
    }

    if (mensaje.length > 0){
        e.preventDefault()
        errorElement.innerHTML = mensaje.join(', ')
    }
})

-----------------------------------------------

EXPRESIONES REGULARES 
En JS son objeto
son patrones para hacer coincidir caracteres en cadena (es decir string)
Entonces tenemos una cadena de texto y el objetivo es encontrar combinaciones

Siempre las expresiones regulares se almacenan entre barra diagonal // y dentro de ello va
el tipo de valor, es decir la coincidencia que queremos que opere en la validacion

LIMITES
. el punto hace como coincidencia basica-matchear cualquier caracter y espacio en
blanco, excepto los saltos de linea
let expresionReg = /./g;

\d matchea cualquier digito entre 0 y 9
let expresionReg = /\d/g;


\D todo lo que no sea un digito(osea numero) lo va a matchear
let expresionReg = /\D/g;

\w todo lo que sea caracter alphanuemerico y guion bajo
let expresionReg = /\w/g;

\W lo opuesto, matchea todo lo que no sea un caracter alphanumerico
let expresionReg = /\W/g;

\s espacio, tabs y saltos de linea
let expresionReg = /\s/g;

\S lo opuesto, matchea cualquier caracter que no sea un espacio, tabs y saltos de linea
let expresionReg = /\S/g;

a\b  lo limito al ultimo del string
let expresionReg = /a\b/g;

a\B no tiene limite de palabras

ˆ()  que inicie una cadena (descripta dsp abajo) con el valor indicado entre los corchetes
let expresionReg = /ˆ(www)/g;   //que lo busque en la expresion/cadena/string

()$ se pone al final de la cadena de texto que se quiere buscar
let expresionReg = /(com)$/g;

CUANTIFICADORES
0*
let expresionReg = /0*70/g;

+ coincide con uno o mas repeticiones
let expresionReg = /abc+/g;

? coincide con 0 o una repeticion
let expresionReg = /abz?/g;

{} coincide con n repeticiones
+ coincide con uno o mas repeticiones. se indica un maximo(a la derecha)y un minimo (a la izquierda)
let expresionReg = /{}/g;
let expresionReg = /7{3}//g; --> 1234(777)890777 solo toma tres 7
let expresionReg = /(ana){2}/g;  entonces busca matchear si eso se repite

//g solo minuscula

//ga solo mayuscula

//gi ignora la diferencia entre mayuscula y minuscula

*/

//VALIDACION DE DNI ARGENTINO desde 0 a 9 con puntos y sin puntos
//inicio de la cadena                                       final de la cadena
                      /ˆ[0-9]{1, 9}\.?[\d]{3,3}.?[\d]{3,3}$/ 