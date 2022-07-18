//JQUERY el $ es el selector universal que maneja esta libreria
//console.log($); 

//array de productos que contiene 4 objetos
const productos = [
    {
        id: 1,
        nombre: 'arroz',
        precio: 180
    },{
        id: 2,
        nombre: 'fideo',
        precio: 130
    },{
        id: 3,
        nombre: 'Pan',
        precio: 240
    },{
        id: 4,
        nombre: 'helado',
        precio: 800
    }
]
//mostrar todo el listado en mi html

//armado de la iteracion
for (const producto of productos){  
    $('#product').append(`<div><h1>Producto: ${producto.nombre}</h1>
    <h3>Precio: ${producto.precio}</h3>
    <p>Id: ${producto.id}</p>
    </div>`)
}
//for es similar al forEach de JS
//append es similar a innerHTML de JS

/*
BUENAS PRACTICAS:
1- NO mezclar selectores de jQuery con los selectores de JavaScript
*/

//$('#product').addClass('product');

$('#boton').on('click', function(){
    console.log('me diste click')
})

const boton = $('boton');
const divEstado = $('#estado');

boton.on('click', function(){
    $.get('https://jsonplaceholder.typicode.com/posts', function(data){
        divEstado.html('Items cargados')
        console.log(data)
    });
})
