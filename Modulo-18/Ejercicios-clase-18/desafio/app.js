/*const name = document.querySelector("#name").addEventListener("blur", (e)=>{
    //console.log(e)
    //console.log(e.target.value)
});
const form = document.querySelector("#formulario");


function CampoRequerido(validar){
    if (validar == ''){

    }
}
CampoRequerido();*/

/*function CampoRequerido(validar){
    const name = document.querySelector("#name")

    name.addEventListener("blur", (e)=>{
    console.log(e)
    let val = e.target.value;

    let exreg = /juan/1;

    if(val.match(exreg)){
        alert('el valor no puede contener el nombre Juan')
    }
    })
};
CampoRequerido();

//PARTE 1
const CampoRequerido = function(selector)
{
    let isValid = false;

    const elemento = document.querySelector(selector);

    // 1. Registrar los eventos de validación
    elemento.addEventListener('blur', function(){
        isValid = elemento.value.length !== 0;
    });

    // 2. Proveer el estado actual de dicho campo
    function getState() { return isValid; }

    elemento.isValid = getState;

    return elemento;
}
//PARTE 2
const usuario = CampoRequerido('#usuario');
const clave = CampoRequerido('#clave');

document.querySelector('#frmLogin').addEventListener('submit', function(e){
    e.preventDefault();

    if(
        usuario.isValid() &&
        clave.isValid()
    )
        document.querySelector('#frmLogin').submit();
});
*/
