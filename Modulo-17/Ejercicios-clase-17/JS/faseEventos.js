/*
FASES EVENTO EN JS

TRES FASES:
1) Fase de captura 
2) Fase objetivo
3) Fase burbujeante (bubbling) - el evento burbujea siempre hacia arriba, ascendente - body, boton


*/

document.querySelector('#body')
addEventListener('click', () => {
    //alert('Body') cuando se hace click que muestre por alert o console.log el mensaje 
    console.log('Body')
})

document.querySelector('#contenedor')
addEventListener('click', () => {
    console.log('contenedor')
}, true);  
//esta es la unica diferencia en los tres. Lo que hace el true es traer 
//primero contenedor, despues el boton y despues el body.
//con el true lo que hacemos es cambiar el orden de ejecucion
// cuando tenemos el true aca es xk la fase burbujeo predeterminadamente  -- PDF PAGINA 5

document.querySelector('#btn')
addEventListener('click', () => {
    console.log('Boton')
})