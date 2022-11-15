//este modulo nos permite crear servidores bajo el protocolo http
//const { Server } = require('node:http');

/*para crear un servidor
const http = require('node:http');
//console.log(http)

const server = http.createServer((request, response)=>{

    console.log(request.url)

    if(request.url === '/'){ //si request es === a la ruta de inicio
        response.write('Bienvenide a la home..');
        return response.end(); //tengo que evitar que no se me ejecute en loop
    }
    response.end();
})
server.listen(3000); //para crear el servidor siempre hay que agregar el puerto, se puede probar con 5000 y 8000
console.log('Servidor escuchando en puerto 3000');
*/
//se recomienta utilizar puertos altos a partir del 3000, los bajos ya estan asignados

//crear una paginacion
const http = require('node:http');
const server = http.createServer((request, response)=>{
    
    console.log(request.url)
    
    if(request.url === '/'){
        response.write('Bienvenide a la home..');
        return response.end();
    }

    if(request.url === '/contacto'){
        response.write('Nuestros canales de contacto son...')
        return response.end();
    }

    response.write(`
    <h1>not found Error 404</h1>
    <a href='/'>Ir a la home</a>
    `)//envolvemos el texto con etiquetas de html, no se trabaja asi sino que es puro ejemplo

    response.end()

})
server.listen(3000);
console.log('Servidor escuchando en puerto 3000');