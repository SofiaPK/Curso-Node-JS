/*Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.
*/
let form = document.querySelector('#formulario');
let contra = document.querySelector('#contrasenia');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log('click')
    let valor = contra.value
    let expReg = /(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{12,}/
    if(expReg.test(valor)){
        console.log('Valido')
    }else{
        contra.setCustomValidity('Este campo debe contener como mínimo 12 caracteres, entre ellos al menos una mayúscula y una minúscula. No es válido utilizar espacios')
    }
})
