/*DESAFIO
Crear un formulario y aplicar el uso del localStorage para guardar los datos que ingresa el usuario.
Aplicar un metodo de escucha a cada input, ademas para almacenar los datos se puede usar el evento focusout si asi se prefiere.
No hay que olvidarse de crear una funcion para recuperar dichos datos
*/
let form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let valor = clave.value
    let expReg = /(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\w{7,}/
    if(expReg.test(valor)){
        console.log('Inicio de sesion exitosa')
    }else{
        clave.setCustomValidity('Este campo debe contener como minimo 7 caracteres alfanumericos')
    }
})

let nombre = document.querySelector('#nombre');
nombre.addEventListener('keydown', function (){
    localStorage.setItem('nombre', nombre.value)
})

let clave = document.querySelector('#clave');
clave.addEventListener('keydown', function(){
    localStorage.setItem('clave', clave.value);
})

function recuperarDatos(){
    for (let i = 0; i < array.length; i++) {
        let clave = localStorage.key(i);
        console.log(`Clave: ${clave}`);
        console.log(`Valor: ${localStorage.getItem(clave)}`);
    }
}