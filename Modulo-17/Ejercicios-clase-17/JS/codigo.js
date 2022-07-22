/*EVENTOS

1) 
EVENTO ESCUCHA  -- SE USA MAS ESTA por su modernidad
element.addEventListener (agregar un evento de escucha a nuestro elemento)
Lo que hace es permitir definir que evento se debe escuchar y sobre que elemento
del HTML se va a aplicar. El primer parametro siempre va a corresponder al nombre del evento
propiamente dicho. El segundo parametro va a ser el bloque de respuesta

let click = document.querySelector('#click') //(primero capturar el ID ya sea por querySelector y getElementById)
//console.log(click) para guardar la variable
click.addEventListener('click',()=>{ //la funcion es ('click') //forma de agregarle la escucha
console.log('me diste click') //este es el retorno


EJEMPLO DE CONTADOR (podemos diseñar calculadoras)
//queremos que el usuario cuando haga click el contador aumente 1 y agregue (el span con id total) el valor por click
let sumar = document.querySelector('#suma');
let restar = document.querySelector('#resta');
let total = document.querySelector('#total');
let reset = document.querySelector('#reset')
let contar = 0;   //queremos que el usuario cuando haga click el contador aumente 1 y agregue (el span con id total) el valor por click


sumar.addEventListener('click', ()=>{  //sumar.addEventListener('dblclick', ()=>{ es para el doble click
    //contar += 1;  ó  contar ++; son dos sintaxis posibles
    // se puede jugar como uno quiera, por ejemlo: contar += 2 * 6;
    contar ++;
    total.textContent = contar;
})

restar.addEventListener('click', ()=>{
    contar--;
    total.textContent = contar;
})

reset.addEventListener('click',()=>{
    contar = 0;
    total.textContent = contar;
})
*/

/* 2)
EVENTO ON CLICK 
se va a ejecutar cuando se haga click sobre el elemento. la sintaxis es muy similar a la de escucha, 
nada mas que se escribe mas parecido a una variable

let sumar = document.querySelector('#suma');
sumar.onclick = () => {
    console.log('me hiciste click con onclick')
} 
*/

/* 3)
EVENTOS DE MOUSE 
1) mousedown/mouseup: se oprime y suelta. 
2) mouseover/mouseout: el puntero del mouse se mueve sobre/o sale del elemento
3) mousemove: el movimiento del mouse sobre el elemento activa el evento



let click = document.querySelector('#btnMain');
//console.log(boton); para probar si funciona
click.onmousemove = () =>{
    console.log('move')
}

let click = document.querySelector('#contenedor');
click.onmousemove = () =>{                           //Se activa despues del mousedown o moseup sobre un elemento valido
    console.log('move')
}

let clickOne = document.querySelector('btmMain');
clickOne.onmouseup = () => {console.log('mouseup')};
clickOne.click = () => {console.log('click')};

*/


/* 4)
EVENTOS DEL TECLADO
Van a interactuar cuando el usuario aprete una tecla 

- onkeyup = es cuando se suelta la tecla
- keydown = es cuando se presiona la tecla


let nombre = document.querySelector('#nombre');
nombre.onkeyup = () => {console.log('keyup')}

let edad = document.querySelector('#edad');
edad.onkeydown = () => {console.log('keydown')}
*/

/*5)
EVENTO CHANGE
Detecta un cambio en el valor del elemento y se ejecuta cuando se selecciona otro elemento

let nombre = document.querySelector('#nombre');
let edad = document.querySelector('#edad');

nombre.onchange = () =>{
    console.log('valor 1');
}

edad.onchange = () =>{
    console.log('valor 2');
}


let nombre = document.body.querySelector('#nombre');
console.log(nombre)
*/

/*SUBMIT
se activa cuando realizamos el envío de formulario
se usa para validar el formulario del lado del Front antes de que llegue al servidor o para  cancelar algun
tipo de envio que no se quiere (expresion irregular u otro tipo de estilo como un signo o algo no valido)
*/

let miFormulario = document.querySelector('#formulario');
//console.log(miFormulario);
miFormulario.addEventListener('submit', validarFormulario); //crear una funcion para validar el formulario
function validarFormulario (e) {
    e.preventDefault(); //con esto no se recarga la página, esto lo que esta haciendo es cancelar el evento por default
    //aca va el bloque de codigo que queramos
    console.log('Formulado Enviado');  //el submit siempre recarga la página
}

/* 7)
EVENT.target
es una referencia al objeto en el cual se lanzó el evento 
lo que hace es capturar todao el valor de la etiqueta

function capturar(event){
    let x = event.target;  //x variable, event.target es la funcion
    console.log(x) //cuando hago click en el objetivo dispara esta funcion
}
*/

/* 8)
Event.currentTarget
Identifica el objetivo actual del evento 

el evento atraviesa todo el DOM y siempre hace referencia al actual controlador del evento

function handleClick(event){
    //console.log(event) //muestra el anidamiento siempre haciendo referencia a todas las etiquetas donde se encuentra el evento
    console.log(
        `target: ${event.target.id}, currentTarget: ${event.currentTarget:}`
    )
}
*/
